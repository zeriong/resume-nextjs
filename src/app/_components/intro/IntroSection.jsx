"use client";

import { twMerge } from "tailwind-merge";
import LinkList from "@/app/_components/intro/LinkList";

/**
 * @param {{ scrollDivListRef: React.RefObject }} props - 스크롤 디비전 리스트 참조
 */
export default function IntroSection({ scrollDivListRef }) {
  const LINK_LIST = [
    {
      title: "Contact.",
      children: [
        {
          title: "Email.",
          href: "mailto:jaeryong95@gmail.com",
          text: "jaeryong95@gmail.com",
        },
      ],
    },
    {
      title: "Channel.",
      children: [
        {
          title: "Blog.",
          href: "https://zeriong.tistory.com/",
          text: "https://zeriong.tistory.com/",
        },
        {
          title: "Github.",
          href: "https://github.com/zeriong/",
          text: "https://github.com/zeriong/",
        },
        {
          title: "3D Portfolio.",
          href: "https://resume.zeriong.com/",
          text: "https://resume.zeriong.com/",
        },
      ],
    },
  ];

  return (
    <>
      {/* intro title */}
      <section
        className={twMerge(
          "flex items-center gap-[48px]",
          "max-lg:flex-wrap max-sm:gap-[24px]",
        )}
      >
        {/* profile image */}
        {/* <div className="relative">
          <div
            className={twMerge(
              "relative flex items-center justify-center w-[180px] h-[180px] rounded-full overflow-hidden",
              "ring-1 ring-gray-300/80 bg-gradient-to-r from-[#e4eaee] to-[#dee1e6]",
              "max-sm:w-[170px] max-sm:h-[170px]",
            )}
          >
            <Image
              src={profilePng}
              className="absolute w-auto h-full"
              alt="zeriong"
            />
          </div>
        </div> */}

        {/* intro my-title */}
        <p className="text-[50px] font-bold leading-[1.4] max-lg:text-[32px] whitespace-nowrap">
          안녕하세요,
          <br />
          <span className={"text-primary"}>UX/DX</span> 지향 개발자
          <br /> 전제룡 입니다
          <span className={"text-primary"}>.</span>
        </p>
      </section>

      {/* contacts box */}
      <section className="hidden gap-[48px] items-center max-sm:flex">
        {/* Contacts */}
        <div className="text-base text-gray-500 leading-[1.4] flex flex-col gap-6">
          {LINK_LIST.map((item) => (
            <LinkList key={item.title} list={item} />
          ))}
        </div>
      </section>

      {/* intro my self */}
      <section className="flex flex-col text-xl text-gray-700 leading-[1.8] gap-y-[24px] max-md:text-base">
        <p>
          빠른 이터레이션이 요구되는 환경 속에서 DX를 향상시켜{" "}
          <span className={"text-primary font-semibold"}>
            작업일정 내에 UX기반의 높은 완성도로 개발하는 것
          </span>
          을 개발자의 주요 역량이라 믿으며 실천해왔습니다.
        </p>
        <p>
          문제의 본질을 정확히 파악하여 가장{" "}
          <span className={"text-primary font-semibold"}>
            단순하면서도 본질적인 해법을 찾는 데 집중
          </span>
          합니다.
        </p>
        <p>
          프론트엔드부터 서버, 인프라, DevOps 등 여러 영역에서 경험을 쌓으며{" "}
          <span className={"text-primary font-semibold"}>
            프로세스 전반에 대한 이해와 문제 추론 능력
          </span>
          을 향상시켜왔습니다.
        </p>
        <p>
          팀의 생산성을 높이기 위해 동료와 컨벤션을 고민하며, 이해와 설득이 가능한
          <span className={"text-primary font-semibold"}>근거가 녹아든 코드</span>를
          지향합니다.
        </p>
        <p>
          밝은 에너지와 공감 및 소통 능력으로{" "}
          <span className={"text-primary font-semibold"}>
            경직된 분위기를 순환시키고 함께 목표에 집중 할 수 있는 분위기를 이끌어
            내는 강점
          </span>
          을 가지고 있습니다.
        </p>
      </section>
    </>
  );
}
