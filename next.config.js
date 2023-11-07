/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: {
      exclude: ["error"],
    },
  },
  transpilePackages: ["@mui/material", "@mui/icons-material"],
  experimental: {
    fallbackNodePolyfills: false,
  },
};

module.exports = nextConfig;
