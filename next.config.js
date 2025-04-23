/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports for GitHub Pages
  basePath: '/d4-fe-Travel',
  assetPrefix: '/d4-fe-Travel/',
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
  },
  // Ensure trailing slash for better path handling
  trailingSlash: true
};

module.exports = nextConfig;
