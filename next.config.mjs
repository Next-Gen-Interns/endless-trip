/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
<<<<<<< HEAD
   images: {
    domains: [
      "images.unsplash.com",  // Unsplash images
      "endlesstrips.in",     // Your trip images
=======
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "endlesstrips.in",
        pathname: "/uploads/**",
      },
>>>>>>> 4f30aa49bd051eb3f88a4ebf5601f5a1fe1f47c7
    ],
  },
};

export default nextConfig;
