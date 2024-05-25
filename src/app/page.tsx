"use client";

import React, { useEffect, useState } from "react";

import { Divider } from "@nextui-org/react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

import Button from "@/components/Button";
import CardSection from "@/components/CardSection";
import FAQ from "@/components/FAQ";
import FloatingButton from "@/components/FloatingButton";
import FormComponent from "@/components/Forms";
import ScrollToTopButton from "@/components/ScrollToTop";
import Subjects from "@/components/Subjects";

import arrowR from "../../public/arrow-r.png";
import mobileHeroBG from "../../public/hero-bg-mobile.png";
import heroBG from "../../public/hero-bg.png";
import Image2 from "../../public/image-1.png";
import Image1 from "../../public/image-2.png";
import Image3 from "../../public/image-3.png";
import Image4 from "../../public/image-4.png";
import logoHero from "../../public/logo-hero.png";
import Link from "next/link";

export default function Home() {
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
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[778px]">
        <div className="absolute inset-0">
          <Image
            src={isMobile ? mobileHeroBG : heroBG}
            alt="Imagem de fundo"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div
          className={`relative z-10 flex flex-col items-left justify-center h-full px-8 ${isMobile ? "gap-1 ml-4 bottom-44" : "gap-5 ml-80"}`}
        >
          <div className={`mb-${isMobile ? 1 : 3}`}>
            <Image
              src={logoHero}
              alt="Logo Hero"
              width={isMobile ? 150 : 250}
              height={isMobile ? 60 : 100}
            />
          </div>
          <p
            className={`text-white text-left font-semibold text-sm tracking-wide mb-${isMobile ? "" : 4} ${isMobile ? "text-xs" : ""}`}
          >
            ENFERMEIRO - BIOMÉDICO - FARMACÊUTICO
          </p>
          <h1
            className={`text-white text-left font-bold ${isMobile ? "text-3xl my-3" : "text-5xl"}`}
          >
            UMA NOVA <br />
            HISTÓRIA ESTÁ <br />
            PARA COMEÇAR, <br />
            NA QUAL VOCÊ SERÁ <br />O{" "}
            <span className="text-[#9C7F4A] italic">PROTAGONISTA!</span>
          </h1>
          <ScrollLink to="section-form" smooth={true} duration={500}>
            <div className={`mt-${isMobile ? "" : 8}`}>
              <Button
                variant="default"
                size="default"
                className="text-white font-semibold hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                Seu futuro a um clique
              </Button>
            </div>
          </ScrollLink>
        </div>
      </section>

      {/* 1a seção */}
      <section
        className={`flex flex-col pt-8 pb-4 ${isMobile ? "items-center pb-2" : ""}`}
      >
        {isMobile ?
          <div className="flex flex-col gap-8">
            <h1 className="font-extrabold text-3xl text-prety">
              Cansado de <span className="text-primary">turnos exaustivos</span>
              , de passar datas comemorativas longe da família e se sentir
              <span className="text-primary"> desvalorizado</span>{" "}
              profissionalmente?
            </h1>
            <Image src={Image1} alt="Imagem de enfermeira sentada no chão" />
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
              <span className="italic text-[#196193]">enfermeiro</span>,{" "}
              <span className="italic text-[#196193]">biomédico</span> ou{" "}
              <span className="italic text-[#196193]">farmacêutico</span>, pode
              mudar o rumo da sua carreira profissional fazendo parte do mercado
              da estética!
            </h1>
            <h1 className="font-bold text-2xl text-pretty">
              Receba em 1 dia de consultório o que levaria em plantões
              exaustivos, tendo mais qualidade de vida, trabalhando com
              tranquilidade e segurança e se tornando uma{" "}
              <span className="italic text-[#196193]">referência</span> na área.
            </h1>
          </div>
          : <div className="flex flex-row gap-[3rem] pb-8">
            <Image src={Image1} alt="Imagem de enfermeira sentada no chão" />
            <div className="flex flex-col justify-center gap-6">
              <h1 className="font-extrabold text-3xl text-pretty">
                <h1 className="font-extrabold text-3xl text-pretty">
                  Cansado de{" "}
                  <span className="text-primary">turnos exaustivos</span>, de
                  passar datas comemorativas longe da família e se sentir
                  <span className="text-primary"> desvalorizado</span>{" "}
                  profissionalmente?
                </h1>{" "}
              </h1>
              <h1 className="font-medium text-2xl text-pretty leading-relaxed">
                Você ama a sua profissão, ama cuidar das pessoas, mas sabe que
                pode ir além e conquistar a tão sonhada{" "}
                <span className="italic">independência financeira</span> dentro
                da área da saúde!
              </h1>
              <h1 className="font-medium text-2xl text-pretty leading-relaxed">
                E se eu te falar que existe um mercado extremamente aquecido,
                que movimenta <span className="italic">bilhões de reais</span>{" "}
                no Brasil, onde cada vez mais as pessoas procuram por
                tratamentos estéticos para{" "}
                <span className="italic">levantarem a auto-estima</span>?
              </h1>
              <h1 className="font-bold text-2xl text-pretty leading-relaxed">
                Sim! Você,{" "}
                <span className="italic text-[#196193]">enfermeiro</span>,{" "}
                <span className="italic text-[#196193]">biomédico</span> ou{" "}
                <span className="italic text-[#196193]">farmacêutico</span>,
                pode mudar o rumo da sua carreira profissional fazendo parte do
                mercado da estética!
              </h1>
              <h1 className="font-bold text-2xl text-pretty leading-relaxed">
                Receba em 1 dia de consultório o que levaria em plantões
                exaustivos, tendo mais qualidade de vida, trabalhando com
                tranquilidade e segurança e se tornando uma{" "}
                <span className="italic text-[#196193]">referência</span> na
                área.
              </h1>
            </div>
          </div>
        }
      </section>

      {/* 2a seção */}
      <section
        className={`flex flex-col py-4 ${isMobile ? "items-center" : ""}`}
      >
        {isMobile ?
          <div className="flex flex-col items-center gap-4">
            <h1 className="font-bold text-2xl text-center text-pretty text-transparent bg-gradient-to-r to-[#196193] from-[#AA8E4B] bg-clip-text">
              Apresento a você a Pós Graduação Lato Sensu em Estética Avançada
              do Instituto Práxis
            </h1>
            <Image src={Image2} alt="Imagem de enfermeira sentada no chão" />
            <h1 className="flex flex-col justify-center font-medium text-2xl text-pretty leading-relaxed">
              Aqui você aprenderá as técnicas que são tendências no mercado da
              estética em 2024, como: bioestimuladores ozonioterapia harmonia
              facial além de aulas de biossegurança e empreendedorismo.
            </h1>
            <h1 className="font-bold text-2xl text-pretty text-white bg-gradient-to-r to-[#196193] from-[#AA8E4B] px-6 py-6 my-4">
              Nosso curso levará você a realizar os sonhos que ficaram guardados
              por muito tempo!
            </h1>
            <h1 className="font-bold text-2xl text-center leading-relaxed mb-4">
              Quer conhecer um pouco mais sobre a pós-graduação que irá mudar a
              sua vida?
            </h1>
            <ScrollLink to="section-form" smooth={true} duration={500}>
              <Button
                variant="default"
                size="default"
                className="text-white text-xl font-semibold hover:scale-105 transition-transform duration-300 ease-in-out mb-4"
              >
                SIM, QUERO SABER MAIS!
              </Button>
            </ScrollLink>
          </div>
          : <div className="flex flex-col gap-8 pb-8">
            <h1 className="font-bold text-5xl text-center text-pretty tracking-wide text-transparent bg-gradient-to-r to-[#196193] from-[#AA8E4B] px-8 py-4 bg-clip-text">
              Apresento a você a Pós Graduação Lato Sensu em Estética Avançada
              do Instituto Práxis
            </h1>

            <div className="flex flex-row gap-10 pt-8">
              <Image src={Image2} alt="Imagem de enfermeira sentada no chão" />
              <div className="flex flex-col justify-center gap-6">
                <h1 className="font-medium text-2xl text-pretty leading-relaxed">
                  Aqui você aprenderá as técnicas que são tendências no mercado
                  da estética em 2024, como: bioestimuladores, ozonioterapia,
                  harmonia facial, além de aulas de biossegurança e
                  empreendedorismo.
                </h1>
                <h1 className="font-bold text-2xl text-pretty text-white bg-gradient-to-r to-[#196193] from-[#AA8E4B] px-6 py-2 mb-2">
                  Nosso curso levará você a realizar os sonhos que ficaram
                  guardados por muito tempo!
                </h1>
                <h1 className="font-bold text-2xl text-pretty leading-relaxed">
                  Quer conhecer um pouco mais sobre a pós-graduação que irá
                  mudar a sua vida?
                </h1>
                <ScrollLink to="section-form" smooth={true} duration={500}>
                  <Button
                    variant="default"
                    size="default"
                    className="text-white text-2xl font-semibold tracking-wide hover:scale-105 transition-transform duration-300 ease-in-out"
                  >
                    SIM, QUERO SABER MAIS!
                  </Button>
                </ScrollLink>
              </div>
            </div>
          </div>
        }
      </section>

      {/* 3a seção */}
      <section className="relative w-full py-10">
        <div className="absolute w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] inset-0 bg-gradient-to-r from-[#134169] to-[#5987B8]"></div>
        <CardSection />
      </section>

      {/* 4a seção */}
      <section className="relative w-full py-10">
        <div className="absolute w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] inset-0 bg-gradient-to-r from-[#AA8E4B] to-[#f8e4b4]"></div>
        <div className="relative flex flex-col gap-4 p-10 bg-[#FAFAFA] rounded-lg shadow-lg">
          <div>
            <h2 className="font-bold text-xl pb-2">
              Formação Prática de Excelência:
            </h2>
            <div className="flex items-start mb-2">
              <Image
                src={arrowR}
                alt="Seta"
                width={10}
                height={10}
                className="mt-2 mr-2"
              />
              <p className="font-medium text-lg leading-relaxed">
                Aulas práticas com equipamentos de última geração e técnicas
                modernas.
              </p>
            </div>
            <div className="flex items-start mb-2">
              <Image
                src={arrowR}
                alt="Seta"
                width={10}
                height={10}
                className="mt-2 mr-2"
              />
              <p className="font-medium text-lg leading-relaxed">
                Professores experientes e atuantes no mercado, trazendo cases
                reais e atualizados.
              </p>
            </div>
          </div>
          <Divider
            orientation="horizontal"
            style={{ width: "100%", height: "2px", backgroundColor: "#9A792D" }}
          />
          <div>
            <h2 className="font-bold text-xl pb-2">
              Flexibilidade e Conveniência:
            </h2>
            <div className="flex items-start mb-2">
              <Image
                src={arrowR}
                alt="Seta"
                width={10}
                height={10}
                className="mt-2 mr-2"
              />
              <p className="font-medium text-lg leading-relaxed">
                Encontros presenciais uma vez por mês, permitindo que você
                concilie seus estudos com suas atividades profissionais.
              </p>
            </div>
            <div className="flex items-start mb-2">
              <Image
                src={arrowR}
                alt="Seta"
                width={10}
                height={10}
                className="mt-2 mr-2"
              />
              <p className="font-medium text-lg leading-relaxed">
                Localização privilegiada na Gran Universidade, no bairro Portão
                em Curitiba.
              </p>
            </div>
          </div>
          <Divider
            orientation="horizontal"
            style={{ width: "100%", height: "2px", backgroundColor: "#9A792D" }}
          />
          <div>
            <h2 className="font-bold text-xl pb-2">
              Certificado reconhecido pelo MEC:
            </h2>
            <div className="flex items-start mb-2">
              <Image
                src={arrowR}
                alt="Seta"
                width={10}
                height={10}
                className="mt-2 mr-2"
              />
              <p className="font-medium text-lg leading-relaxed">
                <span>
                  <Link
                    href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MTkyODQ=/93916316abe23148507bd4c260e4b878/NzA1MDE="
                    className="font-semibold text-[#134169]"
                  >
                    Clique aqui
                  </Link>
                </span>
                <span> para verificar a nossa certificação junto ao MEC.</span>
              </p>
            </div>
          </div>
          <Divider
            orientation="horizontal"
            style={{ width: "100%", height: "2px", backgroundColor: "#9A792D" }}
          />
          <div>
            <h2 className="font-bold text-xl pb-2">Benefícios:</h2>
            <div className="flex items-start mb-2">
              <Image
                src={arrowR}
                alt="Seta"
                width={10}
                height={10}
                className="mt-2 mr-2"
              />
              <p className="font-medium text-lg leading-relaxed">
                Turmas Limitadas para uma melhor experiência educacional.
              </p>
            </div>
            <div className="flex items-start mb-2">
              <Image
                src={arrowR}
                alt="Seta"
                width={10}
                height={10}
                className="mt-2 mr-2"
              />
              <p className="font-medium text-lg leading-relaxed">
                Atendimento totalmente personalizado.
              </p>
            </div>
            <div className="flex items-start mb-2">
              <Image
                src={arrowR}
                alt="Seta"
                width={10}
                height={10}
                className="mt-2 mr-2"
              />
              <p className="font-medium text-lg leading-relaxed">
                Práticas Hands-on supervisionadas.
              </p>
            </div>
            <div className="flex items-start mb-2">
              <Image
                src={arrowR}
                alt="Seta"
                width={10}
                height={10}
                className="mt-2 mr-2"
              />
              <p className="font-medium text-lg leading-relaxed">
                Todo material teórico e prático 100% incluso.
              </p>
            </div>
          </div>
          <Divider
            orientation="horizontal"
            style={{ width: "100%", height: "2px", backgroundColor: "#9A792D" }}
          />
          <Subjects />
        </div>
      </section>

      {/* 5a seção */}
      <section>
        {isMobile ?
          <div className="flex flex-col items-center gap-4 py-10">
            <h1
              className={`relative font-bold text-black tracking-wide leading-relaxed ${isMobile ? "text-3xl text-center" : "text-2xl"}`}
            >
              POR QUE ESCOLHER O INSTITUTO PRÁXIS?
            </h1>
            <Image src={Image4} alt="Imagem" width={400} height={400} />
            <p className="font-medium text-lg text-pretty leading-relaxed">
              Nossa instituição possui uma longa trajetória de sucesso na
              formação de profissionais na área da estética. Estamos em um novo
              momento, com uma marca renovada, mas mantendo o compromisso com a{" "}
              <b>qualidade</b> e a <b>inovação educacional</b>.
            </p>
            <p className="font-medium text-lg text-pretty leading-relaxed">
              Queremos que você, <i>Enfermeiro</i>, <i>Biomédico</i> e{" "}
              <i>Farmacêutico</i>, faça parte da nossa família e se una a nós
              com um propósito comum: <b>transformar</b> a sua vida e fazer a{" "}
              <b>diferença</b> no mundo da estética e da saúde. Acreditamos que
              a <b>educação</b> vai além dos livros e das salas de aula.
              Trata-se de <b>experiências reais</b>, <b>conexões humanas</b> e{" "}
              <b>crescimento pessoal</b>.
            </p>
            <h1 className="font-bold text-2xl leading-relaxed mb-2 text-pretty">
              Vamos mudar o rumo do seu futuro profissional?{" "}
            </h1>
            <ScrollLink to="section-form" smooth={true} duration={500}>
              <Button
                variant="default"
                size="default"
                className="text-white text-xl font-semibold hover:scale-105 transition-transform duration-300 ease-in-out mb-4"
              >
                QUERO MAIS INFORMAÇÕES
              </Button>
            </ScrollLink>
          </div>
          : <div className="flex flex-col gap-8 py-10 mb-10">
            <div className="flex flex-row gap-10 pt-8">
              <div className="flex flex-col justify-center gap-6">
                <h1
                  className={`relative font-bold text-black tracking-wide leading-relaxed ${isMobile ? "text-2xl" : "text-2xl"}`}
                >
                  POR QUE ESCOLHER O INSTITUTO PRÁXIS?
                </h1>
                <p className="font-medium text-lg text-pretty leading-relaxed">
                  Nossa instituição possui uma longa trajetória de sucesso na
                  formação de profissionais na área da estética. Estamos em um
                  novo momento, com uma marca renovada, mas mantendo o
                  compromisso com a <b>qualidade</b> e a{" "}
                  <b>inovação educacional</b>.
                </p>
                <p className="font-medium text-lg text-pretty leading-relaxed">
                  Queremos que você, <i>Enfermeiro</i>, <i>Biomédico</i> e{" "}
                  <i>Farmacêutico</i>, faça parte da nossa família e se una a
                  nós com um propósito comum: <b>transformar</b> a sua vida e
                  fazer a <b>diferença</b> no mundo da estética e da saúde.
                  Acreditamos que a <b>educação</b> vai além dos livros e das
                  salas de aula. Trata-se de <b>experiências reais</b>,{" "}
                  <b>conexões humanas</b> e <b>crescimento pessoal</b>.
                </p>
                <h1 className="font-bold text-2xl leading-relaxed mb-2 text-pretty">
                  Vamos mudar o rumo do seu futuro profissional?{" "}
                </h1>
                <ScrollLink to="section-form" smooth={true} duration={500}>
                  <Button
                    variant="default"
                    size="default"
                    className="text-white text-xl font-semibold hover:scale-105 transition-transform duration-300 ease-in-out mb-4"
                  >
                    QUERO MAIS INFORMAÇÕES
                  </Button>
                </ScrollLink>
              </div>
              <Image src={Image4} alt="Imagem" width={700} height={700} />
            </div>
          </div>
        }
      </section>

      {/* 6a seção */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <Image
          src={Image3}
          alt="Imagem de fundo"
          layout="responsive"
          objectFit="cover"
        />
      </section>

      {/* 7a seção */}
      <section id="section-form" className="relative w-full py-5 pb-10">
        <div className="text-center">
          <div className="mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="md:w-1/2 text-left pr-5">
                <div className="flex flex-col justify-center items-start mb-3">
                  <div className="flex flex-row items-center justify-start mb-4">
                    <h1
                      className={`font-bold text-3xl ${isMobile ? "text-center" : "text-left"}`}
                    >
                      Benefícios Exclusivos para os{" "}
                      <span className="text-[#AA8E4B]">
                        Primeiros Inscritos!
                      </span>
                    </h1>
                  </div>
                  <div className="flex items-start mb-2 py-2 px-2 bg-[#134169c9] hover:scale-105 transition-transform duration-300 ease-in-out">
                    <Image
                      src={arrowR}
                      alt="Seta"
                      width={10}
                      height={10}
                      className="mt-2 mr-2"
                    />
                    <p className="font-medium text-xl leading-relaxed text-[#FAFAFA]">
                      <span className="font-semibold">Descontos</span> especiais
                      na matrícula.
                    </p>
                  </div>
                  <div className="flex items-start mb-2 py-2 px-2 bg-[#134169c9] hover:scale-105 transition-transform duration-300 ease-in-out">
                    <Image
                      src={arrowR}
                      alt="Seta"
                      width={10}
                      height={10}
                      className="mt-2 mr-2"
                    />
                    <p className="font-medium text-xl leading-relaxed text-[#FAFAFA]">
                      Canal com conteúdos exclusivos para que você já entre no
                      clima da pós enquanto espera o primeiro dia de aula.
                    </p>
                  </div>
                  <div className="flex items-start mb-2 py-2 px-2 bg-[#134169c9] hover:scale-105 transition-transform duration-300 ease-in-out">
                    <Image
                      src={arrowR}
                      alt="Seta"
                      width={10}
                      height={10}
                      className="mt-2 mr-2"
                    />
                    <p className="font-medium text-xl leading-relaxed text-[#FAFAFA]">
                      Programa de incentivo: indique um amigo para fazer a pós
                      junto com você e ganhe descontos cumulativos, podendo
                      estudar de graça na Práxis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <FormComponent />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8a seção */}
      <section className="pb-10">
        <FAQ />
      </section>
      <section>
        <FloatingButton />
        <ScrollToTopButton />
      </section>
    </main>
  );
}