<template>
  <div id="app" :class="{ 'dark-mode': isDarkMode, 'light-mode': !isDarkMode }">
    <Header 
      :isDarkMode="isDarkMode" 
      @toggle-theme="toggleTheme"
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
            <h5 class="modal-title">تذكير بالموعد</h5>
            <button type="button" class="btn-close" @click="dismissReminder"></button>
          </div>
          <div class="modal-body">
            <div class="alert alert-info">
              <i class="fas fa-bell me-2"></i>
              لديك موعد مع {{ reminderAppointment.doctorName }} في {{ formatDate(reminderAppointment.date) }} الساعة {{ reminderAppointment.time }}
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="dismissReminder">حسناً</button>
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
    
    // Start appointment reminder checker
    this.startReminderChecker()
  },
  beforeUnmount() {
    if (this.reminderInterval) {
      clearInterval(this.reminderInterval)
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode
      localStorage.setItem('darkMode', this.isDarkMode.toString())
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
      return new Date(dateString).toLocaleDateString('ar-EG')
    }
  }
}
</script>