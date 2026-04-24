import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://cdn.franktsui.com/**")],
  },
  output: "standalone",
};

export default nextConfig;
