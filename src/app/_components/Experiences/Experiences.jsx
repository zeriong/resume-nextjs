"use client";

import { useState } from "react";
import { Category } from "@/app/_components/common/content/Category";
import { ExperiencedProject } from "@/app/_components/common/content/ExperiencedProject";
import { ExperiencedProjectDetail } from "@/app/_components/common/content/ExperiencedProjectDetail";
import preview01 from "@/assets/images/preview/preview01.jpg";
import preview02 from "@/assets/images/preview/preview02.jpg";
import preview03 from "@/assets/images/preview/preview03.jpg";
import preview04 from "@/assets/images/preview/preview04.jpg";
import preview05 from "@/assets/images/preview/preview05.jpg";
import preview06 from "@/assets/images/preview/preview06.jpg";
import GitSymbolSvg from "@/assets/svg/git-symbol.svg";
import { QubitonExperience } from "./company/QubitonExperience";

/**
 * @param {{ scrollDivListRef: React.RefObject }} props - 스크롤 디비전 리스트 참조
 */
export const Experiences = ({ scrollDivListRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Category name="Experiences">
      <QubitonExperience />
    </Category>
  );
};
