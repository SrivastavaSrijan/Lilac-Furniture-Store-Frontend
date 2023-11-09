/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  transpilePackages: ["@mui/material", "@mui/icons-material"],
  experimental: {
    fallbackNodePolyfills: false,
  },
};

module.exports = nextConfig;
