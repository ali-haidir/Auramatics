import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/Auramatics" : "",
  assetPrefix: isProd ? "/Auramatics/" : "",
  images: { unoptimized: true },
  publicRuntimeConfig: {
    basePath: isProd ? "/Auramatics" : "",
  },
};

export default nextConfig;
