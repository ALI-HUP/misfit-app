import withPWA from "next-pwa";
import type { NextConfig } from "next";

const withPWAConfig = withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
}) as (config: NextConfig) => NextConfig;

const nextConfig: NextConfig = {
  // Your other Next.js configurations here
};

export default withPWAConfig(nextConfig);