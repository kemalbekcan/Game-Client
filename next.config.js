/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  experimental: {
    images: {
      unoptimized: true
    }
  }
}

module.exports = nextConfig
