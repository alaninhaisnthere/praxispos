"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

const CourseSection = () => {
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
        <section className="container mx-auto my-5 px-4 md:px-0">
            {isMobile ?
                <div className="flex flex-col items-center pb-5">
                    <h1 className="font-extrabold uppercase text-3xl text-center text-balance text-transparent bg-gradient-to-r to-[#196193] from-[#AA8E4B] bg-clip-text">
                        A Práxis tem o curso certo para alavancar a sua carreira!
                        Confira:
                    </h1>
                </div>
                : <div className="flex flex-col gap-8 pb-8">
                    <h1 className="font-extrabold uppercase text-5xl text-center text-pretty tracking-wide text-transparent bg-gradient-to-r to-[#196193] from-[#AA8E4B] px-8 py-4 bg-clip-text">
                        A Práxis tem o curso certo para alavancar a sua carreira!
                        <br />
                        Confira:
                    </h1>
                </div>
            }
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Enfermagem */}
                <div className="flex flex-col items-center bg-gradient-to-r from-cyan-900 to-sky-900 py-5 rounded-2xl">
                    <div className="mb-4">
                        <Image src="/Enfermagem.png" width={300} height={200} alt="Enfermagem" className="rounded-2xl" />
                    </div>
                    <h3 className={`relative font-extrabold uppercase text-transparent bg-gradient-to-r to-[#d3ad4e] from-[#FAFAFA] bg-clip-text tracking-wide leading-relaxed mb-4 ${isMobile ? "text-2xl" : "text-3xl"}`}>
                        Enfermagem
                    </h3>
                    <Link legacyBehavior href="/cursos/posgraduacao/enfermagem">
                        <a className="text-white uppercase tracking-wide hover:scale-125 transition-transform duration-300 ease-in-out">
                            <Button>
                                Saiba Mais
                            </Button>
                        </a>
                    </Link>
                </div>

                {/* Biomedicina */}
                <div className="flex flex-col items-center bg-gradient-to-r from-cyan-900 to-sky-900 py-5 rounded-2xl">
                    <div className="mb-4">
                        <Image src="/Biomedicina.png" width={300} height={200} alt="Biomedicina" className="rounded-2xl" />
                    </div>
                    <h3 className={`relative font-extrabold uppercase text-transparent bg-gradient-to-r to-[#d3ad4e] from-[#FAFAFA] bg-clip-text tracking-wide leading-relaxed mb-4 ${isMobile ? "text-2xl" : "text-3xl"}`}>
                        Biomedicina
                    </h3>
                    <Link legacyBehavior href="/cursos/posgraduacao/biomedicina">
                        <a className="text-white uppercase tracking-wide hover:scale-125 transition-transform duration-300 ease-in-out">
                            <Button>
                                Saiba Mais
                            </Button>
                        </a>
                    </Link>
                </div>

                {/* Farmácia */}
                <div className="flex flex-col items-center bg-gradient-to-r from-cyan-900 to-sky-900 py-5 rounded-2xl">
                    <div className="mb-4">
                        <Image src="/Farmácia.png" width={300} height={200} alt="Farmácia" className="rounded-2xl" />
                    </div>
                    <h3 className={`relative font-extrabold uppercase text-transparent bg-gradient-to-r to-[#d3ad4e] from-[#FAFAFA] bg-clip-text tracking-wide leading-relaxed mb-4 ${isMobile ? "text-2xl" : "text-3xl"}`}>
                        Farmácia
                    </h3>
                    <Link legacyBehavior href="/cursos/posgraduacao/farmacia">
                        <a className="text-white uppercase tracking-wide hover:scale-125 transition-transform duration-300 ease-in-out">
                            <Button>
                                Saiba Mais
                            </Button>
                        </a>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default CourseSection;
