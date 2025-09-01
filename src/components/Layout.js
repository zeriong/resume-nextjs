import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { useWindowResize } from "@/hooks/useWindowResize";
import CircleAnimate from "@/components/CircleAnimate";
import { twMerge } from "tailwind-merge";

/**
 * 페이지를 감싸는 레이아웃 컴포넌트
 * SEO 데이터 설정
 *
 * @param title - 페이지 타이틀
 * @param description - 페이지 설명
 * @param {React.ReactNode} children - 하위 노드
 * */
export const Layout = ({
  title,
  description = "안녕하세요, 전제룡입니다.",
  children,
}) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/cover.jpg" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@argentinux" />

        <title>{title}</title>
      </Head>
      <div className="relative w-full h-full">
        {/* Circle Animate Component */}
        {/*<CircleAnimate/>*/}

        <div className="absolute flex justify-center w-full h-full px-3 overflow-y-scroll z-10">
          <div className="relative w-full max-w-[1080px] h-full">
            <main
              className={twMerge(
                "flex flex-col bg-white",
                "px-[80px] py-[64px] gap-y-[68px]",
                "max-sm:p-[24px_16px] max-lg:p-[32px_28px] max-lg:gap-y-[48px]",
              )}
            >
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};
