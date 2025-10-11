"use client";

import { forwardRef } from "react";

/**
 * @typedef {Object} CategoryProps
 * @property {string | React.ReactNode} [name] - 카테고리 명칭
 * @property {string | React.ReactNode} [comment] - 카테고리 명칭 옆 주석 내용
 * @property {string | React.ReactNode} [description] - 카테고리 설명
 * @property {string} [id] - 카테고리 설명
 * @property {React.ReactNode} [children] - 하위 노드
 */

/**
 * 이력서 내용 카테고리 컴포넌트
 *
 * @type {React.ForwardRefExoticComponent<CategoryProps & React.RefAttributes<HTMLElement>>}
 * */
export const Category = forwardRef(
  /**
   * @param {CategoryProps} props - 카테고리 컴포넌트 속성
   * @param {React.Ref<any>} ref - section 요소에 전달되는 ref
   */
  ({ name, comment, description, id, children }, ref) => {
    return (
      <section ref={ref} id={id} className={"mt-10 max-sm:mt-0"}>
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
  },
);

Category.displayName = "Category";
