export const isProduction = process.env.NODE_ENV === 'production'

export const deploysToGitHub =
  process.env.NEXT_PUBLIC_DEPLOYS_TO_GITHUB === 'TRUE'

export const githubPrefix = deploysToGitHub ? '/cmmm' : ''

export const mapboxAccessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
