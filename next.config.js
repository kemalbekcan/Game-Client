/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  trailingSlash: true,
  sassOptions: {
    includePaths: [ path.join( __dirname, 'sass' ) ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
