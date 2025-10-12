import { useEffect, useRef } from "react";
import { useNavStore } from "@/stores/useNavStore";

/**
 * @param {Object} props
 * @param {React.RefObject<any>} [props.scrollDivListRef] - 스크롤 디비전 리스트 참조
 * @param {React.RefObject<any>} [props.measureDivRef] - 측정 디비전 리스트 참조
 */
export default function useActiveNavEffect({ measureDivRef, scrollDivListRef }) {
  const { setActiveDataName } = useNavStore();

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

      // 끝에 거의 닿았을 때 마지막 섹션 data-name 세팅
      const { scrollTop, scrollHeight, clientHeight } = contentLayout;
      // ? 디바이스 별 오차를 고려한 - 2
      if (scrollTop + clientHeight >= scrollHeight - 2) {
        lastActiveRef.current = sections.pop();
        setActiveDataName(lastActiveRef.current.node.dataset.name);
        return;
      }

      // sticky와 닿는 섹션 찾기
      const activeSection = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top - 1 <= stickyTop && rect.bottom > stickyTop;
      });

      if (activeSection && lastActiveRef.current !== activeSection) {
        lastActiveRef.current = activeSection;
        // data-name 세팅팅
        setActiveDataName(activeSection.dataset.name);
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
