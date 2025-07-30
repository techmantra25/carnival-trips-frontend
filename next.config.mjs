/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   // domains: ["vanguardit.co"],

  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Wildcard for all domains
      },
      {
        protocol: "http",
        hostname: "**", // Wildcard for all domains (if you want to allow http)
      },
    ],
  },
};

export default nextConfig;
