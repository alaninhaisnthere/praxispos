"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";

import "./globals.css";
import Footer from "@/components/Footer";
import { metadata } from "./metadata";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [originalTitle, setOriginalTitle] = useState<string | undefined>(undefined);

  useEffect(() => {
    setOriginalTitle(document.title);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "(1) Venha aproveitar essa oportunidade!";
      } else {
        document.title = originalTitle || (typeof metadata.title === 'string' ? metadata.title : "Pós-graduação Práxis");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [originalTitle]);

  return (
    <html lang="pt-br">
      <head>
        <title>{typeof metadata.title === 'string' ? metadata.title : "Pós-graduação Práxis"}</title>
        <meta name="description" content={typeof metadata.description === 'string' ? metadata.description : ""} />
      </head>
      <body className={`${montserrat.className} min-h-screen flex flex-col`}>
        <NextUIProvider>
          <section className="text-balance container flex-grow">
            {children}
          </section>
        </NextUIProvider>
        <Footer />
      </body>
    </html>
  );
}
