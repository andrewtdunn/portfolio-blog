/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d3bwiiilw7gcu3.cloudfront.net",
        port: "",
        pathname: "/media/project_images/**",
      },
      {
        protocol: "https",
        hostname: "d3bwiiilw7gcu3.cloudfront.net",
        port: "",
        pathname: "/media/project_logos/**",
      },
      {
        protocol: "https",
        hostname: "d3bwiiilw7gcu3.cloudfront.net",
        port: "",
        pathname: "/media/bio_images/**",
      },
      {
        protocol: "https",
        hostname: "d3bwiiilw7gcu3.cloudfront.net",
        port: "",
        pathname: "/media/agency_images/**",
      },
      {
        protocol: "https",
        hostname: "d3bwiiilw7gcu3.cloudfront.net",
        port: "",
        pathname: "/media/post_images/**",
      },
    ],
  },
};

module.exports = nextConfig;
