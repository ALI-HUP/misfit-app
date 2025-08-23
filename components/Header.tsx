"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-[60%] m-6 p-4 px-7 flex justify-between items-center bg-red-600/70 rounded-full">
      <Link href="/" className="text-4xl font-bold">Misfit</Link>
      <nav className="text-lg space-x-8">
        <Link href="/essays" className="hover:underline">Essays</Link>
        <Link href="/videos" className="hover:underline">Videos</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </nav>
    </header>
  );
}
