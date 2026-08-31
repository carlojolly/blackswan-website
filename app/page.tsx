import { Divisions } from "@/components/Divisions";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Membership } from "@/components/Membership";
import { MotionProvider } from "@/components/MotionProvider";
import { Nav } from "@/components/Nav";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Thesis } from "@/components/Thesis";

export default function Home() {
  return (
    <MotionProvider>
      <SmoothScroll />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Thesis />
        <Divisions />
        <Membership />
      </main>
      <Footer />
    </MotionProvider>
  );
}
