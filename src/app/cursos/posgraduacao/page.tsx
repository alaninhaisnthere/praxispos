"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";


import Link from "next/link";
import FloatingButton from "@/components/FloatingButton";
import ScrollToTopButton from "@/components/ScrollToTop";
import Button from "@/components/Button";
import FormComponent from "@/components/Forms";

export default function PosGraduacao() {
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
            src={isMobile ? "/cursos-main-mobile.webp" : "/cursos-main.webp"}
            alt="Imagem de fundo"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </section>

      {/* 3a seção */}

      <section
        className="flex flex-col p-4 items-center"
      >

        {/* Enfermagem */}

        {isMobile ?
          <div className="flex flex-col gap-8 p-8 mb-4 bg-gradient-to-r from-[#AA8E4B] to-[#f8e4b4]">
            <Image
              src="/enfer-main.webp"
              alt="Enfermagem"
              width={500}
              height={300}
              className="rounded-2xl" />
            <div className="flex flex-col justify-center gap-[1rem]">
              <h1 className="font-bold text-xl tracking-wide uppercase">
                Pós-graduação Lato Sensu em
              </h1>
              <h1 className="p-2 font-bold text-xl tracking-wide uppercase bg-gradient-to-r to-[#196193] from-[#AA8E4B] 
                text-[#FAFAFA]">
                Enfermagem Dermatológica em Estética
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
                src="/enfer-main.webp"
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
                Enfermagem Dermatológica em Estética
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
              src="/biomed-main.webp"
              alt="Biomedicina"
              width={500}
              height={300}
              className="rounded-2xl" />
            <div className="flex flex-col justify-center gap-[1rem]">
              <h1 className="font-bold text-xl tracking-wide uppercase">
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
                src="/biomed-main.webp"
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
              src="/farma-main.webp"
              alt="Farmácia"
              width={500}
              height={300}
              className="rounded-2xl" />
            <div className="flex flex-col justify-center gap-[1rem]">
              <h1 className="font-bold text-xl tracking-wide uppercase">
                Pós-graduação Lato Sensu em
              </h1>
              <h1 className="p-2 font-bold text-2xl tracking-wide uppercase bg-gradient-to-r to-[#196193] from-[#AA8E4B] 
                text-[#FAFAFA]">
                Farmácia em Estética
              </h1>
              <h1 className="text-balance font-medium text-xl">
                Combine seu desejo de ajudar pessoas com prestígio profissional: Especialize-se em Estética Avançada com nossa Pós e alcance um novo patamar de reconhecimento e sucesso!
              </h1>
              <Link href="/cursos/posgraduacao/farmacia">
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
                src="/farma-main.webp"
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
                <Link href="/cursos/posgraduacao/farmacia">
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

      {/* impacto */}
      <section className="relative w-full py-10">
        <div className="absolute w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] inset-0 bg-[#134169] z-0"></div>
        {isMobile ? (
          <div className="relative z-10 flex flex-col items-center gap-8">
            <Image
              src="/mec-form.webp"
              alt="MEC"
              width={700}
              height={700}
              layout="responsive"
              objectFit="cover"
              priority
            />
            <div className="text-center">
            <h1 className="text-2xl text-[#FAFAFA] text-pretty font-semibold leading-relaxed tracking-wide">
                O mercado da estética é o terceiro mercado que mais cresce no Brasil.
                <br />
                <span className="font-bold underline underline-offset-8 decoration-dotted">
                  Ganhe em 1 dia em seu consultório com todo conforto e tranquilidade o que você ganharia em um plantão exaustivo.
                </span>
              </h1>
            </div>
          </div>
        ) : (
          <div className="relative z-10 flex flex-row gap-[3rem] pb-8">
            <Image
              src="/mec-form.webp"
              alt="MEC"
              width={700}
              height={700}
              layout="responsive"
              objectFit="cover"
              priority
            />
            <div className="flex flex-col justify-center gap-6">
              <h1 className="text-2xl text-[#FAFAFA] text-pretty font-semibold leading-relaxed tracking-wide">
                O mercado da estética é o terceiro mercado que mais cresce no Brasil.
                <br />
                <span className="font-bold underline underline-offset-8 decoration-dotted">
                  Ganhe em 1 dia em seu consultório com todo conforto e tranquilidade o que você ganharia em um plantão exaustivo.
                </span>
              </h1>
            </div>
          </div>
        )}
      </section>

      {/* form lead */}
      <section
        className={`flex flex-col ${isMobile ? "items-center" : ""}`}
      >
      </section><section className="relative w-full py-10">
        <div className="absolute w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] inset-0 bg-gradient-to-r from-cyan-900 to-sky-900 z-0"></div>
        {isMobile ?
          <div className="relative z-10 flex flex-col items-center gap-[2rem]">
            <h1 className="text-2xl text-balance text-center leading-relaxed text-[#FAFAFA] font-semibold">
              Preencha o cadastro e seja atendido pela nossa equipe de consultores
            </h1>
            <Image
              src="/arrow-d.webp"
              alt="Seta"
              width={30}
              height={30}
              className="animate-bounce"
            />
            <div className="flex justify-center">
              <FormComponent />
            </div>
          </div>
          :
          <div className="relative z-10 flex flex-row justify-center gap-[3rem] pb-8">
            <div className="flex flex-col justify-center items-center gap-[2rem]">
              <h1 className="text-3xl text-pretty text-center leading-relaxed text-[#FAFAFA] font-semibold">
                Preencha o cadastro e seja atendido pela nossa equipe de consultores
              </h1>
              <Image
                src="/arrow-d.webp"
                alt="Seta"
                width={30}
                height={30}
                className="animate-bounce"
              />
              <div className="flex justify-center">
                <FormComponent />
              </div>
            </div>
          </div>
        }
      </section>

      {/* floatings */}
      <section className="z-50">
        <FloatingButton message="Olá! Gostaria de mais informações sobre a pós-graduação da Práxis." />
        <ScrollToTopButton />
      </section>
    </main >
  );
} 