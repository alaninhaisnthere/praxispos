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
                        src={isMobile ? "/faleconosco-mobile.webp" : "/faleconosco-hero.webp"}
                        alt="Imagem de fundo"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>
            </section>

            {/* impacto */}
            <section className="relative w-full py-10">
                <div className="absolute w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] inset-0 bg-gradient-to-r from-cyan-900 to-sky-900 z-0"></div>
                {isMobile ? (
                    <div className="relative z-10 flex flex-col items-center gap-8">
                        <div className="text-center">
                            <h1 className="text-3xl text-pretty font-bold leading-relaxed pb-2 text-[#FAFAFA]">
                            Inscreva-se hoje e comece a construir o futuro que <br/>
                            <span className=" uppercase underline underline-offset-8 decoration-dotted text-[#f8d37c]">você merece!</span>
                            </h1>
                            <Image
                                src="/faleconosco-impacto.webp"
                                alt="Fale conosco"
                                width={700}
                                height={700}
                                layout="responsive"
                                objectFit="cover"
                                priority
                            />
                        </div>
                    </div>
                ) : (
                    <div className="relative z-10 flex flex-row gap-[3rem] pb-8">
                        <div className="flex flex-row items-center justify-center gap-6">
                            <Image
                                src="/faleconosco-impacto.webp"
                                alt="Fale conosco"
                                width={700}
                                height={700}
                                layout="responsive"
                                objectFit="cover"
                                priority
                            />
                            <h1 className="text-5xl text-pretty font-bold leading-relaxed text-[#FAFAFA]">
                                Inscreva-se hoje e comece a construir o futuro que <br/>
                                <span className=" uppercase underline underline-offset-8 decoration-dotted text-[#f8d37c]">você merece!</span>

                            </h1>
                        </div>
                    </div>
                )}
            </section>


            {/* form + info */}
            <section id="section-form" className="relative w-full py-5 pb-10">
                <div className="text-center">
                    <h1 className={`font-extrabold ${isMobile ? "text-3xl pb-5" : "text-5xl py-10"} text-center text-pretty text-transparent bg-gradient-to-r to-[#196193] from-[#AA8E4B] bg-clip-text uppercase`}>
                        Sua opinião é muito importante para nós!
                    </h1>
                    <div className="mx-auto">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-[2rem]">
                            <div className="md:w-1/2">
                                <FormsFaleConosco />
                            </div>
                            <div className="md:w-1/2 text-left gap-[2rem]">
                                <div className="flex flex-col justify-center items-start mb-3 rounded-xl p-4 bg-[#134169]">
                                    <div className="flex items-start mb-2 p-2">
                                        <Image
                                            src="/arrow-r.webp"
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

                                    <div className="flex items-start mb-2 p-2">
                                        <Image
                                            src="/arrow-r.webp"
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

                                    <div className="flex items-start p-2 pr-4">
                                        <Image
                                            src="/arrow-r.webp"
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

            {/* floatings */}
            <section className="z-50">
                <FloatingButton message="Olá! Tenho formação em Biomedicina e gostaria de mais informações sobre a pós-graduação da Práxis." />
                <ScrollToTopButton />
            </section>
        </main >
    );
}