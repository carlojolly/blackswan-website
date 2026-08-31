/** Deterministic probability paths, the site's signature mark.
    Same seed always yields the same curve, so server and client agree. */

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function seedFrom(text: string): number {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** A mean reverting walk in [0,1], the shape a live market price traces. */
export function probabilitySeries(seed: number, steps: number): number[] {
  const rand = mulberry32(seed);
  const anchor = 0.3 + rand() * 0.4;
  let value = anchor;
  const out: number[] = [];
  for (let i = 0; i < steps; i++) {
    const drift = (anchor - value) * 0.05;
    const shock = (rand() - 0.5) * 0.44;
    value = Math.min(0.93, Math.max(0.07, value + drift + shock));
    out.push(value);
  }
  return out;
}

/** Catmull-Rom through the points, converted to cubic beziers so the
    stroke stays smooth at any width. */
export function toSmoothPath(
  values: number[],
  width: number,
  height: number,
  padding = 0
): string {
  const n = values.length;
  if (n === 0) return "";
  const innerH = height - padding * 2;
  const pts = values.map((v, i) => ({
    x: (i / (n - 1)) * width,
    y: padding + (1 - v) * innerH,
  }));

  let d = `M ${pts[0].x.toFixed(2)} ${pts[0].y.toFixed(2)}`;
  for (let i = 0; i < n - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${c1x.toFixed(2)} ${c1y.toFixed(2)}, ${c2x.toFixed(2)} ${c2y.toFixed(2)}, ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`;
  }
  return d;
}

export function curveFor(
  key: string,
  steps: number,
  width: number,
  height: number,
  padding = 0
) {
  const values = probabilitySeries(seedFrom(key), steps);
  return {
    d: toSmoothPath(values, width, height, padding),
    last: values[values.length - 1],
  };
}

/** A series whose last value equals its first, so the path tiles seamlessly.
    Detrending keeps the endpoints matched without flattening the walk. */
export function loopingSeries(seed: number, steps: number): number[] {
  const s = probabilitySeries(seed, steps);
  const delta = s[0] - s[steps - 1];
  for (let i = 0; i < steps; i++) {
    s[i] = Math.min(0.93, Math.max(0.07, s[i] + (delta * i) / (steps - 1)));
  }
  s[steps - 1] = s[0];
  return s;
}

/** Two tiles of the same period, smoothed as one path so the seam has no kink. */
export function tiledCurve(key: string, steps: number, width: number, height: number, padding = 0) {
  const period = loopingSeries(seedFrom(key), steps);
  const doubled = [...period, ...period.slice(1)];
  return {
    d: toSmoothPath(doubled, width * 2, height, padding),
    last: period[period.length - 1],
  };
}

/**
 * Evaluate the smoothed curve at t in [0,1) across one period.
 *
 * toSmoothPath lays control points at even x spacing, and a cubic Bezier with
 * evenly spaced x controls parameterises x linearly. So the segment parameter
 * is exactly the fractional index, and this returns the same y the rendered
 * path draws rather than an approximation of it.
 */
export function sampleSmooth(period: number[], t: number): number {
  const n = period.length - 1; // period[n] === period[0], so n segments
  const x = (((t % 1) + 1) % 1) * n;
  const i = Math.floor(x);
  const f = x - i;
  const at = (k: number) => period[((k % n) + n) % n];
  const p1 = at(i);
  const p2 = at(i + 1);
  const c1 = p1 + (p2 - at(i - 1)) / 6;
  const c2 = p2 - (at(i + 2) - p1) / 6;
  const u = 1 - f;
  return u * u * u * p1 + 3 * u * u * f * c1 + 3 * u * f * f * c2 + f * f * f * p2;
}

export function periodFor(key: string, steps: number): number[] {
  return loopingSeries(seedFrom(key), steps);
}
