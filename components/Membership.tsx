import { Band, Shell } from "./Band";
import { Reveal } from "./Reveal";
import { SectionRule } from "./SectionRule";
import { societySize } from "@/content/members";
import { stagger } from "@/lib/motion";
import { site } from "@/content/site";

const m = site.membership;

export function Membership() {
  return (
    <Band tone="dark" id="membership" className="py-section">
      <Shell>
        <SectionRule label={m.eyebrow} />

        <Reveal className="mt-16 max-w-narrow">
          <h2 className="font-display text-d2 text-heading">{m.heading}</h2>
          <p className="mt-8 font-mono text-num text-accent">
            {societySize} members across five divisions
          </p>
        </Reveal>

        {/* What you get */}
        <div className="mt-20 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {m.benefits.map((benefit, i) => (
            <Reveal
              key={benefit.title}
              delay={stagger(i)}
              className="border-t border-rule pt-5"
            >
              <h3 className="font-display text-d4 text-heading">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm text-muted">{benefit.body}</p>
            </Reveal>
          ))}
        </div>

      </Shell>

      {/* Applications, its own block, and the target of the hero link. Top
          padding rather than margin so scrolling to it leaves the card clear
          of the nav. */}
      <Shell id="apply" className="pt-28">
        <Reveal>
          <div className="border border-rule bg-surface">
            <div className="grid lg:grid-cols-[1.15fr_1fr]">
              <div className="border-b border-rule p-10 lg:border-b-0 lg:border-r lg:p-14">
                <p className="font-mono text-label uppercase text-muted">
                  {m.applicationsTitle}
                </p>
                <p className="mt-6 font-display text-d3 text-heading text-balance">
                  {m.applicationsLine}
                </p>
                <p className="mt-5 max-w-measure text-sm text-muted">
                  {m.applicationsNote}
                </p>

                {/* Form slot: the live link, or a Tally or Typeform embed,
                    replaces this without touching the layout. */}
                <div data-slot="application-form" className="mt-10">
                  {site.applicationForm ? (
                    <a
                      href={site.applicationForm}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 border border-rule-strong px-7 py-3.5 font-mono text-label uppercase text-accent transition-micro hover:border-accent hover:text-heading"
                    >
                      {m.applyLabel}
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  ) : (
                    <p
                      aria-disabled="true"
                      className="inline-flex cursor-not-allowed items-center border border-rule-strong px-7 py-3.5 font-mono text-label uppercase text-muted"
                    >
                      {m.formState}
                    </p>
                  )}
                </div>
              </div>

              <div className="p-10 lg:p-14">
                <p className="font-mono text-label uppercase text-muted">
                  {m.timelineTitle}
                </p>
                {/* Dates in the accent, so the column scans as a schedule
                    rather than as prose. */}
                <ol className="mt-8">
                  {m.timeline.map((step, i) => (
                    <li
                      key={step.label}
                      className={`grid items-baseline gap-x-6 gap-y-1 py-4 sm:grid-cols-[auto_1fr] ${
                        i === 0 ? "pt-0" : "border-t border-rule"
                      }`}
                    >
                      <span className="font-mono text-label uppercase text-accent">
                        {step.date}
                      </span>
                      <span className="text-sm text-copy">{step.label}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </Reveal>
      </Shell>
    </Band>
  );
}
