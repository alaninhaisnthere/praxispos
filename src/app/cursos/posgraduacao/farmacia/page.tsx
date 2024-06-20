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

import Link from "next/link";

export default function Farmacia() {
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
          <ScrollLink to="section-form" smooth={true} duration={500}>
            <Image
              src={isMobile ? "/farmacia-hero-mobile.webp" : "/farmacia-hero.webp"}
              alt="Imagem de fundo"
              layout="fill"
              objectFit="cover"
              priority
              className="cursor-pointer"
            />
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
              Cansado de{" "}
              <span className="text-[#493B22] underline underline-offset-4 decoration-2 decoration-dotted">turnos exaustivos</span>, de
              passar datas comemorativas longe da família e se sentir{" "}
              <span className="text-[#493B22] underline underline-offset-4 decoration-2 decoration-dotted">desvalorizado</span>{" "}
              profissionalmente?
            </h1>
            <Image
              src="/farmacia-impacto.webp"
              alt="Farmácia"
              width={800}
              height={700} />
            <p className="font-medium text-2xl text-pretty">
              Você ama a sua profissão, ama cuidar das pessoas, mas sabe que
              pode ir além e conquistar a tão sonhada{" "}
              <span className="italic">independência financeira</span> dentro da
              área da saúde!
            </p>
            <p className="font-medium text-2xl text-pretty">
              E se eu te falar que existe um mercado extremamente aquecido, que
              movimenta <span className="italic">bilhões de reais</span> no
              Brasil, onde cada vez mais as pessoas procuram por tratamentos
              estéticos para{" "}
              <span className="italic">levantarem a auto-estima</span>?
            </p>
            <p className="font-bold text-2xl text-pretty">
              Sim! Você,{" "}
              <span className="italic text-[#114264]">farmacêutico</span>,{" "}
              mudar o rumo da sua carreira profissional fazendo parte do mercado
              da estética!
            </p>
            <p className="font-bold text-2xl text-pretty">
              Receba em 1 dia de consultório o que levaria em plantões
              exaustivos, tendo mais qualidade de vida, trabalhando com
              tranquilidade e segurança e se tornando uma{" "}
              <span className="italic text-[#114264]">referência</span> na área.
            </p>
          </div>
          : <div className="flex flex-row gap-[2rem] pb-8">
            <Image
              src="/farmacia-impacto.webp"
              alt="Farmácia"
              width={700}
              height={800} />
            <div className="flex flex-col justify-center gap-6">
              <div className="font-extrabold text-2xl text-pretty">
                <h1 className="font-extrabold text-2xl text-pretty">
                  Cansado de{" "}
                  <span className="text-[#493B22] underline underline-offset-4 decoration-2 decoration-dotted">turnos exaustivos</span>, de
                  passar datas comemorativas longe da família e se sentir{" "}
                  <span className="text-[#493B22] underline underline-offset-4 decoration-2 decoration-dotted">desvalorizado</span>{" "}
                  profissionalmente?
                </h1>{" "}
              </div>
              <p className="font-medium text-xl text-pretty leading-relaxed">
                Você ama a sua profissão, ama cuidar das pessoas, mas sabe que
                pode ir além e conquistar a tão sonhada{" "}
                <span className="italic">independência financeira</span> dentro
                da área da saúde!
              </p>
              <p className="font-medium text-xl text-pretty leading-relaxed">
                E se eu te falar que existe um mercado extremamente aquecido,
                que movimenta <span className="italic">bilhões de reais</span>{" "}
                no Brasil, onde cada vez mais as pessoas procuram por
                tratamentos estéticos para{" "}
                <span className="italic">levantarem a auto-estima</span>?
              </p>
              <p className="font-bold text-xl text-pretty leading-relaxed">
                Sim! Você,{" "}
                <span className="italic underline underline-offset-4 uppercase text-[#114264]">farmacêutico</span>,{" "}pode
                mudar o rumo da sua carreira profissional fazendo parte do mercado
                da estética!
              </p>
              <p className="font-bold text-xl text-pretty leading-relaxed">
                Receba em 1 dia de consultório o que levaria em plantões
                exaustivos, tendo mais qualidade de vida, trabalhando com
                tranquilidade e segurança e se tornando uma referência na
                área.
              </p>
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
            <Image
              src="/farma-main.webp"
              alt="Farmácia"
              width={800}
              height={700} />
            <h1 className="font-extrabold text-2xl uppercase text-center text-pretty text-transparent bg-gradient-to-r to-[#196193] from-[#AA8E4B] bg-clip-text">
              Apresento a você a Pós Graduação Lato Sensu em Farmácia em Estética do Instituto Práxis
            </h1>
            <p className="flex flex-col justify-center font-medium text-2xl text-pretty leading-relaxed">
              Aqui você aprenderá as técnicas que são tendências no mercado da
              estética em 2024, como: bioestimuladores, ozonioterapia, harmonia
              facial além de aulas de biossegurança e empreendedorismo.
            </p>
            <p className="font-bold text-2xl text-pretty text-white bg-gradient-to-r to-[#196193] from-[#AA8E4B] px-6 py-6 my-4">
              Nosso curso levará você a realizar os sonhos que ficaram guardados
              por muito tempo!
            </p>
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
              Apresento a você a Pós Graduação Lato Sensu em Farmácia em Estética do Instituto Práxis

            </h1>
            <div className="flex flex-row gap-10 pt-8">
              <Image
                src="/farma-main.webp"
                alt="Farmácia"
                width={600}
                height={500} />
              <div className="flex flex-col justify-center gap-6">
                <p className="font-medium text-2xl text-pretty leading-relaxed">
                  Aqui você aprenderá as técnicas que são tendências no mercado
                  da estética em 2024, como: bioestimuladores, ozonioterapia,
                  harmonia facial, além de aulas de biossegurança e
                  empreendedorismo.
                </p>
                <p className="font-bold text-2xl text-pretty text-white bg-gradient-to-r to-[#196193] from-[#AA8E4B] px-6 py-2 mb-2">
                  Nosso curso levará você a realizar os sonhos que ficaram
                  guardados por muito tempo!
                </p>
                <p className="font-bold text-2xl text-pretty leading-relaxed">
                  Quer conhecer um pouco mais sobre a pós-graduação que irá
                  mudar a sua vida?
                </p>
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
        <CardSection
          headerText={"Descubra o mundo da Farmácia em Estética"}
          targetText={"Farmácia"} />
      </section>

      {/* 4a seção */}
      <section className="relative w-full py-10">
        <div className="absolute w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] inset-0 bg-gradient-to-r from-[#AA8E4B] to-[#f8e4b4]"></div>
        <div className="relative flex flex-col gap-4 p-10 bg-[#FAFAFA] rounded-lg shadow-lg">
          <div>
            <h2 className="font-bold text-xl pb-2">Benefícios:</h2>
            <div className="flex items-start mb-2">
              <Image
                src="/arrow-r.webp"
                alt="Seta"
                width={10}
                height={10}
                className="mt-2 mr-2"
              />
              <p className="font-medium text-lg leading-relaxed">
                <span className="underline underline-offset-4 decoration-2 decoration-dotted">Turmas Limitadas</span> para uma melhor experiência educacional.
              </p>
            </div>
            <div className="flex items-start mb-2">
              <Image
                src="/arrow-r.webp"
                alt="Seta"
                width={10}
                height={10}
                className="mt-2 mr-2"
              />
              <p className="font-medium text-lg leading-relaxed">
                Atendimento totalmente <span className="underline underline-offset-4 decoration-2 decoration-dotted">personalizado</span>.
              </p>
            </div>
            <div className="flex items-start mb-2">
              <Image
                src="/arrow-r.webp"
                alt="Seta"
                width={10}
                height={10}
                className="mt-2 mr-2"
              />
              <p className="font-medium text-lg leading-relaxed">
                Práticas <span className="underline underline-offset-4 decoration-2 decoration-dotted">Hands-on</span> supervisionadas.
              </p>
            </div>
            <div className="flex items-start mb-2">
              <Image
                src="/arrow-r.webp"
                alt="Seta"
                width={10}
                height={10}
                className="mt-2 mr-2"
              />
              <p className="font-medium text-lg leading-relaxed">
                Todo <span className="underline underline-offset-4 decoration-2 decoration-dotted">material</span> teórico e prático <span className="underline underline-offset-4 decoration-2 decoration-dotted">100% incluso.</span>
              </p>
            </div>
            <div className="flex items-start mb-2">
              <Image
                src="/arrow-r.webp"
                alt="Seta"
                width={10}
                height={10}
                className="mt-2 mr-2"
              />
              <p className="font-medium text-lg leading-relaxed">
                <span className="underline underline-offset-4 decoration-2 decoration-dotted">Professores</span> experientes e <span className="underline underline-offset-4 decoration-2 decoration-dotted">atuantes</span> no mercado, trazendo <span className="underline underline-offset-4 decoration-2 decoration-dotted">casos reais e atualizados.</span>
              </p>
            </div>
            <div className="flex items-start mb-2">
              <Image
                src="/arrow-r.webp"
                alt="Seta"
                width={10}
                height={10}
                className="mt-2 mr-2"
              />
              <p className="font-medium text-lg leading-relaxed">
                <span className="underline underline-offset-4 decoration-2 decoration-dotted">Aulas práticas</span> com equipamentos de <span className="underline underline-offset-4 decoration-2 decoration-dotted">última geração</span> e técnicas <span className="underline underline-offset-4 decoration-2 decoration-dotted">modernas.</span>
              </p>
            </div>
            <div className="flex items-start mb-2">
              <Image
                src="/arrow-r.webp"
                alt="Seta"
                width={10}
                height={10}
                className="mt-2 mr-2"
              />
              <p className="font-medium text-lg leading-relaxed">
                Carga horária de <span className="underline underline-offset-4 decoration-2 decoration-dotted">500 horas</span> sendo <span className="underline underline-offset-4 decoration-2 decoration-dotted">135 horas</span> só de práticas.
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
                src="/arrow-r.webp"
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
                src="/arrow-r.webp"
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
          <Subjects />
        </div>
      </section>

      {/* destaques */}
      <section className="relative w-full py-5 pb-10">
        <div className="text-center">
          <div className="mx-auto">
            <div className="flex flex-col items-center justify-between">
              <div className="md:w-1/2 text-left pr-5">
                <div className="absolute w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] inset-0 bg-gradient-to-r from-cyan-900 to-sky-900"></div>
                <div className="relative flex flex-col justify-center items-center mb-3">
                  <div className="flex flex-row items-center justify-start my-4">
                    <h1
                      className="font-bold text-white text-3xl text-center tracking-wide"
                    >
                      Benefícios Exclusivos para os{" "}
                      <span className="text-[#e9c163] underline underline-offset-8 decoration-dotted">
                        Primeiros Inscritos!
                      </span>
                    </h1>
                  </div>
                  <div>

                    <div className="flex bg-gradient-to-r from-[#f8e4b4] to-[#AA8E4B] items-center mb-2 py-2 px-4 gap-2 hover:scale-105 transition-transform duration-300 ease-in-out">
                      <p className="font-bold text-2xl text-[#112A46]">
                        Descontos especiais na matrícula.
                      </p>
                    </div>

                    <div className="flex bg-gradient-to-r from-[#f8e4b4] to-[#AA8E4B] items-center mb-2 py-2 px-4 gap-2 hover:scale-105 transition-transform duration-300 ease-in-out">
                      <p className="font-bold text-2xl text-[#112A46]">
                        Canal com conteúdos exclusivos para que você já entre no
                        clima da pós enquanto espera o primeiro dia de aula.
                      </p>
                    </div>

                    <div className="flex bg-gradient-to-r from-[#f8e4b4] to-[#AA8E4B] items-center mb-2 py-2 px-4 gap-2 hover:scale-105 transition-transform duration-300 ease-in-out">
                      <p className="font-bold text-2xl text-[#112A46]">
                        Programa de incentivo: <br />
                        Indique um amigo para fazer a pós junto com você e ganhe descontos cumulativos, podendo estudar de graça na Práxis.                      </p>
                    </div>
                  </div>
                  <div className="pt-10">
                    <Image
                      src="/arrow-d.webp"
                      alt="Seta"
                      width={60}
                      height={60}
                      className="animate-bounce"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* texto */}
      <section>
        <h1 className="py-10 font-bold text-center flex justify-center text-3xl">
          Preencha o cadastro e seja atendido pela nossa equipe de consultores:
        </h1>
      </section>

      {/* form */}
      <section id="section-form" className="pb-5 flex justify-center">
        <div className="md:w-1/2">
          <FormComponent />
        </div>
      </section>

      {/* 6a seção */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <Image
          src="/image-3.webp"
          alt="Imagem de fundo"
          width={2000}
          height={2000}
        />
      </section>


      {/* FAQ */}
      <section className="relative z-10 pb-10 mt-10 md:mt-28">
        <FAQ content={"Para se inscrever na Pós Graduação Lato Sensu em <strong>Farmácia em Estética</strong> do Instituto Práxis, é necessário ter graduação completa em <strong>Farmácia</strong>."} />
      </section>

      {/* Floating buttons */}
      <section className="relative z-50">
        <FloatingButton message="Olá! Tenho formação em Farmácia e gostaria de mais informações sobre a pós-graduação da Práxis." />
        <ScrollToTopButton />
      </section>

    </main>
  );
}