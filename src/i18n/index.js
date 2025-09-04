import { createI18n } from 'vue-i18n'
import ar from './locales/ar.js'
import en from './locales/en.js'

const messages = {
  ar,
  en
}

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || 'ar',
  fallbackLocale: 'ar',
  messages
})

export default i18n