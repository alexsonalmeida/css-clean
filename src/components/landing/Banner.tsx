import { ArrowRightCircle } from "lucide-react";

export function Banner() {
    return (
        <section className="flex flex-col items-center self-center relative md:max-w-[1200px] px-6 md:px-8 space-y-5 md:space-y-10">
            <div className="absolute bg-purple-500 rounded-full bg-opacity-10 blur-3xl left-1/2 top-2/4 md:left-3/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]"/>
            <h2 className="text-gray-800 font-bold text-center text-2xl leading-9 md:font-extrabold md:text-5xl md:leading-snug">
                Learn how to create scalable, maintainable and performant CSS codes
            </h2>
            <p className="text-gray-700 font-normal text-center md:font-light leading-7 md:max-w-[720px] md:text-2xl md:leading-9">
                Use standardized best practices to build efficient styling codes, with practical examples and assembled components for you 
                to reuse in your projects
            </p>
            <a className="flex items-center rounded-full text-purple-200 bg-gradient-to-r from-purple-700 to-purple-900 
                font-semibold text-xs md:text-sm gap-3 py-3 px-6 md:gap-5 md:py-5 md:px-12"
                href="/introduction"
            >
                <span>Get Started</span>
                <ArrowRightCircle size={20}/>
            </a>
        </section>
    )
}