import type { Metadata } from "next";
import { AmbientCurve } from "@/components/AmbientCurve";

export const metadata: Metadata = {
  title: "Ambient hero element, in isolation",
  robots: { index: false, follow: false },
};

export default function MotionSpecimenPage() {
  return (
    <main className="band-dark grain relative flex-1 bg-bg px-gutter py-section">
      <div className="relative z-[2] mx-auto w-full max-w-shell">
        <p className="font-mono text-label uppercase text-muted">
          Black Swan Student Society
        </p>
        <h1 className="mt-5 font-display text-d2 text-heading">
          Ambient hero element, in isolation
        </h1>
        <p className="mt-6 max-w-measure text-copy text-copy">
          One continuous element, hero only, shown here on its own before it
          goes near the page. Both candidates run on a 24 second cycle and both
          collapse to a static curve under reduced motion.
        </p>

        <section className="mt-16">
          <div className="flex items-baseline justify-between border-t border-rule-strong pt-4">
            <span className="font-mono text-label uppercase text-muted">
              A, drift
            </span>
            <span className="font-mono text-num text-accent">24s loop</span>
          </div>
          <div className="relative mt-6 h-[210px] w-full border border-rule">
            <AmbientCurve mode="drift" />
          </div>
          <p className="mt-5 max-w-measure text-sm text-muted">
            The path is generated as a single period whose ends match, tiled
            twice and smoothed as one curve, then translated across exactly one
            period. The loop has no visible seam and the whole thing is one
            composited transform, so it costs nothing per frame.
          </p>
        </section>

        <section className="mt-20">
          <div className="flex items-baseline justify-between border-t border-rule-strong pt-4">
            <span className="font-mono text-label uppercase text-muted">
              B, redraw
            </span>
            <span className="font-mono text-num text-accent">24s cycle</span>
          </div>
          <div className="relative mt-6 h-[210px] w-full border border-rule">
            <AmbientCurve mode="redraw" />
          </div>
          <p className="mt-5 max-w-measure text-sm text-muted">
            A single period drawn in from the left, held, then erased from the
            left. The ghost of the full curve stays visible underneath so the
            strip never reads as empty.
          </p>
        </section>

        <section className="mt-20">
          <div className="flex items-baseline justify-between border-t border-rule-strong pt-4">
            <span className="font-mono text-label uppercase text-muted">
              Reduced motion, both candidates
            </span>
          </div>
          <div className="relative mt-6 h-[210px] w-full border border-rule motion-reduce-preview">
            <AmbientCurve mode="redraw" />
          </div>
          <p className="mt-5 max-w-measure text-sm text-muted">
            With prefers-reduced-motion set, the animation is removed and the
            full curve is shown at rest. Nothing moves and nothing is lost.
          </p>
        </section>
      </div>
    </main>
  );
}
