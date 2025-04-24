// app/essays/page.tsx
import React from "react";

export default function EssaysPage() {
  return (
    <div className="min-h-screen p-6 bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Reading & Plans</h1>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="p-4 border rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Workout Plan - Week 1</h2>
          <p className="text-sm">A simple guide to start your strength training journey.</p>
        </div>

        <div className="p-4 border rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Nutrition Guide</h2>
          <p className="text-sm">Basics of clean eating for athletes and active people.</p>
        </div>

        <div className="p-4 border rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Mental Strength Essay</h2>
          <p className="text-sm">How mindset impacts performance and how to train it.</p>
        </div>
      </div>
    </div>
  );
}
