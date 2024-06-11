"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";


import Link from "next/link";
import FloatingButton from "@/components/FloatingButton";
import ScrollToTopButton from "@/components/ScrollToTop";

export default function SobreNos() {
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
            <h1 className="font-bold  text-3xl tracking-wide uppercase">
              Quem Somos?
            </h1>
            <Image
              src="/quemsomos.png"
              alt="Quem somos"
              width={700}
              height={500} />
            <h1 className="text-balance text-xl">
              O Instituto Práxis passou por um reposicionamento de marca, adotando um novo nome, uma nova identidade visual e uma nova maneira de se conectar com você, mas trazendo consigo anos de experiência de seus sócios e um corpo docente altamente capacitado.
              Incorporamos à Práxis tudo o que aprendemos ao longo desses anos no mercado educacional voltado para a estética, mas queríamos ir além de oferecer excelência nos estudos, tecnologia e a melhor pós-graduação em estética avançada de Curitiba.
            </h1>
            <h1 className="text-balance text-xl">
              Queremos que você, Enfermeiro, Biomédico e Farmacêutico, faça parte da nossa família e se una a nós com um propósito comum:
            </h1>
            <h1 className="text-xl text-pretty uppercase text-white font-bold bg-gradient-to-r to-[#196193] from-[#AA8E4B] px-6 py-2">
              transformar a sua vida e fazer a diferença no mundo da estética e da saúde.
            </h1>
            <h1 className="text-balance text-xl">
              Acreditamos que a educação vai além dos livros e das salas de aula. Trata-se de experiências reais, conexões humanas e crescimento pessoal.
              Nossa logomarca, a semente da vida, representa a nossa crença no potencial que cada um carrega dentro de si. Assim como uma semente cresce e se transforma em algo belo e poderoso, estamos aqui para nutrir e ajudar você a florescer, alcançar seus objetivos e realizar seus sonhos.
            </h1>
          </div>
          :
          <div>
            <div className="flex flex-row gap-[3rem] pb-8">
              <div className="flex flex-col justify-center gap-3">
                <h1 className="font-bold  text-3xl tracking-wide uppercase">
                  Quem Somos?
                </h1>
                <h1 className="text-balance text-xl">
                  O Instituto Práxis passou por um reposicionamento de marca, adotando um novo nome, uma nova identidade visual e uma nova maneira de se conectar com você, mas trazendo consigo anos de experiência de seus sócios e um corpo docente altamente capacitado.
                  Incorporamos à Práxis tudo o que aprendemos ao longo desses anos no mercado educacional voltado para a estética, mas queríamos ir além de oferecer excelência nos estudos, tecnologia e a melhor pós-graduação em estética avançada de Curitiba.
                </h1>
                <h1 className="text-balance text-xl">
                  Queremos que você, Enfermeiro, Biomédico e Farmacêutico, faça parte da nossa família e se una a nós com um propósito comum:
                </h1>
                <h1 className="text-xl text-pretty uppercase text-white font-bold bg-gradient-to-r to-[#196193] from-[#AA8E4B] px-6 py-2">
                  transformar a sua vida e fazer a diferença no mundo da estética e da saúde.
                </h1>
                <h1 className="text-balance text-xl">
                  Acreditamos que a educação vai além dos livros e das salas de aula. Trata-se de experiências reais, conexões humanas e crescimento pessoal.
                  Nossa logomarca, a semente da vida, representa a nossa crença no potencial que cada um carrega dentro de si. Assim como uma semente cresce e se transforma em algo belo e poderoso, estamos aqui para nutrir e ajudar você a florescer, alcançar seus objetivos e realizar seus sonhos.
                </h1>
              </div>
              <Image
                src="/quemsomos.png"
                alt="Quem somos"
                width={700}
                height={500} />
            </div>
          </div>
        }
      </section>

      {/* 2a seção */}
      <section
        className={`flex flex-col pt-8 pb-4 ${isMobile ? "items-center pb-2" : ""}`}
      >
        {isMobile ?
          <div className="flex flex-col gap-8">
            <div className="flex flex-col justify-center gap-3">
              <h1 className="text-xl text-pretty uppercase text-white font-bold bg-[#196193] px-6 py-2">
                Missão
              </h1>
              <h1 className="text-balance text-xl">
                Nosso compromisso é preparar você, enfermeiros, biomédicos e farmacêuticos, para oferecer tratamentos estéticos inovadores com segurança, ética e responsabilidade, enquanto promovemos o seu crescimento pessoal e profissional.
              </h1>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <h1 className="text-xl text-pretty uppercase text-white font-bold bg-[#196193] px-6 py-2">
                Visão
              </h1>
              <h1 className="text-balance text-xl">
                Queremos ser mais do que uma referência em educação na área da saúde. Queremos ser o seu parceiro de jornada, proporcionando uma experiência educacional que vai além do técnico, abraçando suas paixões, sonhos e aspirações.
              </h1>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <h1 className="text-xl text-pretty uppercase text-white font-bold bg-[#196193] px-6 py-2">
                Valores
              </h1>
              <h1 className="text-balance text-xl">
                Estamos comprometidos com a excelência educacional. Valorizamos a inovação e o desenvolvimento humano. Nosso trabalho é pautado pela ética e responsabilidade. Respeitamos sua individualidade e seu potencial único.
              </h1>
            </div>
            <h1 className="text-2xl uppercase text-transparent font-extrabold text-center bg-gradient-to-r to-[#196193] from-[#AA8E4B] bg-clip-text">
              No Instituto Práxis, você não é apenas um estudante.
              <br />
              Você é parte da nossa família.
            </h1>
          </div>
          :
          <div>
            <div className="flex flex-row items-start gap-[3rem] pb-3">
              <div className="flex flex-col justify-center gap-3">
                <h1 className="text-xl text-pretty uppercase text-white font-bold bg-[#196193] px-6 py-2">
                  Missão
                </h1>
                <h1 className="text-balance text-xl">
                  Nosso compromisso é preparar você, enfermeiros, biomédicos e farmacêuticos, para oferecer tratamentos estéticos inovadores com segurança, ética e responsabilidade, enquanto promovemos o seu crescimento pessoal e profissional.
                </h1>
              </div>
              <div className="flex flex-col justify-center gap-3">
                <h1 className="text-xl text-pretty uppercase text-white font-bold bg-[#196193] px-6 py-2">
                  Visão
                </h1>
                <h1 className="text-balance text-xl">
                  Queremos ser mais do que uma referência em educação na área da saúde. Queremos ser o seu parceiro de jornada, proporcionando uma experiência educacional que vai além do técnico, abraçando suas paixões, sonhos e aspirações.
                </h1>
              </div>
              <div className="flex flex-col justify-center gap-3">
                <h1 className="text-xl text-pretty uppercase text-white font-bold bg-[#196193] px-6 py-2">
                  Valores
                </h1>
                <h1 className="text-balance text-xl">
                  Estamos comprometidos com a excelência educacional. Valorizamos a inovação e o desenvolvimento humano. Nosso trabalho é pautado pela ética e responsabilidade. Respeitamos sua individualidade e seu potencial único.
                </h1>
              </div>
            </div>
            <h1 className="text-4xl uppercase text-transparent font-extrabold text-center bg-gradient-to-r to-[#196193] from-[#AA8E4B] bg-clip-text py-5">
              No Instituto Práxis, você não é apenas um estudante.
              <br />
              Você é parte da nossa família.
            </h1>
          </div>
        }
      </section>

      {/* 3a seção */}
      <section
        className={`flex flex-col pt-4 ${isMobile ? "items-center pb-2" : ""}`}
      >
        {isMobile ?
          <div className="flex flex-col gap-8">
            <Image
              src="/mecfbbr.png"
              alt="Quem somos"
              width={700}
              height={500} />
            <div className="flex flex-col justify-center gap-3">
              <h1 className="font-bold text-2xl tracking-wide uppercase">
                Nossas Pós-graduações são certificadas pelo MEC!
              </h1>
              <h1 className="text-balance text-xl">
                O Sucesso da Práxis é solidificado por nossa parceria estratégica com a renomada <strong>Faculdade Brasileira do Recôncavo Baiano</strong>, uma instituição com anos de história e excelência na área educacional. Essa colaboração não apenas reforça a <strong>qualidade de nossos certificados</strong>, mas também garante o reconhecimento oficial pelo <strong>Ministério da Educação (MEC)</strong>, proporcionando a você a tranquilidade e confiança necessárias em sua jornada educacional e profissional.
              </h1>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <h1 className="text-xl text-pretty uppercase text-white font-bold bg-[#AA8E4B] px-6 py-2 my-2">
                Clique abaixo para acessar os links do MEC:
              </h1>
              <div className="flex flex-row justify-evenly pt-2 gap-5">
                <div className="flex flex-col justify-between gap-2">
                  <Link href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MTkyODQ=/93916316abe23148507bd4c260e4b878/NzA1MDM=">
                    <Image
                      src="/biomed-mec.png"
                      alt="Biomedicina"
                      width={150}
                      height={150} />
                  </Link>
                  <h1 className="text-center uppercase font-extrabold pt-2 text-[#2E467F]">
                    Biomedicina
                  </h1>
                </div>

                <div className="flex flex-col justify-between gap-2">
                  <Link href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MTkyODQ=/93916316abe23148507bd4c260e4b878/NzA1MDE=">
                    <Image
                      src="/enfermagem-mec.png"
                      alt="Enfermagem"
                      width={150}
                      height={150} />
                  </Link>
                  <h1 className="text-center uppercase font-extrabold pt-2 text-[#2E467F]">
                    Enfermagem
                  </h1>
                </div>

                <div className="flex flex-col justify-between gap-2">
                  <Link href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MTkyODQ=/93916316abe23148507bd4c260e4b878/NzA1MDI=">
                    <Image
                      src="/farma-mec.png"
                      alt="Farmácia"
                      width={150}
                      height={150} />
                  </Link>
                  <h1 className="text-center uppercase font-extrabold text-[#2E467F]">
                    Farmácia
                  </h1>
                </div>

              </div>
            </div>
          </div>
          :
          <div>
            <div className="flex flex-row gap-[3rem] pb-8">
              <Image
                src="/mecfbbr.png"
                alt="Quem somos"
                width={700}
                height={500} />
              <div className="flex flex-col justify-center gap-3">
                <h1 className="font-bold  text-3xl tracking-wide uppercase">
                  Nossas Pós-graduações são certificadas pelo MEC!
                </h1>
                <h1 className="text-balance text-xl">
                  O Sucesso da Práxis é solidificado por nossa parceria estratégica com a renomada <strong>Faculdade Brasileira do Recôncavo Baiano</strong>, uma instituição com anos de história e excelência na área educacional. Essa colaboração não apenas reforça a <strong>qualidade de nossos certificados</strong>, mas também garante o reconhecimento oficial pelo <strong>Ministério da Educação (MEC)</strong>, proporcionando a você a tranquilidade e confiança necessárias em sua jornada educacional e profissional.
                </h1>
                <div className="flex flex-col justify-center gap-3">
                  <h1 className="text-xl text-pretty uppercase text-white font-bold bg-[#AA8E4B] px-6 py-2 my-5">
                    Clique abaixo para acessar os links do MEC:
                  </h1>
                  <div className="flex flex-row justify-evenly pt-2 gap-5">
                    <div className="flex flex-col justify-between gap-2">
                      <Link href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MTkyODQ=/93916316abe23148507bd4c260e4b878/NzA1MDM=">
                        <Image
                          src="/biomed-mec.png"
                          alt="Biomedicina"
                          width={150}
                          height={150} />
                      </Link>
                      <h1 className="text-center uppercase font-extrabold pt-2 text-[#2E467F]">
                        Biomedicina
                      </h1>
                    </div>
                    <div className="flex flex-col justify-between gap-2">
                      <Link href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MTkyODQ=/93916316abe23148507bd4c260e4b878/NzA1MDE=">
                        <Image
                          src="/enfermagem-mec.png"
                          alt="Enfermagem"
                          width={150}
                          height={150} />
                      </Link>
                      <h1 className="text-center uppercase font-extrabold pt-2 text-[#2E467F]">
                        Enfermagem
                      </h1>
                    </div>

                    <div className="flex flex-col justify-between gap-2">
                      <Link href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MTkyODQ=/93916316abe23148507bd4c260e4b878/NzA1MDI=">
                        <Image
                          src="/farma-mec.png"
                          alt="Farmácia"
                          width={150}
                          height={150} />
                      </Link>
                      <h1 className="text-center uppercase font-extrabold text-[#2E467F]">
                        Farmácia
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </section>

      {/* floatings */}
      <section>
      <FloatingButton message="Olá! Gostaria de mais informações sobre a pós-graduação da Práxis."/>
      <ScrollToTopButton />
      </section>
    </main >
  );
}