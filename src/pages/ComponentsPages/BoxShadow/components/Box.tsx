import { Copy } from "lucide-react";
import { useState } from "react";

interface ShadowBoxProps {
    shadowStyle?: string;
    children?: React.ReactNode;
  }
  
export function Box({ shadowStyle, children }: ShadowBoxProps) {
    const [message, setMessage] = useState("")
    async function copyToClipboard(text: string) {
        console.log(text)
        await navigator.clipboard.writeText(text);
        setMessage("Shadow copied!")
    };
    return (
        <div
            className={`bg-gray-100 ${message? 'text-gray-700' : 'text-gray-500'} relative flex flex-col items-center justify-center text-center text-xs 
                lg:text-sm w-32 h-28 lg:w-48 lg:h-32 rounded-xl px-1 md:px-2`}
            style={{ boxShadow: shadowStyle }}
        >
            <button 
                className="text-zinc-400 hover:text-gray-600 transition-colors self-end absolute top-2"
                onClick={() => copyToClipboard(`box-shadow: ${shadowStyle}`)}
            >
                <Copy className="h-3 md:h-4"/>
            </button>
            {message? message : children}
        </div>
    )
} 