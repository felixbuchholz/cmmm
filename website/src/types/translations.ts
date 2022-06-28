export const translations = ['en', 'srp'] as const

export type Translation = typeof translations[number]

export type MDXLangCode = Record<Translation, string>
