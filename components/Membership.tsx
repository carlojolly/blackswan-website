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
          <p className="mt-6 max-w-measure text-copy text-copy">{m.line}</p>
          <p className="mt-8 font-mono text-num text-accent">
            {societySize} members across five divisions
          </p>
        </Reveal>

        {/* What members do */}
        <div className="mt-20 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {m.activities.map((activity, i) => (
            <Reveal
              key={activity.title}
              delay={stagger(i)}
              className="border-t border-rule pt-5"
            >
              <h3 className="font-display text-d4 text-heading">
                {activity.title}
              </h3>
              <p className="mt-3 text-sm text-muted">{activity.body}</p>
            </Reveal>
          ))}
        </div>

      </Shell>

      {/* Applications, its own block. The right cell is the form slot: a Tally
          or Typeform embed replaces its contents without touching the layout. */}
      <Shell className="mt-28">
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
              </div>

              <div
                data-slot="application-form"
                className="flex min-h-[16rem] items-center justify-center p-10"
              >
                <p
                  aria-disabled="true"
                  className="inline-flex cursor-not-allowed items-center border border-rule-strong px-7 py-3.5 font-mono text-label uppercase text-muted"
                >
                  {m.formState}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Shell>
    </Band>
  );
}
