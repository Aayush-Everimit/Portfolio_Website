import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Cursor } from "@/components/Cursor";
import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Footer } from "@/components/Footer";

// Below-the-fold sections lazy-loaded for faster first paint.
const Projects = lazy(() => import("@/components/sections/Projects").then(m => ({ default: m.Projects })));
const Experience = lazy(() => import("@/components/sections/Experience").then(m => ({ default: m.Experience })));
const Achievements = lazy(() => import("@/components/sections/Achievements").then(m => ({ default: m.Achievements })));
const Education = lazy(() => import("@/components/sections/Education").then(m => ({ default: m.Education })));
const Contact = lazy(() => import("@/components/sections/Contact").then(m => ({ default: m.Contact })));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aayush Gautam — Full-Stack Developer & Backend Engineer" },
      { name: "description", content: "Portfolio of Aayush Gautam — AI-powered platforms, system monitoring tools, and scalable backend architectures. Available for select projects." },
      { property: "og:title", content: "Aayush Gautam — Full-Stack Engineering" },
      { property: "og:description", content: "Portfolio of Aayush Gautam — AI-powered platforms, system monitoring tools, and scalable backend architectures." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <Cursor />
      <SmoothScroll>
        <Navbar />
        <main className="relative">
          <Hero />
          <About />
          <Skills />
          <Suspense fallback={<div className="h-screen" />}>
            <Projects />
            <Experience />
            <Achievements />
            <Education />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
