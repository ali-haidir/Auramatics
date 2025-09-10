import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: "out",
  basePath: isGithubPages ? "/Auramatics" : "",
  assetPrefix: isGithubPages ? "/Auramatics/" : "",
  images: {
    unoptimized: true,
    loader: "custom",
    loaderFile: "./src/app/imageLoader.ts",
  },
};

export default nextConfig;
