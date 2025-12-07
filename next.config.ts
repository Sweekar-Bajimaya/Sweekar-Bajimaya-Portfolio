import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,  // required for static exports
  },
  turbopack: {
    resolveAlias: {
      '@': './',
    },
  },
};

export default nextConfig;