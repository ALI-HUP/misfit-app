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

      <main className="text-center flex flex-col items-center px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold my-6 sm:my-8 md:my-10">
          Welcome to Misfit!
        </h2>

        <div className="text-base sm:text-lg md:text-xl max-w-xl">
          <p>One Step Away from Your Goal!!!</p>
          <p>Get stronger, faster, and more focused. Let’s push limits together. 💪🔥</p>
        </div>

        <Link
          href="/essays"
          className="px-4 py-3 sm:px-5 sm:py-4 my-6 sm:my-8 md:my-10 
                     bg-yellow-300 text-black rounded-lg font-bold 
                     hover:bg-yellow-200 transition-colors
                     transform transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]
                     text-sm sm:text-base md:text-lg"
        >
          Get Started...
        </Link>
      </main>

      <section className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-20 text-center font-bold w-full px-4">
        <div className="flex flex-col items-center">
          <Link href="https://www.youtube.com/@parsabolor/videos">
            <div 
              className="flex flex-col gap-2 transform transition-transform duration-300 hover:scale-[1.05] active:scale-[0.98]"
            >
              <Image 
                src={MotIcon} 
                alt="Sponsor" 
                className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-white shadow-md" 
              />
              <label className="text-sm sm:text-base md:text-lg">Be a Gymbo</label>
            </div>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <Link href="https://yalshop.com/">
            <div 
              className="flex flex-col gap-2 transform transition-transform duration-300 hover:scale-[1.05] active:scale-[0.98]"
            >
              <Image 
                src={YalIcon} 
                alt="Sponsor" 
                className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-white shadow-md" 
              />
              <label className="text-sm sm:text-base md:text-lg">Our Sponsor: YAL</label>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
