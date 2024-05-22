import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import { Montserrat } from "next/font/google";

import "../globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Práxis Pós-graduação",
  description: "This is a custom landing page",
};

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NextUIProvider>
          <main className="text-balance min-h-screen container">
            {children}
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}
