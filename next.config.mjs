/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "endlesstrips.in",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "endlesstrips.in",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
