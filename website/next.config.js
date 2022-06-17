/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  // GitHub Pages config
  assetPrefix: isProduction ? '/cmmm/' : '',
}

module.exports = nextConfig
