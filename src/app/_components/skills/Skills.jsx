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
      </div>
    </Category>
  );
};
