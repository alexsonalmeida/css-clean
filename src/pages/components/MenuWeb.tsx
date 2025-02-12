import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { menuItems } from "@/utils/NavigationComponents"

type MenuWebProps = {
    className?: String
}

export function MenuWeb({ className }: MenuWebProps) {
    return (
        <div className={`default-styles ${className || ""}`}>
            <NavigationMenu>
                <NavigationMenuList>
                    {menuItems.map((item, index) => (
                        <NavigationMenuItem key={index}>
                            <NavigationMenuTrigger className="text-gray-700 bg-transparent font-medium ">
                                {item.title}
                            </NavigationMenuTrigger>
                    
                            {item.children && item.paths && (
                                <NavigationMenuContent className="bg-gray-50">
                                    <ul className="grid gap-3 p-4 w-[400px]">
                                        {item.children.map((child, childIndex) => (
                                            <li key={childIndex}>
                                                <NavigationMenuLink asChild>
                                                    <a 
                                                        href={`/articles/${item.paths[childIndex]}`}
                                                        className="text-gray-700 hover:text-slate-500 font-regular text-sm transition-colors"
                                                    >
                                                        {child}
                                                    </a>
                                                </NavigationMenuLink>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            )}
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}