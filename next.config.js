/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/d4-fe-Travel' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/d4-fe-Travel/' : '',
  images: {
    domains: [
      'images.unsplash.com',
      'plus.unsplash.com',
      'via.placeholder.com',
      'unpkg.com',
      'jebsen.com.my'
    ],
    unoptimized: true, // Required for static export
  },
  webpack: (config) => {
    // This is needed for leaflet which has references to window object
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  }
};

module.exports = nextConfig;
