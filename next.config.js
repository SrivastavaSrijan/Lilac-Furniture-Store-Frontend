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
  redirects: async () => [
    {
      source: "/explore",
      destination: "/explore/1",
      permanent: true,
      statusCode: 301,
    },
  ],
};

module.exports = nextConfig;
