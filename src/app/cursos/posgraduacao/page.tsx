"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";


import Link from "next/link";
import FloatingButton from "@/components/FloatingButton";
import ScrollToTopButton from "@/components/ScrollToTop";
import Button from "@/components/Button";

export default function Landing() {
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
    <main className="flex flex-col min-h-screen">

      {/* hero */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[778px]">
        <div className="absolute inset-0">
          <Image
            src={isMobile ? "/cursos-main-mobile.png" : "/cursos-main.png"}
            alt="Imagem de fundo"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div
          className={`relative z-10 flex flex-col items-left justify-center h-full px-8 ${isMobile ? "gap-1 ml-4 bottom-44" : "gap-5 ml-60"}`}
        >
          <div className={`mb-${isMobile ? 1 : 1}`}>
            <Image
              src="/logo-hero.png"
              alt="Logo Hero"
              width={isMobile ? 150 : 250}
              height={isMobile ? 50 : 100}
            />
          </div>
          <p className={`text-left uppercase font-gothammedium text-[#fafafa] ${isMobile ? "text-xl" : "text-3xl"}`}>
            conheça as nossas
          </p>
          <h1
            className={`text-left uppercase font-gothamblack text-[#f7dc9c] ${isMobile ? "text-3xl" : "text-6xl"}`}
          >
            pós-graduações
          </h1>
          <p className={`text-left font-gothamitalic text-[#fafafa] ${isMobile ? "text-xl gap-3" : "text-4xl"}`}>
            Seja um profissional da área da estética <br />
            e transforme o seu futuro!
          </p>
          <div className={isMobile ? "flex flex-col mt-5" : "flex flex-row"}>
            <Image
              src="/FBBR.png"
              alt="Logo Hero"
              width={isMobile ? 150 : 250}
              height={isMobile ? 50 : 100}
            />
            <Image
              src="/mec.png"
              alt="Logo Hero"
              width={isMobile ? 150 : 250}
              height={isMobile ? 50 : 100}
            />
          </div>
        </div>
      </section>

      {/* 3a seção */}

      <section
        className={`flex flex-col p-4 ${isMobile ? "items-center" : ""}`}
      >

        {/* Enfermagem */}

        {isMobile ?
          <div className="flex flex-col gap-8 p-8 mb-4 bg-gradient-to-r from-[#AA8E4B] to-[#f8e4b4]">
            <Image
              src="/enfer-main.png"
              alt="Enfermagem"
              width={500}
              height={300}
              className="rounded-2xl" />
            <div className="flex flex-col justify-center gap-[1rem]">
              <h1 className="font-bold text-2xl tracking-wide uppercase">
                Pós-graduação Lato Sensu em
              </h1>
              <h1 className="p-2 font-bold text-2xl tracking-wide uppercase bg-gradient-to-r to-[#196193] from-[#AA8E4B] 
                text-[#FAFAFA]">
                Enfermagem Dermatológica Estética
              </h1>
              <h1 className="text-balance font-medium text-xl">
                Transforme sua paixão em prosperidade: Torne-se um especialista em Estética Avançada com a nossa Pós e alcance a independência financeira que você sempre sonhou!
              </h1>
              <Link href="/cursos/posgraduacao/enfermagem">
                <Button
                  variant="default"
                  size="default"
                  className="text-white text-xl font-semibold uppercase bg-[#134169]
                hover:scale-110 hover:bg-[#134169] transition-transform duration-300 ease-in-out mb-4"
                >
                  Saiba mais
                </Button>
              </Link>
            </div>
          </div>
          :
          <div>
            <div className="flex flex-row gap-[3rem] p-8 mb-4 bg-gradient-to-r from-[#AA8E4B] to-[#f8e4b4]">
              <Image
                src="/enfer-main.png"
                alt="Enfermagem"
                width={500}
                height={300}
                className="rounded-2xl" />
              <div className="flex flex-col justify-center gap-[1rem]">
                <h1 className="font-bold text-3xl tracking-wide uppercase">
                  Pós-graduação Lato Sensu em
                </h1>
                <h1 className="p-2 font-bold text-3xl tracking-wide uppercase bg-gradient-to-r to-[#196193] from-[#AA8E4B] 
                text-[#FAFAFA]">
                  Enfermagem Dermatológica Estética
                </h1>
                <h1 className="text-balance font-medium text-xl">
                  Transforme sua paixão em prosperidade: Torne-se um especialista em Estética Avançada com a nossa Pós e alcance a independência financeira que você sempre sonhou!
                </h1>
                <Link href="/cursos/posgraduacao/enfermagem">
                  <Button
                    variant="default"
                    size="default"
                    className="text-white text-xl font-semibold uppercase bg-[#134169]
                hover:scale-110 hover:bg-[#134169] transition-transform duration-300 ease-in-out mb-4"
                  >
                    Saiba mais
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        }

        {/* Biomedicina */}
        {isMobile ?
          <div className="flex flex-col gap-8 p-8 mb-4 bg-gradient-to-r from-[#AA8E4B] to-[#f8e4b4]">
            <Image
              src="/biomed-main.png"
              alt="Biomedicina"
              width={500}
              height={300}
              className="rounded-2xl" />
            <div className="flex flex-col justify-center gap-[1rem]">
              <h1 className="font-bold text-2xl tracking-wide uppercase">
                Pós-graduação Lato Sensu em
              </h1>
              <h1 className="p-2 font-bold text-2xl tracking-wide uppercase bg-gradient-to-r to-[#196193] from-[#AA8E4B] 
                text-[#FAFAFA]">
                Biomedicina em Estética
              </h1>
              <h1 className="text-balance font-medium text-xl">
                Eleve sua carreira na Farmácia: Especialize-se em Estética Avançada com nossa Pós e conquiste um futuro de sucesso e reconhecimento!
              </h1>
              <Link href="/cursos/posgraduacao/biomedicina">
                <Button
                  variant="default"
                  size="default"
                  className="text-white text-xl font-semibold uppercase bg-[#134169]
                hover:scale-110 hover:bg-[#134169] transition-transform duration-300 ease-in-out mb-4"
                >
                  Saiba mais
                </Button>
              </Link>
            </div>
          </div>
          :
          <div>
            <div className="flex flex-row gap-[3rem] p-8 mb-4 bg-gradient-to-r from-[#AA8E4B] to-[#f8e4b4]">
              <Image
                src="/biomed-main.png"
                alt="Biomedicina"
                width={500}
                height={300}
                className="rounded-2xl" />
              <div className="flex flex-col justify-center gap-[1rem]">
                <h1 className="font-bold text-3xl tracking-wide uppercase">
                  Pós-graduação Lato Sensu em
                </h1>
                <h1 className="p-2 font-bold text-3xl tracking-wide uppercase bg-gradient-to-r to-[#196193] from-[#AA8E4B] 
                text-[#FAFAFA]">
                  Biomedicina em Estética
                </h1>
                <h1 className="text-balance font-medium text-xl">
                  Eleve sua carreira na Farmácia: Especialize-se em Estética Avançada com nossa Pós e conquiste um futuro de sucesso e reconhecimento!
                </h1>
                <Link href="/cursos/posgraduacao/biomedicina">
                  <Button
                    variant="default"
                    size="default"
                    className="text-white text-xl font-semibold uppercase bg-[#134169]
                hover:scale-110 hover:bg-[#134169] transition-transform duration-300 ease-in-out mb-4"
                  >
                    Saiba mais
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        }

        {/* Farmácia */}
        {isMobile ?
          <div className="flex flex-col gap-8 p-8 bg-gradient-to-r from-[#AA8E4B] to-[#f8e4b4]">
            <Image
              src="/farma-main.png"
              alt="Farmácia"
              width={500}
              height={300}
              className="rounded-2xl" />
            <div className="flex flex-col justify-center gap-[1rem]">
              <h1 className="font-bold text-2xl tracking-wide uppercase">
                Pós-graduação Lato Sensu em
              </h1>
              <h1 className="p-2 font-bold text-2xl tracking-wide uppercase bg-gradient-to-r to-[#196193] from-[#AA8E4B] 
                text-[#FAFAFA]">
                Farmácia em Estética
              </h1>
              <h1 className="text-balance font-medium text-xl">
                Combine seu desejo de ajudar pessoas com prestígio profissional: Especialize-se em Estética Avançada com nossa Pós e alcance um novo patamar de reconhecimento e sucesso!
              </h1>
              <Link href="/cursos/posgraduacao/farmácia">
                <Button
                  variant="default"
                  size="default"
                  className="text-white text-xl font-semibold uppercase bg-[#134169]
                hover:scale-110 hover:bg-[#134169] transition-transform duration-300 ease-in-out mb-4"
                >
                  Saiba mais
                </Button>
              </Link>
            </div>
          </div>
          :
          <div>
            <div className="flex flex-row gap-[3rem] p-8 bg-gradient-to-r from-[#AA8E4B] to-[#f8e4b4]">
              <Image
                src="/farma-main.png"
                alt="Farmácia"
                width={500}
                height={300}
                className="rounded-2xl" />
              <div className="flex flex-col justify-center gap-[1rem]">
                <h1 className="font-bold text-3xl tracking-wide uppercase">
                  Pós-graduação Lato Sensu em
                </h1>
                <h1 className="p-2 font-bold text-3xl tracking-wide uppercase bg-gradient-to-r to-[#196193] from-[#AA8E4B] 
                text-[#FAFAFA]">
                  Farmácia em Estética
                </h1>
                <h1 className="text-balance font-medium text-xl">
                  Combine seu desejo de ajudar pessoas com prestígio profissional: Especialize-se em Estética Avançada com nossa Pós e alcance um novo patamar de reconhecimento e sucesso!
                </h1>
                <Link href="/cursos/posgraduacao/farmácia">
                  <Button
                    variant="default"
                    size="default"
                    className="text-white text-xl font-semibold uppercase bg-[#134169]
                hover:scale-110 hover:bg-[#134169] transition-transform duration-300 ease-in-out mb-4"
                  >
                    Saiba mais
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        }
      </section>

      {/* 4a seção */}
      <section
        className={`flex flex-col py-4 ${isMobile ? "items-center" : ""}`}
      >
        {isMobile ?
          <div className="flex flex-col items-center gap-4">
            <h1 className="font-bold text-2xl text-pretty">
              O mercado da estética é o terceiro mercado que mais cresce no Brasil. <br />
              Ganhe em 1 dia em seu consultório com todo conforto e tranquilidade o que você ganharia em um plantão exaustivo.
            </h1>
          </div>
          : <div className="flex flex-col gap-8 pb-8">
            <h1 className="font-bold text-3xl text-center">
              O mercado da estética é o terceiro mercado que mais cresce no Brasil.
              Ganhe em 1 dia em seu consultório com todo conforto e tranquilidade o que você ganharia em um plantão exaustivo.
            </h1>
          </div>
        }
      </section>

      {/* 8a seção */}
      <section>
        <FloatingButton />
        <ScrollToTopButton />
      </section>
    </main >
  );
} 