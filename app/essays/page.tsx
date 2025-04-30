import React from "react";
import Header from "@/components/Header";


export default function EssaysPage() {
  return (
    <div className="min-h-screen p-5 flex flex-col items-center">
      <Header />


      <div className="mt-10">
        <h1 className="text-3xl font-bold mb-10 text-center">Reading & Plans</h1>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-5 rounded-lg shadow bg-white text-black w-[600px]">
            <h2 className="text-xl font-semibold mb-4">Road to Pro - Week 1</h2>
            <p className="text-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, cumque quae voluptate sint molestiae quas voluptatibus dignissimos illo sequi dolor rem modi non quod tempore optio. Voluptatibus eaque ex provident!</p>
          </div>

          <div className="p-5 rounded-lg shadow bg-white text-black w-[600px]">
            <h2 className="text-xl font-semibold mb-4">Road to Pro - week 2</h2>
            <p className="text-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, cumque quae voluptate sint molestiae quas voluptatibus dignissimos illo sequi dolor rem modi non quod tempore optio. Voluptatibus eaque ex provident!</p>
          </div>

          <div className="p-5 rounded-lg shadow bg-white text-black w-[600px]">
            <h2 className="text-xl font-semibold mb-4">Road to Pro - week 3</h2>
            <p className="text-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, cumque quae voluptate sint molestiae quas voluptatibus dignissimos illo sequi dolor rem modi non quod tempore optio. Voluptatibus eaque ex provident!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
