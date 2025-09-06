import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // 👇 This makes Next.js generate static HTML for GitHub Pages
  output: "export",

  // 👇 Needed because your repo is "Auramatics"
  basePath: isProd ? "/Auramatics" : "",
  assetPrefix: isProd ? "/Auramatics/" : "",

  // 👇 Next/Image doesn’t work with static export, so disable optimization
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
