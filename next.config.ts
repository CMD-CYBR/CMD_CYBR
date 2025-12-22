import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-icons']
  },
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'cmdcybr.com.au',
          },
        ],
        destination: 'https://www.cmdcybr.com.au/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
