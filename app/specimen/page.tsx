import type { Metadata } from "next";
import Image from "next/image";
import {
  GROUND_DARK,
  GROUND_PAPER,
  accents,
  inkRamp,
  motionScale,
  spacingScale,
  typeScale,
} from "@/content/tokens";
import { contrast, grade } from "@/lib/contrast";
import { logoOnDark, logoOnLight } from "@/lib/logo";

export const metadata: Metadata = {
  title: "Design tokens, Black Swan Student Society",
  robots: { index: false, follow: false },
};

/* ----------------------------------------------------------------
   Local helpers, specimen only
   ---------------------------------------------------------------- */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-label uppercase text-muted mb-6">{children}</p>
  );
}

function Band({
  tone,
  className = "",
  children,
}: {
  tone: "dark" | "paper";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`band-${tone} grain relative bg-bg text-copy px-gutter py-section ${className}`}
    >
      <div className="relative z-[2] mx-auto w-full max-w-shell">{children}</div>
    </section>
  );
}

function Ratio({ fg, bg }: { fg: string; bg: string }) {
  const r = contrast(fg, bg);
  const g = grade(r);
  const passes = r >= 4.5;
  return (
    <span className="font-mono text-num tabular-nums">
      <span className={passes ? "text-copy" : "text-muted"}>
        {r.toFixed(2)}
      </span>
      <span className="text-muted"> {g}</span>
    </span>
  );
}

/* ----------------------------------------------------------------
   Page
   ---------------------------------------------------------------- */

