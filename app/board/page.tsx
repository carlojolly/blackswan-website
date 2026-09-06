import type { Metadata } from "next";
import { Band, Shell } from "@/components/Band";
import { Board } from "@/components/Board";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/MotionProvider";
import { Nav } from "@/components/Nav";
import { SmoothScroll } from "@/components/SmoothScroll";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "The Board",
  description:
    "The fifteen people who run Black Swan Student Society: a president and vice president, a head of investment research, heads for each of the five divisions, and heads of media, operations and recruitment.",
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
          </Shell>
        </Band>
        <Board tone="paper" />
      </main>
      <Footer />
    </MotionProvider>
  );
}
