import { AmbientCurve } from "./AmbientCurve";
import { CurveReadout } from "./CurveReadout";

export const HERO_SERIES = "black-swan-hero";
export const HERO_STEPS = 22;

/** Full bleed strip closing the hero, carrying the one ambient element.
    Sitting in flow rather than behind the copy keeps it off the text at
    every viewport. */
export function HeroCurve() {
  return (
    <div
      aria-hidden="true"
      className="relative h-[clamp(120px,21vh,210px)] w-full border-t border-rule"
    >
      <AmbientCurve mode="drift" />

      <div className="pointer-events-none absolute inset-0 mx-auto flex w-full max-w-shell items-end justify-between px-gutter pb-4">
        <span className="font-mono text-label uppercase text-muted">
          Illustrative, not a live market
        </span>
        <CurveReadout
          seriesKey={HERO_SERIES}
          steps={HERO_STEPS}
          className="font-mono text-num text-accent"
        />
      </div>
    </div>
  );
}
