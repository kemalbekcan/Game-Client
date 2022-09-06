/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true
    }
  },
  sassOptions: {
    includePaths: [ path.join( __dirname, 'sass' ) ],
  }
};

module.exports = nextConfig;
