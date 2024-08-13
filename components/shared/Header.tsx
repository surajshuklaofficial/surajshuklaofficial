"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { Button } from "../ui/button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


  const navItems = [
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={`bg-gradient-to-r from-gray-800 to-black text-white shadow px-4 py-2 md:py-4 fixed top-0 left-0 right-0 bg-white/25 backdrop-blur-md transition-transform duration-300 z-50 ${showHeader ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="px-4 sm:px-6 lg:px-8 flex-between flex flex-between">
            <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-primary">
                Suraj Shukla
                </Link>
            </div>
            <NavigationMenu className="hidden md:flex items-center space-x-8">
                <NavigationMenuList>
                    {navItems.map((item) => (
                        <NavigationMenuItem key={item.name}>
                            <Link href={item.href} legacyBehavior passHref className="block text-gray-800 hover:text-blue-600">
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>{item.name}</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    ))}   
                </NavigationMenuList>
            </NavigationMenu>
            <div className="-mr-2 flex md:hidden">
                <Button
                    onClick={toggleMenu}
                    >
                    {isOpen ? (
                        <p>X</p>
                    ) : (
                        <p>O</p>
                    )}
                </Button>
            </div>
        </div>

        {/* Mobile Menu */}
            {isOpen && (
                <NavigationMenu className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <NavigationMenuList className="flex flex-col items-start">
                        {navItems.map((item) => (
                            <NavigationMenuItem key={item.name}>
                                <Link href={item.href} legacyBehavior passHref className="block text-gray-800 hover:text-blue-600">
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>{item.name}</NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        ))}   
                    </NavigationMenuList>
                </NavigationMenu>
            )}
    </header>
  );
}
