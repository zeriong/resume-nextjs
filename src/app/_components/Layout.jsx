import { twMerge } from "tailwind-merge";

/**
 * 페이지를 감싸는 레이아웃 컴포넌트
 *
 * @param {React.ReactNode} children - 하위 노드
 * */
export const Layout = ({ children }) => {
  return (
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
  );
};
