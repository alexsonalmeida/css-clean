import { menuItems } from "@/utils/NavigationComponents";
import { ArrowLeft, ChevronDown, ChevronRight, Menu } from "lucide-react";
import { useState } from "react";

type MenuMobileProps = {
    className?: String
}

export function MenuMobile({className}: MenuMobileProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [expanded, setExpanded] = useState<Record<string, boolean>>({});
    const toggleExpand = (title: string) => {
        setExpanded((prev) => ({
            ...prev,
            [title]: !prev[title],
        }));
    };

    return (
        <div className={`default-styles ${className || ""}`}>
            <button 
                className="md:hidden text-gray-900" 
                onClick={() => setIsOpen(!isOpen)}
            >
                <Menu size={22} className="text-gray-600" />
            </button>
            <div 
                className={`bg-gray-100 absolute top-0 left-0 space-y-3.5 md:relative md:flex md:items-center md:bg-transparent md:top-auto 
                    md:left-auto shadow-md md:shadow-none rounded-md px-9 py-5 md:p-0 md:w-auto z-10 ${isOpen ? "block" : "hidden"} md:block`
                }
            >
                <button 
                    className="bg-gray-200 p-1.5 rounded-md"
                    onClick={() => setIsOpen(false)}
                >
                    <ArrowLeft size={22} className="text-gray-500"/>
                </button>
                <ul className="space-y-6">
                    {menuItems.map((item) => (
                        <li key={item.title}>
                            <div
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() => toggleExpand(item.title)}
                            >
                                <span className="text-gray-800 text-sm font-medium mr-8">
                                    {item.title}
                                </span>
                                {item.children ? (
                                    expanded[item.title] ? (
                                        <ChevronDown size={18} className="text-gray-800"/>
                                    ) : (
                                        <ChevronRight size={18} className="text-gray-800"/>
                                    )
                                ) : null}
                            </div>
                            {item.children && expanded[item.title] && (
                                <ul className="mt-3.5 space-y-3">
                                    {item.children.map((child, childIndex) => (
                                        <li
                                            key={child}
                                            className="text-gray-600 hover:text-gray-900 font-regular text-xs"
                                        >
                                            <a href={`${item.paths[childIndex]}`}>{child}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>        
        </div>
    )
}