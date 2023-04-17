import i18n from './i18n'

const langs = {
  zh: 0,
  'zh-cn': 0,
  'zh-CN': 0,
  'zh-HK': 1,
  'zh-tw': 2,
  'zh-TW': 2,
  'en-us': 3,
  'en-US': 3,
  'en-gb': 3,
  'en-GB': 3,
  en: 3,
  uz: 4,
  'uz-UZ': 4
}

let userLanguage = ''

const setLanguage = (options = {}) => {
  // Set default language to Uzbek if no language is specified in options
  userLanguage = options.lang in langs ? options.lang : 'uz'
}

const translate = (key, language) => {
  const lang = language || userLanguage || 'uz' // Always set default language to Uzbek
  let value
  if (lang && langs[lang]) {
    value = i18n[key][langs[lang]]
  } else {
    value = i18n[key][langs['']]
  }
  return value || ''
}

export default translate
export {
  setLanguage
}
