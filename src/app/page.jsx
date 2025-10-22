"use client";

import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Activities from "@/app/_components/activities/Activities";
import { ToastContainer } from "@/app/_components/common/Toasts";
import { Experiences } from "@/app/_components/Experiences/Experiences";
import IntroSection from "@/app/_components/intro/IntroSection";
import { ContentLayout } from "@/app/_components/layout/ContentLayout";
import { NavBar } from "@/app/_components/layout/NavBar";
import { Projects } from "@/app/_components/projects/Projects";
import { Skills } from "@/app/_components/skills/Skills";
import useActiveNavEffect from "@/app/_hooks/useActiveNavEffect";

export default function Home() {
  const DIVIDE_WRAPPER_CLASSNAME = "flex flex-col gap-y-[68px] max-lg:gap-y-[48px]";
  // scrollDivListRef 참조 객체
  const scrollDivListRef = useRef({});
  // measureDivListRef 참조 객체
  const measureDivRef = useRef(null);

  const [isRender, setIsRender] = useState(false);

  useActiveNavEffect({ scrollDivListRef, measureDivRef });

  // requestAnimationFrame을 활용하여 렌더링을 보장함함
  useEffect(() => {
    requestAnimationFrame(() => {
      setIsRender(true);
    });
  }, []);

  return (
    <div
      className={twMerge(
        "w-full h-full flex transition-all duration-1000 opacity-0",
        isRender && "opacity-100",
      )}
    >
      {/* Navbar */}
      <NavBar scrollDivListRef={scrollDivListRef} />

      {/* Content Layout */}
      <ContentLayout>
        {/* measureDivListRef */}
        <div
          ref={measureDivRef}
          className={twMerge(
            // ? 40% 위치에 sticky 적용하여 중립성을 유지함
            "h-[1px] w-full sticky top-[40%]",
          )}
        />

        <div className="flex flex-col gap-y-[68px] max-lg:gap-y-[48px]">
          {/* Main Section */}
          {[
            {
              no: 1,
              id: "Intro",
              dataName: "Intro",
              type: "main",
              component: <IntroSection />,
            },
            // {
            //   no: 2,
            //   id: "Experiences",
            //   dataName: "Experiences",
            //   type: "main",
            //   component: <Experiences scrollDivListRef={scrollDivListRef} />,
            // },
            {
              no: 3,
              id: "Projects",
              dataName: "Projects",
              type: "main",
              component: <Projects scrollDivListRef={scrollDivListRef} />,
            },
            {
              no: 4,
              id: "Skills",
              dataName: "Skills",
              type: "main",
              component: <Skills />,
            },
            {
              no: 5,
              id: "Activities",
              dataName: "Activities",
              type: "main",
              component: <Activities />,
            },
          ].map((item) => {
            return (
              <div
                key={item.id}
                id={item.id}
                data-name={item.dataName}
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
        </div>
      </ContentLayout>

      {/* Toasts */}
      <ToastContainer />
    </div>
  );
}
