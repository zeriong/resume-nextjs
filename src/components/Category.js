/**
 * 이력서 내용 카테고리 컴포넌트
 *
 * @param name - 카테고리 명칭
 * @param comment - 카테고리 명칭 옆 주석 내용
 * @param description - 카테고리 설명
 * @param {React.ReactNode} children - 하위 노드
 * */
export const Category = ({ name, comment, description, children }) => {
    return (
        <section>
            <div className="relative flex items-center">
                <p className="text-[36px] text-blue-500 font-semibold leading-none max-sm:text-[28px]">
                    {name}<span className="text-gray-400/80 ml-2">{'{'}</span>
                </p>
                {comment && (
                    <p className="text-[16px] text-gray-800 ml-3 mt-1 whitespace-nowrap max-sm:ml-1.5 max-sm:text-[14px] max-sm:tracking-[-0.4px]">
                        {'//'} {comment}
                    </p>
                )}
            </div>
            {description && (
                <p className="text-[18px] text-gray-700 mt-[16px] max-sm:text-[16px]">
                    {description}
                </p>
            )}
            <div className="border-l border-gray-300/90 pl-8 max-md:pl-4">
                {children}
            </div>
            <p className="text-[36px] text-gray-400/80 font-semibold leading-none mt-1 max-sm:text-[28px]">
                {'}'}
            </p>
        </section>
    )
}