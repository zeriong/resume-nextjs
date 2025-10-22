"use client";

import { twMerge } from "tailwind-merge";
import { useNavStore } from "@/stores/useNavStore";

/**
 * @param {{ scrollDivListRef: React.RefObject }} props - 스크롤 디비전 리스트 참조
 */
export const NavBar = ({ scrollDivListRef }) => {
  const { activeDataName } = useNavStore();

  // ? 스크롤 이동 함수
  const handleScroll = (item) => {
    if (item.no === 1) {
      const contentLayout = document.getElementById("content_layout");
      if (!contentLayout) return;

      contentLayout.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    item.node.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="max-w-[340px] w-full flex flex-col max-sm:hidden">
      {/* nav list */}
      <div
        className={twMerge(
          "flex flex-col bg-white grow overflow-y-auto",
          "p-[64px]",
          "max-lg:p-[32px_28px]",
        )}
      >
        {Object.values(scrollDivListRef.current).map((item, idx) => {
          const isMain = scrollDivListRef.current[item.node.id].type === "main";
          const isActive = activeDataName === item.node.id;
          return (
            <button
              key={item.node.id}
              type="button"
              className={twMerge(
                // ! 기본 스타일
                "transition-all duration-300 cursor-pointer text-start",

                // ! main / sub 스타일 분기
                isMain
                  ? "font-semibold text-[28px] pb-[2px]"
                  : "text-[20px] font-medium pl-[8px]",

                // ! active / deActive 스타일 분기
                isActive ? "text-primary" : "text-gray-400",
              )}
              onClick={() => handleScroll(item)}
            >
              {`${!isMain ? "• " : ""}${item.node.dataset.name}`}
            </button>
          );
        })}
      </div>

      {/* contact list */}
      <div className="flex flex-col px-[44px] pb-[44px]">
        <div className="flex flex-col gap-y-[2px] items-start text-primary">
          <div className="font-semibold flex flex-col items-start px-[20px] py-[10px]">
            <p>Email</p>
            <button
              type="button"
              className="text-gray-500 cursor-pointer text-[14px]"
              onClick={() => {
                window.open("mailto:jaeryong95@gmail.com", "_blank");
              }}
            >
              jaeryong95@gmail.com
            </button>
          </div>

          <div className="font-semibold flex flex-col items-start px-[20px] py-[10px]">
            <p>Github</p>
            <a
              href="https://github.com/zeriong"
              target="_blank"
              className="text-gray-500 text-[14px]"
              rel="noopener"
            >
              https://github.com/zeriong
            </a>
          </div>

          <div className="font-semibold flex flex-col items-start px-[20px] py-[10px]">
            <p>Blog</p>
            <a
              href="https://zeriong.tistory.com"
              target="_blank"
              className="text-gray-500 text-[14px]"
              rel="noopener"
            >
              https://zeriong.tistory.com
            </a>
          </div>
        </div>

        <div className="text-[12px] text-gray-400/60 font-semibold p-[20px] pb-0">
          <div>last updated: 2023.10.05</div>
        </div>
      </div>
    </nav>
  );
};
