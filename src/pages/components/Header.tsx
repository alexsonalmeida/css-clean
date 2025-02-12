import { Github } from "lucide-react";
import { MenuMobile } from "./MenuMobile";
import { MenuWeb } from "./MenuWeb";

type HeaderProps = {
  className?: String
}

const Header = ({className}: HeaderProps) => {
    return (
      <header className={`bg-gray-100 fixed top-0 w-full z-10 md:bg-gray-50 md:border-b border-gray-200 p-4 md:flex items-center justify-between ${className || ""}`}>
        <div className="flex justify-between border-b md:border-0 border-gray-200 pb-3 md:pb-0">
            <a href="/">
              <img src="/assets/logo.svg" alt="Clean CSS Logo" className="max-w-20 md:max-w-32"/>
            </a>
            
            <a 
              href="https://github.com/alexsonalmeida/Clean-CSS" 
              className="flex md:hidden justify-center items-center rounded-full bg-gray-200 p-2"
              target="_blank"
            >
              <Github size={16}/>
            </a>            
        </div>
        <MenuMobile className={`flex md:hidden max-w-min mt-3 bg-gray-200 items-center p-1 rounded-md`}/>
        <MenuWeb className={`hidden md:block`}/>
      </header>
    );
  };
  
  export default Header;