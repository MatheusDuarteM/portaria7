// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Se você for usar capas do YouTube no futuro, adicione o domínio aqui
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.ytimg.com", // Domínio principal das thumbnails do YT
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
  // Opcional: Se o erro de CSP persistir em desenvolvimento
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
