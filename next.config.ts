import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  turbopack: {
    resolveAlias: {
      '@': './',
    },
  },
};

export default nextConfig;