import { Code } from "lucide-react";
import { CodeBlock } from "../CodeBlock";
import { code1, code2 } from "@/utils/CodesExemples";

export function CodeExemples() {
    return (
        <section className="flex flex-col px-6 lg:px-24 space-y-3">
            <span className="flex items-center bg-indigo-100 max-w-min rounded-full p-3">
                <Code size={22} className="text-indigo-400"/>
            </span>
            <h1 className="text-gray-800 font-semibold md:text-left text-2xl md:text-4xl">
                Code Exemples
            </h1>
            <p className="text-gray-700 md:text-left md:font-light leading-7 md:text-2xl md:leading-9 md:max-w-[720px]">
                Need to visualize how each concept is applied in practice? Here you will find codes showing them effectively.
            </p>
            <div className="flex flex-col relative lg:flex-row gap-8">
                <div className="shadow-xl rounded-md flex-1 md:mt-4">
                    <div className="flex border-gray-200 bg-white rounded-tr-md rounded-t-md gap-1.5 px-4 py-3 border-b ">
                        <span className="block h-3 w-3 rounded-full bg-red-400"></span>
                        <span className="block h-3 w-3 rounded-full bg-yellow-400"></span>
                        <span className="block h-3 w-3 rounded-full bg-green-400"></span>
                    </div>
                    <CodeBlock code={code1} language="jsx" />
                </div>
                <div className="absolute bg-purple-500 rounded-full bg-opacity-10 blur-3xl top-2/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[400px]"/>
                <div className="shadow-xl rounded-md flex-1 md:mt-4">
                    <div className="flex border-gray-200 bg-white rounded-tr-md rounded-t-md gap-1.5 px-4 py-3 border-b ">
                        <span className="block h-3 w-3 rounded-full bg-red-400"></span>
                        <span className="block h-3 w-3 rounded-full bg-yellow-400"></span>
                        <span className="block h-3 w-3 rounded-full bg-green-400"></span>
                    </div>
                    <CodeBlock code={code2} language="jsx" />
                </div>                
            </div>
        </section>
    )
}