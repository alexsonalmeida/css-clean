export function BestPractices() {
    return (
        <section className="flex flex-col md:flex-row items-center gap-12 md:gap-20 lg:gap-32 px-6 md:px-20 lg:px-52">
            <img src="/assets/check-illustration.svg" alt="check trace illustration" className="h-[272px] w-[187px] md:h-[323px] md:w-[232px]"/>
            <div className="flex flex-col gap-2 md:gap-4">
                <h1 className="text-gray-800 font-semibold text-center md:text-left text-2xl md:text-4xl">
                    Best Practices
                </h1>
                <p className="text-gray-700 text-center md:text-left md:font-light mt-2 leading-7 md:text-2xl md:leading-9 ">
                    Use best practices to keep your codes constant and maintainable by different developers.
                </p>
                <p className="text-gray-700 text-center md:text-left md:font-light leading-7 md:text-2xl md:leading-9">
                    Understand the best standards for class naming, style orders, definition of properties and their differences, etc.
                </p>                
            </div>
        </section>
    )
}