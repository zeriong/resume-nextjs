"use client";

import { useRef } from "react";
import { ToastContainer } from "@/app/_components/common/Toasts";
import IntroSection from "@/app/_components/intro/IntroSection";
import { ContentLayout } from "@/app/_components/layout/ContentLayout";
import { NavBar } from "@/app/_components/layout/NavBar";
import { Projects } from "@/app/_components/projects/Projects";
import { Skills } from "@/app/_components/skills/Skills";

export default function Home() {
  // scrollDivListRef 참조 객체
  const scrollDivListRef = useRef({});
  return (
    <div className="relative w-full h-full flex">
      {/* Navbar */}
      <NavBar scrollDivListRef={scrollDivListRef} />

      {/* Content Layout */}
      <ContentLayout>
        {/* intro section */}
        <IntroSection scrollDivListRef={scrollDivListRef} />

        {/* Projects */}
        <Projects scrollDivListRef={scrollDivListRef} />

        {/* Skills */}
        <Skills scrollDivListRef={scrollDivListRef} />
      </ContentLayout>

      {/* Toasts */}
      <ToastContainer />
    </div>
  );
}
