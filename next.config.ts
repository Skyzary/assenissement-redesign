import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  sassOptions: {
    includePaths: ['./styles'],
  },
};

export default nextConfig;
