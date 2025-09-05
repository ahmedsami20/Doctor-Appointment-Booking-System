<template>
  <div id="app" 
       :class="{ 'dark-mode': isDarkMode, 'light-mode': !isDarkMode }"
       :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
  >
    <Header 
      :isDarkMode="isDarkMode" 
      :currentLanguage="$i18n.locale"
      @toggle-theme="toggleTheme"
      @toggle-language="toggleLanguage"
      :currentRoute="$route.name"
    />
    <main class="main-content">
      <router-view :key="$route.fullPath"></router-view>
    </main>
    <Footer />
    
    <!-- Appointment Reminder Modal -->
    <div v-if="reminderAppointment" class="modal fade show" style="display: block;" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ $t('reminder.title') }}</h5>
            <button type="button" class="btn-close" @click="dismissReminder"></button>
          </div>
          <div class="modal-body">
            <div class="alert alert-info">
              <i class="fas fa-bell me-2"></i>
              {{ $t('reminder.message', {
                doctorName: reminderAppointment.doctorName,
                date: formatDate(reminderAppointment.date),
                time: reminderAppointment.time
              }) }}
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="dismissReminder">
              {{ $t('reminder.ok') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      isDarkMode: false,
      reminderAppointment: null,
      reminderInterval: null
    }
  },
  mounted() {
    // Load theme preference
    this.isDarkMode = localStorage.getItem('darkMode') === 'true'
    
    // Load language preference and update HTML attributes
    const savedLanguage = localStorage.getItem('language') || 'ar'
    this.$i18n.locale = savedLanguage
    this.updateHtmlAttributes()
    
    // Start appointment reminder checker
    this.startReminderChecker()
  },
  beforeUnmount() {
    if (this.reminderInterval) {
      clearInterval(this.reminderInterval)
    }
  },
  watch: {
    '$i18n.locale'() {
      this.updateHtmlAttributes()
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode
      localStorage.setItem('darkMode', this.isDarkMode.toString())
    },
    toggleLanguage() {
      const newLanguage = this.$i18n.locale === 'ar' ? 'en' : 'ar'
      this.$i18n.locale = newLanguage
      localStorage.setItem('language', newLanguage)
      this.updateHtmlAttributes()
    },
    updateHtmlAttributes() {
      const html = document.documentElement
      html.setAttribute('lang', this.$i18n.locale)
      html.setAttribute('dir', this.$i18n.locale === 'ar' ? 'rtl' : 'ltr')
      
      // Update document title
      document.title = this.$i18n.locale === 'ar' ? 'نظام حجز المواعيد الطبية' : 'Medical Appointment Booking System'
    },
    startReminderChecker() {
      this.reminderInterval = setInterval(() => {
        this.checkAppointmentReminders()
      }, 60000) // Check every minute
    },
    checkAppointmentReminders() {
      const appointments = JSON.parse(localStorage.getItem('appointments') || '[]')
      const now = new Date()
      const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000)
      
      const upcomingAppointments = appointments.filter(appointment => {
        const appointmentDate = new Date(appointment.date)
        return appointmentDate >= now && appointmentDate <= tomorrow
      })
      
      if (upcomingAppointments.length > 0 && !this.reminderAppointment) {
        this.reminderAppointment = upcomingAppointments[0]
      }
    },
    dismissReminder() {
      this.reminderAppointment = null
    },
    formatDate(dateString) {
      const locale = this.$i18n.locale === 'ar' ? 'ar-EG' : 'en-US'
      return new Date(dateString).toLocaleDateString(locale)
    }
  }
}
</script>