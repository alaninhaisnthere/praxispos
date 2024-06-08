"use client";

import { useState, useEffect, useRef } from "react";
import {
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import Button from "../Button";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFlyoutOpen, setIsFlyoutOpen] = useState(false);
    const flyoutRef = useRef<HTMLDivElement>(null);

    const menuItems = [
        {
            label: "Página inicial",
            href: "/",
        },
        {
            label: "A Práxis",
            href: "/sobre",
        },
        {
            label: "Cursos",
            href: "#",
            subItems: [
                {
                    label: "Pós-graduação",
                    href: "/cursos/pos-graduacao",
                },
                {
                    label: "Curso de extensão",
                    href: "/",
                },
                {
                    label: "Workshops",
                    href: "/",
                },
            ],
        },
        {
            label: "Fale Conosco",
            href: "/faleconosco",
        },
    ];

    const handleFlyoutToggle = () => {
        setIsFlyoutOpen(!isFlyoutOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (flyoutRef.current && !flyoutRef.current.contains(event.target as Node)) {
            setIsFlyoutOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <Navbar
            isBlurred={false}
            className={`bg-[#134169] top-0 w-full z-50 ${montserrat.className}`}
            onMenuOpenChange={setIsMenuOpen}
            classNames={{
                wrapper: "max-w-none",
            }}
        >
            <div className="container mx-auto flex justify-between items-center py-4">
                <NavbarContent justify="start">
                    <NavbarBrand>
                        <Link href="/">
                            <Image src="/logo-header.png" alt="Logo" width={142} height={150} />
                        </Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden md:flex gap-4 justify-center items-center" justify="end">
                    {menuItems.map((item, index) => (
                        <NavbarItem
                            className="relative data-[active=true]:font-bold"
                            key={`${item.label}-${index}`}
                        >
                            <div>
                                <Link
                                    className="w-full uppercase font-medium tracking-wide text-white text-center"
                                    href={item.href}
                                    size="lg"
                                    onClick={item.subItems ? handleFlyoutToggle : undefined}
                                >
                                    {item.label}
                                </Link>
                                {item.subItems && (
                                    <div
                                        ref={flyoutRef}
                                        className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-[#134169] py-2 w-48 shadow-lg rounded-md ${isFlyoutOpen ? "block" : "hidden"
                                            }`}
                                    >
                                        {item.subItems.map((subItem, subIndex) => (
                                            <Link
                                                key={`${subItem.label}-${subIndex}`}
                                                href={subItem.href}
                                                className="block px-4 py-2 font-semibold tracking-wide uppercase text-sm text-[#dab167] hover:bg-[#0a2e4d] text-center"
                                                onClick={() => setIsFlyoutOpen(false)}
                                            >
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </NavbarItem>
                    ))}
                    <NavbarItem>
                        <Button asChild>
                            <Link href="https://praxis.mitikas.com.br" className="text-white uppercase tracking-wider" target="_blank">
                                Portal do aluno
                            </Link>
                        </Button>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent className="md:hidden" justify="end">
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="md:hidden"
                    />
                </NavbarContent>
            </div>

            <NavbarMenu className="bg-[#134169] flex flex-col items-start text-center">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.label}-${index}`}>
                        <Link
                            className="w-full font-bold text-center items-center tracking-wider uppercase text-white py-4"
                            href={item.href}
                            size="lg"
                        >
                            {item.label}
                        </Link>
                        {item.subItems && (
                            <div className="flex flex-col items-center text-center w-full">
                                {item.subItems.map((subItem, subIndex) => (
                                    <Link
                                        key={`${subItem.label}-${subIndex}`}
                                        href={subItem.href}
                                        className="w-full font-bold text-center items-center tracking-wider uppercase text-[#dab167] py-4"
                                        size="lg"
                                    >
                                        {subItem.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </NavbarMenuItem>
                ))}
                <NavbarMenuItem>
                    <Button asChild>
                        <Link href="https://praxis.mitikas.com.br" className="text-white uppercase tracking-wide" target="_blank">
                            Portal do aluno
                        </Link>
                    </Button>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
};

export default Header;