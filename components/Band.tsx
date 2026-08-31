type Props = {
  tone: "dark" | "paper";
  id?: string;
  className?: string;
  /** Lets a band stand in as a landmark, the footer being the one that needs it. */
  as?: "section" | "footer";
  children: React.ReactNode;
};

/** Full bleed section that sets the band's semantic colours for everything
    inside it, so no component needs to know which band it is sitting on. */
export function Band({
  tone,
  id,
  className = "",
  as: Tag = "section",
  children,
}: Props) {
  return (
    <Tag
      id={id}
      className={`band-${tone} grain relative bg-bg text-copy ${className}`}
    >
      <div className="relative z-[2]">{children}</div>
    </Tag>
  );
}

export function Shell({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-shell px-gutter ${className}`}>
      {children}
    </div>
  );
}
