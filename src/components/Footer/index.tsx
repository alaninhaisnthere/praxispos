"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import logoHero from "../../../public/logo-hero.png";
import { IconContext } from "react-icons";

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
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center pb-10 md:py-5">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="mb-4 md:mb-0 flex flex-col items-center">
            <Image
              src={logoHero}
              alt="Logo Hero"
              width={isMobile ? 150 : 200}
              height={isMobile ? 90 : 110}
            />
            <div className="flex space-x-4 mt-2">
              {/* Instagram */}
              <div
                className={`bg-[#866e34] text-white cursor-pointer ${isMobile ? "p-4" : "p-4"} 
          rounded-full shadow-lg hover:bg-[#134169] transition-transform transform`}
              >
                <IconContext.Provider value={{ color: "white" }}>
                  <a
                    href="https://instagram.com/institutopraxispos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={24} />
                  </a>
                </IconContext.Provider>
              </div>

              {/* WhatsApp */}
              <div
                className={`bg-[#866e34] text-white cursor-pointer ${isMobile ? "p-4" : "p-4"} 
          rounded-full shadow-lg hover:bg-[#134169] transition-transform transform`}
              >
                <IconContext.Provider value={{ color: "white" }}>
                  <a
                    href="https://wa.me/5541992460242?text=Ol%C3%A1!%20Vi%20o%20an%C3%BAncio%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20p%C3%B3s-gradua%C3%A7%C3%A3o"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp size={24} />
                  </a>
                </IconContext.Provider>
              </div>

            </div>
          </div>
          <div className={`text-center md:text-right tracking-wide ${isMobile ? "flex flex-col items-center" : ""}`}>
            <p>Rua Caetano Marchesini, 952, Bairro Portão,
              <br />
              CEP: 81070-110, Curitiba-PR</p>
            <p>+55 (41) 99246-0242</p>
            <p className="text-sm py-2">
              Instituto Práxis, 2024. <br />
              Todos os direitos reservados.</p>
            <p className="text-sm">
              Feito por{" "}
              <a
                href="https://linkedin.com/in/alanaoliveira71/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 decoration-dotted"
              >
                Alana Oliveira
              </a>.
            </p>
          </div>
        </div>
        <div className="mt-4 md:mt-0 text-center"></div>
      </div>
    </footer>
  );
};

export default Footer;