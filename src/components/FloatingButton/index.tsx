import React, { useEffect, useState } from "react";

import Link from "next/link";
import { IconContext } from "react-icons";
import { FaWhatsapp } from "react-icons/fa";

const FloatingButton: React.FC = () => {
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
    <div className="fixed bottom-32 right-2 z-50">
      <Link
        href="https://wa.me/5571999444547"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className={`bg-green-500 text-white ${isMobile ? "p-4" : "p-6"} 
          rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 w-auto`}
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
