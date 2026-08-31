"use client";

import { useEffect, useState } from "react";
import { periodFor, sampleSmooth } from "@/lib/curve";

/**
 * Reads the value the drifting curve currently shows at the right edge of the
 * strip, so the number and the line always agree.
 *
 * The transform stays a CSS animation on the compositor. This only reads its
 * currentTime, so nothing about the motion moves onto the main thread, and the
 * text updates four times a second rather than every frame.
 */
export function CurveReadout({
  seriesKey,
  steps,
  className,
}: {
  seriesKey: string;
  steps: number;
  className?: string;
}) {
  const period = periodFor(seriesKey, steps);
  const [value, setValue] = useState(period[0]);

  useEffect(() => {
    const el = document.querySelector<SVGElement>(".ambient-drift");
    // No animation means reduced motion is on, so the value stays at rest.
    const anim = el?.getAnimations?.()[0];
    if (!anim) return;

    const total = 24000;
    let frame = 0;
    let lastTick = 0;

    const tick = (now: number) => {
      if (now - lastTick > 250) {
        lastTick = now;
        const current = Number(anim.currentTime ?? 0);
        setValue(sampleSmooth(period, (current % total) / total));
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [period]);

  return <span className={className}>{value.toFixed(2)}</span>;
}
