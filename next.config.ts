import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  // Only use static export for production builds, not development
  ...(isProd && { output: "export" }),
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
  // Performance optimizations
  experimental: {
    optimizePackageImports: ["react-icons", "framer-motion"],
  },
  compiler: {
    removeConsole: isProd,
  },
  // Note: Security headers are not supported with static export
  // Configure them at the hosting provider level
  // Bundle optimization
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

export default nextConfig;
