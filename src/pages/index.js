import {Layout} from '@/components/Layout';
import Image from 'next/image'
import profilePng from '../assets/images/profile.jpg';
import {Category} from '@/components/Category';

export default function Home() {
  return (
      <Layout title="타이틀">

          {/* intro title */}
          <section>
              <p className="text-[50px] font-bold leading-[1.4] max-lg:text-[32px]">
                  안녕하세요,<br/>
                  웹 개발자 꿈나무 전제룡 입니다.
              </p>
          </section>

          {/* intro contact */}
          <section className="flex gap-x-[48px] max-sm:flex-col">
              <div className="relative">
                  <div
                      className="relative flex items-center justify-center w-[180px] h-[180px] rounded-full ring-1 ring-gray-300/80 bg-gradient-to-r from-[#e4eaee] to-[#dee1e6] overflow-hidden">
                      <Image src={profilePng} className="absolute w-auto h-full" alt=""/>
                  </div>
              </div>
              <div className="text-base text-gray-500 leading-[1.4] py-2 max-sm:mt-[20px]">
                  <div className="flex flex-col gap-y-1.5">
                      <p className="font-bold text-xl text-blue-500">Contact.</p>
                      <div>
                          Email. <a href="mailto:jaeryong95@gmail.com" target="_blank" className="ml-2 text-gray-700 font-medium">jaeryong95@gmail.com</a>
                      </div>
                  </div>
                  <div className="flex flex-col gap-y-1.5 mt-6">
                      <p className="font-bold text-xl text-blue-500">Channel.</p>
                      <div>
                          Blog. <a href="https://zeriong.tistory.com/" target="_blank" className="ml-2 text-gray-700 font-medium">https://zeriong.tistory.com/</a>
                      </div>
                      <div>
                          Github. <a href="https://github.com/zeriong/" target="_blank" className="ml-2 text-gray-700 font-medium">https://github.com/zeriong/</a>
                      </div>
                  </div>
              </div>
          </section>

          {/* intro my self */}
          <section className="flex flex-col text-xl text-gray-700 leading-[1.8] gap-y-[24px] max-md:text-base">
              <p>
                  시각적으로 결과를 만들어 내는 일에 큰 즐거움을 느껴 프론트엔드 개발자로 진로를 결정하였고,<br/>
                  프론트, 백엔드, 배포 등의 개발 경험을 거치며 웹 서비스의 설계와 개발에 대한 전체적인 이해도를 높이려 노력하였습니다.
              </p>
              <p>
                  개발은 비즈니스를 구현하는 일이라고 이해하고 있습니다. 비즈니스의 성장과 팀에 기여하기 위해 적극적인 커뮤니케이션과
                  스스로 끊임없이 발전하려는 노력이 필요하다 믿으며, 준비된 인재가 되기 위해 노력하고 있습니다.
              </p>
              <p>
                  소통과 공감은 제가 가진 가장 큰 강점이고 중요한 가치라고 생각합니다. 상대방의 감정을 배려하고 주변에 밝고 긍정적인 에너지를 전달하려 노력합니다.
              </p>
          </section>

          <Category
              name="Dev Experience"
              comment="총 1년 3개월"
              description="디스크립션입니다."
          >
              경험한 프로젝트들 리스트
          </Category>
      </Layout>
  )
}
