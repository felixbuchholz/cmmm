/* eslint-disable no-console */
/** @type {import('next').NextConfig} */
const serverSubFolder = process.env.NEXT_PUBLIC_SERVER_SUBFOLDER
const server = process.env.NEXT_PUBLIC_SERVER ?? ''
const basePath = serverSubFolder ?? ''

console.log('================================')
console.log('Export to: ', server, basePath)
console.log('================================')

const nextConfig = {
  reactStrictMode: true,
  // Server / GitHub pages config
  assetPrefix: basePath,
  basePath,
}

module.exports = nextConfig
