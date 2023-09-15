import {Layout} from '@/components/Layout';
import Image from 'next/image'
import profilePng from '../assets/images/profile.jpg';
import {Category} from '@/components/Category';
import {ExperiencedProject} from '@/components/ExperiencedProject';
import {ExperiencedProjectDetail} from '@/components/ExperiencedProjectDetail';

export default function Home() {
  return (
      <Layout title="resume.zeriong">

          {/* intro title */}
          <section>
              <p className="text-[50px] font-bold leading-[1.4] max-lg:text-[32px]">
                  안녕하세요,<br/>
                  웹 개발자 꿈나무 전제룡 입니다.
              </p>
          </section>

          {/* intro contact */}
          <section className="flex gap-x-[48px] max-sm:flex-col">
              <div className="relative">
                  <div
                      className="relative flex items-center justify-center w-[180px] h-[180px] rounded-full ring-1 ring-gray-300/80 bg-gradient-to-r from-[#e4eaee] to-[#dee1e6] overflow-hidden">
                      <Image src={profilePng} className="absolute w-auto h-full" alt=""/>
                  </div>
              </div>
              <div className="text-base text-gray-500 leading-[1.4] py-2 max-sm:mt-[20px]">
                  <div className="flex flex-col gap-y-1.5">
                      <p className="font-bold text-xl text-blue-500">Contact.</p>
                      <div>
                          Email. <a href="mailto:jaeryong95@gmail.com" target="_blank" className="ml-2 text-gray-700 font-medium">jaeryong95@gmail.com</a>
                      </div>
                  </div>
                  <div className="flex flex-col gap-y-1.5 mt-6">
                      <p className="font-bold text-xl text-blue-500">Channel.</p>
                      <div>
                          Blog. <a href="https://zeriong.tistory.com/" target="_blank" className="ml-2 text-gray-700 font-medium">https://zeriong.tistory.com/</a>
                      </div>
                      <div>
                          Github. <a href="https://github.com/zeriong/" target="_blank" className="ml-2 text-gray-700 font-medium">https://github.com/zeriong/</a>
                      </div>
                  </div>
              </div>
          </section>

          {/* intro my self */}
          <section className="flex flex-col text-xl text-gray-700 leading-[1.8] gap-y-[24px] max-md:text-base">
              <p>
                  시각적으로 결과를 만들어 내는 일에 큰 즐거움을 느껴 프론트엔드 개발자로 진로를 결정하였고,<br/>
                  프론트, 백엔드, 배포 등의 개발 경험을 거치며 웹 서비스의 설계와 개발에 대한 전체적인 이해도를 높이려 노력하였습니다.
              </p>
              <p>
                  개발은 비즈니스를 구현하는 일이라고 이해하고 있습니다. 비즈니스의 성장과 팀에 기여하기 위해 적극적인 커뮤니케이션과
                  스스로 끊임없이 발전하려는 노력이 필요하다 믿으며, 준비된 인재가 되기 위해 노력하고 있습니다.
              </p>
              <p>
                  소통과 공감은 제가 가진 가장 큰 강점이고 중요한 가치라고 생각합니다. 상대방의 감정을 배려하고 주변에 밝고 긍정적인 에너지를 전달하려 노력합니다.
              </p>
          </section>

          <Category
              name="Dev Experience"
              comment="총 1년 3개월"
              description="디스크립션입니다."
          >
              <ExperiencedProject
                  name="ZETE 메모서비스"
                  isPrivate={true}
                  linkDemo="https://zete.zeriong.com/?type=demo&modal=sign-in"
                  description="사용성을 극대화 하여 편리한 메모 기능과, AI(Chat GPT) 를 연동하여 검색 결과를 메모에 요약 반영 시킬 수 있는 서비스입니다."
                  devPart={<>Frontend/Backend<br/>Engineer</>}
                  devDateRange="2023.03 ~ 2023.09"
                  devPeriod="6개월"
              >
                  <ExperiencedProjectDetail
                      title="ReactQuery, Zustand 적용, 리팩토링 및 배포"
                      linkGithub="https://github.com/zeriong/zete-zustand-reactQuery"
                      devDateRange="2023.08 ~ 2023.09"
                      list={[
                          '기존에 사용하던 Redux와 다른 타입의 상태 관리에 대한 경험을 위해 상태관리 라이브러리를 ReactQuery, Zustand 조합으로 컨버팅',
                          '다소 아쉬웠던 일부 코드 리팩토링',
                          '서비스 환경에 대한 이해도를 높이기 위해 우분투 리눅스를 통한 서비스 환경구축, 오픈소스 SSL 인증서 적용',
                          'PM2를 통한 서비스 관리 및 무중단 서비스 이해'
                      ]}
                      usedStack="React Query, Zustand, Ubuntu Linux, PM2"
                  />
                  <ExperiencedProjectDetail
                      title="메모서비스 기획 및 기능 개발"
                      linkGithub="https://github.com/zeriong/zete"
                      devDateRange="2023.03 ~ 2023.08"
                      list={[
                          '기존 사용하던 메모 서비스를 벤치하여 발전시키고 AI를 접목시켜 서비스 기획',
                          'NestJS와 MariaDB를 기반으로 백엔드 설계 및 기능 개발',
                          'React를 기반으로 프론트엔드의 메모, 카테고리, 태그에 대한 CRUD 인터페이스 구현',
                          'Openai ChatGpt3.5 를 연동하여 채팅형식의 정보 검색과 요약 메모기능 개발',
                          <>Openapi Generator 의 templates 기능을 통해 axios 통신 타입 파일을 커스텀하여 생성<span className="text-gray-400 ml-0.5">(생산성 증가)</span></>
                      ]}
                      usedStack={
                          <>
                              TypeScript, Nestjs, TypeORM, JWT, Swagger, MariaDB,<br/>
                              React, Redux Toolkit, Openapi Generator, Tailwind CSS
                          </>
                      }
                  />
              </ExperiencedProject>

              <ExperiencedProject
                  name="유튜브 요약 서비스"
                  isPrivate={false}
                  linkDemo="https://side.zeriong.com/"
                  linkGithub="https://github.com/zeriong/side-project"
                  description="유튜브 영상의 내용을 AI를 활용해 텍스트로 요약해 주는 서비스를 개발하는 6인 규모의 사이드 프로젝트 팀에 참여하여 서비스 영역의 프론트엔드 개발을 담당하였고
                  PL의 동의하에 본인이 개발한 파트만 분리하여 게재하였습니다."
                  devPart="Frontend Engineer"
                  devDateRange="2023.09 ~ 2023.09"
                  devPeriod="1개월"
              >
                  <ExperiencedProjectDetail
                      list={[
                          'Figma로 작성된 디자인 시안에 따라 서비스 영역 UI 구현',
                          'Youtube api를 통하여 영상의 세부정보 연동',
                          'React Slick 라이브러리를 사용하여 컨텐츠 슬라이더 구현',
                          'Youtube ProgressBar 와 동기화된 Custom ProgressBar를 구현하고 챕터를 넘기면 해당 챕터의 시작 부에서 재생되며 ProgressBar를 이동하면 슬라이더는 해당하는 챕터로 이동하는 기능 구현'
                      ]}
                      etcList={[
                          {title: '함께 문제를 해결한 경험', content: '프로젝트 초기에 과한 개발열정으로 너무 많은 양의 작업을 맡아 일정을 소화하지 못하였을 때 적극적인 커뮤니케이션을 통해 실현가능 여부를 의논하고 작업을 분배하여 문제를 극복한 경험이 있습니다.'},
                          {title: '프로젝트에 기여한 경험', content: '디자인 시안에 저작권 문제를 야기할 만한 요소를 발견하여 검증된 자료를 찾아 공유하였으며, 팀원 모두가 경험해 보지 못한 유튜브 API의 사용법을 직접 검증하고 공유하여 프로젝트에 크게 기여한 경험이 있습니다.'},
                          {title: '프로젝트 후기', content: '건강한 커뮤니케이션은 강점을 빛내며 단점은 보완할 수 있는 강력한 무기이자, 더 나은 개발자로 성장하기 위해 꾸준히 향상시켜야 할 역량임을 깨달았습니다.'},
                          {title: 'Collaboration Tools', content: 'Google Meet, Google Chat, Google Docs, Notion, Figma, Zeplin'}
                      ]}
                      usedStack={<>
                          NextJS, React, Firebase, Redux Toolkit, Tailwind CSS
                      </>}
                  />
              </ExperiencedProject>

              <ExperiencedProject
                  name="백엔드 경험 프로젝트"
                  isPrivate={true}
                  description="NestJS를 사용하여 서버를 구성하여 CRUD 구현, Swagger를 통한 API명세, Frontend와 Backend에서의 Openapi Codegenerator 사용으로 코드 생성 자동화 등 서버의 개념을 이해하고자 진행한 프로젝트 리스트입니다."
                  devPart={<>Frontend/Backend<br/>Engineer</>}
                  devDateRange="2023.09 ~ 2023.09"
                  devPeriod="2개월"
              >
                  <ExperiencedProjectDetail
                      title="API 명세, 통신 함수와 객체 타입 생성 자동화"
                      linkGithub="https://github.com/zeriong/react-nestjs-swagger-codegen"
                      devDateRange="2023.01 ~ 2023.02"
                      list={[
                          'Swagger를 통해 Backend의 모든 API객체와 타입을 명세',
                          'Swagger에서 제공하는 웹 인터페이스를 특정 url을 통해 명세된 문서를 볼 수 있는 환경 구축',
                          'Backend에서는 Openapi Tools를 통해 모든 객체가 명세된 문서를 생성할 수 있도록 경로를 지정하여 생성하고 Frontend에서 명세된 문서 파일을 직접 참조할 수 있도록 설계',
                          'Frontend에서는 Openapi Codegenerator CLI를 통해 Backend에서 생성된 명세된 문서 파일을 기준으로 객체의 타입뿐만 아니라 통신 함수까지 자동 생성될 수 있는 환경을 구축하고 별도의 stcript를 추가하여 필요할 때 Codegenerator을 실행할 수 있도록 개발',
                      ]}
                      usedStack="Openapi Generator"
                  />
                  <ExperiencedProjectDetail
                      title="NestJS서버 구축, JWT의 로그인 유지"
                      linkGithub="https://github.com/zeriong/react-nestjs-jwt"
                      devDateRange="2022.12 ~ 2023.02"
                      list={[
                          'NestJS와 React를 사용하여 회원가입, 로그인 기능 구현',
                          'TypeORM과 MariaDB를 통한 데이터 CRUD 구현',
                          'JWT를 활용하여 권한 인증과 유지를 구현하였고, AccessToken 과 RefreshToken 를 활용하여 토큰 탈취에 대한 보안 위험에 대비하였습니다.',
                      ]}
                      usedStack={<>
                          TypeScript, NestJS, TypeORM, JWT, Swagger, MariaDB,<br/>
                          React, Redux Toolkit, Openapi Generator, Tailwind CSS
                      </>}
                  />
              </ExperiencedProject>

              <ExperiencedProject
                  name="웹페이지 구성 숙달 프로젝트"
                  isPrivate={true}
                  description="웹 퍼블리싱 역량을 숙달하기 위하여 웹페이지의 레이아웃, UI, Interface 등을 구성한 프로젝트입니다. 또한, 디자인 협업 툴을 경험하고자 Figma에 디자인 시안을 받아 plugin을 통해 Zeplin으로 시안을 옮겨 작업하였습니다."
                  devPart="Frontend Engineer"
                  devDateRange="2023.02 ~ 2023.03"
                  devPeriod="1개월"
              >
                  <ExperiencedProjectDetail
                      title="반응형 웹페이지와 그래프 구현"
                      linkGithub="https://github.com/zeriong/react-nestjs-jwt"
                      devDateRange="2022.12 ~ 2023.02"
                      list={[
                          'UX CRUSH에서 제공하는 Figma 무료 UI 템플릿을 시안으로 웹페이지를 구성',
                          'Figma의 시안을 plugin을 통하여 Zplin으로 옮겨 직관적인 인터페이스 환경에서 작업',
                          'Food Delivery 템플릿으로 구성한 웹페이지에서 반응형 웹페이지 구성 능력을 숙달',
                          'Crypto App 템플릿으로 구성한 웹페이지에서 SVG를 사용하여 그래프를 직접 구현',
                      ]}
                      usedStack={<>
                          TypeScript, React, Redux Toolkit, Tailwind CSS
                      </>}
                  />
              </ExperiencedProject>

          </Category>
          <Category
              name="Skills"
              description={
                  <>
                      프로젝트에 사용 경험이 있는 기술들입니다. <span className="border-b-2 border-blue-500">React</span>를 주력으로 서비스에
                      필요한 전반적인 과정을 경험하고 문제를 해결하며 이해하고 성장하는데 중점을 두었습니다.
                  </>
              }
          >
              <div className="flex flex-col gap-y-[28px] mt-[32px] max-md:mt-[24px]">
                  <div className="flex gap-x-[52px] gap-y-[20px] max-md:flex-col">
                      <div className="flex flex-col w-[130px]">
                          <p className="text-gray-500 text-xl font-semibold leading-none">Frontend</p>
                      </div>
                      <div className="">
                          HTML/CSS, JavaScript, TypeScript, React, Redux Toolkit, React Query, Next.js,
                          Tailwindcss
                      </div>
                  </div>
                  <div className="flex gap-x-[52px] gap-y-[20px] max-md:flex-col">
                      <div className="flex flex-col w-[130px]">
                          <p className="text-gray-500 text-xl font-semibold leading-none">Backend</p>
                      </div>
                      <div className="flex flex-col gap-y-[44px]">
                          Nodejs, Nestjs, Typeorm, JWT, Swagger, Mariadb
                      </div>
                  </div>
                  <div className="flex gap-x-[52px] gap-y-[20px] max-md:flex-col">
                      <div className="flex flex-col w-[130px]">
                          <p className="text-gray-500 text-xl font-semibold leading-none">Etc</p>
                      </div>
                      <div className="flex flex-col gap-y-[44px]">
                          Firebase, Openapi Generator, Linux Ubuntu, PM2,<br/>
                          Git/Github, WebStorm, DataGrip
                      </div>
                  </div>
              </div>
          </Category>
      </Layout>
  )
}
