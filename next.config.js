/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
