/** The signature stroke. A hairline carrying the section name. */
export function SectionRule({ label }: { label: string }) {
  return (
    <div className="border-t border-rule-strong pt-4">
      <span className="font-mono text-label uppercase text-muted">{label}</span>
    </div>
  );
}
