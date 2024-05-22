import React from "react";
import Image from "next/image";
import heroBG from "../../../public/assets/hero-bg.png";
import logoHero from "../../../public/assets/logo-hero.png";
import Button from "@/components/Button";

const LandingPage: React.FC = () => {
    return (
        <>
            <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[778px]">
                <div className="absolute inset-0">
                    <Image
                        src={heroBG}
                        alt="Imagem de fundo"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>
                <div className="relative z-10 flex flex-col items-left justify-center h-full px-8 ml-80">
                    <div className="mb-5 -ml-3">
                        <Image
                            src={logoHero}
                            alt="Logo Hero"
                            width={250}
                            height={100}
                        />
                    </div>
                    <p className="text-white text-left font-semibold text-sm tracking-wide mb-8">
                        ENFERMEIRO - BIOMÉDICO - FARMACÊUTICO
                    </p>
                    <h1 className="text-white text-left font-bold text-5xl">
                        UMA NOVA <br />
                        HISTÓRIA ESTÁ <br />
                        PARA COMEÇAR, <br />
                        NA QUAL VOCÊ SERÁ <br />
                        O <span className="text-[#9C7F4A] italic">PROTAGONISTA!</span>
                    </h1>
                    <div className="mt-8">
                    <Button variant="default" size="default" className="text-white font-semibold hover:scale-105 transition-transform duration-300 ease-in-out">
                            Seu futuro a um clique
                        </Button>

                    </div>
                </div>
            </section>
        </>
    );
};

export default LandingPage;
