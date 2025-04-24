// app/videos/page.tsx
import React from "react";

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Workout Videos</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded shadow"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Video 1"
            allowFullScreen
          />
        </div>

        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded shadow"
            src="https://www.youtube.com/embed/2vjPBrBU-TM"
            title="Video 2"
            allowFullScreen
          />
        </div>

        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded shadow"
            src="https://www.youtube.com/embed/ZyhrYis509A"
            title="Video 3"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
