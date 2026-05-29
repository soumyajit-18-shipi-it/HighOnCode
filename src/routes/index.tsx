import { createFileRoute } from "@tanstack/react-router";
import { OceanBackground } from "@/components/ocean/OceanBackground";
import { CursorGlow } from "@/components/ocean/CursorGlow";
import { ScrollProgress } from "@/components/ocean/ScrollProgress";
import { SmoothScroll } from "@/components/ocean/SmoothScroll";
import { Nav } from "@/components/ocean/Nav";
import { Loader } from "@/components/ocean/Loader";
import { WaveDivider } from "@/components/ocean/WaveDivider";
import { Hero } from "@/components/ocean/sections/Hero";
import { Identity } from "@/components/ocean/sections/Identity";
import { Team } from "@/components/ocean/sections/Team";
import { Skills } from "@/components/ocean/sections/Skills";
import { Learn } from "@/components/ocean/sections/Learn";
import { Workflow } from "@/components/ocean/sections/Workflow";
import { Fun } from "@/components/ocean/sections/Fun";
import { Footer } from "@/components/ocean/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HighOnCode — A Submerged Research Collective" },
      {
        name: "description",
        content:
          "HighOnCode is a three-person developer team from BITS Pilani building intelligent systems beneath the surface of innovation.",
      },
      { property: "og:title", content: "HighOnCode — Submerged Research Collective" },
      { property: "og:description", content: "Frontend, AI and security engineers shipping deep-water software." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <Loader />
      <SmoothScroll />
      <OceanBackground />
      <CursorGlow />
      <ScrollProgress />
      <Nav />
      <main className="relative">
        <Hero />
        <WaveDivider />
        <Identity />
        <Team />
        <WaveDivider flip />
        <Skills />
        <Learn />
        <WaveDivider />
        <Workflow />
        <Fun />
        <Footer />
      </main>
    </div>
  );
}
