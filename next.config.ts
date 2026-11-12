import type { NextConfig } from "next";

// BASE_PATH is set by the GitHub Pages workflow (e.g. "/personal-website").
const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
