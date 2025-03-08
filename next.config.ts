/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Disable strict mode to prevent double animations in development
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: '/dms/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60, // Cache images for longer
  },
  // Optimize compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console in production
  },
  // Enable swcMinify for better performance
  swcMinify: true,
};

export default nextConfig;
