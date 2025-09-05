import { createI18n } from 'vue-i18n'
import ar from './locales/ar.js'
import en from './locales/en.js'

// Get saved language or default to Arabic
const savedLanguage = localStorage.getItem('language') || 'ar'

const i18n = createI18n({
  legacy: false,
  locale: savedLanguage,
  fallbackLocale: 'ar',
  messages: {
    ar,
    en
  },
  globalInjection: true
})

export default i18n

