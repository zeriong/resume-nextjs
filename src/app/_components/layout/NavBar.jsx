import { twMerge } from "tailwind-merge";
import { toast } from "@/app/_components/common/Toasts";

/**
 * @param {{ scrollDivListRef: React.RefObject }} props - 스크롤 디비전 리스트 참조
 */
export const NavBar = ({ scrollDivListRef }) => {
  return (
    <nav className="max-w-[300px] w-full flex flex-col">
      {/* nav list */}
      <div
        className={twMerge(
          "flex flex-col bg-white grow",
          "px-[80px] py-[64px] gap-y-[68px]",
          "max-sm:hidden max-lg:p-[32px_28px] max-lg:gap-y-[48px]",
        )}
      >
        <button
          type="button"
          className=""
          onClick={() =>
            scrollDivListRef.current.intro.scrollIntoView({ behavior: "smooth" })
          }
        >
          Intro
        </button>
        <button
          type="button"
          className=""
          onClick={() =>
            scrollDivListRef.current.projects.scrollIntoView({ behavior: "smooth" })
          }
        >
          Projects
        </button>
        <button type="button" className="">
          Skills
        </button>
      </div>

      <div
        className={"bg-black p-10 text-white text-2xl"}
        onClick={() => {
          toast.error("호히히 나와라 호히히히");
        }}
      >
        누르면 토스트
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
