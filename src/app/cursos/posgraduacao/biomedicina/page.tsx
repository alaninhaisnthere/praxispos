"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import Button from "@/components/Button";

import FloatingButton from "@/components/FloatingButton";
import ScrollToTopButton from "@/components/ScrollToTop";
import CourseSection from "@/components/CoursesSection";
import Link from "next/link";

const images = [
  { desktop: "/home01.png", mobile: "/home01-mobile.png", link: "/" },
  { desktop: "/home02.png", mobile: "/home02-mobile.png", link: "/" },
  { desktop: "/home03.png", mobile: "/home03-mobile.png", link: "/" },
  { desktop: "/home04.png", mobile: "/home04-mobile.png", link: "/sobrenos" },
  {
    desktop: "/home05.png", mobile: "/home05-mobile.png",
    link: "https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MTkyODQ=/93916316abe23148507bd4c260e4b878/NzA1MDE="
  },
  { desktop: "/home06.png", mobile: "/home06-mobile.png", link: "/" },
];

const Home: React.FC = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

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

  const handleImageClick = (link: string) => {
    router.push(link);
  };

  const renderArrowPrev = (onClickHandler: () => void, hasPrev: boolean, label: string) =>
    hasPrev && !isMobile && (
      <button
        type="button"
        onClick={onClickHandler}
        className="absolute top-1/2 transform -translate-y-1/2 translate-x-6 left-0 z-10 p-2"
        aria-label={label}
      >
        <IoIosArrowDropleftCircle color="#FAFAFA" size={30} />
      </button>
    );

  const renderArrowNext = (onClickHandler: () => void, hasNext: boolean, label: string) =>
    hasNext && !isMobile && (
      <button
        type="button"
        onClick={onClickHandler}
        className="absolute top-1/2 transform -translate-y-1/2 -translate-x-6 right-0 z-10 p-2"
        aria-label={label}
      >
        <IoIosArrowDroprightCircle color="#FAFAFA" size={30} />
      </button>
    );

  return (
    <main className="flex flex-col min-h-screen">
      {/* hero */}
      <section className={`relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] ${isMobile ? "h-[350px]" : "h-[778px]"} overflow-hidden`}>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={5000}
          transitionTime={500}
          swipeable
          emulateTouch
          dynamicHeight={false}
          renderArrowPrev={renderArrowPrev}
          renderArrowNext={renderArrowNext}
        >
          {images.map((image, index) => (
            <a
              key={index}
              href={image.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-fit relative cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                handleImageClick(image.link);
              }}
            >
              <div className="w-full h-fit relative">
                <Image
                  src={isMobile ? image.mobile : image.desktop}
                  alt={`Image ${index + 1}`}
                  width={100}
                  height={100}
                />
              </div>
            </a>
          ))}
        </Carousel>
      </section>

      {/* 2a seção */}
      <section className="pb-10">
        <CourseSection />
      </section>

      {/* 3a seção */}
      <section className="relative w-full py-10">
        <div className="absolute w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] inset-0 bg-gradient-to-r from-[#AA8E4B] to-[#f8e4b4] z-0"></div>
        {isMobile ?
          <div className="relative z-10 flex flex-col items-center gap-8">
            <Image
              src="./home-impact.png"
              alt="Imagem de enfermeira sentada no chão"
              width={700}
              height={700} />
            <h1 className="font-medium text-2xl text-balance">
              O <strong>Instituto Práxis</strong> passou por um <strong>reposicionamento de marca</strong>, adotando um <strong>novo nome</strong>, uma <strong>nova identidade visual</strong> e uma <strong>nova maneira de se conectar</strong> com você, mas trazendo consigo <strong>anos de experiência</strong> de seus sócios e um <strong>corpo docente altamente capacitado</strong>.
            </h1>
            <Link href="/sobrenos">
              <Button
                variant="default"
                size="default"
                className="text-white text-xl font-semibold uppercase hover:scale-110 transition-transform duration-300 ease-in-out mb-4"
              >
                Conheça nossa história
              </Button>
            </Link>
          </div>
          :
          <div className="relative z-10 flex flex-row gap-[3rem] pb-8">
            <Image
              src="./home-impact.png"
              alt="Imagem de enfermeira sentada no chão"
              width={700}
              height={700} />
            <div className="flex flex-col justify-center gap-6">
              <h1 className="text-2xl text-pretty leading-relaxed">
                O <strong>Instituto Práxis</strong> passou por um <strong>reposicionamento de marca</strong>, adotando um <strong>novo nome</strong>, uma <strong>nova identidade visual</strong> e uma <strong>nova maneira de se conectar</strong> com você, mas trazendo consigo <strong>anos de experiência</strong> de seus sócios e um <strong>corpo docente altamente capacitado</strong>.
              </h1>
              <Link href="/sobrenos">
                <Button
                  variant="default"
                  size="default"
                  className="text-white text-xl font-semibold uppercase hover:scale-110 transition-transform duration-300 ease-in-out mb-4"
                >
                  Conheça nossa história
                </Button>
              </Link>
            </div>
          </div>
        }
      </section>


      {/* 8a seção */}
      <section>
        <FloatingButton />
        <ScrollToTopButton />
      </section>
    </main>
  );
}

export default Home;