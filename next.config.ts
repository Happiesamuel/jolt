import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cloud.appwrite.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        port: "",
      },
    ],
    unoptimized: false,
  },
};

export default nextConfig;
