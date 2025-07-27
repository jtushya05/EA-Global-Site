/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    // We're handling type checking in our CI/CD pipeline
    ignoreBuildErrors: true
  }
};

module.exports = nextConfig;
