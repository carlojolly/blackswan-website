/** The signature stroke. A hairline carrying the section name on the left and
    a running index on the right, echoing the carousel numerals. */
export function SectionRule({
  label,
  index,
  total,
}: {
  label: string;
  index?: string;
  total?: string;
}) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-t border-rule-strong pt-4">
      <span className="font-mono text-label uppercase text-muted">{label}</span>
      {index && total && (
        <span className="font-mono text-num text-accent">
          {index} / {total}
        </span>
      )}
    </div>
  );
}
