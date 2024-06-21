"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import Script from 'next/script';

import "./globals.css";

import { metadata } from "./metadata";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function AppLayout({
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

        {/* google analytics */}
        <GoogleAnalytics conversionId="G-ESTDBVPXJ9" />

        {/* pixel */}
        <Script
          id="fb-pixel-init"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1630330594474302');
              fbq('track', 'PageView');
              fbq('track', 'Contact');
              fbq('track', 'ViewContent');
            `,
          }}
        />
      </head>
      <body className={`${montserrat.className} min-h-screen flex flex-col`}>
        <NextUIProvider>
          <Header />
          <section className="text-balance container flex-grow">
            {children}
          </section>
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
