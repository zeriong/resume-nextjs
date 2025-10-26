"use client";

/**
 * Experienced 카테고리 내에 프로젝트 정보 컴포넌트
 *
 * @param {Object} props - 프로젝트 정보 컴포넌트 속성
 * @param {string | React.ReactNode} [props.title] - 프로젝트 명칭
 * @param {string} [props.pageLink] - 사이트 링크
 * @param {string} [props.linkGithub] - 깃허브 링크
 * @param {string | React.ReactNode} [props.description] - 프로젝트 설명
 * @param {React.ReactNode} [props.children] - 하위 노드
 * */

export const ExperiencesFrame = ({ title, description, children }) => {
  return (
    <article>
      <div className="flex flex-wrap items-center w-full border-b border-gray-300/90 gap-x-2 gap-y-1 pb-1.5">
        <p className="text-2xl text-gray-700 font-semibold">{title}</p>
      </div>
      <p className="w-full text-base text-gray-600 py-3">{description}</p>
      <div className="flex gap-x-[52px] gap-y-[28px] mt-[32px] max-md:flex-col max-md:mt-[8px]">
        <div className="flex flex-col gap-y-[44px]">{children}</div>
      </div>
    </article>
  );
};
