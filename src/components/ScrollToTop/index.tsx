"use client";

import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Image from 'next/image';
import arrowUp from '../../../public/arrow-up.png';

const ScrollToTopButton = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    const scrollToTop = () => {
        scroll.scrollToTop({ duration: 500, smooth: true });
    };

    const handleScroll = () => {
        const scrollThreshold = 200;
        setShowScrollButton(window.scrollY > scrollThreshold);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`fixed bottom-8 right-8 transition-opacity ${showScrollButton ? "opacity-100" : "opacity-0"
                }`}
        >
            <button
                onClick={scrollToTop}
                className="flex items-center justify-center gap-2 bg-[#003F6E] text-white text-sm font-bold tracking-wide py-2 px-4 rounded-full shadow-md hover:bg-verde focus:outline-none focus:ring transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
                <span className="mr-1">Voltar para o Topo</span>
                <Image
                    width={20}
                    height={20}
                    src={arrowUp}
                    alt="Seta para cima"
                />
            </button>
        </div>
    );
};

export default ScrollToTopButton;