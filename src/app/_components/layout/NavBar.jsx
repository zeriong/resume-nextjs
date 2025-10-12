import { twMerge } from "tailwind-merge";
import { useNavStore } from "@/stores/useNavStore";
import { useUIStore } from "@/stores/useUIStore";

/**
 * @param {{ scrollDivListRef: React.RefObject }} props - 스크롤 디비전 리스트 참조
 */
export const NavBar = ({ scrollDivListRef }) => {
  const { activeId } = useNavStore();
  const { isContentRender } = useUIStore();

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
    <nav className="max-w-[300px] w-full flex flex-col max-sm:hidden">
      {/* nav list */}
      <div
        className={twMerge(
          "flex flex-col bg-white grow",
          "p-[64px]",
          "max-lg:p-[32px_28px]",
        )}
      >
        {isContentRender &&
          Object.values(scrollDivListRef.current).map((item) => {
            return (
              <button
                key={item.node.id}
                type="button"
                className={twMerge(
                  // ! 기본 스타일
                  "transition-all duration-300 cursor-pointer text-start",

                  // ! main인 경우
                  scrollDivListRef.current[item.node.id].type === "main"
                    ? "font-semibold text-[28px] pb-[12px]"
                    : // ! sub인 경우
                      scrollDivListRef.current[item.node.id].type === "sub" &&
                        "font-medium",

                  // ! active flag
                  activeId === item.node.id ? "text-primary" : "text-gray-400",
                )}
                onClick={() => handleScroll(item)}
              >
                {item.node.id}
              </button>
            );
          })}
      </div>

      {/* contact list */}
      <div>
        <button type="button" className="">
          Email
        </button>
        <button type="button" className="">
          Github
        </button>
        <button type="button" className="">
          Blog
        </button>
      </div>
    </nav>
  );
};
