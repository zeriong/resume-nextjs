import { useEffect, useRef } from "react";
import { useNavStore } from "@/stores/useNavStore";

/**
 * @param {Object} props
 * @param {React.RefObject<any>} [props.scrollDivListRef] - 스크롤 디비전 리스트 참조
 * @param {React.RefObject<any>} [props.measureDivRef] - 측정 디비전 리스트 참조
 */
export default function useActiveNavEffect({ measureDivRef, scrollDivListRef }) {
  const { setActiveId } = useNavStore();

  const lastActiveRef = useRef(null);

  useEffect(() => {
    // ! 반드시 스크롤이 적용된 주체 element에 이벤트 리스너 "scroll"을 걸어야 작동하기 때문에 필요
    const contentLayout = document.getElementById("content_layout");
    if (!contentLayout) return;

    const handleScroll = () => {
      if (!measureDivRef.current) return;

      const stickyTop = measureDivRef.current.getBoundingClientRect().top;

      const sections = Array.from(
        Object.values(scrollDivListRef.current).map((item) => item.node),
      );

      // 끝에 거의 닿았을 때 마지막 섹션 activeId 설정
      const { scrollTop, scrollHeight, clientHeight } = contentLayout;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        lastActiveRef.current = sections.pop();
        setActiveId(lastActiveRef.current.id);
        return;
      }

      // sticky와 닿는 섹션 찾기
      const activeSection = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top - 1 <= stickyTop && rect.bottom > stickyTop;
      });

      if (activeSection && lastActiveRef.current !== activeSection) {
        lastActiveRef.current = activeSection;
        console.log("sticky와 부딪힌 섹션 ID:", activeSection.id);
        setActiveId(activeSection.id);
      }
    };

    // ! 반드시 스크롤이 적용된 주체 element에 이벤트 리스너 "scroll"을 걸어야 작동
    contentLayout.addEventListener("scroll", handleScroll, { passive: true });

    // 초기 체크
    handleScroll();

    return () => {
      contentLayout.removeEventListener("scroll", handleScroll);
    };
  }, []);
}
