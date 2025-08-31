import Image from "next/image";
import profilePng from "@/assets/images/profile.jpg";
import LinkList from "@/components/intro/LinkList";

export default function IntroSection() {
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
      <section>
        <p className="text-[50px] font-bold leading-[1.4] max-lg:text-[32px]">
          안녕하세요,
          <br />
          <span className={"text-primary"}>UX/DX</span> 지향 개발자
          <br /> 전제룡 입니다
          <span className={"text-primary"}>.</span>
        </p>
      </section>

      {/* intro contact */}
      <section className="flex gap-x-[48px] max-sm:flex-col items-center">
        {/* img */}
        <div className="relative">
          <div className="relative flex items-center justify-center w-[180px] h-[180px] rounded-full ring-1 ring-gray-300/80 bg-gradient-to-r from-[#e4eaee] to-[#dee1e6] overflow-hidden">
            <Image
              src={profilePng}
              className="absolute w-auto h-full"
              alt="zeriong"
            />
          </div>
        </div>

        {/* Contacts */}
        <div className="text-base text-gray-500 leading-[1.4] py-2 max-sm:mt-[20px] flex flex-col gap-6">
          {LINK_LIST.map((item) => (
            <LinkList key={item.title} list={item} />
          ))}
        </div>
      </section>

      {/* intro my self */}
      <section className="flex flex-col text-xl text-gray-700 leading-[1.8] gap-y-[24px] max-md:text-base">
        <p>
          빠른 이터레이션이 요구되는 환경 속에서 개발하기 좋은 환경을 만들어
          작업일정 내에 UX기반의 높은 완성도로 마무리하는 것을 개발자의 주요
          역량이라 믿으며 실천해왔으며, 사용자 입장에서 고민하며 설계하고, 이어지는
          불필요한 개발적 요소를 최소화하고, 문제의 본질을 정확히 파악하여 가장
          단순하면서도 효과적인 해법을 찾는 데 집중합니다.
        </p>
        <p>
          프론트엔드 개발자로 커리어를 시작했지만, 다양한 분야를 경험하며 기술적
          시야를 넓히는 것 또한 중요한 역량이라고 생각하며 프론트엔드뿐만 아닌 서버,
          인프라, DevOps 등 여러 영역에서 경험을 쌓으며 프로세스 전반에 대한 이해와
          문제 추론 능력을 향상시켜왔습니다.
        </p>
        <p>
          공식 문서 기반의 학습과 아키텍처 설계를 바탕으로 확장성과 유지보수성이
          높은 클린 코드를 작성하기 위해 노력하며 팀의 생산성을 높이기 위해 동료와
          컨벤션을 고민하며, 이해와 설득이 가능한 근거가 녹아든 코드를 지향합니다.
        </p>
        <p>
          밝은 에너지와 친화력, 공감 및 소통 능력으로 경직된 분위기를 순환시키고
          함께 목표에 집중 할 수 있는 분위기를 이끌어 내는 강점을 가지고 있습니다.
        </p>
      </section>
    </>
  );
}
