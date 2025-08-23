import React from "react";
import Header from "@/components/Header";

export default function VideosPage() {
  const videos = [
    { src: "https://www.youtube.com/embed/QZixPT8geak", title: "Video 1" },
    { src: "https://www.youtube.com/embed/ZBfvvSXypH8", title: "Video 2" },
    { src: "https://www.youtube.com/embed/5rlgP4Jj9kY", title: "Video 3" },
  ];

  return (
    <div className="flex flex-col items-center">
      <Header />

      <h1 className="text-3xl font-bold my-10 text-center">YouTube Videos</h1>

      <div className="flex flex-wrap justify-center gap-10 px-4">
        {videos.map((video, i) => (
          <div
            key={i}
            className="aspect-video w-[320px] sm:w-[420px] rounded overflow-hidden shadow 
                       transition-transform duration-300 ease-out hover:shadow-md hover:scale-[1.03] active:scale-[0.99]"
          >
            <iframe
              className="w-full h-full"
              src={video.src}
              title={video.title}
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </div>
  );
}
