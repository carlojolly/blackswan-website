"use client";

import Image from "next/image";
import Link from "next/link";
import { NavLink } from "./NavLink";
import { useEffect, useState } from "react";
import { logoOnDark } from "@/lib/logo";
import { site } from "@/content/site";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-scrolled={scrolled || open}
      className="band-dark nav-bar sticky top-0 z-50 w-full"
    >
      <nav aria-label="Primary" className="mx-auto w-full max-w-shell px-gutter">
        <div className="flex h-nav items-center justify-between">
          <Link
            href="/#top"
            className="flex items-center"
            aria-label={`${site.name}, back to top`}
          >
            <Image
              {...logoOnDark}
              alt=""
              priority
              className="h-12 w-auto"
            />
          </Link>

          <ul className="hidden items-center gap-9 md:flex">
            {site.nav.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  className="nav-link font-mono text-label uppercase text-muted transition-micro hover:text-heading"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                href={site.contact.href}
                className="nav-link inline-flex items-center border border-rule-strong px-4 py-2.5 font-mono text-label uppercase text-muted transition-micro hover:border-accent hover:text-heading"
              >
                {site.contact.label}
              </NavLink>
            </li>
          </ul>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="nav-link font-mono text-label uppercase text-muted transition-micro hover:text-heading md:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-rule bg-bg md:hidden"
        >
          <ul className="mx-auto w-full max-w-shell px-gutter py-4">
            {site.nav.map((item) => (
              <li key={item.href} className="border-b border-rule last:border-0">
                <NavLink
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-d4 text-heading"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                href={site.contact.href}
                onClick={() => setOpen(false)}
                className="block py-4 font-display text-d4 text-heading"
              >
                {site.contact.label}
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
