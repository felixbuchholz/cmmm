/* eslint-disable no-console */
/** @type {import('next').NextConfig} */
const serverSubFolder = process.env.NEXT_PUBLIC_SERVER_SUBFOLDER
const assetPrefix = serverSubFolder ?? ''

console.log('================================')
console.log('Export folder: ', assetPrefix)
console.log('================================')

const nextConfig = {
  reactStrictMode: true,
  // Server / GitHub pages config
  assetPrefix: serverSubFolder,
}

module.exports = nextConfig