export default function SpecimenPage() {
  return (
    <main className="flex-1">
      {/* ---------- masthead ---------- */}
      <Band tone="dark" className="pb-section">
        <div className="flex items-start justify-between gap-8 border-b border-rule pb-10">
          <div className="flex items-center gap-5">
            <Image
              {...logoOnDark}
              alt="Black Swan Student Society monogram"
              priority
              className="h-16 w-auto"
            />
            <div>
              <p className="font-mono text-label uppercase text-muted">
                Black Swan Student Society
              </p>
              <p className="font-display text-d3 text-heading">Design tokens</p>
            </div>
          </div>
          <p className="font-mono text-label uppercase text-accent shrink-0">
            Step 02 / 06
          </p>
        </div>

        <p className="mt-10 max-w-measure text-lead text-copy">
          Every value on this page is imported from the same token file the site
          renders from, so nothing here is a mock-up of the system. Contrast
          figures are computed at build time from the hex values themselves.
        </p>
      </Band>

      {/* ---------- ink ramp on dark ---------- */}
      <Band tone="dark">
        <Label>Ink ramp on dark ground</Label>
        <div className="border-t border-rule">
          {inkRamp.map((s) => (
            <div
              key={s.name}
              className="grid grid-cols-[3.5rem_1fr] sm:grid-cols-[4.5rem_7rem_1fr_auto] items-center gap-x-5 gap-y-1 border-b border-rule py-4"
            >
              <div
                className="h-10 w-full border border-ink-700"
                style={{ backgroundColor: s.hex }}
              />
              <p className="font-mono text-num text-heading">{s.name}</p>
              <p className="text-sm text-muted col-span-2 sm:col-span-1">
                {s.hex} <span className="text-ink-500">·</span> {s.role}
              </p>
              <div className="col-span-2 sm:col-span-1 sm:text-right">
                <Ratio fg={s.hex} bg={GROUND_DARK} />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-measure text-sm text-muted">
          Steps 900 to 700 are surfaces and rules, not text, so they read as
          below AA by design. The text pairings that matter on this ground are
          ink-300 for body at 12.00 and ink-400 for muted at 6.69.
        </p>
      </Band>

      {/* ---------- ink ramp on paper ---------- */}
      <Band tone="paper">
        <Label>Ink ramp on paper ground</Label>
        <div className="border-t border-rule">
          {inkRamp.map((s) => (
            <div
              key={s.name}
              className="grid grid-cols-[3.5rem_1fr] sm:grid-cols-[4.5rem_7rem_1fr_auto] items-center gap-x-5 gap-y-1 border-b border-rule py-4"
            >
              <div
                className="h-10 w-full border border-ink-300"
                style={{ backgroundColor: s.hex }}
              />
              <p className="font-mono text-num text-heading">{s.name}</p>
              <p className="text-sm text-muted col-span-2 sm:col-span-1">
                {s.hex} <span className="text-ink-400">·</span> {s.role}
              </p>
              <div className="col-span-2 sm:col-span-1 sm:text-right">
                <Ratio fg={s.hex} bg={GROUND_PAPER} />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-measure text-sm text-muted">
          This is the case the brief flags. Muted text on paper is ink-500 at
          5.46, which clears AA for body sizes rather than sitting at the large
          text threshold. Anything lighter than ink-500 is reserved for rules.
        </p>
      </Band>

      {/* ---------- accent comparison ---------- */}
      <Band tone="dark">
        <Label>Accent, two candidates</Label>
        <p className="mb-10 max-w-measure text-copy text-copy">
          The palette is genuinely neutral, so the accent is the one real colour
          decision. Both options are shown in the places the accent is allowed
          to appear: a hairline rule, a hover state and a numeric readout.
        </p>

        <div className="grid gap-10 lg:grid-cols-2">
          {[
            { title: "A, slate blue", cls: "" },
            { title: "B, neutral only", cls: "accent-neutral" },
          ].map((opt) => (
            <div key={opt.title}>
              <p className="font-mono text-label uppercase text-muted mb-4">
                {opt.title}
              </p>
              <div className={`band-dark ${opt.cls} bg-bg border border-rule`}>
                <div className="p-8">
                  <div className="flex items-baseline justify-between">
                    <p className="font-display text-d4 text-heading">
                      Fed cuts by September
                    </p>
                    <p className="font-mono text-num text-accent">0.62</p>
                  </div>
                  <div className="mt-5 h-px w-full bg-accent/60" />
                  <p className="mt-5 text-sm text-muted">
                    Resolution 18 Sep, source FOMC statement
                  </p>
                  <a
                    href="#accent"
                    className="mt-6 inline-block font-mono text-label uppercase text-muted transition-micro hover:text-accent"
                  >
                    Hover to see the accent
                  </a>
                </div>
              </div>

              <div className={`band-paper ${opt.cls} bg-bg border border-rule mt-4`}>
                <div className="p-8">
                  <div className="flex items-baseline justify-between">
                    <p className="font-display text-d4 text-heading">
                      Fed cuts by September
                    </p>
                    <p className="font-mono text-num text-accent">0.62</p>
                  </div>
                  <div className="mt-5 h-px w-full bg-accent/60" />
                  <p className="mt-5 text-sm text-muted">
                    Resolution 18 Sep, source FOMC statement
                  </p>
                  <a
                    href="#accent"
                    className="mt-6 inline-block font-mono text-label uppercase text-muted transition-micro hover:text-accent"
                  >
                    Hover to see the accent
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-rule pt-6">
          {accents.map((a) => (
            <div
              key={a.name}
              className="flex flex-wrap items-center gap-x-5 gap-y-1 border-b border-rule py-3"
            >
              <div
                className="h-6 w-14 border border-ink-700"
                style={{ backgroundColor: a.hex }}
              />
              <p className="font-mono text-num text-heading w-32">{a.name}</p>
              <p className="text-sm text-muted flex-1 min-w-[14rem]">
                {a.hex} <span className="text-ink-500">·</span> {a.role}
              </p>
              <Ratio
                fg={a.hex}
                bg={a.name === "accent-dark" ? GROUND_DARK : GROUND_PAPER}
              />
            </div>
          ))}
        </div>
      </Band>

      {/* ---------- type scale, dark ---------- */}
      <Band tone="dark">
        <Label>Type scale on dark</Label>
        <div className="border-t border-rule">
          <div className="border-b border-rule py-8">
            <p className="font-mono text-label uppercase text-muted mb-3">
              d1, Bodoni Moda
            </p>
            <p className="font-display text-d1 text-heading">
              Pricing uncertainty
            </p>
          </div>
          <div className="border-b border-rule py-8">
            <p className="font-mono text-label uppercase text-muted mb-3">
              d2, Bodoni Moda
            </p>
            <p className="font-display text-d2 text-heading">
              Four divisions, one method
            </p>
          </div>
          <div className="border-b border-rule py-8">
            <p className="font-mono text-label uppercase text-muted mb-3">
              d3, Bodoni Moda
            </p>
            <p className="font-display text-d3 text-heading">
              Economics and Politics
            </p>
          </div>
          <div className="border-b border-rule py-8">
            <p className="font-mono text-label uppercase text-muted mb-3">
              lead and body, Inter
            </p>
            <p className="text-lead text-heading max-w-measure">
              A forecast that cannot be scored is an opinion.
            </p>
            <p className="mt-4 text-copy text-copy max-w-measure">
              Members publish a probability, record the reasoning behind it and
              accept a Brier score when the question resolves. The measure is
              set at 65 characters so a paragraph holds its shape from a phone
              to a wide desktop without the eye losing the line.
            </p>
          </div>
          <div className="border-b border-rule py-8">
            <p className="font-mono text-label uppercase text-muted mb-3">
              num and label, IBM Plex Mono
            </p>
            <div className="flex flex-wrap items-baseline gap-x-10 gap-y-3">
              <p className="font-mono text-num text-accent">0.62</p>
              <p className="font-mono text-num text-copy">
                0.07 · 0.31 · 0.48 · 0.95
              </p>
              <p className="font-mono text-label uppercase text-muted">
                Cross-Domain
              </p>
              <p className="font-mono text-label uppercase text-muted">
                03 / 04
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-x-10 gap-y-3 border-t border-rule pt-6 sm:grid-cols-2 lg:grid-cols-3">
          {typeScale.map((t) => (
            <div key={t.token} className="flex gap-3 border-b border-rule py-2">
              <p className="font-mono text-num text-heading w-12 shrink-0">
                {t.token}
              </p>
              <p className="text-xs text-muted">
                {t.family}, {t.size}, {t.use}
              </p>
            </div>
          ))}
        </div>
      </Band>

      {/* ---------- type scale, paper ---------- */}
      <Band tone="paper">
        <Label>Type scale on paper</Label>
        <p className="font-display text-d2 text-heading max-w-narrow">
          The same scale carries onto the light band without a second system
        </p>
        <p className="mt-6 text-copy text-copy max-w-measure">
          Bodoni Moda is a Didone, the same classification as the wordmark in
          the monogram: vertical stress, unbracketed hairline serifs, a ball
          terminal on the S. Its variable optical size axis thickens those
          hairlines as the size drops, which is what keeps a Didone usable below
          display sizes.
        </p>
        <p className="mt-4 text-sm text-muted max-w-measure">
          Inter carries body copy because it stays neutral at small sizes. IBM
          Plex Mono holds every number, with tabular figures set globally so a
          probability that updates does not shift the text around it.
        </p>
        <div className="mt-8 flex flex-wrap items-baseline gap-x-10 gap-y-3">
          <p className="font-mono text-num text-accent">0.62</p>
          <p className="font-mono text-label uppercase text-muted">
            Algorithm Development
          </p>
          <p className="font-mono text-label uppercase text-accent">01 / 04</p>
        </div>
      </Band>

      {/* ---------- seam treatments ---------- */}
      <Band tone="dark">
        <Label>Band transition, two treatments</Label>
        <p className="max-w-measure text-copy text-copy">
          The value shift between bands needs a decision. A hard edge reads as
          deliberate when it lands in whitespace and carries the signature
          hairline. A ramped edge dissolves the boundary across the grey steps.
        </p>
      </Band>

      <div>
        <div className="band-dark bg-bg px-gutter pb-16 pt-4">
          <div className="mx-auto max-w-shell">
            <p className="font-mono text-label uppercase text-muted">
              Treatment A, hard edge with hairline and readout
            </p>
          </div>
        </div>
        <div className="band-dark bg-bg px-gutter">
          <div className="mx-auto flex max-w-shell items-center justify-between border-t border-rule-strong pt-4 pb-4">
            <span className="font-mono text-label uppercase text-muted">
              Divisions
            </span>
            <span className="font-mono text-num text-accent">02 / 05</span>
          </div>
        </div>
        <div className="band-paper bg-bg px-gutter py-20">
          <div className="mx-auto max-w-shell">
            <p className="font-display text-d3 text-heading">
              Paper band begins here
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="band-dark bg-bg px-gutter pb-16 pt-16">
          <div className="mx-auto max-w-shell">
            <p className="font-mono text-label uppercase text-muted">
              Treatment B, ramped edge across the grey steps
            </p>
          </div>
        </div>
        <div
          className="h-32 w-full"
          style={{
            backgroundImage: `linear-gradient(to bottom, ${GROUND_DARK}, #23272e 38%, #8f959f 72%, ${GROUND_PAPER})`,
          }}
        />
        <div className="band-paper bg-bg px-gutter py-20">
          <div className="mx-auto max-w-shell">
            <p className="font-display text-d3 text-heading">
              Paper band begins here
            </p>
          </div>
        </div>
      </div>

      {/* ---------- spacing and motion ---------- */}
      <Band tone="dark">
        <Label>Spacing</Label>
        <div className="border-t border-rule">
          {spacingScale.map((s) => (
            <div
              key={s.token}
              className="flex flex-wrap items-center gap-x-6 gap-y-1 border-b border-rule py-3"
            >
              <p className="font-mono text-num text-heading w-24">{s.token}</p>
              <p className="font-mono text-num text-copy w-56">{s.value}</p>
              <p className="text-sm text-muted">{s.use}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Label>Motion timings</Label>
          <div className="border-t border-rule">
            {motionScale.map((m) => (
              <div
                key={m.token}
                className="flex flex-wrap items-center gap-x-6 gap-y-1 border-b border-rule py-3"
              >
                <p className="font-mono text-num text-heading w-24">
                  {m.token}
                </p>
                <p className="font-mono text-num text-copy w-20">{m.value}</p>
                <p className="font-mono text-num text-muted w-24">{m.ease}</p>
                <p className="text-sm text-muted flex-1 min-w-[16rem]">
                  {m.use}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-measure text-sm text-muted">
            Every one of these is gated behind a reduced motion query in the
            motion pass. Scroll reveals fire once and never re-trigger.
          </p>
        </div>
      </Band>

      {/* ---------- logo and grain ---------- */}
      <Band tone="dark">
        <Label>Mark on both grounds</Label>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex items-center justify-center border border-rule bg-ground-dark py-16">
            <Image
              {...logoOnDark}
              alt="Monogram in white on the dark ground"
              className="h-32 w-auto"
            />
          </div>
          <div className="flex items-center justify-center border border-rule bg-ground-paper py-16">
            <Image
              {...logoOnLight}
              alt="Monogram in black on the paper ground"
              className="h-32 w-auto"
            />
          </div>
        </div>
        <p className="mt-6 max-w-measure text-sm text-muted">
          Both supplied files are transparent, so there is no solid background
          version. The favicon and the social image will be built by compositing
          the white mark onto the dark ground.
        </p>
      </Band>
    </main>
  );
}
