"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center py-4">
      <aside>
        <Image src="/assets/logo.png" alt="Logo" width={142} height={54} />
      </aside>
      <div className="max-w-[505px] text-right text-sm tracking-wide font-semibold">
      Rua Caetano Marchesini, 952, Bairro Portão, CEP: 81070-110, Curitiba-PR <br/>
      +55 (41) 9246-0242
      </div>
    </footer>
  );
}