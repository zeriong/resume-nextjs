import { Category } from "@/app/_components/common/Category";
import { LinkInline } from "@/app/_components/common/LinkInline";

const Activities = () => {
  return (
    <Category name="Activities">
      <ul className="flex flex-col mt-[32px] max-md:mt-[24px]">
        <li>
          Goorm에서 진행하는{" "}
          <LinkInline href="https://zeriong.tistory.com/86">
            해커톤( 구름톤 ) 15기 수료
          </LinkInline>
        </li>

        <li>
          <LinkInline href="https://www.spacecledu.co.kr/">
            Space CL - Edu 국비지원사업
          </LinkInline>{" "}
          - 개발자 일본 취업반 학원생 멘토링
        </li>

        <li>
          유튜브 음악을 신청하면 순차적으로 재생하는 토이프로젝트{" "}
          <LinkInline href="https://github.com/zeriong/react-youtube-queue">
            react-youtube-queue
          </LinkInline>
          를 회사에 제공
        </li>
      </ul>
    </Category>
  );
};

export default Activities;
