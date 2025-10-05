'use client';
import React from "react";
import Header from "@/components/Header";
import DiscordChannel from "@/components/DiscordChannel";

export default function Discord() {
  return (
    <div className="flex flex-col items-center w-full">
      <Header />

      <main className="flex flex-col items-center mt-5 w-full">
        <h1 className="text-2xl font-bold mb-5">Discord Channel</h1>

        <DiscordChannel
          serverId="1404403211229728770"
          channelId="1404403213708431423"
          height="500px"
        />
      </main>
    </div>
  );
}
