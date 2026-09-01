import { Band, Shell } from "./Band";
import { Reveal } from "./Reveal";
import { SectionRule } from "./SectionRule";
import { stagger } from "@/lib/motion";
import { site } from "@/content/site";

/** Sits directly below the hero to answer the question the name invites,
    at a smaller heading size so it reads as a preamble rather than
    competing with the sections beneath it. */
export function Origin() {
  return (
    <Band tone="dark" id="origin" className="py-section">
      <Shell>
        <SectionRule label={site.origin.eyebrow} />

        <Reveal className="mt-14">
          <h2 className="font-display text-d3 text-heading">
            {site.origin.heading}
          </h2>
        </Reveal>

        <div className="mt-7 max-w-measure">
          {site.origin.paragraphs.map((paragraph, i) => (
            <Reveal key={i} delay={stagger(i)}>
              <p className={`text-copy text-copy ${i > 0 ? "mt-5" : ""}`}>
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </Shell>
    </Band>
  );
}
