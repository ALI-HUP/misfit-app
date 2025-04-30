import React from "react";
import Header from "@/components/Header";

export default function VideosPage() {
  return (
    <div className="flex flex-col items-center">
      <Header />

      <h1 className="text-3xl font-bold mb-14 text-center">youtube Videos</h1>

      <div className="flex gap-20 items-center">
        <div className="aspect-video w-[420px]">
          <iframe
            className="w-full h-full rounded shadow"
            src="https://www.youtube.com/embed/QZixPT8geak"
            title="Video 1"
            allowFullScreen
          />
        </div>

        <div className="aspect-video w-[420px]">
          <iframe
            className="w-full h-full rounded shadow"
            src="https://www.youtube.com/embed/ZBfvvSXypH8"
            title="Video 2"
            allowFullScreen
          />
        </div>

        <div className="aspect-video w-[420px]">
          <iframe
            className="w-full h-full rounded shadow"
            src="https://www.youtube.com/embed/5rlgP4Jj9kY"
            title="Video 3"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
