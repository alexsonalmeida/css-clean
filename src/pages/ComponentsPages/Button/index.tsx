import { Title } from "@/components/ArticleTitle";
import { Button } from "./components/Button";
import { Components } from "@/components/ArticlesCategories";
import { Paragraph } from "@/components/Paragraph";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useState } from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { ArrowRight, Check, Copy} from "lucide-react";
import { SubsectionTitle } from "@/components/SubsectionTitle";

export function ButtonComponents() {
    const variants = ["primary", "secondary", "outline"] as const;
    const [variant, setVariant] = useState<typeof variants[number]>("primary");
    const [copied, setCopied] = useState(false);
    const [buttonCode, setButtonCode] = useState(`<Button variant={"${variant}"}>
    Button
</Button>`)
    const buttonTailwindCode = `<Button className="bg-emerald-300 text-gray-800">
    Button
</Button>`
const buttonIconCode =`<Button 
    className="flex 
        items-center 
        bg-indigo-300
        hover:bg-indigo-400 
        gap-2">
    Button
    <ArrowRight className="w-4 lg:w-5"/>
</Button>`
    const buttonComponentCode = `    import React from "react";
    import clsx from "clsx";
    
    interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
      variant?: "primary" | "secondary" | "outline";
    }
    
    export const Button: React.FC<ButtonProps> = ({
        variant = "primary",
        className,
        ...props
      }) => {
        const baseStyles = "text-xs md:text-base rounded-md transition duration-200 px-4 md:px-6 py-2";
        
        const variantStyles = {
          primary: "bg-gray-900 hover:bg-gray-800 text-gray-50",
          secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
          outline: "text-gray-700 hover:bg-gray-100 border border-gray-300",
        };
      
        return (
          <button className={clsx(baseStyles, variantStyles[variant], className)} {...props} />
        );
    };`

    useEffect(() => {
        setButtonCode(`<Button variant={"${variant}"}>
    Button
</Button>`);
    }, [variant]);

    async function handleCopy(text: string) {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          } catch (err) {
            console.error("Erro ao copiar", err);
          }
    }
    return (
        <main className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-4">
                <Title>Button</Title>
                <div>
                    <Components/>
                </div>                  
            </div>
            <Paragraph>
                Displays an interactive element that can be used do trigger an action. 
            </Paragraph>
            <section>
                <div className="flex flex-row items-center justify-between border border-gray-300 rounded-lg p-2 lg:p-4">
                    <Button variant={variant}>
                        Button
                    </Button>    
                    <div className="space-y-1">
                        <span className="text-gray-700 font-medium text-xs md:text-sm">Variant</span>
                        <Select onValueChange={(v) => setVariant(v as typeof variants[number])} value={variant}>
                            <SelectTrigger className="bg-gray-50 text-xs md:text-sm w-32">
                                <SelectValue placeholder="Select variant"/>
                            </SelectTrigger>
                            <SelectContent>
                                {variants.map((v) => (
                                    <SelectItem key={v} value={v} className="text-xs md:text-sm">
                                        {v}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>                           
                    </div>
                </div>
            </section>
            <section className="space-y-4">
                <div className="space-y-1">
                    <SubsectionTitle>Use code</SubsectionTitle>
                    <Paragraph>
                        Once you have the component in your project, you can use it using the following code:
                    </Paragraph>                    
                </div>

                <div className="shadow-xl rounded-md flex-1">
                    <div className="flex border-gray-200 bg-white items-center justify-between rounded-tr-md rounded-t-md px-4 py-2 border-b ">
                        <div className="flex gap-1.5">
                            <span className="block h-3 w-3 rounded-full bg-red-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-yellow-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-green-400"></span>                            
                        </div>
                        <button
                            onClick={() => handleCopy(buttonCode)}
                            className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 transition"
                        >
                            {copied ? <Check size={14} className="text-gray-500"/> : <Copy size={14} className="text-gray-500" />}
                        </button>
                    </div>
                    <CodeBlock code={buttonCode} language="jsx" />
                </div>                
            </section>
            
            <section className="space-y-4">
                <div className="space-y-1">
                    <SubsectionTitle>Customizing your button</SubsectionTitle>
                    <Paragraph>
                        You can easily customize your button by modifying the component's original code or using tailwind CSS. For example, you can add new 
                        colors to it like in the code below:
                    </Paragraph>                    
                </div>

                <div className="flex flex-row items-center justify-between border border-gray-300 rounded-lg p-2 lg:p-4">
                    <Button className="bg-green-300 hover:bg-green-400 text-gray-800 ">
                        Button
                    </Button>    
                </div>
                <div className="shadow-xl rounded-md flex-1">
                    <div className="flex border-gray-200 bg-white items-center justify-between rounded-tr-md rounded-t-md px-4 py-2 border-b ">
                        <div className="flex gap-1.5">
                            <span className="block h-3 w-3 rounded-full bg-red-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-yellow-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-green-400"></span>                            
                        </div>
                        <button
                            onClick={() => handleCopy(buttonTailwindCode)}
                            className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 transition"
                        >
                            {copied ? <Check size={14} className="text-gray-500"/> : <Copy size={14} className="text-gray-500" />}
                        </button>
                    </div>
                    <CodeBlock code={buttonTailwindCode} language="jsx" />
                </div>                
            </section>

            <section className="space-y-4">
                <div className="space-y-1">
                    <SubsectionTitle>Adding other elements to your button</SubsectionTitle>
                    <Paragraph>
                        You can add more elements besides texts to display on the button. As in the example below, you can pass an icon:
                    </Paragraph>                    
                </div>

                <div className="flex flex-row items-center justify-between border border-gray-300 rounded-lg p-2 lg:p-4">
                    <Button className="flex items-center bg-indigo-300 hover:bg-indigo-400 text-gray-800 gap-2">
                        Button
                        <ArrowRight className="w-4 lg:w-5"/>
                    </Button>    
                </div>
                <div className="shadow-xl rounded-md flex-1">
                    <div className="flex border-gray-200 bg-white items-center justify-between rounded-tr-md rounded-t-md px-4 py-2 border-b ">
                        <div className="flex gap-1.5">
                            <span className="block h-3 w-3 rounded-full bg-red-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-yellow-400"></span>
                            <span className="block h-3 w-3 rounded-full bg-green-400"></span>                            
                        </div>
                        <button
                            onClick={() => handleCopy(buttonIconCode)}
                            className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 transition"
                        >
                            {copied ? <Check size={14} className="text-gray-500"/> : <Copy size={14} className="text-gray-500" />}
                        </button>
                    </div>
                    <CodeBlock code={buttonIconCode} language="jsx" />
                </div>                
            </section>

            <section className="space-y-2">
                <SubsectionTitle>How to use</SubsectionTitle>
                <ol className="space-y-4">
                    <li className="space-y-1">
                        <h4 className="font-medium text-gray-600 text-md md:text-lg">1. Create a button component</h4>
                        <Paragraph>
                            Create a button component in your project in any folder. We recommended use the name button.tsx to your file.
                        </Paragraph>
                    </li>

                    <li className="space-y-1">
                        <h4 className="font-medium text-gray-600 text-md md:text-lg">2. Paste the following code into the file:</h4>
                        <div className="shadow-xl rounded-md flex-1">
                            <div className="flex border-gray-200 bg-white items-center justify-between rounded-tr-md rounded-t-md px-4 py-2 border-b ">
                                <div className="flex gap-1.5">
                                    <span className="block h-3 w-3 rounded-full bg-red-400"></span>
                                    <span className="block h-3 w-3 rounded-full bg-yellow-400"></span>
                                    <span className="block h-3 w-3 rounded-full bg-green-400"></span>                            
                                </div>
                                <button
                                    onClick={() => handleCopy(buttonComponentCode)}
                                    className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 transition"
                                >
                                    {copied ? <Check size={14} className="text-gray-500"/> : <Copy size={14} className="text-gray-500" />}
                                </button>
                            </div>
                            <CodeBlock code={buttonComponentCode} language="jsx" />
                        </div>
                    </li>

                    <li className="space-y-1">
                        <h4 className="font-medium text-gray-600 text-md md:text-lg">3. Use the component anywhere in your code</h4>
                        <Paragraph>
                            Now you can use the component in your project by using the code:
                        </Paragraph>
                        <div className="shadow-xl rounded-md flex-1">
                            <div className="flex border-gray-200 bg-white items-center justify-between rounded-tr-md rounded-t-md px-4 py-2 border-b ">
                                <div className="flex gap-1.5">
                                    <span className="block h-3 w-3 rounded-full bg-red-400"></span>
                                    <span className="block h-3 w-3 rounded-full bg-yellow-400"></span>
                                    <span className="block h-3 w-3 rounded-full bg-green-400"></span>                            
                                </div>
                                <button
                                    onClick={() => handleCopy(buttonCode)}
                                    className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 transition"
                                >
                                    {copied ? <Check size={14} className="text-gray-500"/> : <Copy size={14} className="text-gray-500" />}
                                </button>
                            </div>
                            <CodeBlock code={buttonCode} language="jsx" />
                        </div>
                    </li>
                </ol>                
            </section>
        </main>
    )
}
