"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-[60%] m-5 p-5 flex justify-between items-center bg-red-700/50 rounded-full">
      <Link href="/" className="text-3xl font-bold">Misfit</Link>
      <nav className="text-md font-semibold space-x-6">
        <Link href="/essays" className="hover:underline">Essays</Link>
        <Link href="/videos" className="hover:underline">Videos</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </nav>
    </header>
  );
}
