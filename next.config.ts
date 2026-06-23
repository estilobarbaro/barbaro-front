import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local images in /public are always allowed by Next.js.
    // Remote patterns remain for any external sources still in use.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    ],
    // Optimized device sizes for the barber site (mobile-first)
    deviceSizes: [390, 640, 768, 1024, 1280, 1920],
    imageSizes: [16, 32, 64, 128, 256, 384],
  },
};

export default nextConfig;
