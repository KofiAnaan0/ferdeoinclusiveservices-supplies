import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
    output: "export",
    images: { unoptimized: true },
  },
} as NextConfig;

module.exports = nextConfig;
