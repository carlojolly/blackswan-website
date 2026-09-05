import { Band, Shell } from "./Band";
import { Reveal } from "./Reveal";
import { SectionRule } from "./SectionRule";
import { divisions } from "@/content/divisions";
import { stagger } from "@/lib/motion";
import { site } from "@/content/site";

export function Divisions() {
  return (
    <Band tone="paper" id="divisions" className="py-section">
      <Shell>
        <SectionRule label={site.divisionsIntro.eyebrow} />

        <Reveal className="mt-16 max-w-narrow">
          <h2 className="font-display text-d2 text-heading">
            {site.divisionsIntro.heading}
          </h2>
          <p className="mt-6 max-w-measure text-copy text-copy">
            {site.divisionsIntro.line}
          </p>
        </Reveal>

        <ul className="mt-20 border-t border-rule">
          {divisions.map((division, i) => (
            <Reveal
              key={division.id}
              as="li"
              delay={stagger(i)}
              className="border-b border-rule"
            >
              <article className="grid gap-y-6 py-12 lg:grid-cols-12 lg:gap-x-12">
                <div className="lg:col-span-5">
                  <p className="font-mono text-num text-muted">
                    {division.index}
                  </p>
                  <h3 className="mt-4 font-display text-d3 text-heading text-balance">
                    {division.name}
                  </h3>
                </div>

                <div className="lg:col-span-6 lg:col-start-7">
                  <p className="max-w-measure text-copy text-copy">
                    {division.remit}
                  </p>

                  <p className="mt-5 font-mono text-label uppercase text-muted">
                    {division.scope.join("  ·  ")}
                  </p>

                  {/* Same shape as the section rules and the hero strip, so
                      the signature repeats rather than a new pattern arriving. */}
                  {division.example && (
                    <div className="mt-8 flex items-baseline justify-between gap-6 border-t border-rule pt-4">
                      <span className="text-sm text-copy">
                        {division.example.question}
                      </span>
                      <span className="font-mono text-num text-accent shrink-0">
                        {division.example.probability}
                      </span>
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <p className="mt-6 font-mono text-label uppercase text-muted">
          {site.divisionsIntro.exampleNote}
        </p>
      </Shell>
    </Band>
  );
}
