"use client";

import IntroSection from "@/app/_components/intro/IntroSection";
import { ContentLayout } from "@/app/_components/layout/ContentLayout";
import { NavBar } from "@/app/_components/layout/NavBar";
import { Projects } from "@/app/_components/projects/Projects";
import { Skills } from "@/app/_components/skills/Skills";

export default function Home() {
  return (
    <div className="relative w-full h-full flex">
      {/* Navbar */}
      <NavBar />

      {/* Content Layout */}
      <ContentLayout>
        {/* intro section */}
        <IntroSection />

        {/* Projects */}
        <Projects />

        {/* Skills */}
        <Skills />
      </ContentLayout>
    </div>
  );
}
