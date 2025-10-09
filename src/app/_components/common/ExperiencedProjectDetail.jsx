"use client";

import GitSymbolSvg from "@/assets/svg/git-symbol.svg";

/**
 * @typedef {Object} addField
 * @property title - 추가 항목의 제목
 * @property content - 추가 항목의 내용
 */

/**
 * Experienced 카테고리 내에 프로젝트의 세부정보 그룹 컴포넌트
 *
 * @param {Object} props - 프로젝트 세부정보 컴포넌트 속성
 * @param {string | React.ReactNode} [props.title] - 부제
 * @param {string} [props.linkGithub] - 깃허브 링크 URL
 * @param {string} [props.devDateRange] - 진행 기간 (2023.09 ~ 2023.10)
 * @param {array} [props.devList] - 불릿 포인트가 노출되는 개발 목록
 * @param {addField[]} [props.addFields] - 추가적인 항목 리스트
 * */
export const ExperiencedProjectDetail = ({
  title,
  linkGithub,
  devDateRange,
  devList,
  addFields,
}) => {
  return (
    <div className="flex flex-col gap-y-4">
      {title && (
        <div>
          <div className="flex items-center gap-x-2">
            <p className="text-2xl text-gray-700 font-semibold max-sm:text-xl">
              {title}
            </p>
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
          <p className="text-gray-600">{devDateRange}</p>
        </div>
      )}
      {devList && devList.length > 0 && (
        <ul className="bullet-list">
          {devList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}

      {addFields &&
        addFields.length > 0 &&
        addFields.map((item, idx) => (
          <div key={idx}>
            <p className="text-gray-700 text-[18px] font-semibold">{item.title}</p>
            <p className="text-gray-600 mt-1">{item.content}</p>
          </div>
        ))}
    </div>
  );
};
