import { Band, Shell } from "./Band";
import { BoardAvatar } from "./BoardAvatar";
import { Reveal } from "./Reveal";
import { stagger } from "@/lib/motion";
import { SectionRule } from "./SectionRule";
import { board } from "@/content/members";
import { site } from "@/content/site";

/** The roster only. The page that renders it owns the heading, so the two
    cannot state the same thing twice. */
export function Board({ tone = "paper" }: { tone?: "dark" | "paper" }) {
  return (
    <Band tone={tone} id="board" className="py-section">
      <Shell>
        <SectionRule label={site.board.eyebrow} />

        <ul className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {board.map((member, i) => (
            <Reveal key={member.id} as="li" delay={stagger(i)}>
              <BoardAvatar
                seatId={member.id}
                index={member.index}
                photo={member.photo}
                name={member.name}
              />
              <p className="mt-5 font-display text-d4 text-heading">
                {member.name}
              </p>
              <p className="mt-1.5 font-mono text-label uppercase text-muted">
                {member.role}
              </p>
            </Reveal>
          ))}
        </ul>

        <p className="mt-14 max-w-measure text-sm text-muted">
          {site.board.note}
        </p>
      </Shell>
    </Band>
  );
}
