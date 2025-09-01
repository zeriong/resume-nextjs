import Image from "next/image";

import profilePng from "../assets/images/profile.jpg";
import gitSymbolSvg from "../assets/images/git-symbol.svg";
import { Layout } from "@/components/Layout";
import { Category } from "@/components/Category";
import { ExperiencedProject } from "@/components/ExperiencedProject";
import { ExperiencedProjectDetail } from "@/components/ExperiencedProjectDetail";

import preview01 from "../assets/preview/preview01.jpg";
import preview02 from "../assets/preview/preview02.jpg";
import preview03 from "../assets/preview/preview03.jpg";
import preview04 from "../assets/preview/preview04.jpg";
import preview05 from "../assets/preview/preview05.jpg";
import preview06 from "../assets/preview/preview06.jpg";
import IntroSection from "@/components/intro/IntroSection";

export default function Home() {
  return (
    <Layout
      title="전제룡 - 포트폴리오"
      description="UX와 DX를 지향하며, 폭넓은 개발 경험으로 문제의 본질을 정확히 파악하고 빠른 이터레이션 속에서도 높은 완성도를 실현합니다."
    >
      {/* intro section */}
      <IntroSection />

      {/* Projects */}
      <Category name="Projects">
        <div className="flex flex-col mt-[52px] gap-y-[44px]">
          <ExperiencedProject
            title="ZETE AI 메모서비스"
            isPrivate={true}
            pageLink="https://zete.zeriong.com/?type=demo&modal=sign-in"
            description="사용성을 극대화 하여 편리한 메모 기능과, AI(Chat GPT) 를 연동하여 검색 결과를 메모에 요약 반영 시킬 수 있는 서비스입니다."
            preview={preview01}
            devPart={
              <>
                Frontend/Backend
                <br />
                Engineer
              </>
            }
            devDateRange="2023.03 ~ 2023.09"
            devPeriod="6개월"
          >
            <ExperiencedProjectDetail
              title="ReactQuery, Zustand 적용, 리팩토링 및 배포"
              linkGithub="https://github.com/zeriong/zete-zustand-reactQuery"
              devDateRange="2023.08 ~ 2023.09"
              devList={[
                "기존에 사용하던 Redux와 다른 타입의 상태 관리에 대한 경험을 위해 상태관리 라이브러리를 ReactQuery, Zustand 조합으로 컨버팅",
                "다소 아쉬웠던 일부 코드 리팩토링",
                "서비스 환경에 대한 이해도를 높이기 위해 우분투 리눅스를 통한 서비스 환경구축, 오픈소스 SSL 인증서 적용",
                "PM2를 통한 서비스 관리 및 무중단 서비스 이해",
              ]}
              addFields={[
                {
                  title: "Used Stack",
                  content: "ReactQuery, Zustand, Ubuntu Linux, PM2",
                },
              ]}
            />

            <ExperiencedProjectDetail
              title="AI 메모서비스 기획 및 기능 개발"
              linkGithub="https://github.com/zeriong/zete"
              devDateRange="2023.03 ~ 2023.08"
              devList={[
                "기존 사용하던 메모 서비스를 벤치하여 발전시키고 AI를 접목시켜 서비스 기획",
                "NestJS와 MariaDB를 기반으로 백엔드 설계 및 기능 개발",
                "React를 기반으로 프론트엔드의 메모, 카테고리, 태그에 대한 CRUD 인터페이스 개발",
                "Openai ChatGpt3.5 를 연동하여 채팅형식의 정보 검색과 요약 메모기능 개발",
                <>
                  Openapi Generator 의 templates 기능을 통해 axios 통신 타입 파일을
                  커스텀하여 생성
                  <span className="text-gray-400 ml-0.5">(생산성 증가)</span>
                </>,
              ]}
              addFields={[
                {
                  title: "Used Stack",
                  content: (
                    <>
                      TypeScript, NestJS, TypeORM, JWT, Swagger, MariaDB,
                      <br />
                      React, Redux Toolkit, Openapi Generator, Tailwind CSS
                    </>
                  ),
                },
              ]}
            />
          </ExperiencedProject>

          <ExperiencedProject
            title="유튜브 요약 서비스"
            isPrivate={false}
            pageLink="https://side.zeriong.com/"
            linkGithub="https://github.com/zeriong/side-project"
            description="유튜브 영상의 내용을 텍스트로 요약해 주는 서비스를 개발하는 6인 규모의 사이드 프로젝트 팀에 참여하여 서비스 영역의 프론트엔드 개발을 담당하였고
                            PL의 동의하에 본인이 개발한 파트만 분리하여 게재하였습니다."
            preview={preview02}
            devPart="Frontend Engineer"
            devDateRange="2023.03 ~ 2023.04"
            devPeriod="1개월"
          >
            <ExperiencedProjectDetail
              devList={[
                "NextJS를 활용한 기본적인 SSR 구조 개발",
                "Figma로 작성된 디자인 시안에 따라 서비스 영역 개발",
                "Youtube api를 통하여 영상의 세부정보 연동",
                "React Slick 라이브러리를 사용하여 컨텐츠 슬라이더 구현",
                "Youtube ProgressBar 와 동기화된 Custom ProgressBar를 구현하고 챕터 단위 인터페이스와 재생을 지원하고 챕터의 변화에 따라 슬라이더의 동적인 애니메이션 구현",
              ]}
              addFields={[
                {
                  title: "Review",
                  content: (
                    <>
                      프로젝트 초기에 과한 열정으로 일정 대비 너무 많은 작업량을
                      맡거나 문제를 혼자서만 해결하려 하다 팀 일정에 차질을 주어
                      문제를 겪은적이 있습니다.
                      <br />
                      <br />
                      이때 커뮤니케이션의 중요성과 함께 일을 한다는 의미를 좀 더
                      깊게 깨닫게 되었고, 적극적인 소통을 통해 작업을 분배하고 실현
                      가능한 일정을 계획하여 팀 작업 일정을 앞당겨 문제를 개선한
                      경험이 있습니다. 이후로 상황과 생각을 공유하고 보완하는 자세로
                      임하려 노력하고 있습니다.
                      <br />
                      <br />
                      또한, 주요 기획에 해당하는 유튜브 플레이어 커스텀에 대한
                      저작권 문제의 여지를 파악하여 검증된 자료를 찾아 공유하고
                      기술적으로 해결할 수 있는 더 나은 수단들을 제안하여 프로젝트
                      방향성에 크게 기여하였습니다.
                    </>
                  ),
                },
                {
                  title: "Collaboration Tools",
                  content:
                    "Google Meet, Google Chat, Google Docs, Notion, Figma, Zeplin",
                },
                {
                  title: "Used Stack",
                  content: "NextJS, React, Firebase, Redux Toolkit, Tailwind CSS",
                },
              ]}
              review="머머머를 느꼈다."
              usedStack="NextJS, React, Firebase Store"
            />
          </ExperiencedProject>

          <ExperiencedProject
            title="레이아웃 갤러리"
            isPrivate={true}
            pageLink="https://layout-gallery-beryl.vercel.app/"
            linkGithub="https://github.com/zeriong/layout-gallery"
            description="레이아웃, UI 개발 역량 향상을 위한 프로젝트로 Figma 디자인 시안을 바탕으로 개발된 페이지가 모인 갤러리입니다."
            preview={preview03}
            devPart="Frontend Engineer"
            devDateRange="2023.02 ~ 2023.03"
            devPeriod="1개월"
          >
            <ExperiencedProjectDetail
              devList={[
                "UX CRUSH에서 제공하는 Figma 무료 UI 템플릿을 시안으로 웹페이지 갤러리 구성",
                "Figma 디자인 시안을 Zeplin을 활용해 작업",
                '"Food Delivery" 템플릿으로 구성한 웹페이지에서 반응형 웹페이지 구성 능력을 숙달',
                '"Crypto App" 템플릿으로 구성한 웹페이지에서 모바일 레이아웃과 SVG를 활용한 그래프 구현',
              ]}
              addFields={[
                {
                  title: "Used Stack",
                  content: "TypeScript, React, Redux Toolkit, Tailwind CSS",
                },
              ]}
            />
          </ExperiencedProject>

          <ExperiencedProject
            title="회원가입, 로그인 서비스"
            isPrivate={true}
            description="NestJS를 활용해 백엔드 개발을 경험하고 회원가입, 로그인, 회원수정, 탈퇴 등의 기능 개발을 통해 기본적인 서비스 개발 구조를 이해하기 위한 프로젝트입니다."
            preview={preview06}
            devPart={
              <>
                Frontend/Backend
                <br />
                Engineer
              </>
            }
            devDateRange="2022.12 ~ 2023.03"
            devPeriod="3개월"
          >
            <ExperiencedProjectDetail
              title="API 명세, 통신 함수와 객체 타입 생성 자동화"
              linkGithub="https://github.com/zeriong/react-nestjs-swagger-codegen"
              devDateRange="2023.02 ~ 2023.03"
              devList={[
                "백엔드의 api 엔드포인트와 통신 객체에 Swagger 타입을 명시",
                "Swagger를 통해 api 문서 url 생성",
                "백엔드 기준에서 Openapi Tools를 활용해 프론트에 api 통신 타입과 axios 통신 함수 생성 개발",
                "프론트엔드 기준에서 openapi-generator-cli 를 통해 백엔드의 yaml 양식으로 작성된 api 문서를 읽어 api 통신 타입과 axios 통신 함수 생성 개발",
              ]}
              addFields={[
                { title: "Used Stack", content: "Swagger, Openapi Generator" },
              ]}
            />

            <ExperiencedProjectDetail
              title="NestJS 서버 개발, JWT 로그인 구현"
              linkGithub="https://github.com/zeriong/react-nestjs-jwt"
              devDateRange="2022.12 ~ 2023.02"
              devList={[
                "NestJS를 활용한 api 서버 환경 구축",
                "MariaDB와 TypeORM을 통한 서비스 데이터 구조 설계 및 관리",
                "React를 활용해 회원가입, 로그인 등에 필요한 UI 개발",
                "JWT를 활용하여 권한 인증과 유지를 구현, AccessToken 과 RefreshToken 를 활용하여 토큰 탈취에 대한 보안 위험에 대비",
              ]}
              addFields={[
                {
                  title: "Used Stack",
                  content: (
                    <>
                      TypeScript, NestJS, TypeORM, JWT, MariaDB,
                      <br />
                      React, Redux Toolkit, Tailwind CSS
                    </>
                  ),
                },
              ]}
            />
          </ExperiencedProject>

          <ExperiencedProject
            title="노마드코더 강의 코스"
            isPrivate={true}
            description="개인적으로 진행하던 학습 방식에서 한계를 느껴 시작하게 된 노마드코더의 기초 강의 학습 목록과 결과물입니다."
            preview={preview04}
            devDateRange="2022.10 ~ 2022.12"
            devPeriod="2개월"
          >
            <div className="flex flex-col gap-y-3">
              {[
                {
                  title: "NestJS로 API 만들기",
                  stack: "(TypeScript, NestJS)",
                  description:
                    "모듈형식의 아키텍처를 제공하는 NodeJS기반의 백엔드 프레임워크 학습",
                  git: "https://github.com/zeriong/nest_intro",
                },
                {
                  title: "NextJS 시작하기",
                  stack: "(NextJS)",
                  description:
                    "SSR와 SEO의 개념을 이해하고 NextJS프레임워크의 작동 방식 학습",
                  git: "https://github.com/zeriong/nextjs_intro",
                },
                {
                  title: "트위터 클론코딩",
                  stack: "(React, Firebase)",
                  description:
                    "React 심화 학습과 서버리스의 개념, 실시간 업데이트, OAuth2.0 등 핵심 기능 학습",
                  git: "https://github.com/zeriong/zwitter",
                  demo: "https://zeriong.github.io/zwitter/",
                },
                {
                  title: "초보자를 위한 리덕스 101",
                  stack: "(React, Redux, Redux-Toolkit)",
                  description: "상태관리에 대한 개념과 Redux의 작동 방식 학습",
                  git: "https://github.com/zeriong/vanilla-react-redux",
                },
                {
                  title: "실전형 리액트 Hooks",
                  stack: "(React Hook)",
                  description:
                    "기본적인 React Hooks에 대한 개념을 이해하고 Custom Hooks를 만들며 학습",
                  git: "https://github.com/zeriong/Hooks",
                },
                {
                  title: "React로 영화 웹 서비스 만들기",
                  stack: "(React, gh-pages)",
                  description:
                    "React의 기본적인 작동 방식 학습과 Github의 gh-pages를 통한 배포를 경험하며 학습",
                  git: "https://github.com/zeriong/movie_app",
                  demo: "https://zeriong.github.io/movie_app/",
                },
                {
                  title: "바닐라 JS로 그림앱 만들기",
                  stack: "(Vanilla JS, CSS)",
                  description:
                    "canvas의 기초적인 기능 구현을 통해 Vanilla JS 기초 학습",
                  git: "https://github.com/zeriong/paint_app",
                },
                {
                  title: "바닐라 JS로 크롬 앱 만들기",
                  stack: "(Vanilla JS)",
                  description:
                    "if문 활용, Local Storage, Fetch를 통한 API사용법 등 Vanilla JS의 기본기 심화 학습",
                  git: "https://github.com/zeriong/learning-start/tree/main/04.nomad-corders/momentum_app",
                },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex items-start gap-x-1">
                    <div className="flex items-start gap-x-1 max-sm:flex-col">
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-gray-600 max-sm:text-sm">{item.stack}</p>
                    </div>
                    <div className="flex items-center pt-0.5 gap-x-1">
                      {item.demo && (
                        <a
                          href={item.demo}
                          target="_blank"
                          className="flex items-center h-[20px] text-xs text-white bg-blue-500 rounded-full px-2"
                        >
                          데모
                          <i className="arrow-right !border-white ml-0.5"></i>
                        </a>
                      )}
                      {item.git && (
                        <a
                          href={item.git}
                          target="_blank"
                          className="flex items-center min-w-[36px] h-[20px] text-sm text-white bg-gray-600/90 rounded-full pl-1 pr-1.5"
                        >
                          <Image
                            src={gitSymbolSvg}
                            className="w-[14px]"
                            alt="git"
                          />
                          <i className="arrow-right !border-white ml-0.5"></i>
                        </a>
                      )}
                    </div>
                  </div>
                  <ul className="mt-0.5">
                    <li>{item.description} </li>
                  </ul>
                </div>
              ))}
            </div>
          </ExperiencedProject>

          <ExperiencedProject
            title="웹개발 기초 학습"
            isPrivate={true}
            description="개발에 관심을 가지고 시작하였던 기초 학습 과정입니다. 학습 과정에서 복잡한 코드를 통해 시각적인 결과가 만들어지는 개발에 재미를 느꼈고 목표와 진로를 결정하게 된 중요한 계기가 되었습니다."
            preview={preview05}
            devDateRange="2022.06 ~ 2022.10"
            devPeriod="4개월"
          >
            <div className="flex flex-col gap-y-3">
              {[
                {
                  title: "03. clone",
                  description:
                    "그간 학습한 내용을 바탕으로 다양한 유형의 반응형 사이트에 대한 레이아웃 및 UI에 대한 클론 코딩을 진행하였습니다.",
                  git: "https://github.com/zeriong/learning-start/tree/main/03.clone",
                  list: [
                    {
                      title: "clone_nhn",
                      description:
                        "NHN Cloud의 랜딩 페이지를 클론 코딩하여 반응형 레이아웃과 UI 요소 개발 학습",
                    },
                    {
                      title: "clone_discord",
                      description:
                        "Discord 대시보드 페이지를 클론 코딩하여 레이아웃과 UI 요소 개발 학습",
                    },
                    {
                      title: "clone_partner",
                      description:
                        "반응형 랜딩 페이지 개발을 통해 영상삽입, 라이브러리 사용, 인터랙션 구현 등 학습",
                    },
                  ],
                },
                {
                  title: "02. grid",
                  description:
                    "CSS에 대한 이해와 기본적인 레이아웃, 그리드 구성 숙달을 위해 진행한 내용입니다.",
                  git: "https://github.com/zeriong/learning-start/tree/main/02.grids",
                  list: [
                    {
                      title:
                        "AppStack, OverWatch, Slack, The Noun Project, Twitch, Youtube",
                      description:
                        "각기 다른 유형의 레이아웃을 가진 6개의 사이트를 반응형 레이아웃과 그리드만을 클로닝하며 학습",
                    },
                  ],
                },
                {
                  title: "01. practice",
                  description:
                    "HTML, CSS, JS 에 대한 기초적인 이해를 위해 진행한 내용입니다.",
                  git: "https://github.com/zeriong/learning-start/tree/main/01.practice",
                  list: [
                    {
                      title: "slider-sample",
                      description: "슬라이더를 구현하며 CSS와 JS 심화 학습",
                    },
                    {
                      title: "ze_monster",
                      description:
                        "JS 숙련을 위해 몬스터를 잡고 레벨업을 하는 간단한 기능을 구현",
                    },
                    {
                      title: "JS_Practice",
                      description: "JS에 대한 학습자료를 찾아 메모하며 적용",
                    },
                    {
                      title: "calculator",
                      description: "계산기를 구현해보며 조금 더 심화된 JS 학습",
                    },
                    {
                      title: "web_site_cloning",
                      description:
                        "유튜브 강의로 웹페이지 클로닝을 진행하며 HTML, CSS, JS를 통해 웹페이지 구현",
                    },
                  ],
                },
              ].map((chapter, idx) => (
                <div key={idx} className="">
                  <div className="flex items-center gap-x-1.5">
                    <p className="font-semibold text-lg">{chapter.title}</p>
                    {chapter.git && (
                      <a
                        href={chapter.git}
                        target="_blank"
                        className="flex items-center min-w-[36px] h-[20px] text-sm text-white bg-gray-600/90 rounded-full pl-1 pr-1.5"
                      >
                        <Image src={gitSymbolSvg} className="w-[14px]" alt="git" />
                        <i className="arrow-right !border-white ml-0.5"></i>
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{chapter.description}</p>
                  <div className="flex flex-col border-l border-gray-300/90 mt-4 pl-4 gap-y-2 max-md:pl-4">
                    {chapter.list.map((item, idx2) => (
                      <div key={idx2}>
                        <p className="text-gray-700 font-semibold">{item.title}</p>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ExperiencedProject>
        </div>
      </Category>

      {/* Skills */}
      <Category
        name="Skills"
        description={
          <>
            프로젝트에 사용 경험이 있는 기술들입니다.{" "}
            <span className="border-b-2 border-blue-500">React</span>를 주력으로
            서비스에 필요한 전반적인 과정을 경험하고 문제를 해결하며 이해하고
            성장하는 데 중점을 두었습니다. 백엔드에서는{" "}
            <span className="border-b-2 border-blue-500">NestJS</span> 사용에
            익숙합니다.
          </>
        }
      >
        <div className="flex flex-col gap-y-[28px] mt-[32px] max-md:mt-[24px]">
          <div className="flex gap-x-[52px] gap-y-[20px] max-md:flex-col">
            <div className="flex flex-col w-[130px]">
              <p className="text-gray-500 text-xl font-semibold leading-none">
                Frontend
              </p>
            </div>
            <div className="">
              HTML/CSS, JavaScript, TypeScript, React, Redux Toolkit, React Query,
              NextJS, Tailwindcss
            </div>
          </div>
          <div className="flex gap-x-[52px] gap-y-[20px] max-md:flex-col">
            <div className="flex flex-col w-[130px]">
              <p className="text-gray-500 text-xl font-semibold leading-none">
                Backend
              </p>
            </div>
            <div className="flex flex-col gap-y-[44px]">
              NodeJS, NestJS, Typeorm, JWT, Swagger, Mariadb
            </div>
          </div>
          <div className="flex gap-x-[52px] gap-y-[20px] max-md:flex-col">
            <div className="flex flex-col w-[130px]">
              <p className="text-gray-500 text-xl font-semibold leading-none">
                Etc
              </p>
            </div>
            <div className="flex flex-col gap-y-[44px]">
              Firebase, Openapi Generator, Linux Ubuntu, PM2,
              <br />
              Git/Github, WebStorm, DataGrip
            </div>
          </div>
        </div>
      </Category>
    </Layout>
  );
}
