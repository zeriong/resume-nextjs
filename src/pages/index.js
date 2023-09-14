import {Layout} from '@/components/Layout';
import Image from 'next/image'
import profilePng from '../assets/images/profile.jpg';

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
      </Layout>
  )
}
