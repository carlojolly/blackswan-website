import Link from "next/link";

/** Hash targets stay plain anchors so SmoothScroll owns them. Route targets
    use next/link for client navigation. Shared so the nav and the footer
    cannot drift apart on this. */
export function NavLink({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  // next/link is for internal routes only. Hash targets stay plain anchors so
  // SmoothScroll owns them, and mailto or external links must never be routed.
  const isInternalRoute = href.startsWith("/") && !href.includes("#");

  if (!isInternalRoute) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
