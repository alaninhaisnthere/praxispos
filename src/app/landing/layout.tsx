import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import { Montserrat } from "next/font/google";

import "../globals.css";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pós-graduação Práxis",
  description: "Landing page Práxis Pós-Graduação",
};

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
        <NextUIProvider>
          <section className="text-balance min-h-fit container">
            {children}
          </section>
        </NextUIProvider>
        <Footer/>
      </body>
    </html>
  );
}
