import { Band, Shell } from "./Band";
import { Reveal } from "./Reveal";
import { SectionRule } from "./SectionRule";
import { stagger } from "@/lib/motion";
import { site } from "@/content/site";

export function Thesis() {
  return (
    <Band tone="dark" id="thesis" className="py-section">
      <Shell>
        <SectionRule label={site.thesis.eyebrow} index="01" total="03" />

        {/* Heading and body start on the same line, so the block reads as two
            columns rather than leaving an empty step under the heading. */}
        <div className="mt-16 grid gap-x-12 gap-y-10 lg:grid-cols-12 lg:gap-x-20">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-d2 text-heading text-balance">
              {site.thesis.heading}
            </h2>
          </Reveal>

          <div className="max-w-measure lg:col-span-6 lg:col-start-7">
            {site.thesis.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={stagger(i)}>
                <p className={`text-copy text-copy ${i > 0 ? "mt-6" : ""}`}>
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Shell>
    </Band>
  );
}
