import Link from "next/link";
import { ExperiencesCompanyFrame } from "@/app/_components/common/content/new-experiences/ExperiencesCompanyFrame";
import { ExperiencesFrame } from "@/app/_components/common/content/new-experiences/ExperiencesFrame";
import { ExperiencesContentDescription } from "@/app/_components/common/content/new-experiences/experiences-content/ExperiencesContentDescription";

export const QubitonExperience = () => {
  return (
    <ExperiencesCompanyFrame
      companyName={
        <span>
          큐비트온<span className="text-gray-600 text-[24px]">(주)</span>
        </span>
      }
      workPosition="Frontend Engineer"
      workDateRange="2024.02 ~ current"
    >
      <ExperiencesFrame
        title={
          <Link
            href="https://qubiton.com"
            target="_blank"
            className="transition-all duration-150 hover:text-primary hover:underline"
          >
            <span>
              Scout - 창업 교육 플랫폼
              <br className="hidden max-lg:block" /> ( SI / SM ) 🔗
            </span>
          </Link>
        }
        description="창업 관련 LMS 플랫폼으로 현재 7개 대학교에서 시범 운영 중이며 BMC, 사업계획서, AI 시장 검증 챗봇, 멘토링, 지역 문제 커뮤니티, 대학 컨소시엄 커뮤니티 서비스를 제공하고 있습니다."
      >
        <ExperiencesContentDescription title="주요 업무">
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>TypeScript</li>
          </ul>
        </ExperiencesContentDescription>

        <ExperiencesContentDescription title="주요 업무">
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>TypeScript</li>
          </ul>
        </ExperiencesContentDescription>

        <ExperiencesContentDescription title="주요 업무">
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>TypeScript</li>
          </ul>
        </ExperiencesContentDescription>
      </ExperiencesFrame>
    </ExperiencesCompanyFrame>
  );
};
