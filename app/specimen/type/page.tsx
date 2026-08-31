import type { Metadata } from "next";
import Image from "next/image";
import {
  cormorantGaramond,
  instrumentSans,
  instrumentSerif,
  playfair,
} from "./fonts";
import { logoOnDark, logoOnLight } from "@/lib/logo";

export const metadata: Metadata = {
  title: "Heading face, four candidates",
  robots: { index: false, follow: false },
};

type Candidate = {
  key: string;
  letter: string;
  heading: string;
  body: string;
  headingVar: string;
  bodyVar: string;
  note: string;
};

const candidates: Candidate[] = [
  {
    key: "b",
    letter: "B",
    heading: "Instrument Serif",
    body: "Instrument Sans",
    headingVar: "var(--font-instrument-serif)",
    bodyVar: "var(--font-instrument-sans)",
    note: "High contrast display serif, condensed proportions, one weight only. Drawn as a family with Instrument Sans, so the pairing is designed rather than assembled.",
  },
  {
    key: "d",
    letter: "D",
    heading: "Cormorant Garamond",
    body: "Instrument Sans",
    headingVar: "var(--font-cormorant)",
    bodyVar: "var(--font-instrument-sans)",
    note: "Garalde. Angled stress, wedge serifs, small x-height and the lightest strokes of the four. Ships in five weights with italics, paired here with the same sans as B so the heading face is the only variable.",
  },
  {
    key: "a",
    letter: "A",
    heading: "Bodoni Moda",
    body: "Inter",
    headingVar: "var(--font-bodoni)",
    bodyVar: "var(--font-inter)",
    note: "Didone. Vertical stress, unbracketed hairline serifs, ball terminal on the S, variable optical size axis. Widest of the four.",
  },
  {
    key: "c",
    letter: "C",
    heading: "Playfair Display",
    body: "Inter",
    headingVar: "var(--font-playfair)",
    bodyVar: "var(--font-inter)",
    note: "Transitional moving toward Didone. Sturdier hairlines than the others, which survives small sizes but gives up some of the mark's sharpness.",
  },
];

