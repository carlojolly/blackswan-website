import { curveFor, tiledCurve } from "@/lib/curve";

const W = 1200;
const H = 200;
const PAD = 22;

export type AmbientMode = "drift" | "redraw";

/**
 * The one ambient element on the site, hero only.
 *
 * drift  a seamlessly tiled path translated across its own period, so the
 *        curve reads as a market that keeps printing. Pure CSS transform,
 *        no per frame work on the main thread.
 * redraw a single period drawn in and erased again via stroke-dashoffset.
 *
 * Both collapse to a static curve under prefers-reduced-motion.
 */
export function AmbientCurve({ mode }: { mode: AmbientMode }) {
  const front = tiledCurve("black-swan-hero", 22, W, H, PAD);
  const back = tiledCurve("black-swan-hero-echo", 22, W, H, PAD + 18);
  const still = curveFor("black-swan-hero", 22, W, H, PAD);

  const gridlines = [0.25, 0.5, 0.75].map((p) => (
    <line
      key={p}
      x1="0"
      x2={mode === "drift" ? W * 2 : W}
      y1={PAD + (1 - p) * (H - PAD * 2)}
      y2={PAD + (1 - p) * (H - PAD * 2)}
      stroke="var(--c-rule)"
      strokeWidth="1"
      vectorEffect="non-scaling-stroke"
    />
  ));

  if (mode === "drift") {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <svg
          viewBox={`0 0 ${W * 2} ${H}`}
          preserveAspectRatio="none"
          className="ambient-drift absolute inset-y-0 left-0 h-full w-[200%]"
        >
          {gridlines}
          <path
            d={back.d}
            fill="none"
            stroke="var(--c-rule-strong)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d={front.d}
            fill="none"
            stroke="var(--c-accent)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        {gridlines}
        <path
          d={still.d}
          fill="none"
          stroke="var(--c-rule-strong)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          opacity="0.45"
        />
        <path
          className="ambient-redraw"
          d={still.d}
          pathLength={1}
          fill="none"
          stroke="var(--c-accent)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
