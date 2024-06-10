"use client";

import React, { useEffect, useState } from "react";

import { Divider } from "@nextui-org/react";
import Image from "next/image";


import Link from "next/link";
import FloatingButton from "@/components/FloatingButton";
import ScrollToTopButton from "@/components/ScrollToTop";

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
            src={isMobile ? "/sobrenos-mobile.png" : "/sobrenos.png"}
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
              width={isMobile ? 250 : 250}
              height={isMobile ? 100 : 100}
            />
          </div>
          <h1
            className={`text-left uppercase font-gothammedium text-[#f7dc9c] ${isMobile ? "text-5xl" : "text-6xl"}`}
          >
            conheça a <span className="font-bold font-gothamblack italic">práxis</span>
          </h1>
          <p className={`text-left uppercase font-gothammedium text-[#fafafa] ${isMobile ? "text-xl" : "text-4xl"}`}>
            um pouco da nossa história.
          </p>
        </div>
      </section>

      {/* 1a seção */}
      <section
        className={`flex flex-col pt-8 pb-4 ${isMobile ? "items-center pb-2" : ""}`}
      >
        {isMobile ?
          <div className="flex flex-col gap-8">
            <h1 className="font-extrabold text-3xl uppercase">
              Quem Somos?
            </h1>
            <Image
              src="/quemsomos.png"
              alt="Quem somos"
              width={500}
              height={500}
            />
            <h1 className="font-medium text-2xl text-pretty">
              Você ama a sua profissão, ama cuidar das pessoas, mas sabe que
              pode ir além e conquistar a tão sonhada{" "}
              <span className="italic">independência financeira</span> dentro da
              área da saúde!
            </h1>
            <h1 className="font-medium text-2xl text-pretty">
              E se eu te falar que existe um mercado extremamente aquecido, que
              movimenta <span className="italic">bilhões de reais</span> no
              Brasil, onde cada vez mais as pessoas procuram por tratamentos
              estéticos para{" "}
              <span className="italic">levantarem a auto-estima</span>?
            </h1>
            <h1 className="font-bold text-2xl text-pretty">
              Sim! Você,{" "}
              <span className="italic text-[#114264]">enfermeiro</span>,{" "}
              <span className="italic text-[#114264]">biomédico</span> ou{" "}
              <span className="italic text-[#114264]">farmacêutico</span>, pode
              mudar o rumo da sua carreira profissional fazendo parte do mercado
              da estética!
            </h1>
            <h1 className="font-bold text-2xl text-pretty">
              Receba em 1 dia de consultório o que levaria em plantões
              exaustivos, tendo mais qualidade de vida, trabalhando com
              tranquilidade e segurança e se tornando uma{" "}
              <span className="italic text-[#114264]">referência</span> na área.
            </h1>
          </div>
          :
          <div>
            <div className="flex flex-row gap-[3rem] pb-8">
              <Image
                src="/quemsomos.png"
                alt="Quem somos"
                width={700}
                height={500} />
              <div className="flex flex-col justify-center gap-3">
                <h1 className="font-extrabold text-3xl tracking-wide uppercase">
                  Quem Somos?
                </h1>
                <h1 className="text-balance text-xl">
                  O Instituto Práxis passou por um reposicionamento de marca, adotando um novo nome, uma nova identidade visual e uma nova maneira de se conectar com você, mas trazendo consigo anos de experiência de seus sócios e um corpo docente altamente capacitado.
                  Incorporamos à Práxis tudo o que aprendemos ao longo desses anos no mercado educacional voltado para a estética, mas queríamos ir além de oferecer excelência nos estudos, tecnologia e a melhor pós-graduação em estética avançada de Curitiba.
                </h1>
                <h1 className="text-balance text-xl">
                  Queremos que você, Enfermeiro, Biomédico e Farmacêutico, faça parte da nossa família e se una a nós com um propósito comum:
                </h1>
                <h1 className="text-xl text-pretty uppercase text-white font-bold bg-gradient-to-r to-[#196193] from-[#AA8E4B] px-6 py-2 mb-2">
                  transformar a sua vida e fazer a diferença no mundo da estética e da saúde.
                </h1>
                <h1 className="text-balance text-xl">
                  Acreditamos que a educação vai além dos livros e das salas de aula. Trata-se de experiências reais, conexões humanas e crescimento pessoal.
                  Nossa logomarca, a semente da vida, representa a nossa crença no potencial que cada um carrega dentro de si. Assim como uma semente cresce e se transforma em algo belo e poderoso, estamos aqui para nutrir e ajudar você a florescer, alcançar seus objetivos e realizar seus sonhos.
                </h1>
              </div>
            </div>
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