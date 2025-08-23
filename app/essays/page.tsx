"use client";

import React, { useState } from "react";
import Header from "@/components/Header";

export default function EssaysPage() {
  const items = [
    {
      title: "Road to Pro - Week 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, cumque quae  voluptate sint molestiae quas voluptatibus dignissimos illo sequi dolor rem modi non quod tempore optio. Voluptatibus eaque ex provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, adipisci?voluptate sint molestiae quas voluptatibus dignissimos illo sequi dolor rem modi non quod tempore optio. Voluptatibus eaque ex provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, adipisci?voluptate sint molestiae quas voluptatibus dignissimos illo sequi dolor rem modi non quod tempore optio. Voluptatibus eaque ex provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, adipisci?",
    },
    {
      title: "Road to Pro - Week 2",
      content:
        "Short content here. No truncation needed. But it still works fine.",
    },
    {
      title: "Road to Pro - Week 3",
      content:
        "Very long content again — Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, cumque quae voluptate sint molestiae quas voluptatibus dignissimos illo sequi dolor rem modi non quod tempore optio. Voluptatibus eaque ex provident! Even more text to make it clearly overflow and test truncation.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center w-full">
      <Header />

      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 my-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center tracking-tight">
          Essays, Plans, and Lessons
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {items.map((item, i) => {
            const isLong = item.content.length > 150;
            const preview = isLong
              ? item.content.slice(0, 150) + "..."
              : item.content;

            return (
              <article
                key={i}
                onClick={() => setOpenIndex(i)}
                className="group w-full h-full cursor-pointer rounded-2xl border border-black/5 bg-white shadow-sm p-6 sm:p-7
                           transition-transform duration-300 ease-out hover:shadow-md hover:scale-[1.01] active:scale-[0.99]
                           focus-within:ring-2 focus-within:ring-black/10"
              >
                <h2 className="text-xl font-semibold mb-4 text-black">
                  {item.title}
                </h2>
                <p className="text-base leading-relaxed text-black/80">
                  {preview}
                </p>
                {isLong && (
                  <span className="mt-2 block text-sm text-blue-600 font-medium">
                    Read more →
                  </span>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {openIndex !== null && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4"
          onClick={() => setOpenIndex(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-lg max-w-2xl w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-black text-2xl leading-none"
              onClick={() => setOpenIndex(null)}
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4 text-black">
              {items[openIndex].title}
            </h2>
            <p className="text-base leading-relaxed text-black/80 whitespace-pre-line">
              {items[openIndex].content}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
