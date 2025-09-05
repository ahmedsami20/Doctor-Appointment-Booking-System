<template>
  <div class="container py-4">
    <!-- Search and Filters -->
    <div class="filter-container">
      <div class="row g-3">
        <div class="col-md-6">
          <div class="search-box">
            <div class="input-group">
              <input 
                type="text" 
                class="form-control search-input" 
                :placeholder="$t('doctors.searchPlaceholder')"
                v-model="searchQuery"
                @input="filterDoctors"
              >
              <button class="search-btn" type="button">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="d-flex flex-wrap justify-content-center">
            <button 
              v-for="specialty in specialties" 
              :key="specialty"
              @click="filterBySpecialty(specialty)"
              :class="['filter-btn', { active: selectedSpecialty === specialty }]"
              type="button"
            >
              {{ specialty === 'الكل' ? $t('common.all') : $t('specialties.' + specialty) }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Results Count -->
    <div class="text-white mb-3">
      <p>{{ $t('doctors.resultsFound', { count: filteredDoctors.length }) }}</p>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="text-center text-white py-5">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p class="mt-3">{{ $t('common.loading') }}</p>
    </div>

    <!-- Doctors Grid -->
    <div v-else class="row g-4">
      <div class="col-lg-4 col-md-6" v-for="doctor in paginatedDoctors" :key="doctor.id">
        <div class="card doctor-card fade-in-up">
          <div class="card-body p-4">
            <div class="text-center mb-3">
              <img 
                :src="doctor.image" 
                :alt="getLocalizedName(doctor)" 
                class="doctor-img"
                @error="handleImageError($event)"
                loading="lazy"
              >
              <h5 class="card-title mt-3 mb-2">{{ getLocalizedName(doctor) }}</h5>
              <span class="specialty-badge">{{ $t('specialties.' + doctor.specialty) }}</span>
            </div>
            
            <div class="doctor-info">
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
              <p class="mb-3">
                <i class="fas fa-money-bill-wave text-info me-2"></i>
                {{ doctor.price }} {{ $t('doctors.egp') }}
              </p>
              
              <!-- Available Slots -->
              <div class="mb-3">
                <small class="text-muted">{{ $t('doctors.availableToday') }}</small>
                <div class="d-flex flex-wrap gap-1 mt-1">
                  <span v-for="slot in doctor.availableSlots.slice(0, 3)" :key="slot" class="availability-badge">
                    {{ slot }}
                  </span>
                  <span v-if="doctor.availableSlots.length > 3" class="availability-badge">
                    +{{ doctor.availableSlots.length - 3 }}
                  </span>
                </div>
              </div>
            </div>
            
            <button @click="bookAppointment(doctor.id)" class="book-btn w-100" type="button" :disabled="loading">
              <i class="fas fa-calendar-plus me-2"></i>
              {{ $t('doctors.bookAppointment') }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- No Results -->
    <div v-if="!loading && filteredDoctors.length === 0" class="text-center text-white py-5">
      <i class="fas fa-search fa-3x mb-3 opacity-50"></i>
      <h4>{{ $t('doctors.noResults.title') }}</h4>
      <p>{{ $t('doctors.noResults.message') }}</p>
    </div>

    <!-- Pagination -->
    <nav v-if="!loading && totalPages > 1" class="mt-4" aria-label="Doctors pagination">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <button 
            class="page-link" 
            @click="goToPage(currentPage - 1)" 
            :disabled="currentPage === 1"
            type="button"
          >
            <i :class="$i18n.locale === 'ar' ? 'fas fa-chevron-right' : 'fas fa-chevron-left'"></i>
          </button>
        </li>
        <li 
          v-for="page in visiblePages" 
          :key="page" 
          class="page-item" 
          :class="{ active: currentPage === page }"
        >
          <button 
            class="page-link" 
            @click="goToPage(page)"
            type="button"
          >
            {{ page }}
          </button>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <button 
            class="page-link" 
            @click="goToPage(currentPage + 1)" 
            :disabled="currentPage === totalPages"
            type="button"
          >
            <i :class="$i18n.locale === 'ar' ? 'fas fa-chevron-left' : 'fas fa-chevron-right'"></i>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { doctors, specialties } from '@/data/doctors.js'
import { useLanguage } from '@/composables/useLanguage'

export default {
  name: 'Doctors',
  setup() {
    const { locale } = useLanguage()
    return { locale }
  },
  data() {
    return {
      doctors: [],
      specialties,
      searchQuery: '',
      selectedSpecialty: 'الكل',
      currentPage: 1,
      doctorsPerPage: 6,
      loading: false
    }
  },
  computed: {
    filteredDoctors() {
      let filtered = this.doctors

      // Filter by search query
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        filtered = filtered.filter(doctor => {
          const nameMatch = this.getLocalizedName(doctor).toLowerCase().includes(query)
          const locationMatch = this.getLocalizedLocation(doctor).toLowerCase().includes(query)
          const specialtyMatch = doctor.specialty.toLowerCase().includes(query)
          
          return nameMatch || specialtyMatch || locationMatch
        })
      }

      // Filter by specialty
      if (this.selectedSpecialty !== 'الكل') {
        filtered = filtered.filter(doctor => doctor.specialty === this.selectedSpecialty)
      }

      return filtered
    },
    totalPages() {
      return Math.ceil(this.filteredDoctors.length / this.doctorsPerPage)
    },
    paginatedDoctors() {
      const start = (this.currentPage - 1) * this.doctorsPerPage
      const end = start + this.doctorsPerPage
      return this.filteredDoctors.slice(start, end)
    },
    visiblePages() {
      const pages = []
      const maxVisible = 5
      let start = Math.max(1, this.currentPage - Math.floor(maxVisible / 2))
      let end = Math.min(this.totalPages, start + maxVisible - 1)
      
      if (end - start < maxVisible - 1) {
        start = Math.max(1, end - maxVisible + 1)
      }
      
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }
      return pages
    }
  },
  mounted() {
    this.initializeComponent()
  },
  watch: {
    filteredDoctors() {
      this.currentPage = 1
    },
    '$route.query': {
      handler() {
        this.handleRouteQuery()
      },
      deep: true
    },
    // Watch for language changes
    '$i18n.locale'() {
      this.selectedSpecialty = 'الكل'
      this.searchQuery = ''
      this.currentPage = 1
    }
  },
  methods: {
    initializeComponent() {
      this.doctors = doctors
      this.handleRouteQuery()
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
    
    handleRouteQuery() {
      if (!this.$route?.query) return
      
      const { search, specialty } = this.$route.query
      
      if (search && search !== this.searchQuery) {
        this.searchQuery = search
      }
      
      if (specialty && specialty !== this.selectedSpecialty && this.specialties.includes(specialty)) {
        this.selectedSpecialty = specialty
      }
    },

    filterDoctors() {
      this.updateUrlQuery()
    },
    
    filterBySpecialty(specialty) {
      this.selectedSpecialty = specialty
      this.currentPage = 1
      this.updateUrlQuery()
    },
    
    updateUrlQuery() {
      if (!this.$router || !this.$route) return
      
      const query = { ...this.$route.query }
      
      if (this.searchQuery.trim()) {
        query.search = this.searchQuery.trim()
      } else {
        delete query.search
      }
      
      if (this.selectedSpecialty !== 'الكل') {
        query.specialty = this.selectedSpecialty
      } else {
        delete query.specialty
      }
      
      // Only update if query actually changed
      if (JSON.stringify(query) !== JSON.stringify(this.$route.query)) {
        this.$router.replace({ query }).catch(() => {
          // Ignore navigation errors
        })
      }
    },
    
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
        this.currentPage = page
        
        // Smooth scroll to top
        this.$nextTick(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        })
      }
    },
    
    bookAppointment(doctorId) {
      this.$router.push({ 
        name: 'BookAppointment', 
        params: { doctorId: doctorId.toString() } 
      })
    },
    
    handleImageError(event) {
      // Set fallback image
      event.target.src = 'https://via.placeholder.com/200x200/4A90E2/FFFFFF?text=Doctor'
      event.target.alt = 'Doctor placeholder image'
    }
  }
}
</script>

