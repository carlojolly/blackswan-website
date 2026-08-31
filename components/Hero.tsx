import { Band, Shell } from "./Band";
import { HeroCurve } from "./HeroCurve";
import { site } from "@/content/site";

export function Hero() {
  return (
    <Band tone="dark" id="top">
      <div className="flex min-h-[calc(100svh-var(--spacing-nav))] flex-col">
        <Shell className="flex flex-1 flex-col justify-end pb-20 pt-24">
          <h1 className="font-display text-d1 text-heading max-w-[15ch]">
            {site.hero.heading}
          </h1>
          <p className="mt-8 max-w-measure text-lead text-copy">
            {site.hero.line}
          </p>
          <a
            href={site.hero.link.href}
            className="mt-10 inline-flex w-fit items-center gap-3 font-mono text-label uppercase text-accent transition-micro hover:text-heading"
          >
            {site.hero.link.label}
            <span aria-hidden="true">&rarr;</span>
          </a>
        </Shell>
        <HeroCurve />
      </div>
    </Band>
  );
}
