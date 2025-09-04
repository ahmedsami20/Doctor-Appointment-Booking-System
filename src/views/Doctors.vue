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
                placeholder="ابحث عن طبيب..."
                v-model="searchQuery"
                @input="filterDoctors"
              >
              <button class="search-btn">
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
            >
              {{ specialty }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Results Count -->
    <div class="text-white mb-3">
      <p>تم العثور على {{ filteredDoctors.length }} طبيب</p>
    </div>

    <!-- Doctors Grid -->
    <div class="row g-4">
      <div class="col-lg-4 col-md-6" v-for="doctor in paginatedDoctors" :key="doctor.id">
        <div class="card doctor-card fade-in-up">
          <div class="card-body p-4">
            <div class="text-center mb-3">
              <img :src="doctor.image" :alt="doctor.name" class="doctor-img">
              <h5 class="card-title mt-3 mb-2">{{ doctor.name }}</h5>
              <span class="specialty-badge">{{ doctor.specialty }}</span>
            </div>
            
            <div class="doctor-info">
              <p class="mb-2">
                <i class="fas fa-map-marker-alt text-primary me-2"></i>
                {{ doctor.location }}
              </p>
              <p class="mb-2">
                <i class="fas fa-graduation-cap text-success me-2"></i>
                {{ doctor.experience }}
              </p>
              <p class="mb-2">
                <i class="fas fa-star text-warning me-2"></i>
                {{ doctor.rating }} / 5
              </p>
              <p class="mb-3">
                <i class="fas fa-money-bill-wave text-info me-2"></i>
                {{ doctor.price }} جنيه
              </p>
              
              <!-- Available Slots -->
              <div class="mb-3">
                <small class="text-muted">المواعيد المتاحة اليوم:</small>
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
            
            <button @click="bookAppointment(doctor.id)" class="book-btn w-100">
              <i class="fas fa-calendar-plus me-2"></i>
              احجز موعد
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- No Results -->
    <div v-if="filteredDoctors.length === 0" class="text-center text-white py-5">
      <i class="fas fa-search fa-3x mb-3 opacity-50"></i>
      <h4>لا توجد نتائج</h4>
      <p>جرب البحث بكلمات أخرى أو اختر تخصص مختلف</p>
    </div>

    <!-- Pagination -->
    <nav v-if="totalPages > 1" class="mt-4">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <button class="page-link" @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">
            <i class="fas fa-chevron-right"></i>
          </button>
        </li>
        <li 
          v-for="page in visiblePages" 
          :key="page" 
          class="page-item" 
          :class="{ active: currentPage === page }"
        >
          <button class="page-link" @click="goToPage(page)">{{ page }}</button>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <button class="page-link" @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">
            <i class="fas fa-chevron-left"></i>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { doctors, specialties } from '@/data/doctors.js'

export default {
  name: 'Doctors',
  data() {
    return {
      doctors,
      specialties,
      searchQuery: '',
      selectedSpecialty: 'الكل',
      currentPage: 1,
      doctorsPerPage: 6
    }
  },
  computed: {
    filteredDoctors() {
      let filtered = this.doctors

      // Filter by search query
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        filtered = filtered.filter(doctor => 
          doctor.name.toLowerCase().includes(query) ||
          doctor.specialty.toLowerCase().includes(query) ||
          doctor.location.toLowerCase().includes(query)
        )
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
    // Check for query parameters
    const { search, specialty } = this.$route.query
    if (search) {
      this.searchQuery = search
    }
    if (specialty) {
      this.selectedSpecialty = specialty
    }
  },
  watch: {
    filteredDoctors() {
      this.currentPage = 1
    }
  },
  methods: {
    filterDoctors() {
      // Method called on search input
    },
    filterBySpecialty(specialty) {
      this.selectedSpecialty = specialty
      this.currentPage = 1
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },
    bookAppointment(doctorId) {
      this.$router.push({ name: 'BookAppointment', params: { doctorId } })
    }
  }
}
</script>