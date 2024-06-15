"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import Image from "next/image";
import Button from "../Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesMenuOpen, setIsCoursesMenuOpen] = useState(false);
  const coursesMenuRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    {
      label: "Página inicial",
      href: "/",
    },
    {
      label: "A Práxis",
      href: "/sobrenos",
    },
    {
      label: "Cursos",
      href: "#",
      subItems: [
        { label: "Pós-graduação", href: "/cursos/posgraduacao" },
        { label: "Curso de extensão", href: "/" },
        { label: "Workshops", href: "/" },
      ],
    },
    {
      label: "Fale Conosco",
      href: "/faleconosco",
    },
  ];

  const handleCoursesMenuToggle = useCallback(() => {
    setIsCoursesMenuOpen((prev) => !prev);
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (coursesMenuRef.current && !coursesMenuRef.current.contains(event.target as Node)) {
      setIsCoursesMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <Navbar
      isBlurred={false}
      className="bg-[#134169] top-0 w-full z-50"
      classNames={{
        wrapper: "max-w-none",
      }}
      position="static"
    >
      <div className="container mx-auto flex justify-between items-center py-4">
        <NavbarContent justify="start">
          <NavbarBrand>
            <Link href="/">
              <Image src="/logo-header.webp" alt="Logo" width={142} height={150} />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden md:flex gap-4 justify-end items-center">
          {menuItems.map((item, index) => (
            <NavbarItem className="relative" key={`${item.label}-${index}`}>
              <Link
                className="uppercase text-white"
                href={item.href}
                size="lg"
                onClick={item.subItems ? handleCoursesMenuToggle : undefined}
              >
                {item.label}
              </Link>
              {item.subItems && (
                <div
                  ref={coursesMenuRef}
                  className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-[#134169] py-2 w-48 shadow-lg rounded-md ${isCoursesMenuOpen ? "block" : "hidden"
                    } z-50`}
                >
                  {item.subItems.map((subItem, subIndex) => (
                    <Link
                      key={`${subItem.label}-${subIndex}`}
                      href={subItem.href}
                      className="block px-4 py-2 font-semibold tracking-wide uppercase text-sm text-[#dab167] hover:bg-[#0a2e4d] text-center"
                      onClick={() => setIsCoursesMenuOpen(false)}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
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
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </NavbarContent>
      </div>

      <NavbarMenu className={`bg-[#134169] flex flex-col items-center text-center ${isMenuOpen ? "block" : "hidden"}`}>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              className="w-full font-bold text-center tracking-wider uppercase text-white py-4"
              href={item.href}
              size="lg"
              onClick={() => setIsMenuOpen(false)}
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
                    onClick={() => setIsMenuOpen(false)}
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
