"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IconContext } from "react-icons";
import { FaWhatsapp } from "react-icons/fa";

const FloatingButton: React.FC<{ message: string }> = ({ message }) => {
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

  const handleClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'WhatsApp Button',
        event_label: 'WhatsApp Contact',
      });
    }
  };

  const whatsappLink = `https://wa.me/5541992460242?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-24 right-4 md:bottom-32 md:right-8 z-50">
      <Link
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          onClick={handleClick}
          className={`bg-green-500 text-white ${isMobile ? "p-4" : "p-6"} 
          rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 w-auto animate-bounce`}
        >
          <IconContext.Provider value={{ color: "white" }}>
            <FaWhatsapp size={isMobile ? 28 : 56} />
          </IconContext.Provider>
        </div>
      </Link>
    </div>
  );
};

export default FloatingButton;