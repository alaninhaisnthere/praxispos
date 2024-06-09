"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import Script from 'next/script';

import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { metadata } from "./metadata";

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

        {/* google ads */}
        <Script
          id="google-ads-init"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=AW-16557313988`}
        />
        <Script
          id="google-ads-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = function() { dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'AW-16557313988');
            `,
          }}
        />

        {/* fb pixel */}
        <Script
          id="fb-pixel-init"
          strategy="afterInteractive"
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
              fbq('init', '997382224690371');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=997382224690371&ev=PageView&noscript=1"
          />
        </noscript>
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