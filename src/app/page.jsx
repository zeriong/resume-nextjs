"use client";

import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { ToastContainer } from "@/app/_components/common/Toasts";
import IntroSection from "@/app/_components/intro/IntroSection";
import { ContentLayout } from "@/app/_components/layout/ContentLayout";
import { NavBar } from "@/app/_components/layout/NavBar";
import { Projects } from "@/app/_components/projects/Projects";
import { Skills } from "@/app/_components/skills/Skills";
import useActiveNavEffect from "./_hooks/useActiveNavEffect";
import Activities from "@/app/_components/activities/Activities";

export default function Home() {
  const DIVIDE_WRAPPER_CLASSNAME = "flex flex-col gap-y-[68px] max-lg:gap-y-[48px]";
  // scrollDivListRef 참조 객체
  const scrollDivListRef = useRef({});
  // measureDivListRef 참조 객체
  const measureDivRef = useRef(null);

  useActiveNavEffect({ scrollDivListRef, measureDivRef });

  return (
    <div className="w-full h-full flex">
      {/* Navbar */}
      <NavBar scrollDivListRef={scrollDivListRef} />

      {/* Content Layout */}
      <ContentLayout>
        {/* measureDivListRef */}
        <div
          ref={measureDivRef}
          className={twMerge(
            "h-[1px] w-full sticky top-[64px] bg-red-500 z-10",
            "max-lg:top-[32px]",
          )}
        />

        {[
          {
            no: 1,
            id: "Intro",
            type: "main",
            component: <IntroSection scrollDivListRef={scrollDivListRef} />,
          },
          {
            no: 2,
            id: "Projects",
            type: "main",
            component: <Projects scrollDivListRef={scrollDivListRef} />,
          },
          {
            no: 3,
            id: "Skills",
            type: "main",
            component: <Skills />,
          },
          {
            no: 4,
            id: "Activities",
            type: "main",
            component: <Activities />,
          },
        ].map((item) => {
          return (
            <div
              key={item.id}
              id={item.id}
              ref={(node) => {
                if (node) {
                  scrollDivListRef.current[item.id] = {};
                  scrollDivListRef.current[item.id].node = node;
                  scrollDivListRef.current[item.id].type = item.type;
                  scrollDivListRef.current[item.id].no = item.no;
                }
              }}
              className={DIVIDE_WRAPPER_CLASSNAME}
            >
              {item.component}
            </div>
          );
        })}
      </ContentLayout>

      {/* Toasts */}
      <ToastContainer />
    </div>
  );
}
