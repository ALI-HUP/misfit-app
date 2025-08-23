import React from "react";
import Link from "next/link";
import Image from "next/image";
import YalIcon from "@/public/svg/logo-training-fitness-gym-logo-illustration-template-vector.jpg";
import MotIcon from "@/public/svg/images.jpeg";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header />

      <main className="text-center p-8 flex flex-col items-center">
        <h2 className="text-5xl font-extrabold mb-10">Welcome to Misfit!</h2>
        <p className="text-xl mb-3 max-w-2xl">
          One Step Away from Your Goal!!!
        </p>
        <p className="text-lg mb-6 max-w-xl">
          Get stronger, faster, and more focused. Let’s push limits together. 💪🔥
        </p>
        <Link
          href="/essays"
          className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          Get Started
        </Link>
      </main>

      <section className="flex gap-36 mt-8">
        <div className="flex flex-col items-center">
          <Link
            href="https://www.youtube.com/@parsabolor/videos"
            className="rounded-lg font-semibold text-center"
          >
            <div className="flex flex-col gap-3">
              <Image src={MotIcon} alt="Sponsor" className="w-36 h-36 rounded-full border-5 border-white" />
              <label>Be a Gymbo</label>
            </div>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <Link
            href="https://yalshop.com/"
            className="rounded-lg font-semibold text-center"
          >
            <div className="flex flex-col gap-3">
              <Image src={YalIcon} alt="Sponsor" className="w-36 h-36 rounded-full border-5 border-white" />
              <label>Our Sponsor: YAL</label>
            </div>
          </Link>
        </div>

      </section>
    </div>
  );
}
