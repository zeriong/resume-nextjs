"use client";

import Image from "next/image";
import GitSymbolSvg from "@/assets/svg/git-symbol.svg";

/**
 * Experienced 카테고리 내에 프로젝트 정보 컴포넌트
 *
 * @param {Object} props - 프로젝트 정보 컴포넌트 속성
 * @param {string | React.ReactNode} [props.title] - 프로젝트 명칭
 * @param {string} [props.pageLink] - 사이트 링크
 * @param {string} [props.linkGithub] - 깃허브 링크
 * @param {string | React.ReactNode} [props.description] - 프로젝트 설명
 * @param {string | import("next/image").StaticImageData} [props.preview] - 프로젝트 프리뷰 이미지
 * @param {string | React.ReactNode} [props.devPart] - 프로젝트 담당 파트
 * @param {string | React.ReactNode} [props.devDateRange] - 프로젝트 진행 기간 범위 (예: 2020.09 ~ 2020.09)
 * @param {any} [props.devPeriod] - 프로젝트 진행 시간 (예: 1개월)
 * @param {React.ReactNode} [props.children] - 하위 노드
 * */
export const ExperiencedProject = ({
  title,
  pageLink,
  linkGithub,
  description,
  preview,
  devPart,
  devDateRange,
  devPeriod,
  children,
}) => {
  return (
    <article>
      <div className="flex flex-wrap items-center w-full border-b border-gray-300/90 gap-x-2 gap-y-1 pb-1.5">
        <p className="text-2xl text-gray-700 font-semibold">{title}</p>
        {pageLink && (
          <a
            href={pageLink}
            target="_blank"
            className="flex items-center text-sm text-white bg-blue-500 rounded-full px-2.5 py-[1px]"
          >
            페이지 방문
            <i className="arrow-right !border-white ml-0.5"></i>
          </a>
        )}
        {linkGithub && (
          <a
            href={linkGithub}
            target="_blank"
            className="flex items-center min-w-[40px] h-[22px] text-sm text-white bg-gray-600/90 rounded-full pl-1.5 pr-2"
          >
            <GitSymbolSvg className="w-[16px]" />
            <i className="arrow-right !border-white ml-0.5"></i>
          </a>
        )}
      </div>
      <p className="w-full text-base text-gray-600 py-3">{description}</p>
      <div className="flex gap-x-[52px] gap-y-[28px] mt-[32px] max-md:flex-col max-md:mt-[8px]">
        <div className="flex flex-col min-w-[150px] gap-y-1 pt-1">
          {preview && (
            <div className="relative w-[150px] h-[150px] ring-1 ring-gray-300 rounded-md overflow-hidden mb-2">
              <Image src={preview} alt="preview"></Image>
            </div>
          )}
          {devPart && <p className="text-gray-600">{devPart}</p>}
          <p className="text-gray-900 font-medium">{devDateRange}</p>
          <div className="flex justify-center w-[60px] text-[13px] bg-gray-200 rounded py-[1px]">
            {devPeriod}
          </div>
        </div>
        <div className="flex flex-col gap-y-[44px]">{children}</div>
      </div>
    </article>
  );
};
