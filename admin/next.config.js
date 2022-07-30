/** @type {import('next').NextConfig} */
const nextConfig = {
  //basePath: '/',
  output: 'standalone',
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'id',
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  }
}

module.exports = nextConfig
