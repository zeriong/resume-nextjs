import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useNavStore = create(
  devtools((setState) => ({
    activeDataName: "Intro",

    setActiveDataName: (dataName) => {
      setState(() => {
        return { activeDataName: dataName };
      });
    },
  })),
);
