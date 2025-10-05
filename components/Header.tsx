"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Contact from "@/public/svg/contact.png";
import Article from "@/public/svg/article.png";
import Discord from "@/public/svg/discord.png";
import Up from "@/public/svg/up.png";
import Video from "@/public/svg/video.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const mobileLinks = [
    { href: "/articles", icon: Article, label: "Articles" },
    { href: "/videos", icon: Video, label: "Videos" },
    { href: "/contact", icon: Contact, label: "Contact" },
    { href: "/discord", icon: Discord, label: "Discord" },
  ];

  const spacing = 80;

  return (
    <>
      <header className="hidden md:flex w-[60%] m-6 p-4 px-7 justify-between items-center bg-red-800 rounded-full">
        <Link href="/" className="text-4xl font-bold">Misfit</Link>
        <nav className="text-lg space-x-8">
          <Link href="/articles" className="hover:underline">Articles</Link>
          <Link href="/videos" className="hover:underline">Videos</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/discord" className="hover:underline">Discord</Link>
        </nav>
      </header>

      <div className="md:hidden">
        <div className="w-screen bg-red-800 px-6 py-5 text-left">
          <Link href="/" className="text-3xl font-bold block">
            Misfit
          </Link>
        </div>

        <div className="fixed bottom-6 right-6 z-50">
          {mobileLinks.map((link, index) => {
            const y = menuOpen ? -spacing * (index + 1) : 0;

            return (
              <Link
                key={link.href}
                href={link.href}
                className="absolute w-16 h-16 rounded-full bg-red-500 shadow-lg flex items-center justify-center transition-all duration-500"
                style={{
                  transform: `translateY(${y}px) scale(${menuOpen ? 1 : 0})`,
                }}
              >
                <Image
                  src={link.icon}
                  alt={link.label}
                  className="w-7 h-7"
                />
              </Link>
            );
          })}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-16 h-16 rounded-full bg-red-800 shadow-lg flex items-center justify-center focus:outline-none"
          >
            <Image
              src={Up}
              alt="Menu Toggle"
              className={`w-8 h-8 transition-transform duration-500 ${
                menuOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>
      </div>
    </>
  );
}
