"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import router from "next/router";
import FAQ from "@/components/FAQ";
import FloatingButton from "@/components/FloatingButton";
import ScrollToTopButton from "@/components/ScrollToTop";

const images = [
  "/home01.png",
  "/home02.png",
  "/home03.png",
  "/home04.png",
  "/home05.png",
  "/home06.png",
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleImageClick = () => {
    router.push("/");
  };

  return (
    <main className="flex flex-col min-h-screen">
      {/* hero */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[778px]">
        {images.map((image, index) => (
          <a
            key={index}
            href="#"
            onClick={handleImageClick}
            className={`absolute top-0 transition-transform duration-500 transform ${index === currentImageIndex ? "z-10 opacity-100" : "z-0 opacity-0"
              }`}
            style={{
              left: index === currentImageIndex ? "0" : "100%",
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </a>
        ))}
      </section>
      {/* 8a seção */}
      <section className="pb-10">
        <FAQ />
      </section>
      <section>
        <FloatingButton />
        <ScrollToTopButton />
      </section>
    </main>
  );
};

export default Home;