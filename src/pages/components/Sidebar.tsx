import { menuItems } from '@/utils/NavigationComponents';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

type SideBarProps = {
  className?: String
}

export function Sidebar({ className }: SideBarProps) {
    const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  
    const toggleExpand = (title: string) => {
      setExpanded((prev) => ({
        ...prev,
        [title]: !prev[title],
      }));
    };
  
    return (
      <div className={`fixed left-0 h-full border-r border-gray-200 ${className || ""}`}>
        <div className="h-full overflow-y-auto px-6 py-8">
          <nav>
            <ul className="space-y-6">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleExpand(item.title)}
                  >
                    <span className="text-gray-800 text-md font-medium mr-8 w-32">
                      {item.title}
                    </span>
                    {item.children ? (
                      expanded[item.title] ? (
                        <ChevronDown size={18} className="text-gray-800" />
                      ) : (
                        <ChevronRight size={18} className="text-gray-800" />
                      )
                    ) : null}
                  </div>
                  {item.children && expanded[item.title] && (
                    <ul className="mt-3.5 space-y-3">
                      {item.children.map((child, childIndex) => (
                        <li key={child}>
                          <NavLink
                            to={item.paths[childIndex]}
                            className={({ isActive }) =>
                              `font-regular text-xs md:text-sm transition-colors duration-200 ${
                                isActive
                                  ? "text-indigo-800 font-medium"
                                  : "text-gray-600 hover:text-gray-900"
                              }`
                            }
                          >
                            {child}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
  