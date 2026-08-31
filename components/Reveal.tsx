"use client";

import { motion } from "framer-motion";
import { REVEAL_DURATION, REVEAL_EASE } from "@/lib/motion";

/** Opacity plus a small translate, staggered, fires once and never again. */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}) {
  const Tag = as === "li" ? motion.li : motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{
        duration: REVEAL_DURATION,
        ease: [...REVEAL_EASE],
        delay,
      }}
    >
      {children}
    </Tag>
  );
}
