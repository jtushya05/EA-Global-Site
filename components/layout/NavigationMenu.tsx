"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navItems = [
  {
    label: "Career Counselling",
    submenu: [
      { href: "/career-counselling/class-8-9", label: "Class 8-9: Stream & Subject Selection" },
      { href: "/career-counselling/class-10-12", label: "Class 10-12: Career Selection" },
      { href: "/career-counselling/college-graduates", label: "College & Graduates" },
    ],
  },
  {
    label: "College Selection",
    submenu: [
      { href: "/college-selection/overseas", label: "Overseas Education" },
      { href: "/college-selection/india", label: "India" },
    ],
  },
  {
    label: "For Institutions",
    submenu: [
      { href: "/institutions/career-guidance", label: "In-Schools Career Guidance" },
      { href: "/institutions/book-expert", label: "Book an Expert" },
    ],
  },
];

interface MainNavProps {
  isScrolled: boolean;
}

export function MainNav({ isScrolled }: MainNavProps) {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItems.map((item) => (
          <NavigationMenuItem key={item.label}>
            <NavigationMenuTrigger 
              className={`text-sm font-medium bg-transparent hover:bg-transparent ${
                pathname === '/' && !isScrolled ? 'text-white' : 'text-gray-900'
              }`}
            >
              {item.label}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 p-4 bg-white">
                {item.submenu.map((subItem) => (
                  <li key={subItem.href}>
                    <Link
                      href={subItem.href}
                      className="block p-2 text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
                    >
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}