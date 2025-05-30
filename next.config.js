/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configure page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Disable server-side generation for specific paths
  async exportPathMap() {
    return {
      '/': { page: '/' },
      '/login': { page: '/login' },
      '/register': { page: '/register' },
      '/dashboard': { page: '/dashboard' },
      '/calls': { page: '/calls' },
      '/agents': { page: '/agents' },
      '/settings': { page: '/settings' },
      '/404': { page: '/404' }
    };
  },
  // Enable webpack analyzer in development
  webpack: (config, { dev, isServer }) => {
    // Add any custom webpack config here
    return config;
  }
};

module.exports = nextConfig; 