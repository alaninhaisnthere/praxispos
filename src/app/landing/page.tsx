"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import heroBG from "../../../public/assets/hero-bg.png";
import mobileHeroBG from "../../../public/assets/hero-bg-mobile.png";
import logoHero from "../../../public/assets/logo-hero.png";
import Image1 from "../../../public/assets/image-2.png";
import Image2 from "../../../public/assets/image-1.png";
import Button from "@/components/Button";

const LandingPage: React.FC = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <main>
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
                <div className={`relative z-10 flex flex-col items-left justify-center h-full  px-8 ${isMobile ? "gap-1 ml-4 bottom-44" : "gap-5 ml-80"}`}>
                    <div className={`mb-${isMobile ? 1 : 3}`}>
                        <Image
                            src={logoHero}
                            alt="Logo Hero"
                            width={isMobile ? 150 : 250}
                            height={isMobile ? 60 : 100}
                        />
                    </div>
                    <p className={`text-white text-left font-semibold text-sm tracking-wide mb-${isMobile ? "" : 8} ${isMobile ? "text-xs" : ""}`}>
                        ENFERMEIRO - BIOMÉDICO - FARMACÊUTICO
                    </p>
                    <h1 className={`text-white text-left font-bold ${isMobile ? "text-3xl my-3" : "text-5xl"}`}>
                        UMA NOVA <br />
                        HISTÓRIA ESTÁ <br />
                        PARA COMEÇAR, <br />
                        NA QUAL VOCÊ SERÁ <br />
                        O <span className="text-[#9C7F4A] italic">PROTAGONISTA!</span>
                    </h1>
                    <div className={`mt-${isMobile ? "" : 8}`}>
                        <Button variant="default" size="default" className="text-white font-semibold hover:scale-105 transition-transform duration-300 ease-in-out">
                            Seu futuro a um clique
                        </Button>
                    </div>
                </div>
            </section>
            {/* Primeira seção */}
            <section className={`flex flex-col pt-8 pb-8 ${isMobile ? "items-center" : ""}`}>
                {isMobile ? (
                    <div className="flex flex-col gap-8">
                        <h1 className="font-extrabold text-3xl text-wrap">
                            Cansado de <span className="text-primary">turnos exaustivos</span>, de passar datas comemorativas longe da família e se sentir
                            <span className="text-primary"> desvalorizado</span> profissionalmente?
                        </h1>
                        <Image
                            src={Image1}
                            alt="Imagem de enfermeira sentada no chão"
                        />
                        <h1 className="font-medium text-2xl text-wrap">
                            Você ama a sua profissão, ama cuidar das pessoas, mas sabe que pode ir além e conquistar a tão sonhada <span className="italic">independência financeira</span> dentro da área da saúde!
                        </h1>
                        <h1 className="font-medium text-2xl text-wrap">
                            E se eu te falar que existe um mercado extremamente aquecido, que movimenta <span className="italic">bilhões de reais</span> no Brasil, onde cada vez mais as pessoas procuram por tratamentos estéticos para <span className="italic">levantarem a auto-estima</span>?
                        </h1>
                        <h1 className="font-bold text-2xl text-wrap">
                            Sim! Você, <span className="italic text-[#196193]">enfermeiro</span>, <span className="italic text-[#196193]">biomédico</span> ou <span className="italic text-[#196193]">farmacêutico</span>, pode mudar o rumo da sua carreira profissional fazendo parte do mercado da estética!
                        </h1>
                        <h1 className="font-bold text-2xl text-wrap">
                            Receba em 1 dia de consultório o que levaria em plantões exaustivos, tendo mais qualidade de vida, trabalhando com tranquilidade e segurança e se tornando uma <span className="italic text-[#196193]">referência</span> na área.
                        </h1>
                    </div>
                ) : (
                    <div className="flex flex-row gap-[3rem] pb-8">
                        <Image
                            src={Image1}
                            alt="Imagem de enfermeira sentada no chão"
                        />
                        <div className="flex flex-col justify-center gap-6">
                            <h1 className="font-extrabold text-3xl text-wrap">
                                <h1 className="font-extrabold text-3xl text-wrap">
                                    Cansado de <span className="text-primary">turnos exaustivos</span>, de passar datas comemorativas longe da família e se sentir
                                    <span className="text-primary"> desvalorizado</span> profissionalmente?
                                </h1>                            </h1>
                            <h1 className="font-medium text-2xl text-wrap leading-relaxed">
                                Você ama a sua profissão, ama cuidar das pessoas, mas sabe que pode ir além e conquistar a tão sonhada <span className="italic">independência financeira</span> dentro da área da saúde!
                            </h1>
                            <h1 className="font-medium text-2xl text-wrap leading-relaxed">
                                E se eu te falar que existe um mercado extremamente aquecido, que movimenta <span className="italic">bilhões de reais</span> no Brasil, onde cada vez mais as pessoas procuram por tratamentos estéticos para <span className="italic">levantarem a auto-estima</span>?
                            </h1>
                            <h1 className="font-bold text-2xl text-wrap leading-relaxed">
                                Sim! Você, <span className="italic text-[#196193]">enfermeiro</span>, <span className="italic text-[#196193]">biomédico</span> ou <span className="italic text-[#196193]">farmacêutico</span>, pode mudar o rumo da sua carreira profissional fazendo parte do mercado da estética!
                            </h1>
                            <h1 className="font-bold text-2xl text-wrap leading-relaxed">
                                Receba em 1 dia de consultório o que levaria em plantões exaustivos, tendo mais qualidade de vida, trabalhando com tranquilidade e segurança e se tornando uma <span className="italic text-[#196193]">referência</span> na área.
                            </h1>
                        </div>
                    </div>
                )}
            </section>
            {/* Segunda seção */}
            <section className={`flex flex-col py-4 ${isMobile ? "items-center" : ""}`}>
                {isMobile ? (
                    <div className="flex flex-col items-center gap-4">
                        <h1 className="font-bold text-xl text-[#FAFAFA] text-center tracking-wide bg-gradient-to-r from-[#196193] to-[#AA8E4B] px-8 mb-8">
                            Apresento a você a <br />
                            Pós Graduação Lato Sensu em Estética Avançada do Instituto Práxis
                        </h1>
                        <Image
                            src={Image2}
                            alt="Imagem de enfermeira sentada no chão"
                        />
                        <h1 className="flex flex-col justify-center font-medium text-2xl text-wrap leading-relaxed">
                            Aqui você aprenderá as técnicas que são tendências no mercado da estética em 2024, como:
                            <ul className="font-bold list-disc list-inside text-primary mt-2">
                                <li>bioestimuladores</li>
                                <li>ozonioterapia</li>
                                <li>harmonia facial</li>
                            </ul>
                            além de aulas de biossegurança e empreendedorismo.
                        </h1>
                        <h1 className="font-bold text-2xl text-wrap leading-relaxed">
                            Nosso curso levará você a realizar os sonhos que ficaram guardados por muito tempo!
                        </h1>
                    </div>
                ) : (
                    <div className="flex flex-col gap-8">
                        <h1 className="font-bold text-3xl text-[#FAFAFA] text-center tracking-wide bg-gradient-to-r from-[#196193] to-[#AA8E4B] px-8 py-4">
                            Apresento a você a <br />
                            Pós Graduação Lato Sensu em Estética Avançada do Instituto Práxis
                        </h1>

                        <div className="flex flex-row gap-8 pt-8">
                            <Image
                                src={Image2}
                                alt="Imagem de enfermeira sentada no chão"
                            />
                            <div className="flex flex-col justify-center gap-4">
                                <h1 className="font-medium text-2xl text-wrap leading-relaxed">
                                    Aqui você aprenderá as técnicas que são tendências no mercado da estética em 2024, como:
                                    <ul className="font-bold list-disc list-inside text-primary mt-2">
                                        <li>bioestimuladores</li>
                                        <li>ozonioterapia</li>
                                        <li>harmonia facial</li>
                                    </ul>
                                    além de aulas de biossegurança e empreendedorismo.
                                </h1>
                                <h1 className="font-bold text-2xl text-wrap leading-relaxed">
                                    Nosso curso levará você a realizar os sonhos que ficaram guardados por muito tempo!
                                </h1>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
};

export default LandingPage;