import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useUIStore = create(
  devtools((setState) => ({
    isDetailMode: false,

    setActiveDataName: (dataName) => {
      setState(() => {
        return { activeDataName: dataName };
      });
    },
  })),
);
