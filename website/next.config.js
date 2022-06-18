/** @type {import('next').NextConfig} */
const deploysToGitHub = process.env.NEXT_PUBLIC_DEPLOYS_TO_GITHUB === 'TRUE'

const nextConfig = {
  reactStrictMode: true,
  // GitHub Pages config
  assetPrefix: deploysToGitHub ? '/cmmm/' : '',
}

module.exports = nextConfig
