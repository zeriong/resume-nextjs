export const Category = ({ name, comment, description, children }) => {
    return (
        <section>
            <div className="relative flex items-center">
                <p className="text-[36px] text-blue-500 font-semibold leading-none max-sm:text-[28px]">
                    {name}<span className="text-gray-400/80 ml-2">{'{'}</span>
                </p>
                {comment && (
                    <p className="text-[16px] text-gray-800 bg-gray-200/80 ml-3 mt-1 whitespace-nowrap max-sm:ml-2">
                        {'//'} {comment}
                    </p>
                )}
            </div>
            {description && (
                <p className="text-[18px] text-gray-700 mt-[16px] max-sm:text-[16px]">
                    {description}
                </p>
            )}
            <div className={`flex flex-col border-l border-gray-300/90 pl-8 gap-y-[44px] max-md:pl-4 ${name === 'Skills' ? 'mt-5' : 'mt-[53px]'}`}>
                {children}
            </div>
            <p className="text-[36px] text-gray-400/80 font-semibold leading-none mt-1 max-sm:text-[28px]">
                {'}'}
            </p>
        </section>
    )
}