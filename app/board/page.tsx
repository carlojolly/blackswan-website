import type { Metadata } from "next";
import { Band, Shell } from "@/components/Band";
import { Board } from "@/components/Board";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/MotionProvider";
import { Nav } from "@/components/Nav";
import { SmoothScroll } from "@/components/SmoothScroll";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Board, Black Swan Student Society",
  description:
    "The people who run Black Swan Student Society: a president, a vice president, a head of investment research, and heads for each of the five divisions.",
};

export default function BoardPage() {
  return (
    <MotionProvider>
      <SmoothScroll />
      <Nav />
      <main className="flex-1">
        <Band tone="dark" className="pb-20 pt-24">
          <Shell>
            <p className="font-mono text-label uppercase text-muted">
              {site.name}
            </p>
            <h1 className="mt-6 max-w-[14ch] font-display text-d1 text-heading">
              {site.board.heading}
            </h1>
            <p className="mt-8 max-w-measure text-lead text-copy">
              {site.board.line}
            </p>
          </Shell>
        </Band>
        <Board tone="paper" />
      </main>
      <Footer />
    </MotionProvider>
  );
}
