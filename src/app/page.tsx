"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CourseSection from "@/components/CoursesSection";
import Link from "next/link";
import Button from "@/components/Button";
import FloatingButton from "@/components/FloatingButton";
import ScrollToTopButton from "@/components/ScrollToTop";
import FormComponent from "@/components/Forms";
import '@/styles/swiper-custom.css';

// imgs desktop
const imagesDesktop = [
  { desktop: "/home01.webp", link: "/cursos/posgraduacao" },
  { desktop: "/home02.webp", link: "https://wa.me/5541992460242?text=Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20cursos%20de%20extens%C3%A3o%20da%20Pr%C3%A1xis" },
  { desktop: "/home03.webp", link: "https://wa.me/5541992460242?text=Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20workshops%20da%20Pr%C3%A1xis" },
  { desktop: "/home04.webp", link: "/sobrenos" },
  { desktop: "/home05.webp", link: "/sobrenos#MEC" },
  { desktop: "/home06.webp", link: "https://wa.me/5541992460242?text=Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20programas%20de%20incentivo%20da%20Pr%C3%A1xis" },
];

// imgs mobile
const imagesMobile = [
  { mobile: "/home01-mobile.webp", link: "/cursos/posgraduacao" },
  { mobile: "/home02-mobile.webp", link: "https://wa.me/5541992460242?text=Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20cursos%20de%20extens%C3%A3o%20da%20Pr%C3%A1xis" },
  { mobile: "/home03-mobile.webp", link: "https://wa.me/5541992460242?text=Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20workshops%20da%20Pr%C3%A1xis" },
  { mobile: "/home04-mobile.webp", link: "/sobrenos" },
  { mobile: "/home05-mobile.webp", link: "/sobrenos#MEC" },
  { mobile: "/home06-mobile.webp", link: "https://wa.me/5541992460242?text=Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20programas%20de%20incentivo%20da%20Pr%C3%A1xis" },
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

  const desktopCarousel = (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop
    >
      {imagesDesktop.map((image, index) => (
        <SwiperSlide key={index}>
          <Link href={image.link} passHref>
            <div
              className="w-full h-[778px] cursor-pointer relative"
              onClick={() => handleImageClick(image.link)}
            >
              <Image
                src={image.desktop}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  const mobileCarousel = (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop
    >
      {imagesMobile.map((image, index) => (
        <SwiperSlide key={index}>
          <Link href={image.link} passHref>
            <div
              className="w-full h-[600px] cursor-pointer relative"
              onClick={() => handleImageClick(image.link)}
            >
              <Image
                src={image.mobile}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <main className="flex flex-col min-h-screen">
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        {isMobile ? mobileCarousel : desktopCarousel}
      </section>

      {/* cursos */}
      <section className="pb-10">
        <CourseSection />
      </section>

      <section className="relative w-full py-10">
        <div className="absolute w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] inset-0 bg-gradient-to-r from-[#AA8E4B] to-[#f8e4b4] z-0"></div>
        {isMobile ? (
          <div className="relative z-10 flex flex-col items-center gap-8">
            <Image
              src="./home-impact.webp"
              alt="Imagem de enfermeira sentada no chão"
              width={700}
              height={700}
              layout="responsive"
              objectFit="cover"
              priority
            />
            <div className="text-center">
              <h1 className="font-medium text-xl text-wrap text-left leading-relaxed px-5">
                O <strong>Instituto Práxis</strong> passou por um <strong>reposicionamento de marca</strong>, adotando um <strong>novo nome</strong>, uma <strong>nova identidade visual</strong> e uma <strong>nova maneira de se conectar</strong> com você, mas trazendo consigo <strong>anos de experiência</strong> de seus sócios e um <strong>corpo docente altamente capacitado</strong>.
              </h1>
              <Link href="/sobrenos">
                <Button
                  variant="default"
                  size="default"
                  className="text-white text-sm font-bold uppercase hover:scale-110 transition-transform duration-300 ease-in-out mt-4"
                >
                  Conheça nossa história
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="relative z-10 flex flex-row gap-[3rem] pb-8">
            <Image
              src="./home-impact.webp"
              alt="Compromisso"
              width={700}
              height={700}
              layout="responsive"
              objectFit="cover"
              priority
            />
            <div className="flex flex-col justify-center gap-6">
              <h1 className="text-2xl text-pretty leading-relaxed">
                O <strong>Instituto Práxis</strong> passou por um <strong>reposicionamento de marca</strong>, adotando um <strong>novo nome</strong>, uma <strong>nova identidade visual</strong> e uma <strong>nova maneira de se conectar</strong> com você, mas trazendo consigo <strong>anos de experiência</strong> de seus sócios e um <strong>corpo docente altamente capacitado</strong>.
              </h1>
              <Link href="/sobrenos">
                <Button
                  variant="default"
                  size="default"
                  className="text-white text-xl font-semibold uppercase hover:scale-110 transition-transform duration-300 ease-in-out mt-4"
                >
                  Conheça nossa história
                </Button>
              </Link>
            </div>
          </div>
        )}
      </section>


      {/* mec */}
      <section className="relative w-full py-10">
        <div className="absolute w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] inset-0 bg-gradient-to-r from-[#134169] to-[#5987B8] z-0"></div>
        {isMobile ? (
          <div className="relative z-10 flex flex-col items-center gap-8">
            <Image
              src="./compromisso.webp"
              alt="Compromisso Práxis"
              width={700}
              height={700}
              layout="responsive"
              objectFit="cover"
              priority
            />
            <div className="text-center">
              <h1 className="font-medium text-xl text-wrap text-left leading-relaxed px-5 text-[#FAFAFA]">
                O Sucesso da Práxis é solidificado por nossa parceria estratégica com a renomada Faculdade Brasileira do Recôncavo Baiano, uma instituição com anos de história e excelência na área educacional. Essa colaboração não apenas reforça a qualidade de nossos certificados, mas também garante o reconhecimento oficial pelo Ministério da Educação (MEC), proporcionando a você a tranquilidade e confiança necessárias em sua jornada educacional e profissional.
              </h1>
              <Link href="/sobrenos#MEC">
                <Button
                  variant="default"
                  size="default"
                  className="text-white text-sm font-bold uppercase hover:scale-110 transition-transform duration-300 ease-in-out mt-4"
                >
                  Confira os nossos certificados
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="relative z-10 flex flex-row gap-[3rem] pb-8">
            <div className="flex flex-col justify-center gap-6">
              <h1 className="text-2xl text-pretty leading-relaxed text-[#FAFAFA]">
                O Sucesso da Práxis é solidificado por nossa parceria estratégica com a renomada Faculdade Brasileira do Recôncavo Baiano, uma instituição com anos de história e excelência na área educacional. Essa colaboração não apenas reforça a qualidade de nossos certificados, mas também garante o reconhecimento oficial pelo Ministério da Educação (MEC), proporcionando a você a tranquilidade e confiança necessárias em sua jornada educacional e profissional.
              </h1>
              <Link href="/sobrenos#MEC">
                <Button
                  variant="default"
                  size="default"
                  className="text-white text-xl font-semibold uppercase hover:scale-110 transition-transform duration-300 ease-in-out mt-4"
                >
                  Confira os nossos certificados
                </Button>
              </Link>
            </div>
            <Image
              src="./compromisso.webp"
              alt="Compromisso Práxis"
              width={700}
              height={700}
              layout="responsive"
              objectFit="cover"
              priority
            />
          </div>
        )}
      </section>

      {/* texto */}
      <section>
        <h1 className="font-extrabold text-2xl text-center text-pretty text-transparent bg-gradient-to-r to-[#196193] from-[#AA8E4B] bg-clip-text py-5">
          Na Práxis, nosso compromisso é transformar desafios em oportunidades, fornecendo uma educação de excelência e suporte integral para que você possa superar qualquer obstáculo em seu caminho rumo ao sucesso profissional.
        </h1>
      </section>

      {/* form */}
      <section className="relative w-full py-10">
        <div className="absolute w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] inset-0 bg-gradient-to-r from-cyan-900 to-sky-900 z-0"></div>
        {isMobile ?
          <div className="relative z-10 flex flex-col items-center gap-[2rem]">
            <h1 className="text-2xl text-balance text-center leading-relaxed text-[#FAFAFA] font-semibold">
              Preencha o cadastro e seja atendido pela nossa equipe de consultores:
            </h1>
            <Image
              src="/arrow-d.webp"
              alt="Seta"
              width={30}
              height={30}
              className="animate-bounce"
            />
            <div className="flex justify-center">
              <FormComponent />
            </div>
          </div>
          :
          <div className="relative z-10 flex flex-row justify-center gap-[2rem]">
            <div className="flex flex-col justify-center items-center gap-[2rem]">
              <h1 className="text-3xl text-pretty text-center leading-relaxed text-[#FAFAFA] font-semibold">
                Preencha o cadastro e seja atendido pela nossa equipe de consultores:
              </h1>
              <Image
                src="/arrow-d.webp"
                alt="Seta"
                width={30}
                height={30}
                className="animate-bounce"
              />
              <div className="flex justify-center">
                <FormComponent />
              </div>
            </div>
          </div>
        }
      </section>

      {/* floatings */}
      <section className="z-50">
        <FloatingButton message="Olá! Gostaria de mais informações sobre a pós-graduação da Práxis." />
        <ScrollToTopButton />
      </section>
    </main>
  );
};

export default Home;