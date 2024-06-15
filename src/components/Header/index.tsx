"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesMenuOpen, setIsCoursesMenuOpen] = useState(false);
  const coursesMenuRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { label: "Página inicial", href: "/" },
    { label: "A Práxis", href: "/sobrenos" },
    {
      label: "Cursos",
      subItems: [
        { label: "Pós-graduação", href: "/cursos/posgraduacao" },
        { label: "Curso de extensão", href: "/" },
        { label: "Workshops", href: "/" },
      ],
    },
    { label: "Fale Conosco", href: "/faleconosco" },
  ];

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  const handleCoursesMenuToggle = () => {
    setIsCoursesMenuOpen((prev) => !prev);
  };

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
    <nav className="bg-[#134169] uppercase">
      <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-between mx-auto p-2">

        <div className="flex flex-row items-center">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo-header.webp" alt="Logo" width={142} height={150} />
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm bg-[#134169] rounded-lg md:hidden"
            onClick={handleMenuToggle}
          >
            <svg className="w-5 h-5 text-white" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1h15M1 7h15M1 13h15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
        </div>

        <div className={`w-full md:block md:w-auto uppercase ${isMenuOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col items-center font-medium uppercase p-4 md:p-0 mt-4 rounded-lg bg-[#134169] md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-[#134169]">
            {menuItems.map((item, index) => (
              <li key={`${item.label}-${index}`} className="relative">
                {item.subItems ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full uppercase py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#AA8E4B] md:p-0 md:w-auto"
                      onClick={handleCoursesMenuToggle}
                    >
                      {item.label}
                      <svg
                        className={`w-5 h-5 ml-2 transition-transform duration-300 ease-in-out transform ${isCoursesMenuOpen ? "rotate-180" : ""
                          }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 12.586L3.707 6.293a1 1 0 111.414-1.414L10 10.758l5.879-5.879a1 1 0 111.414 1.414L10 12.586z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    <div
                      className={`absolute left-1/2 transform -translate-x-1/2 mt-2 bg-[#134169] py-2 w-44 shadow-lg rounded-lg z-10 ${isCoursesMenuOpen ? "block" : "hidden"
                        }`}
                      ref={coursesMenuRef}
                    >
                      <ul className="py-2 text-sm text-[#AA8E4B] font-semibold">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={`${subItem.label}-${subIndex}`}>
                            <Link href={subItem.href} className="block px-4 py-2 hover:bg-[#FAFAFA]">
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#AA8E4B] md:p-0"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Button asChild>
                <Link href="https://praxis.mitikas.com.br" className="text-white uppercase tracking-wide" target="_blank">
                  Portal do aluno
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
