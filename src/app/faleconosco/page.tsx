"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";

import FloatingButton from "@/components/FloatingButton";
import ScrollToTopButton from "@/components/ScrollToTop";

import FormsFaleConosco from "@/components/FormsFaleConosco";

export default function FaleConosco() {
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
                        src={isMobile ? "/faleconosco-mobile.png" : "/faleconosco-hero.png"}
                        alt="Imagem de fundo"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>
                <div
                    className={`relative z-10 flex flex-col items-left justify-center h-full px-8 ${isMobile ? "gap-1 ml-4 bottom-44" : "gap-5 ml-64"}`}
                >
                    <div>
                        <Image
                            src="/logo-hero.png"
                            alt="Logo Hero"
                            width={isMobile ? 150 : 250}
                            height={isMobile ? 60 : 100}
                        />
                    </div>
                    <h1
                        className={`text-[#f7dc9c] font-gothamblack text-left font-bold ${isMobile ? "text-5xl" : "text-7xl"}`}
                    >
                        FALE CONOSCO
                    </h1>
                    <h1
                        className={`text-white text-left font-bold ${isMobile ? "text-3xl" : "text-3xl mb-28"}`}
                    >
                        Queremos você pertinho de nós!
                    </h1>
                </div>
            </section>

            {/* 7a seção */}
            <section id="section-form" className="relative w-full py-5 pb-10">
                <div className="text-center">
                    <h1 className={`font-extrabold ${isMobile ? "text-3xl pb-5" : "text-5xl py-10"} text-center text-pretty text-transparent bg-gradient-to-r to-[#196193] from-[#AA8E4B] bg-clip-text uppercase`}>
                        Inscreva-se hoje e comece a construir o futuro que você merece!
                    </h1>
                    <div className="mx-auto">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-[2rem]">
                            <div className="md:w-1/2">
                                <FormsFaleConosco />
                            </div>
                            <div className="md:w-1/2 text-left pr-5">
                                <div className="flex flex-col justify-center items-start mb-3">
                                    <div className="flex items-start mb-2 p-2 bg-[#134169]">
                                        <Image
                                            src="/arrow-r.png"
                                            alt="Seta"
                                            width={10}
                                            height={10}
                                            className="mt-2 mr-2"
                                        />
                                        <p className="font-semibold text-xl leading-relaxed text-[#FAFAFA]">
                                            <span className="font-bold">Matrículas:</span>
                                            <br />
                                            contato@praxispos.com.br
                                        </p>
                                    </div>

                                    <div className="flex items-start mb-2 p-2 bg-[#134169]">
                                        <Image
                                            src="/arrow-r.png"
                                            alt="Seta"
                                            width={10}
                                            height={10}
                                            className="mt-2 mr-2"
                                        />
                                        <p className="font-semibold text-xl leading-relaxed text-[#FAFAFA]">
                                            <span className="font-bold">Coordenação:</span>
                                            <br />
                                            academico@praxispos.com.br
                                        </p>
                                    </div>

                                    <div className="flex items-start p-2 pr-4 bg-[#134169]">
                                        <Image
                                            src="/arrow-r.png"
                                            alt="Seta"
                                            width={10}
                                            height={10}
                                            className="mt-2 mr-2"
                                        />
                                        <p className="font-semibold text-xl leading-relaxed text-[#FAFAFA]">
                                            <span className="font-bold">Endereço:</span>
                                            <br />
                                            Rua Caetano Marchesini, 952, Bairro Portão, CEP: 81070-110,
                                            Curitiba-PR
                                            <iframe
                                                className="py-2"
                                                width="100%"
                                                height="450"
                                                loading="lazy"
                                                allowFullScreen
                                                src={`https://www.google.com/maps/embed/v1/place?q=Rua%20Caetano%20Marchesini%20952%20Bairro%20Port%C3%A3o%20Curitiba%20PR&key=AIzaSyCscsGj0oOkSingQZaHP7yY2i_0IgoUSkA`}
                                            ></iframe>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 8a seção */}
            <section>
                <FloatingButton message="Olá! Tenho formação em Biomedicina e gostaria de mais informações sobre a pós-graduação da Práxis." />
                <ScrollToTopButton />
            </section>
        </main >
    );
}