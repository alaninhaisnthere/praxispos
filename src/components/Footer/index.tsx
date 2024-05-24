"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import logoHero from "../../../public/logo-hero.png";

const Footer = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer className="bg-[#196193] py-10 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="mb-4 md:mb-0">
            <Image
              src={logoHero}
              alt="Logo Hero"
              width={isMobile ? 150 : 200}
              height={isMobile ? 90 : 110}
            />
          </div>
          <div className={`text-center md:text-right ${isMobile ? "flex flex-col items-center" : ""}`}>
            <p>Rua Caetano Marchesini, 952, Bairro Portão,
              <br />
              CEP: 81070-110, Curitiba-PR</p>
            <p>+55 (41) 9246-0242</p>
            <p>Instituto Práxis, 2024.
              <br />
              Todos os direitos reservados.</p>
            <p className="text-sm"> Feito por Alana Oliveira.</p>
          </div>
        </div>
        <div className="mt-4 md:mt-0 text-center">

        </div>
      </div>
    </footer>
  );
};

export default Footer;
