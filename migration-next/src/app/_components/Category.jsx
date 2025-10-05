"use client";

/**
 * 이력서 내용 카테고리 컴포넌트
 *
 * @param name - 카테고리 명칭
 * @param comment - 카테고리 명칭 옆 주석 내용
 * @param description - 카테고리 설명
 * @param {React.ReactNode} children - 하위 노드
 * */
export const Category = ({ name, comment, description, children }) => {
  return (
    <section className={"mt-10 max-sm:mt-0"}>
      <div className="relative flex items-center">
        <p className="text-[36px] text-primary font-semibold leading-none max-sm:text-[28px]">
          {name}
        </p>
        {comment && (
          <p className="text-[16px] text-gray-800 ml-3 mt-1 whitespace-nowrap max-sm:ml-1.5 max-sm:text-[14px] max-sm:tracking-[-0.4px]">
            {comment}
          </p>
        )}
      </div>
      {description && (
        <p className="text-[18px] text-gray-700 mt-[16px] max-sm:text-[16px]">
          {description}
        </p>
      )}
      <div className="">{children}</div>
    </section>
  );
};
