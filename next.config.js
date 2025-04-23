/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/TravelCruiseAgencyWebsite2' : '',
  images: {
    domains: [
      'images.unsplash.com',
      'plus.unsplash.com',
      'via.placeholder.com',
      'unpkg.com'
    ],
    unoptimized: true, // Required for static export
  },
  webpack: (config) => {
    // This is only needed if you're using leaflet
    // since it has some references to window object
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  }
};

module.exports = nextConfig;
