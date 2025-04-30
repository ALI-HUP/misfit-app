"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full m-5 p-5 flex justify-between items-center max-w-5xl bg-red-950/35 rounded-full text-white">
      <h1 className="text-3xl font-bold">Misfit</h1>
      <nav className="text-md font-semibold space-x-6">
        <Link href="/essays" className="hover:underline">Essays</Link>
        <Link href="/videos" className="hover:underline">Videos</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </nav>
    </header>
  );
}
