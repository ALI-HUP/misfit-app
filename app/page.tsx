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

      <main className="text-center flex flex-col items-center">
        <h2 className="text-5xl font-extrabold my-10">Welcome to Misfit!</h2>
          <div className="text-lg">
            <p className="">
              One Step Away from Your Goal!!!
            </p>
            <p className="">
              Get stronger, faster, and more focused. Let’s push limits together. 💪🔥
            </p>
          </div>
        <Link
          href="/essays"
          className="p-5 my-10 bg-yellow-300 text-black rounded-lg font-bold hover:bg-yellow-200 transition"
        >
          Get Started...
        </Link>
      </main>

      <section className="flex w-[50%] justify-around text-center font-bold">
        <div className="flex flex-col items-center ">
          <Link
            href="https://www.youtube.com/@parsabolor/videos"
            className=""
          >
            <div className="flex flex-col gap-2">
              <Image src={MotIcon} alt="Sponsor" className="w-32 h-32 rounded-full border-3 border-white" />
              <label>Be a Gymbo</label>
            </div>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <Link
            href="https://yalshop.com/"
            className=""
          >
            <div className="flex flex-col gap-2">
              <Image src={YalIcon} alt="Sponsor" className="w-32 h-32 rounded-full border-3 border-white" />
              <label>Our Sponsor: YAL</label>
            </div>
          </Link>
        </div>

      </section>
    </div>
  );
}
