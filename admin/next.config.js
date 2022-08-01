/** @type {import('next').NextConfig} */

if (typeof process.env.BASE_PATH !== 'undefined' && process.env.BASE_PATH !== 'none') {
  const nextConfig = {
    basePath: '/' + process.env.BASE_PATH,
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
} else {
  const nextConfig = {
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
}
