/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    output: 'export', // Enables static export
    images: {
        unoptimized: true // Required for static image export
    },
};

module.exports = nextConfig;