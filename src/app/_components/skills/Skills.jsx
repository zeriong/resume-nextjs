import { Category } from "@/app/_components/common/Category";

export const Skills = () => {
  // ? 스킬 서브 아이템 컴포넌트
  function SkillSubItem({ children }) {
    return (
      <>
        <br />
        <span className="text-gray-500 text-[14px]">{children}</span>
      </>
    );
  }

  function Ul_SkillListWrapper({ children, skillName }) {
    return (
      <div>
        <h1 className="text-[24px] text-gray-700 font-semibold">{skillName}</h1>
        <ul className="mt-[8px]">{children}</ul>
      </div>
    );
  }

  return (
    <Category name="Skills">
      <div className="flex flex-col gap-y-[28px] mt-[32px] max-md:mt-[24px]">
        <Ul_SkillListWrapper skillName="React.js">
          <li>
            통신 데이터를 캐싱하고 DB조회 횟수를 감소시켜 서버비용, UX 성능 최적화에
            대해 고민함{" "}
            <SkillSubItem>
              ( React-Query, useRef, Zustand 등을 프로젝트 상황에 따라 유리한
              방식을고민 후 활용 )
            </SkillSubItem>
          </li>
          <li>
            Virtual DOM, Real DOM의 이해를 바탕으로 문제의 핵심을 빠르게 파악하고
            해결함
          </li>
          <li>
            렌더링이 발생하는 effect 순서를 고려하여 유지보수와 버그 추론에 유리한
            구조로 개발함
          </li>
          <li>
            데이터 응답시간을 고려하여 Skeleton-ui, Loading spinner 등을 활용하여
            UX향상 중심의 개발을 지향함
          </li>
          <li>
            Lazy import( Code-Splitting )를 활용하여 초기 렌더링 시간을 최적화함
          </li>
          <li>
            Routing 시 Fallback이 매번 발생하는 환경에서 setTransition을 활용하여 화면
            깜빡임을 제거함
          </li>
          <li>
            Typescript를 미활용 시 JSDoc을 적극 활용하여 DX향상과 유지보수에 유리하게
            코드를 작성함
          </li>
          <li>
            build시 파일 압축(gzip), 고화질 이미지 webp활용, woff2활용으로 최적화된
            배포를 환경을 지향함
          </li>
          <li>메모리누수, cleanup 등이 필요한 부분을 찾아내어 공유하고 리팩터링함</li>
        </Ul_SkillListWrapper>

        <Ul_SkillListWrapper skillName="Next.js">
          <li>
            SEO( 검색엔진 최적화 )와 Web Accessibility( 웹접근성 )을 고려하여
            Frontend를 개발함
          </li>
          <li>
            Server-Side에서 HttpOnly쿠키를 핸들링하고 server-action을 통해 보안이
            중요한 통신은 감추어 요청함
          </li>
          <li>
            미들웨어를 활용한 api 인터셉터, 언어설정 쿠키 핸들링 등을 자연스러운
            방향으로 설계함
          </li>
          <li>
            Prisma ORM과 연계하여 Serverless Architecture기반 프로젝트를 구현할 수
            있음
          </li>
          <li>
            Server-Side / Client 분기점에 대한 이해도를 기반으로 빠른 디버깅을 할 수
            있음
          </li>
        </Ul_SkillListWrapper>

        <Ul_SkillListWrapper skillName="Nest.js">
          <li>
            TypeORM과 연계하여 쿼리문을 처리하고 테이블이 없는 경우 자동생성하는
            구조로 서버 구현
          </li>
          <li>
            Nest.js의 관심사분리 흐름과 Controller, Service, Repository 계층구조에
            대한 이해기반으로 개발함
          </li>
        </Ul_SkillListWrapper>

        <Ul_SkillListWrapper skillName="Python">
          <li>
            non-blocking 통신 라이브러리를 기반으로 요청취소가 가능하고 동시
            처리효율이 좋은 구조로 개발함
          </li>
          <li>
            Task Pool을 직접 구성하여 응답을 받기 전 취소할 수 있는 기능을 고려하며
            프로젝트를 설계함
          </li>
        </Ul_SkillListWrapper>

        <Ul_SkillListWrapper skillName="DevOps & Infra">
          <li>
            개발자간 소통비용을 절감하고 생산성을 높이기 위해 openapi-generator-cli를
            활용하고 스크립트 구성함
          </li>
          <li>
            Swagger 기반 API를 자동생성하기 위해 OpenAPI에서 eject한 mustache파일을
            직접 커스텀하여 활용함
          </li>
          <li>
            K6를 활용한 통신 테스트로 요청/응답 시 발생할 수 있는 이슈에 대해
            공론화하는 등 취약점 보완을 지향함
          </li>
          <li>
            NginX에서 gzip 서빙을 허용하고 필요 header만을 허용하여 최적화된
            배포환경을 구성해본 경험이 있음
          </li>
          <li>
            NginX에서 가상 포트 요청을 허용하고 가상 포트와 연결된 실사용 포트로
            전달하는 리버스 프록시 구축
          </li>
          <li>
            필요 환경에 따른 env파일을 생성하고 package.json - scripts에서 환경에 따른
            명령어를 분기하여 구성함
          </li>
          <li>배포 타겟이 Node환경일 때 PM2를 활용하여 무중단 배포를 구현함</li>
          <li>
            Node환경이 아닌 경우 간단한 Fastify서버위에 실행시켜 무중단배포를 실현할
            수 있음
          </li>
          <li>
            Jenkins - pipeline을 직접 작성하여 배포 환경에서 헬스 체크 후 start /
            reload로 분기하여 완전 자동화함
          </li>
          <li>
            gitea + jenkins에서 Web Hook을 통해 연결하고 Trigger를 추가하여 CI/CD를
            구현함
          </li>
        </Ul_SkillListWrapper>
      </div>
    </Category>
  );
};
