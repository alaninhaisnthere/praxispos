"use client";

import { useState } from "react";

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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      href: "/cursos",
    },
    {
      label: "Fale Conosco",
      href: "/faleconosco",
    },
  ];

  return (
    <Navbar
      isBlurred={false}
      className="bg-transparent justify-start"
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        wrapper: "max-w-none",
      }}
      position="static"
    >
      <NavbarContent justify="start">
        <NavbarBrand>
          <Link href="/">
            <Image src="/assets/logo.png" alt="Logo" width={142} height={54} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="end">
        {menuItems.map((item, index) => (
          <NavbarItem
            className="data-[active=true]:font-bold"
            key={`${item.label}-${index}`}
          >
            <Link
              className="w-full uppercase text-white"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <Button asChild>
            <Link href="https://praxis.mitikas.com.br" target="_blank">
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

      <NavbarMenu className="bg-gradient-to-r from-[#134169] via-[#5987b8] to-[#257ecc] flex flex-col items-center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              className="w-full font-bold text-center tracking-wider uppercase text-white py-4"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Button asChild>
            <Link href="https://praxis.mitikas.com.br" target="_blank">
              Portal do aluno
            </Link>
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;