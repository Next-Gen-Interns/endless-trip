/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
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