function Specimen({ c, tone }: { c: Candidate; tone: "dark" | "paper" }) {
  const mark = tone === "dark" ? logoOnDark : logoOnLight;

  return (
    <section className={`band-${tone} grain relative bg-bg px-gutter py-section`}>
      <div className="relative z-[2] mx-auto w-full max-w-shell">
        <div className="flex items-baseline justify-between border-b border-rule pb-4">
          <p className="font-mono text-label uppercase text-muted">
            {c.letter}, {c.heading} with {c.body}
          </p>
          <p className="font-mono text-label uppercase text-accent">
            {tone === "dark" ? "Dark band" : "Paper band"}
          </p>
        </div>

        {/* The real test: does the heading face agree with the monogram */}
        <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6">
          <Image
            {...mark}
            alt={`Monogram beside the wordmark set in ${c.heading}`}
            className="h-24 w-auto sm:h-32"
          />
          <p
            className="text-heading"
            style={{
              fontFamily: c.headingVar,
              fontWeight: 400,
              fontSize: "clamp(2rem, 5.2vw, 4.25rem)",
              letterSpacing: "0.085em",
              lineHeight: 1.05,
            }}
          >
            BLACK SWAN
          </p>
        </div>

        {/* Hero scale */}
        <p
          className="mt-16 text-heading"
          style={{
            fontFamily: c.headingVar,
            fontWeight: 400,
            fontSize: "clamp(3.25rem, 8.4vw, 7.5rem)",
            letterSpacing: "-0.021em",
            lineHeight: 0.94,
          }}
        >
          Pricing uncertainty
        </p>

        {/* Section scale */}
        <p
          className="mt-14 text-heading"
          style={{
            fontFamily: c.headingVar,
            fontWeight: 400,
            fontSize: "clamp(2.25rem, 4.6vw, 4rem)",
            letterSpacing: "-0.016em",
            lineHeight: 1.02,
          }}
        >
          Four divisions, one method
        </p>

        {/* Card scale, where hairlines start to fail */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {["Economics and Politics", "Business and Finance", "Algorithm Development"].map(
            (d) => (
              <div key={d} className="border-t border-rule pt-5">
                <p
                  className="text-heading"
                  style={{
                    fontFamily: c.headingVar,
                    fontWeight: 400,
                    fontSize: "1.3125rem",
                    letterSpacing: "-0.006em",
                    lineHeight: 1.25,
                  }}
                >
                  {d}
                </p>
                <p
                  className="mt-3 text-sm text-muted"
                  style={{ fontFamily: c.bodyVar }}
                >
                  Weekly forecasts, a written rationale, and a score when the
                  question resolves.
                </p>
              </div>
            )
          )}
        </div>

        {/* Body face */}
        <div className="mt-14 max-w-measure">
          <p
            className="text-lead text-heading"
            style={{ fontFamily: c.bodyVar }}
          >
            A forecast that cannot be scored is an opinion.
          </p>
          <p
            className="mt-4 text-copy text-copy"
            style={{ fontFamily: c.bodyVar }}
          >
            Members publish a probability, record the reasoning behind it and
            accept a Brier score when the question resolves. Read this paragraph
            at length rather than glancing at it, because the body face is the
            one you will spend the most time inside and the differences between
            these three only show up after a few lines.
          </p>
          <p
            className="mt-4 text-sm text-muted"
            style={{ fontFamily: c.bodyVar }}
          >
            Secondary text sits here, at the size used for card copy, captions
            and the smaller notes under a division heading.
          </p>
          <div className="mt-6 flex flex-wrap items-baseline gap-x-8 gap-y-2">
            <span className="font-mono text-num text-accent">0.62</span>
            <span className="font-mono text-num text-copy">
              0.07 · 0.31 · 0.48 · 0.95
            </span>
            <span className="font-mono text-label uppercase text-muted">
              Cross-Domain
            </span>
            <span className="font-mono text-label uppercase text-muted">
              03 / 04
            </span>
          </div>
        </div>

        <p className="mt-12 max-w-measure border-t border-rule pt-5 text-sm text-muted">
          {c.note}
        </p>
      </div>
    </section>
  );
}

export default function TypeComparisonPage() {
  return (
    <main
      className={`${instrumentSerif.variable} ${instrumentSans.variable} ${cormorantGaramond.variable} ${playfair.variable} flex-1`}
    >
      <section className="band-dark grain relative bg-bg px-gutter pt-section pb-16">
        <div className="relative z-[2] mx-auto w-full max-w-shell">
          <p className="font-mono text-label uppercase text-muted">
            Black Swan Student Society
          </p>
          <h1 className="mt-5 font-display text-d2 text-heading">
            Heading face, four candidates
          </h1>
          <p className="mt-6 max-w-measure text-copy text-copy">
            Each block runs the same six tests: the wordmark beside the actual
            monogram, hero scale, section scale, card scale, a paragraph of body
            copy, and the mono readouts. IBM Plex Mono is held constant, so the
            only variables are the heading face and the sans paired with it. B and D share Instrument Sans, so those two isolate the serif alone.
          </p>
        </div>
      </section>

      {candidates.map((c) => (
        <Specimen key={c.key} c={c} tone="dark" />
      ))}

      {/* What the extra weights actually buy */}
      <section className="band-dark grain relative bg-bg px-gutter py-section">
        <div className="relative z-[2] mx-auto w-full max-w-shell">
          <p className="font-mono text-label uppercase text-muted border-b border-rule pb-4">
            Weight range, what the extra weights buy
          </p>

          <p className="mt-8 font-mono text-label uppercase text-accent">
            Cormorant Garamond, five weights
          </p>
          <div className="mt-4 border-t border-rule">
            {[300, 400, 500, 600, 700].map((w) => (
              <div
                key={w}
                className="flex flex-wrap items-baseline gap-x-8 border-b border-rule py-3"
              >
                <span className="font-mono text-num text-muted w-12">{w}</span>
                <span
                  className="text-heading"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: w,
                    fontSize: "2rem",
                    lineHeight: 1.2,
                  }}
                >
                  Pricing uncertainty
                </span>
              </div>
            ))}
          </div>

          <p className="mt-12 font-mono text-label uppercase text-accent">
            Instrument Serif, one weight and an italic
          </p>
          <div className="mt-4 border-t border-rule">
            {[
              { label: "400", style: "normal" as const },
              { label: "400 italic", style: "italic" as const },
            ].map((v) => (
              <div
                key={v.label}
                className="flex flex-wrap items-baseline gap-x-8 border-b border-rule py-3"
              >
                <span className="font-mono text-num text-muted w-24">
                  {v.label}
                </span>
                <span
                  className="text-heading"
                  style={{
                    fontFamily: "var(--font-instrument-serif)",
                    fontWeight: 400,
                    fontStyle: v.style,
                    fontSize: "2rem",
                    lineHeight: 1.2,
                  }}
                >
                  Pricing uncertainty
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-measure text-sm text-muted">
            Compare stroke weight at 400, the weight a heading would actually
            use. Cormorant sits lighter at the same nominal size because its
            x-height is smaller and its strokes are thinner, which is the
            property that decides whether a serif survives on the dark band.
          </p>
        </div>
      </section>

      <section className="band-dark bg-bg px-gutter py-16">
        <div className="mx-auto max-w-shell border-t border-rule-strong pt-5">
          <p className="font-mono text-label uppercase text-muted">
            The same four on the paper band
          </p>
        </div>
      </section>

      {candidates.map((c) => (
        <Specimen key={`${c.key}-paper`} c={c} tone="paper" />
      ))}
    </main>
  );
}
