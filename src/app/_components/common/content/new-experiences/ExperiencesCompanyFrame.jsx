/**
 * @typedef {Object} ExperiencesCompanyFrameProps
 * @property {string} companyName - 회사 이름
 * @property {string} workPosition - 직급
 * @property {string} workDateRange - 근무 기간
 */

/**
 * 회사 정보 프레임 컴포넌트
 *
 * @param {Object} props - 회사 정보 프레임 컴포넌트 속성
 * @param {any} [props.companyName] - 회사 이름
 * @param {any} [props.workPosition] - 직급
 * @param {any} [props.workDateRange] - 근무 기간
 * @param {React.ReactNode} [props.children] - 하위 노드
 */
export const ExperiencesCompanyFrame = ({
  companyName,
  workPosition,
  workDateRange,
  children,
}) => {
  return (
    <div className="flex flex-col mt-[44px] gap-y-[44px]">
      {/* 회사 정보 */}
      <div>
        <h1 className="text-[30px] text-gray-700 font-semibold">{companyName}</h1>
        <p className="text-gray-600 font-medium text-[20px]">{workPosition}</p>
        <p className="text-gray-600">{workDateRange}</p>
      </div>

      {/* 하위 노드 */}
      {children}
    </div>
  );
};
