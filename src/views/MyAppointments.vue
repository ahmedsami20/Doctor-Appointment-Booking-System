<template>
  <div class="container py-4">
    <div class="row">
      <div class="col-12">
        <div class="text-center text-white mb-4">
          <h2><i class="fas fa-calendar-check me-2"></i>{{ $t('myAppointments.title') }}</h2>
          <p>{{ $t('myAppointments.subtitle') }}</p>
        </div>

        <!-- Filter Tabs -->
        <div class="filter-container mb-4">
          <div class="btn-group w-100" role="group">
            <button 
              type="button" 
              class="filter-btn"
              :class="{ active: activeFilter === 'all' }"
              @click="setFilter('all')"
            >
              {{ $t('myAppointments.filters.all') }} ({{ appointments.length }})
            </button>
            <button 
              type="button" 
              class="filter-btn"
              :class="{ active: activeFilter === 'upcoming' }"
              @click="setFilter('upcoming')"
            >
              {{ $t('myAppointments.filters.upcoming') }} ({{ upcomingAppointments.length }})
            </button>
            <button 
              type="button" 
              class="filter-btn"
              :class="{ active: activeFilter === 'past' }"
              @click="setFilter('past')"
            >
              {{ $t('myAppointments.filters.past') }} ({{ pastAppointments.length }})
            </button>
          </div>
        </div>

        <!-- No Appointments -->
        <div v-if="appointments.length === 0" class="text-center text-white py-5">
          <i class="fas fa-calendar-times fa-4x mb-3 opacity-50"></i>
          <h4>{{ $t('myAppointments.noAppointments.title') }}</h4>
          <p>{{ $t('myAppointments.noAppointments.message') }}</p>
          <router-link to="/doctors" class="btn btn-primary btn-lg">
            <i class="fas fa-plus me-2"></i>{{ $t('myAppointments.noAppointments.bookNew') }}
          </router-link>
        </div>

        <!-- Appointments List -->
        <div v-else>
          <div class="row g-4">
            <div 
              class="col-lg-6" 
              v-for="appointment in filteredAppointments" 
              :key="appointment.id"
            >
              <div class="card appointment-card fade-in-up">
                <div class="card-body">
                  <div class="row">
                    <div class="col-3">
                      <img 
                        :src="appointment.doctorImage" 
                        :alt="appointment.doctorName" 
                        class="doctor-img w-100"
                        style="height: 80px; object-fit: cover;"
                        @error="handleImageError"
                      >
                    </div>
                    <div class="col-9">
                      <div class="d-flex justify-content-between align-items-start mb-2">
                        <h5 class="card-title mb-0">{{ appointment.doctorName }}</h5>
                        <span 
                          class="badge"
                          :class="{
                            'bg-success': appointment.status === 'مؤكد',
                            'bg-warning': appointment.status === 'في الانتظار',
                            'bg-danger': appointment.status === 'ملغي',
                            'bg-secondary': appointment.status === 'مكتمل'
                          }"
                        >
                          {{ getStatusTranslation(appointment.status) }}
                        </span>
                      </div>
                      
                      <p class="text-muted mb-2">
                        <span class="specialty-badge small">{{ getSpecialtyTranslation(appointment.doctorSpecialty) }}</span>
                      </p>
                      
                      <div class="appointment-details">
                        <p class="mb-1">
                          <i class="fas fa-calendar text-primary me-2"></i>
                          <strong>{{ formatDate(appointment.date) }}</strong>
                        </p>
                        <p class="mb-1">
                          <i class="fas fa-clock text-success me-2"></i>
                          {{ appointment.time }}
                        </p>
                        <p class="mb-1">
                          <i class="fas fa-hashtag text-info me-2"></i>
                          {{ $t('myAppointments.bookingId') }}: {{ appointment.bookingId }}
                        </p>
                        
                        <div v-if="appointment.notes" class="mt-2">
                          <small class="text-muted">
                            <i class="fas fa-sticky-note me-1"></i>
                            {{ appointment.notes }}
                          </small>
                        </div>
                      </div>
                      
                      <!-- Actions -->
                      <div class="mt-3">
                        <button 
                          v-if="canCancelAppointment(appointment)"
                          @click="showCancelModal(appointment)"
                          class="btn btn-danger btn-sm me-2"
                        >
                          <i class="fas fa-times me-1"></i>{{ $t('myAppointments.cancelAppointment') }}
                        </button>
                        
                        <button 
                          v-if="canRescheduleAppointment(appointment)"
                          @click="rescheduleAppointment(appointment)"
                          class="btn btn-warning btn-sm me-2"
                        >
                          <i class="fas fa-edit me-1"></i>{{ $t('myAppointments.reschedule') }}
                        </button>
                        
                        <button 
                          @click="viewDetails(appointment)"
                          class="btn btn-info btn-sm"
                        >
                          <i class="fas fa-eye me-1"></i>{{ $t('myAppointments.viewDetails') }}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Cancel Confirmation Modal -->
    <div v-if="showCancelConfirm" class="modal fade show" style="display: block;" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ $t('myAppointments.cancelConfirm.title') }}</h5>
            <button type="button" class="btn-close" @click="closeCancelModal"></button>
          </div>
          <div class="modal-body">
            <div class="alert alert-warning">
              <i class="fas fa-exclamation-triangle me-2"></i>
              {{ $t('myAppointments.cancelConfirm.message') }}
            </div>
            <div v-if="appointmentToCancel">
              <p><strong>{{ $t('booking.doctor') }}:</strong> {{ appointmentToCancel.doctorName }}</p>
              <p><strong>{{ $t('common.date') }}:</strong> {{ formatDate(appointmentToCancel.date) }}</p>
              <p><strong>{{ $t('common.time') }}:</strong> {{ appointmentToCancel.time }}</p>
            </div>
            <div class="form-group mt-3">
              <label class="form-label">{{ $t('myAppointments.cancelConfirm.reason') }}</label>
              <textarea 
                class="form-control" 
                v-model="cancelReason"
                rows="3"
                :placeholder="$t('myAppointments.cancelConfirm.reasonPlaceholder')"
              ></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeCancelModal">
              {{ $t('myAppointments.cancelConfirm.cancelAction') }}
            </button>
            <button type="button" class="btn btn-danger" @click="confirmCancel">
              <i class="fas fa-times me-2"></i>{{ $t('myAppointments.cancelConfirm.confirmCancel') }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Appointment Details Modal -->
    <div v-if="showDetailsModal" class="modal fade show" style="display: block;" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ $t('myAppointments.appointmentDetails') }}</h5>
            <button type="button" class="btn-close" @click="closeDetailsModal"></button>
          </div>
          <div class="modal-body" v-if="selectedAppointment">
            <div class="row">
              <div class="col-md-4 text-center">
                <img 
                  :src="selectedAppointment.doctorImage" 
                  :alt="selectedAppointment.doctorName" 
                  class="doctor-img mb-3"
                  @error="handleImageError"
                >
              </div>
              <div class="col-md-8">
                <h4>{{ selectedAppointment.doctorName }}</h4>
                <p><span class="specialty-badge">{{ getSpecialtyTranslation(selectedAppointment.doctorSpecialty) }}</span></p>
                
                <table class="table table-borderless">
                  <tr>
                    <td><strong>{{ $t('myAppointments.bookingId') }}:</strong></td>
                    <td>{{ selectedAppointment.bookingId }}</td>
                  </tr>
                  <tr>
                    <td><strong>{{ $t('myAppointments.patientName') }}:</strong></td>
                    <td>{{ selectedAppointment.patientName }}</td>
                  </tr>
                  <tr>
                    <td><strong>{{ $t('common.phone') }}:</strong></td>
                    <td>{{ selectedAppointment.phone }}</td>
                  </tr>
                  <tr>
                    <td><strong>{{ $t('common.email') }}:</strong></td>
                    <td>{{ selectedAppointment.email }}</td>
                  </tr>
                  <tr>
                    <td><strong>{{ $t('common.date') }}:</strong></td>
                    <td>{{ formatDate(selectedAppointment.date) }}</td>
                  </tr>
                  <tr>
                    <td><strong>{{ $t('common.time') }}:</strong></td>
                    <td>{{ selectedAppointment.time }}</td>
                  </tr>
                  <tr>
                    <td><strong>{{ $t('common.status') }}:</strong></td>
                    <td>
                      <span 
                        class="badge"
                        :class="{
                          'bg-success': selectedAppointment.status === 'مؤكد',
                          'bg-warning': selectedAppointment.status === 'في الانتظار',
                          'bg-danger': selectedAppointment.status === 'ملغي',
                          'bg-secondary': selectedAppointment.status === 'مكتمل'
                        }"
                      >
                        {{ getStatusTranslation(selectedAppointment.status) }}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>{{ $t('myAppointments.createdAt') }}:</strong></td>
                    <td>{{ formatDateTime(selectedAppointment.createdAt) }}</td>
                  </tr>
                </table>
                
                <div v-if="selectedAppointment.notes" class="mt-3">
                  <strong>{{ $t('myAppointments.additionalNotes') }}:</strong>
                  <p class="bg-light p-3 rounded mt-2">{{ selectedAppointment.notes }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeDetailsModal">
              {{ $t('common.close') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useLanguage } from '@/composables/useLanguage'

export default {
  name: 'MyAppointments',
  setup() {
    const { formatDate, formatDateTime, getSpecialtyTranslation, getStatusTranslation } = useLanguage()
    return {
      formatDate,
      formatDateTime,
      getSpecialtyTranslation,
      getStatusTranslation
    }
  },
  data() {
    return {
      appointments: [],
      activeFilter: 'all',
      showCancelConfirm: false,
      appointmentToCancel: null,
      cancelReason: '',
      showDetailsModal: false,
      selectedAppointment: null
    }
  },
  computed: {
    filteredAppointments() {
      switch (this.activeFilter) {
        case 'upcoming':
          return this.upcomingAppointments
        case 'past':
          return this.pastAppointments
        default:
          return this.appointments
      }
    },
    upcomingAppointments() {
      const now = new Date()
      return this.appointments.filter(apt => {
        const appointmentDate = new Date(apt.date)
        return appointmentDate >= now && apt.status !== 'ملغي'
      }).sort((a, b) => new Date(a.date) - new Date(b.date))
    },
    pastAppointments() {
      const now = new Date()
      return this.appointments.filter(apt => {
        const appointmentDate = new Date(apt.date)
        return appointmentDate < now || apt.status === 'مكتمل'
      }).sort((a, b) => new Date(b.date) - new Date(a.date))
    }
  },
  mounted() {
    this.loadAppointments()
  },
  methods: {
    loadAppointments() {
      this.appointments = JSON.parse(localStorage.getItem('appointments') || '[]')
    },
    setFilter(filter) {
      this.activeFilter = filter
    },
    canCancelAppointment(appointment) {
      const appointmentDate = new Date(appointment.date)
      const now = new Date()
      const hoursDiff = (appointmentDate - now) / (1000 * 60 * 60)
      
      return hoursDiff > 24 && appointment.status === 'مؤكد'
    },
    canRescheduleAppointment(appointment) {
      const appointmentDate = new Date(appointment.date)
      const now = new Date()
      const hoursDiff = (appointmentDate - now) / (1000 * 60 * 60)
      
      return hoursDiff > 24 && appointment.status === 'مؤكد'
    },
    showCancelModal(appointment) {
      this.appointmentToCancel = appointment
      this.showCancelConfirm = true
      this.cancelReason = ''
    },
    closeCancelModal() {
      this.showCancelConfirm = false
      this.appointmentToCancel = null
      this.cancelReason = ''
    },
    confirmCancel() {
      if (this.appointmentToCancel) {
        // Update appointment status
        const appointments = JSON.parse(localStorage.getItem('appointments') || '[]')
        const index = appointments.findIndex(apt => apt.id === this.appointmentToCancel.id)
        
        if (index !== -1) {
          appointments[index].status = 'ملغي'
          appointments[index].cancelReason = this.cancelReason
          appointments[index].canceledAt = new Date().toISOString()
          
          localStorage.setItem('appointments', JSON.stringify(appointments))
          this.loadAppointments()
        }
      }
      this.closeCancelModal()
    },
    rescheduleAppointment(appointment) {
      // Navigate to booking page with pre-filled data
      this.$router.push({
        name: 'BookAppointment',
        params: { doctorId: appointment.doctorId },
        query: { reschedule: appointment.id }
      })
    },
    viewDetails(appointment) {
      this.selectedAppointment = appointment
      this.showDetailsModal = true
    },
    closeDetailsModal() {
      this.showDetailsModal = false
      this.selectedAppointment = null
    },
    handleImageError(event) {
      // Set fallback image
      event.target.src = 'https://via.placeholder.com/200x200/4A90E2/FFFFFF?text=Doctor'
      event.target.alt = 'Doctor placeholder image'
    }
  }
}
</script>