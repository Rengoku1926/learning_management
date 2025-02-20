/** @type {import('next').NextConfig}  */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.pexels.com",
          port: "",
          pathname: "/**",
        },
      ],
    },
    eslint: {
      // Warning: This allows production builds to succeed even if there are ESLint errors.
      ignoreDuringBuilds: true,
    },
  };
  
  module.exports = nextConfig;