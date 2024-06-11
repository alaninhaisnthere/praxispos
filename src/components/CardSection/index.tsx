"use client";

import React, { useRef, useEffect, useState } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Target from "../../../public/target.png";
import Program from "../../../public/program.png";
import Practice from "../../../public/practice.png";
import Books from "../../../public/book.png";

interface TiltCardProps {
    title: string;
    content: React.ReactNode;
    image?: StaticImageData;
}

const CardSection: React.FC = () => {
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
        <section className={isMobile ? "flex flex-col py-4 items-center" : "flex flex-col py-4"}>
            <div className="text-center mb-8">
                <h1 className={`relative font-extrabold text-transparent bg-gradient-to-r to-[#d3ad4e] from-[#FAFAFA] bg-clip-text tracking-wide leading-relaxed mb-4 ${isMobile ? "text-2xl" : "text-3xl"}`}>
                    DESCUBRA O MUNDO DA ESTÉTICA AVANÇADA!
                </h1>
            </div>
            {isMobile ? (
                <div className="flex flex-col gap-8 justify-center">
                    <TiltCard
                        title="Público-alvo"
                        content={
                            <div className="font-medium text-lg leading-relaxed">
                                Graduados em:
                                <ul className="font-semibold">
                                    <li>Enfermagem</li>
                                    <li>Biomedicina </li>
                                    <li>Farmácia </li>
                                </ul>
                                (Necessário ensino superior completo)
                            </div>
                        }
                        image={Target}
                    />
                    <TiltCard
                        title=""
                        content={
                            <div className="font-medium text-lg leading-relaxed">
                                <span className="underline underline-offset-4 decoration-2 decoration-dotted">500 horas</span> de curso, distribuídas em <span className="underline underline-offset-4 decoration-2 decoration-dotted">365 horas</span> de teoria e <span className="underline underline-offset-4 decoration-2 decoration-dotted">135 horas</span> de prática.
                            </div>
                        }
                        image={Practice}
                    />
                    <TiltCard
                        title=" "
                        content={
                            <div className="font-medium text-lg leading-relaxed px-2">
                                21 módulos abrangendo os tópicos mais relevantes e atuais da estética avançada.
                            </div>
                        }
                        image={Books}
                    />
                    <TiltCard
                        title=" "
                        content={
                            <div className="font-medium text-lg leading-relaxed">
                                <span className="underline underline-offset-4 decoration-2 decoration-dotted">15 módulos presenciais</span>, realizados um final de semana por mês, na cidade de Curitiba, no bairro Portão, dentro da Gran Universidade.
                            </div>
                        }
                        image={Program}
                    />
                </div>
            ) : (
                <div className="flex flex-row gap-8 justify-center">
                    <TiltCard
                        title="Público-alvo"
                        content={
                            <div className="font-medium text-lg leading-relaxed">
                                Graduados em:
                                <ul className="font-semibold">
                                    <li>Enfermagem</li>
                                    <li>Biomedicina </li>
                                    <li>Farmácia </li>
                                </ul>
                                (Necessário ensino superior completo)
                            </div>
                        }
                        image={Target}
                    />
                    <TiltCard
                        title="Curso Intenso"
                        content={
                            <div className="font-medium text-lg leading-relaxed">
                                <span className="underline underline-offset-4 decoration-2 decoration-dotted">500 horas</span> de curso, distribuídas em <span className="underline underline-offset-4 decoration-2 decoration-dotted">365 horas</span> de teoria e <span className="underline underline-offset-4 decoration- decoration-dotted">135 horas</span> de prática.
                            </div>
                        }
                        image={Practice}
                    />
                    <TiltCard
                        title="Tópicos Essenciais"
                        content={
                            <div className="font-medium text-lg leading-relaxed px-2">
                                21 módulos abrangendo os tópicos mais relevantes e atuais da estética avançada.
                            </div>
                        }
                        image={Books}
                    />
                    <TiltCard
                        title="Experiência Imersiva"
                        content={
                            <div className="font-medium text-lg leading-relaxed">
                               <span className="underline underline-offset-4 decoration-2 decoration-dotted">15 módulos presenciais</span>, realizados um final de semana por mês, dentro da Gran Universidade em Curitiba.
                            </div>
                        }
                        image={Program}
                    />
                </div>
            )}
        </section>
    );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard: React.FC<TiltCardProps> = ({ title, content, image }) => {
    const ref = useRef<HTMLDivElement | null>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className={`relative h-96 w-72 rounded-xl bg-gradient-to-r to-[#CBAA5F] from-[#9A792D]`}
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 grid place-content-center rounded-xl bg-[#FAFAFA] shadow-lg"
            >
                {image && (
                    <Image
                        src={image}
                        alt={title}
                        width={50}
                        height={50}
                        className="mx-auto my-4"
                        style={{
                            transform: "translateZ(75px)",
                        }}
                    />
                )}
                <h1
                    style={{
                        transform: "translateZ(50px)",
                    }}
                    className="text-center text-xl font-bold text-black"
                >
                    {title}
                </h1>
                <div
                    style={{
                        transform: "translateZ(25px)",
                    }}
                    className="text-center text-base pt-2 text-black"
                >
                    {content}
                </div>
            </div>
        </motion.div>
    );
};

export default CardSection;