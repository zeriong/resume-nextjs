import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useNavStore = create(
  devtools((setState) => ({
    activeId: "Intro",

    setActiveId: (id) => {
      setState(() => {
        return { activeId: id };
      });
    },
  })),
);
