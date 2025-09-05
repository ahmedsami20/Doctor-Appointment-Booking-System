import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export function useLanguage() {
  const { locale, t } = useI18n()
  
  const isRTL = computed(() => locale.value === 'ar')
  const isLTR = computed(() => locale.value === 'en')
  
  const formatDate = (dateString, options = {}) => {
    const defaultOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    }
    
    const finalOptions = { ...defaultOptions, ...options }
    const localeCode = locale.value === 'ar' ? 'ar-EG' : 'en-US'
    
    return new Date(dateString).toLocaleDateString(localeCode, finalOptions)
  }
  
  const formatDateTime = (dateString, options = {}) => {
    const defaultOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }
    
    const finalOptions = { ...defaultOptions, ...options }
    const localeCode = locale.value === 'ar' ? 'ar-EG' : 'en-US'
    
    return new Date(dateString).toLocaleDateString(localeCode, finalOptions)
  }
  
  const formatNumber = (number) => {
    const localeCode = locale.value === 'ar' ? 'ar-EG' : 'en-US'
    return new Intl.NumberFormat(localeCode).format(number)
  }
  
  const getSpecialtyTranslation = (specialty) => {
    return t(`specialties.${specialty}`)
  }
  
  const getStatusTranslation = (status) => {
    return t(`status.${status}`)
  }
  
  return {
    locale,
    isRTL,
    isLTR,
    t,
    formatDate,
    formatDateTime,
    formatNumber,
    getSpecialtyTranslation,
    getStatusTranslation
  }
}