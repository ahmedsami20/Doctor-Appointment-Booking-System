<template>
  <div class="container py-4">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <!-- Doctor Info -->
        <div class="card doctor-card mb-4" v-if="doctor">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-md-3 text-center">
                <img :src="doctor.image" :alt="getLocalizedName(doctor)" class="doctor-img mb-3">
              </div>
              <div class="col-md-9">
                <h4>{{ getLocalizedName(doctor) }}</h4>
                <p class="mb-2">
                  <span class="specialty-badge">{{ $t('specialties.' + doctor.specialty) }}</span>
                </p>
                <p class="mb-2">
                  <i class="fas fa-map-marker-alt text-primary me-2"></i>
                  {{ getLocalizedLocation(doctor) }}
                </p>
                <p class="mb-2">
                  <i class="fas fa-graduation-cap text-success me-2"></i>
                  {{ getLocalizedExperience(doctor) }}
                </p>
                <p class="mb-2">
                  <i class="fas fa-star text-warning me-2"></i>
                  {{ doctor.rating }} / 5
                </p>
                <p class="mb-0">
                  <i class="fas fa-money-bill-wave text-info me-2"></i>
                  {{ formatNumber(doctor.price) }} {{ $t('doctors.egp') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Booking Form -->
        <div class="form-container">
          <h3 class="text-center mb-4">{{ $t('booking.title') }}</h3>
          
          <form @submit.prevent="submitBooking">
            <div class="row g-3">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-label">{{ $t('booking.fullName') }} *</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    v-model="form.patientName"
                    :class="{ 'is-invalid': errors.patientName }"
                    required
                  >
                  <div v-if="errors.patientName" class="invalid-feedback">
                    {{ errors.patientName }}
                  </div>
                </div>
              </div>
              
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-label">{{ $t('common.phone') }} *</label>
                  <input 
                    type="tel" 
                    class="form-control" 
                    v-model="form.phone"
                    :class="{ 'is-invalid': errors.phone }"
                    placeholder="01xxxxxxxxx"
                    required
                  >
                  <div v-if="errors.phone" class="invalid-feedback">
                    {{ errors.phone }}
                  </div>
                </div>
              </div>
              
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-label">{{ $t('common.email') }} *</label>
                  <input 
                    type="email" 
                    class="form-control" 
                    v-model="form.email"
                    :class="{ 'is-invalid': errors.email }"
                    required
                  >
                  <div v-if="errors.email" class="invalid-feedback">
                    {{ errors.email }}
                  </div>
                </div>
              </div>
              
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-label">{{ $t('booking.appointmentDate') }} *</label>
                  <input 
                    type="date" 
                    class="form-control" 
                    v-model="form.date"
                    :min="minDate"
                    :class="{ 'is-invalid': errors.date }"
                    required
                  >
                  <div v-if="errors.date" class="invalid-feedback">
                    {{ errors.date }}
                  </div>
                </div>
              </div>
              
              <div class="col-12">
                <div class="form-group">
                  <label class="form-label">{{ $t('booking.appointmentTime') }} *</label>
                  <div class="row g-2">
                    <div 
                      v-for="slot in doctor?.availableSlots" 
                      :key="slot"
                      class="col-md-2 col-4"
                    >
                      <div 
                        class="time-slot text-center"
                        :class="{ 
                          selected: form.time === slot,
                          unavailable: isSlotUnavailable(slot)
                        }"
                        @click="selectTimeSlot(slot)"
                      >
                        {{ slot }}
                      </div>
                    </div>
                  </div>
                  <div v-if="errors.time" class="text-danger small mt-1">
                    {{ errors.time }}
                  </div>
                </div>
              </div>
              
              <div class="col-12">
                <div class="form-group">
                  <label class="form-label">{{ $t('booking.additionalNotes') }} ({{ $t('common.optional') }})</label>
                  <textarea 
                    class="form-control" 
                    v-model="form.notes"
                    rows="3"
                    :placeholder="$t('booking.notesPlaceholder')"
                  ></textarea>
                </div>
              </div>
            </div>
            
            <!-- Booking Summary -->
            <div class="alert alert-info mt-4" v-if="form.date && form.time">
              <h6><i class="fas fa-info-circle me-2"></i>{{ $t('booking.bookingSummary') }}</h6>
              <div class="row">
                <div class="col-md-6">
                  <p class="mb-1"><strong>{{ $t('booking.doctor') }}:</strong> {{ getLocalizedName(doctor) }}</p>
                  <p class="mb-1"><strong>{{ $t('booking.specialty') }}:</strong> {{ $t('specialties.' + doctor?.specialty) }}</p>
                </div>
                <div class="col-md-6">
                  <p class="mb-1"><strong>{{ $t('common.date') }}:</strong> {{ formatDate(form.date) }}</p>
                  <p class="mb-1"><strong>{{ $t('common.time') }}:</strong> {{ form.time }}</p>
                  <p class="mb-1"><strong>{{ $t('booking.fees') }}:</strong> {{ formatNumber(doctor?.price) }} {{ $t('doctors.egp') }}</p>
                </div>
              </div>
            </div>
            
            <div class="text-center mt-4">
              <button 
                type="submit" 
                class="btn btn-primary btn-lg"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting">
                  <i class="fas fa-spinner fa-spin me-2"></i>{{ $t('booking.booking') }}
                </span>
                <span v-else>
                  <i class="fas fa-calendar-check me-2"></i>{{ $t('booking.confirmBooking') }}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="modal fade show" style="display: block;" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-success text-white">
            <h5 class="modal-title">
              <i class="fas fa-check-circle me-2"></i>{{ $t('booking.success.title') }}
            </h5>
          </div>
          <div class="modal-body text-center">
            <div class="py-3">
              <i class="fas fa-check-circle text-success" style="font-size: 4rem;"></i>
              <h4 class="mt-3 mb-3">{{ $t('booking.success.message') }}</h4>
              <div class="alert alert-success">
                <p class="mb-2"><strong>{{ $t('booking.success.bookingNumber') }}:</strong> #{{ bookingId }}</p>
                <p class="mb-2"><strong>{{ $t('booking.doctor') }}:</strong> {{ getLocalizedName(doctor) }}</p>
                <p class="mb-2"><strong>{{ $t('common.date') }}:</strong> {{ formatDate(form.date) }}</p>
                <p class="mb-2"><strong>{{ $t('common.time') }}:</strong> {{ form.time }}</p>
              </div>
              <p class="text-muted">
                {{ $t('booking.success.confirmationMessage') }}
              </p>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">{{ $t('common.close') }}</button>
            <button type="button" class="btn btn-primary" @click="goToMyAppointments">{{ $t('nav.myAppointments') }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { doctors } from '@/data/doctors.js'
import { useLanguage } from '@/composables/useLanguage'

export default {
  name: 'BookAppointment',
  props: {
    doctorId: {
      type: String,
      required: true
    }
  },
  setup() {
    const { formatDate, formatNumber } = useLanguage()
    return {
      formatDate,
      formatNumber
    }
  },
  data() {
    return {
      doctor: null,
      form: {
        patientName: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        notes: ''
      },
      errors: {},
      isSubmitting: false,
      showSuccessModal: false,
      bookingId: null,
      minDate: new Date().toISOString().split('T')[0]
    }
  },
  mounted() {
    this.loadDoctor()
    // Set default date to tomorrow
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    this.form.date = tomorrow.toISOString().split('T')[0]
  },
  methods: {
    loadDoctor() {
      const id = parseInt(this.doctorId)
      this.doctor = doctors.find(doc => doc.id === id)
      if (!this.doctor) {
        this.$router.push('/doctors')
      }
    },

    // Helper methods for localization
    getLocalizedName(doctor) {
      return this.$i18n.locale === 'ar' ? doctor.name : doctor.nameEn
    },
    
    getLocalizedLocation(doctor) {
      return this.$i18n.locale === 'ar' ? doctor.location : doctor.locationEn
    },
    
    getLocalizedExperience(doctor) {
      return this.$i18n.locale === 'ar' ? doctor.experience : doctor.experienceEn
    },

    selectTimeSlot(slot) {
      if (!this.isSlotUnavailable(slot)) {
        this.form.time = slot
        if (this.errors.time) {
          delete this.errors.time
        }
      }
    },

    isSlotUnavailable(slot) {
      // Check if slot is already booked for selected date
      const appointments = JSON.parse(localStorage.getItem('appointments') || '[]')
      return appointments.some(apt => 
        apt.doctorId === this.doctor?.id && 
        apt.date === this.form.date && 
        apt.time === slot
      )
    },

    validateForm() {
      this.errors = {}
      
      // Name validation
      if (!this.form.patientName.trim()) {
        this.errors.patientName = this.$t('validation.required')
      } else if (this.form.patientName.trim().length < 3) {
        this.errors.patientName = this.$t('validation.minLength', { min: 3 })
      }
      
      // Phone validation
      if (!this.form.phone.trim()) {
        this.errors.phone = this.$t('validation.required')
      } else if (!/^01[0-9]{9}$/.test(this.form.phone.replace(/\s/g, ''))) {
        this.errors.phone = this.$t('validation.phone')
      }
      
      // Email validation
      if (!this.form.email.trim()) {
        this.errors.email = this.$t('validation.required')
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
        this.errors.email = this.$t('validation.email')
      }
      
      // Date validation
      if (!this.form.date) {
        this.errors.date = this.$t('validation.required')
      } else if (new Date(this.form.date) <= new Date()) {
        this.errors.date = this.$t('validation.futureDate')
      }
      
      // Time validation
      if (!this.form.time) {
        this.errors.time = this.$t('validation.required')
      }
      
      return Object.keys(this.errors).length === 0
    },

    async submitBooking() {
      if (!this.validateForm()) {
        return
      }
      
      this.isSubmitting = true
      
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        // Generate booking ID
        this.bookingId = Math.random().toString(36).substr(2, 9).toUpperCase()
        
        // Save to localStorage with localized doctor data
        const appointments = JSON.parse(localStorage.getItem('appointments') || '[]')
        const newAppointment = {
          id: Date.now(),
          bookingId: this.bookingId,
          doctorId: this.doctor.id,
          doctorName: this.getLocalizedName(this.doctor),
          doctorSpecialty: this.doctor.specialty,
          doctorImage: this.doctor.image,
          doctorLocation: this.getLocalizedLocation(this.doctor),
          patientName: this.form.patientName,
          phone: this.form.phone,
          email: this.form.email,
          date: this.form.date,
          time: this.form.time,
          notes: this.form.notes,
          status: 'مؤكد',
          createdAt: new Date().toISOString(),
          locale: this.$i18n.locale // Save the language used for booking
        }
        
        appointments.push(newAppointment)
        localStorage.setItem('appointments', JSON.stringify(appointments))
        
        this.showSuccessModal = true
        
      } catch (error) {
        console.error('Error booking appointment:', error)
        alert(this.$t('contact.errorMessage'))
      } finally {
        this.isSubmitting = false
      }
    },

    closeModal() {
      this.showSuccessModal = false
      this.$router.push('/doctors')
    },

    goToMyAppointments() {
      this.showSuccessModal = false
      this.$router.push('/my-appointments')
    }
  }
}
</script>