import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useUIStore = create(
  devtools((setState) => ({
    // ? 컨텐츠 렌더링 여부 state
    isContentRender: false,

    // ? 컨텐츠 렌더링 여부 action
    setIsContentRender: (isContentRender) => setState({ isContentRender }),
  })),
);
