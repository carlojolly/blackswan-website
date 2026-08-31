/** Shared motion values. Kept out of the client module so server components
    can compute stagger delays without importing across the boundary. */

export const REVEAL_DURATION = 0.42;
export const REVEAL_EASE = [0.16, 1, 0.3, 1] as const;
export const STAGGER_STEP = 0.07;

/** 70ms between siblings, capped so a long list never crawls in. */
export const stagger = (i: number) => Math.min(i, 5) * STAGGER_STEP;
