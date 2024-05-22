import React from "react";
import Image from "next/image";
import HeroBG from "../../../public/assets/hero-bg.png";

const LandingPage: React.FC = () => {
    return (
        <main className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[778px]">
            <div className="absolute inset-0">
                <Image
                    src={HeroBG}
                    alt="Imagem de fundo"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>
            <div className="relative z-10 flex items-center justify-start h-full px-8 ml-80">
                <h1 className="text-white text-left font-bold text-5xl">
                    UMA NOVA <br />
                    HISTÓRIA ESTÁ <br />
                    PARA COMEÇAR, <br />
                    NA QUAL VOCÊ SERÁ <br />
                    O <span className="text-[#9C7F4A] italic">PROTAGONISTA!</span>
                </h1>
            </div>
        </main>
    );
};

export default LandingPage;
