import Image from "next/image";
import gitSymbolSvg from "@/assets/images/git-symbol.svg";

export const ExperiencedProjectDetail = (
    {
        title,
        linkGithub,
        devDateRange,
        list,
        review,
        usedStack,
        etcList,
    }
) => {
    return (
        <div className="project flex flex-col gap-y-4">
            {title && (
                <div>
                    <div className="flex items-center gap-x-2">
                        <p className="text-2xl text-gray-700 font-semibold max-sm:text-xl">
                            {title}
                        </p>
                        {linkGithub && (
                            <a href={linkGithub} target="_blank"
                               className="flex items-center min-w-[40px] h-[22px] text-sm text-white bg-gray-600/90 rounded-full pl-1.5 pr-2">
                                <Image src={gitSymbolSvg} className="w-[16px]" alt="git"/>
                                <i className="arrow-right !border-white ml-0.5"></i>
                            </a>
                        )}
                    </div>
                    <p className="text-gray-600">
                        {devDateRange}
                    </p>
                </div>
            )}
            {list && list.length > 0 && (
                <ul>
                    {list.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            )}

            {review && (
                <div>
                    <p className="text-gray-700 text-[18px] font-semibold">Review</p>
                    <p className="text-gray-600 mt-1">{review}</p>
                </div>
            )}

            {etcList && (
                etcList.map((val, idx) => {
                    return (
                        <div key={val.title + idx}>
                            <p className="text-gray-700 text-[18px] font-semibold">{val.title}</p>
                            <p className="text-gray-600 mt-1">{val.content}</p>
                        </div>
                    )
                })
            )}

            {usedStack && (
                <div>
                    <p className="text-gray-700 text-[18px] font-semibold">Used Stack</p>
                    <p className="text-gray-600 mt-1">{usedStack}</p>
                </div>
            )}
        </div>
    )
}