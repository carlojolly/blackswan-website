"use client";

import { useEffect } from "react";

/** Duration scales with distance, then clamps, so a short hop is not sluggish
    and a full page jump is not a blur. Native smooth scrolling gives no way
    to set this, which is why the anchors are handled here instead. */
const MIN_MS = 700;
const MAX_MS = 1600;
const BASE_MS = 500;
const MS_PER_PX = 0.18;

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export function SmoothScroll() {
  useEffect(() => {
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    // The CSS rule stays as the no-JS fallback; once this mounts we drive it.
    root.style.scrollBehavior = "auto";

    let frame = 0;

    const cancel = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
    };

    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const link = (event.target as Element | null)?.closest?.(
        "a[href]"
      ) as HTMLAnchorElement | null;
      if (!link || link.target === "_blank") return;

      // Nav anchors are written as "/#thesis" so they also work from other
      // routes. Only intercept when the link points at this same page.
      let url: URL;
      try {
        url = new URL(link.href, location.href);
      } catch {
        return;
      }
      if (url.origin !== location.origin) return;
      if (url.pathname !== location.pathname) return;

      const hash = url.hash;
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      cancel();

      // Land the section's top edge at the top of the viewport, not below the
      // nav. Offsetting by the nav height left the bar hanging over the band
      // above, so arriving at a dark section still showed the light band
      // behind the nav. Every band carries more top padding than the nav is
      // tall, so nothing gets hidden underneath it.
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const destination = Math.max(
        0,
        Math.min(maxScroll, target.getBoundingClientRect().top + window.scrollY)
      );

      const land = () => {
        history.pushState(null, "", hash);
        // Keyboard users need to land inside the section, not back at the top.
        (target as HTMLElement).setAttribute("tabindex", "-1");
        (target as HTMLElement).focus({ preventScroll: true });
      };

      const start = window.scrollY;
      const delta = destination - start;

      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        Math.abs(delta) < 2
      ) {
        window.scrollTo(0, destination);
        land();
        return;
      }

      const duration = Math.min(
        MAX_MS,
        Math.max(MIN_MS, BASE_MS + Math.abs(delta) * MS_PER_PX)
      );
      const began = performance.now();

      const step = (now: number) => {
        const t = Math.min(1, (now - began) / duration);
        window.scrollTo(0, start + delta * easeInOutCubic(t));
        if (t < 1) {
          frame = requestAnimationFrame(step);
        } else {
          frame = 0;
          land();
        }
      };

      frame = requestAnimationFrame(step);
    };

    // Taking over the scroll mid animation should stop it, not fight it.
    const onInterrupt = () => cancel();

    // Capture phase: React attaches its handlers at the root, below document,
    // so a bubble listener here would fire after next/link had already
    // navigated. Capturing lets preventDefault reach Link in time.
    document.addEventListener("click", onClick, true);
    window.addEventListener("wheel", onInterrupt, { passive: true });
    window.addEventListener("touchstart", onInterrupt, { passive: true });
    window.addEventListener("keydown", onInterrupt);

    return () => {
      cancel();
      root.style.scrollBehavior = previous;
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("wheel", onInterrupt);
      window.removeEventListener("touchstart", onInterrupt);
      window.removeEventListener("keydown", onInterrupt);
    };
  }, []);

  return null;
}
