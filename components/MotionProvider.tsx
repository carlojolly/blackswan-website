"use client";

import { MotionConfig } from "framer-motion";

/** reducedMotion="user" keeps opacity fades but drops transforms when the OS
    asks for reduced motion. Children stay server rendered. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
