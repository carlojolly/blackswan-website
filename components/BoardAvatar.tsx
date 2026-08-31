import Image from "next/image";
import { curveFor } from "@/lib/curve";

const W = 200;
const H = 240;

/** Placeholder treatment for a missing photograph. Each seat gets its own
    deterministic calibration curve, so the grid reads as designed rather
    than as six empty boxes waiting for images. */
export function BoardAvatar({
  seatId,
  index,
  photo,
  name,
}: {
  seatId: string;
  index: string;
  photo: string | null;
  name: string;
}) {
  if (photo) {
    return (
      <div className="relative aspect-[5/6] w-full overflow-hidden border border-rule bg-surface">
        <Image
          src={photo}
          alt={name}
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover grayscale"
        />
      </div>
    );
  }

  const { d, last } = curveFor(seatId, 22, W, H, 34);

  return (
    <div className="relative aspect-[5/6] w-full overflow-hidden border border-rule bg-surface">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
      >
        <line
          x1="0"
          x2={W}
          y1={H / 2}
          y2={H / 2}
          stroke="var(--c-rule)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={d}
          fill="none"
          stroke="var(--c-accent)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          opacity="0.8"
        />
      </svg>
      <span className="absolute left-4 top-4 font-mono text-label uppercase text-muted">
        {index}
      </span>
      <span className="absolute bottom-4 right-4 font-mono text-num text-accent">
        {last.toFixed(2)}
      </span>
    </div>
  );
}
