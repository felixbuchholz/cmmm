/* eslint-disable @typescript-eslint/no-var-requires */
const en = require('./translations.en.json')
const srp = require('./translations.srp.json')

const i18n = {
  translations: {
    en,
    srp,
  },
  defaultLang: 'srp',
  useBrowserDefault: true,
}

module.exports = i18n
