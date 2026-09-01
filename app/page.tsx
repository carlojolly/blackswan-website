import { Divisions } from "@/components/Divisions";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Membership } from "@/components/Membership";
import { MotionProvider } from "@/components/MotionProvider";
import { Nav } from "@/components/Nav";
import { Origin } from "@/components/Origin";
import { SmoothScroll } from "@/components/SmoothScroll";

export default function Home() {
  return (
    <MotionProvider>
      <SmoothScroll />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Origin />
        <Divisions />
        <Membership />
      </main>
      <Footer />
    </MotionProvider>
  );
}
