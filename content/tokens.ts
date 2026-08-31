/** Token catalogue, consumed by the specimen page so the values shown are the values shipped. */

export const GROUND_DARK = "#060708";
export const GROUND_PAPER = "#f2f3f5";

export type Swatch = {
  name: string;
  hex: string;
  role: string;
};

export const inkRamp: Swatch[] = [
  { name: "ink-900", hex: "#0e1013", role: "raised surface on dark" },
  { name: "ink-800", hex: "#171a1f", role: "card fill on dark" },
  { name: "ink-700", hex: "#23272e", role: "hairline rule on dark" },
  { name: "ink-600", hex: "#394049", role: "body text on paper" },
  { name: "ink-500", hex: "#5c636e", role: "muted text on paper" },
  { name: "ink-400", hex: "#8f959f", role: "muted text on dark" },
  { name: "ink-300", hex: "#c4c8ce", role: "body text on dark" },
  { name: "ink-200", hex: "#e9eaed", role: "raised surface on paper" },
];

export const accents: Swatch[] = [
  { name: "accent-dark", hex: "#8fa3bc", role: "rules, hover, readouts on dark" },
  { name: "accent-paper", hex: "#41546b", role: "rules, hover, readouts on paper" },
];

export const typeScale = [
  { token: "d1", family: "Bodoni Moda", size: "clamp(3.25rem, 8.4vw, 7.5rem)", use: "hero" },
  { token: "d2", family: "Bodoni Moda", size: "clamp(2.25rem, 4.6vw, 4rem)", use: "section heading" },
  { token: "d3", family: "Bodoni Moda", size: "clamp(1.625rem, 2.6vw, 2.25rem)", use: "subsection" },
  { token: "d4", family: "Bodoni Moda", size: "21px", use: "card heading" },
  { token: "lead", family: "Inter", size: "19px", use: "standfirst" },
  { token: "copy", family: "Inter", size: "17px", use: "paragraph" },
  { token: "sm", family: "Inter", size: "15px", use: "secondary" },
  { token: "xs", family: "Inter", size: "13px", use: "caption" },
  { token: "num", family: "IBM Plex Mono", size: "13px", use: "probabilities" },
  { token: "label", family: "IBM Plex Mono", size: "11px", use: "eyebrow, index" },
];

export const spacingScale = [
  { token: "gutter", value: "clamp(1.25rem, 5vw, 4rem)", use: "page inset" },
  { token: "section", value: "clamp(5rem, 9.5vw, 8.5rem)", use: "band padding" },
  { token: "measure", value: "65ch", use: "reading width" },
  { token: "narrow", value: "46rem", use: "centred column" },
  { token: "shell", value: "78rem", use: "outer container" },
];

export const motionScale = [
  { token: "micro", value: "180ms", ease: "standard", use: "nav links, card hover, footer links" },
  { token: "reveal", value: "420ms", ease: "exit", use: "scroll reveal, opacity plus translate" },
  { token: "stagger", value: "70ms", ease: "exit", use: "delay between revealed siblings" },
  { token: "ambient", value: "24s", ease: "linear", use: "hero curve redraw, hero only" },
];
