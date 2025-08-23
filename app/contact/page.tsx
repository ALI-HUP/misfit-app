import React from "react";
import Header from "@/components/Header";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center w-full">
      <Header />

      <section className="w-full max-w-lg mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center my-7 tracking-tight">
          Contact Us
        </h1>

        <form className="space-y-5 bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-black/5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border border-gray-300 shadow-sm text-black 
                       focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 
                       transition-transform duration-300 hover:scale-[1.01] active:scale-[0.99]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border border-gray-300 shadow-sm text-black 
                       focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 
                       transition-transform duration-300 hover:scale-[1.01] active:scale-[0.99]"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded-lg border border-gray-300 shadow-sm text-black h-32 resize-none
                       focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 
                       transition-transform duration-300 hover:scale-[1.01] active:scale-[0.99]"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-md
                       transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]
                       hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
