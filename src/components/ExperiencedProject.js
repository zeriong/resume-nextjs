import Image from "next/image";
import gitSymbolSvg from "@/assets/images/git-symbol.svg";

export const ExperiencedProject = (
    {
        name,
        isPrivate,
        linkDemo,
        linkGithub,
        description,
        devPart,
        devDateRange,
        devPeriod,
        children,
    }
) => {
    return (
        <article>
            <div
                className="flex flex-wrap items-center w-full border-b border-gray-300/90 gap-x-2 gap-y-1 pb-1.5"
            >
                <p className="text-2xl text-gray-700 font-semibold">{name}</p>
                <p className={`text-sm text-white rounded-full px-2.5 py-[1px] ${isPrivate ? 'bg-green-600/80' : 'bg-orange-500'}`}>
                    {isPrivate ? '개인': '사이드'}
                </p>
                {linkDemo && (
                    <a href={linkDemo}
                       className="flex items-center text-sm text-white bg-blue-500 rounded-full px-2.5 py-[1px]">
                        데모
                        <i className="arrow-right !border-white ml-0.5"></i>
                    </a>
                )}
                {linkGithub && (
                    <a href={linkDemo} target="_blank"
                       className="flex items-center min-w-[40px] h-[22px] text-sm text-white bg-gray-600/90 rounded-full pl-1.5 pr-2">
                        <Image src={gitSymbolSvg} className="w-[16px]" git=""/>
                        <i className="arrow-right !border-white ml-0.5"></i>
                    </a>
                )}
            </div>
            <p className="w-full text-base text-gray-600 py-3">
                {description}
            </p>
            <div className="flex gap-x-[52px] gap-y-[28px] mt-[32px] max-md:flex-col max-md:mt-[8px]">
                <div className="flex flex-col min-w-[150px] gap-y-1 pt-1">
                    <p className="text-gray-600">{devPart}</p>
                    <p className="text-gray-900 font-medium">{devDateRange}</p>
                    <div className="flex justify-center w-[60px] text-[13px] bg-gray-200 rounded py-[1px]">
                        {devPeriod}
                    </div>
                </div>
                <div className="flex flex-col gap-y-[44px]">
                    {children}
                </div>
            </div>
        </article>
    )
}