/** Hairline icons drawn to match the site's 1px rules rather than pulled from
    an icon set, so weight and corner radius stay consistent with everything
    else. All are 24x24 with a 1.5 stroke. */

type IconProps = { className?: string };

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.7 10.6v6" />
      <circle cx="7.7" cy="7.7" r="0.95" fill="currentColor" stroke="none" />
      <path d="M11.4 16.6v-6" />
      <path d="M11.4 13.4a2.6 2.6 0 0 1 5.2 0v3.2" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.8 7.4 7.1 5a2 2 0 0 0 2.2 0l7.1-5" />
    </svg>
  );
}

export const socialIcons = {
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  mail: MailIcon,
} as const;

export type SocialIcon = keyof typeof socialIcons;
