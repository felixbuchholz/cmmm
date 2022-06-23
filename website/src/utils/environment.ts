export const isProduction = process.env.NODE_ENV === 'production'

export const envSubFolder = process.env.NEXT_PUBLIC_SERVER_SUBFOLDER
export const serverSubFolderPrefix = envSubFolder ?? ''

export const mapboxAccessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
