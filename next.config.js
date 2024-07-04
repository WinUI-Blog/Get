/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

module.exports = {
    ...withNextra(),
    images: {
      unoptimized: true,
    },
};