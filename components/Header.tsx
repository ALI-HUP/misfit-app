"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const mobileLinks = [
    { href: "/essays", label: "Essays" },
    { href: "/videos", label: "Videos" },
    { href: "/contact", label: "Contact" },
  ];

  const buttonSize = 16;
  const spacing = 80;

  return (
    <>
      <header className="hidden md:flex w-[60%] m-6 p-4 px-7 justify-between items-center bg-red-800 rounded-full">
        <Link href="/" className="text-4xl font-bold">Misfit</Link>
        <nav className="text-lg space-x-8">
          <Link href="/essays" className="hover:underline">Essays</Link>
          <Link href="/videos" className="hover:underline">Videos</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
      </header>

      <div className="md:hidden">
        <div className="flex justify-start items-center w-full px-6 py-4 bg-red-600/70">
          <Link href="/" className="text-2xl font-bold">Misfit</Link>
        </div>

        <div className="fixed bottom-6 right-6 z-50">
          {mobileLinks.map((link, index) => {
            const y = menuOpen ? -spacing * (index + 1) : 0;

            return (
              <Link
                key={link.href}
                href={link.href}
                className="absolute w-16 h-16 rounded-full bg-red-500 shadow-lg flex items-center justify-center text-white font-semibold transition-all duration-300"
                style={{
                  transform: `translateY(${y}px) scale(${menuOpen ? 1 : 0})`,
                }}
              >
                {link.label[0]}
              </Link>
            );
          })}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-16 h-16 rounded-full bg-red-700 shadow-lg flex items-center justify-center text-white text-2xl font-bold focus:outline-none"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}
