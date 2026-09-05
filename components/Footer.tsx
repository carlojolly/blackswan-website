import Image from "next/image";
import { Band, Shell } from "./Band";
import { NavLink } from "./NavLink";
import { socialIcons, type SocialIcon } from "./icons";
import { logoOnDark } from "@/lib/logo";
import { site } from "@/content/site";

const f = site.footer;

export function Footer() {
  return (
    <Band tone="dark" as="footer" id="contact" className="pb-10 pt-24">
      <Shell>
        <div className="grid gap-12 border-t border-rule pt-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Image {...logoOnDark} alt="" className="h-12 w-auto" />
            {/* 15ch is wide enough for "Student Society" but too narrow to
                also take "Student" onto the first line, so the name breaks
                where it divides. text-balance would split it as
                "Black Swan Student / Society". */}
            <p className="mt-6 max-w-[15ch] font-display text-[length:clamp(1.625rem,2.4vw,2.25rem)] leading-[1.15] text-heading">
              {site.name}
            </p>
            <p className="mt-3 text-sm text-muted">{f.address}</p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3 lg:col-start-7">
            <h2 className="font-mono text-label uppercase text-muted">
              {f.sectionsTitle}
            </h2>
            <ul className="mt-6 space-y-3.5">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <NavLink
                    href={item.href}
                    className="text-sm text-copy transition-micro hover:text-accent"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* The one action in this column, and it goes to the form itself,
                not to the section about it. Inert until the form exists. */}
            {site.applicationForm ? (
              <a
                href={site.applicationForm}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-3 border border-rule-strong px-4 py-2.5 font-mono text-label uppercase text-accent transition-micro hover:border-accent hover:text-heading"
              >
                {f.applyLabel}
                <span aria-hidden="true">&rarr;</span>
              </a>
            ) : (
              <p
                aria-disabled="true"
                className="mt-7 inline-flex cursor-not-allowed items-center border border-rule-strong px-4 py-2.5 font-mono text-label uppercase text-muted"
              >
                {f.applyLabel}
              </p>
            )}
          </nav>

          <div className="lg:col-span-3">
            <h2 className="font-mono text-label uppercase text-muted">
              {f.elsewhereTitle}
            </h2>
            {/* The 44x44 hit area stays for touch targets even though the box
                is gone. The negative margin pulls the first icon back flush
                with the column, since that area now reads as padding. */}
            <ul className="-ml-2.5 mt-4 flex">
              {f.social.map((channel) => {
                const Icon = socialIcons[channel.icon as SocialIcon];
                const external = !channel.href.startsWith("mailto:");
                return (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      aria-label={channel.label}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="flex h-11 w-11 items-center justify-center text-muted transition-micro hover:text-accent"
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-rule pt-6">
          <p className="font-mono text-label uppercase text-muted">
            {f.copyright}
          </p>
        </div>
      </Shell>
    </Band>
  );
}
