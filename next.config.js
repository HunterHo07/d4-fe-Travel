/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'plus.unsplash.com',
      'via.placeholder.com',
      'unpkg.com'
    ],
  },
  webpack: (config) => {
    // This is only needed if you're using leaflet
    // since it has some references to window object
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  }
};

module.exports = nextConfig;
