import { twMerge } from "tailwind-merge";

/**
 * 페이지를 감싸는 레이아웃 컴포넌트
 *
 * @param {{ children: React.ReactNode }} props - 하위 노드
 */
export const ContentLayout = ({ children }) => {
  return (
    <div className="relative w-full h-full">
      <div
        id="content_layout"
        className="absolute left-0 flex justify-center w-full h-full overflow-y-scroll z-10"
      >
        <div className="w-full h-full ">
          {/* Main Content */}
          <main
            className={twMerge(
              "flex flex-col bg-white max-w-[900px] w-full",
              "px-[80px] py-[64px]",
              "max-sm:p-[24px_16px] max-lg:p-[32px_28px]",
            )}
          >
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};
