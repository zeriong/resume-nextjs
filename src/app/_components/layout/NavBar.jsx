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
          "px-[80px] py-[64px] gap-y-[68px]",
          "max-lg:p-[32px_28px] max-lg:gap-y-[48px]",
        )}
      >
        {isContentRender &&
          Object.values(scrollDivListRef.current).map((item) => {
            return (
              <button
                key={item.node.id}
                type="button"
                className="cursor-pointer"
                onClick={() => handleScroll(item)}
              >
                {item.node.id}
              </button>
            );
          })}

        {activeId}
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
