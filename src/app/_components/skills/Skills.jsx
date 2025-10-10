import { Category } from "@/app/_components/common/Category";

/**
 * @param {{ scrollDivListRef: React.RefObject }} props - 스크롤 디비전 리스트 참조
 */
export const Skills = ({ scrollDivListRef }) => {
  return (
    <Category
      name="Skills"
      description={
        <>
          프로젝트에 사용 경험이 있는 기술들입니다.{" "}
          <span className="border-b-2 border-blue-500">React</span>를 주력으로
          서비스에 필요한 전반적인 과정을 경험하고 문제를 해결하며 이해하고 성장하는
          데 중점을 두었습니다. 백엔드에서는{" "}
          <span className="border-b-2 border-blue-500">NestJS</span> 사용에
          익숙합니다.
        </>
      }
    >
      <div className="flex flex-col gap-y-[28px] mt-[32px] max-md:mt-[24px]">
        <div className="flex gap-x-[52px] gap-y-[20px] max-md:flex-col">
          <div className="flex flex-col w-[130px]">
            <p className="text-gray-500 text-xl font-semibold leading-none">
              Frontend
            </p>
          </div>
          <div className="">
            HTML/CSS, JavaScript, TypeScript, React, Redux Toolkit, React Query,
            NextJS, Tailwindcss
          </div>
        </div>
        <div className="flex gap-x-[52px] gap-y-[20px] max-md:flex-col">
          <div className="flex flex-col w-[130px]">
            <p className="text-gray-500 text-xl font-semibold leading-none">
              Backend
            </p>
          </div>
          <div className="flex flex-col gap-y-[44px]">
            NodeJS, NestJS, Typeorm, JWT, Swagger, Mariadb
          </div>
        </div>
        <div className="flex gap-x-[52px] gap-y-[20px] max-md:flex-col">
          <div className="flex flex-col w-[130px]">
            <p className="text-gray-500 text-xl font-semibold leading-none">Etc</p>
          </div>
          <div className="flex flex-col gap-y-[44px]">
            Firebase, Openapi Generator, Linux Ubuntu, PM2,
            <br />
            Git/Github, WebStorm, DataGrip
          </div>
        </div>
      </div>
    </Category>
  );
};
