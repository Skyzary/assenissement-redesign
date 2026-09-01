import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  sassOptions: {
    includePaths: ['./styles'],
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'lenis'],
  },
};

export default nextConfig;

