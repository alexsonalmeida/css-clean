import { Github } from "lucide-react";
import { MenuMobile } from "./MenuMobile";
import { MenuWeb } from "./MenuWeb";

export function Header() {

    return (
        <nav className="flex justify-between items-center px-6 md:px-12 py-4">
            <img src="/assets/logo.svg" alt="clean css logo" className="w-20 md:w-max"/>
            <MenuMobile className={`flex md:hidden bg-gray-200 items-center p-1 rounded-md`}/>
            <MenuWeb className={`hidden md:block`}/>
            <a 
                className="hidden md:flex justify-center items-center rounded-full bg-gray-100 max-w-min p-3"
                href="https://github.com/alexsonalmeida/Clean-CSS"
                target="_blank"
            >
                <Github size={20}/>
            </a>
        </nav>
    )
}