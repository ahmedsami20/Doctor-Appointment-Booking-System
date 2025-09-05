<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="fade-in-up">
          <h1>{{ $t('home.welcome') }}</h1>
          <p>{{ $t('home.subtitle') }}</p>
          
          <div class="search-box mt-4">
            <div class="input-group">
              <input 
                type="text" 
                class="form-control search-input" 
                :placeholder="$t('home.searchPlaceholder')"
                v-model="searchQuery"
                @keyup.enter="searchDoctors"
              >
              <button class="search-btn" @click="searchDoctors">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-4" v-for="feature in features" :key="feature.id">
            <div class="card doctor-card h-100 text-center">
              <div class="card-body">
                <div class="mb-3">
                  <i :class="feature.icon" style="font-size: 3rem; color: #667eea;"></i>
                </div>
                <h5 class="card-title">{{ $t(feature.titleKey) }}</h5>
                <p class="card-text">{{ $t(feature.descriptionKey) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Specialties -->
    <section class="py-5">
      <div class="container">
        <h2 class="text-center text-white mb-5">{{ $t('home.popularSpecialties') }}</h2>
        <div class="row g-4">
          <div class="col-md-3 col-sm-6" v-for="specialty in popularSpecialties" :key="specialty.id">
            <div class="card doctor-card text-center h-100" @click="searchBySpecialty(specialty.name)">
              <div class="card-body">
                <i :class="specialty.icon" style="font-size: 2.5rem; color: #667eea;" class="mb-3"></i>
                <h6 class="card-title">{{ getSpecialtyName(specialty.name) }}</h6>
                <p class="text-muted small">{{ specialty.count }} {{ getDoctorText() }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics -->
    <section class="py-5">
      <div class="container">
        <div class="row text-center text-white">
          <div class="col-md-3 col-6 mb-4">
            <h3 class="display-4 fw-bold">{{ formatNumber(stats.doctors) }}+</h3>
            <p>{{ $t('home.stats.doctors') }}</p>
          </div>
          <div class="col-md-3 col-6 mb-4">
            <h3 class="display-4 fw-bold">{{ formatNumber(stats.appointments) }}+</h3>
            <p>{{ $t('home.stats.appointments') }}</p>
          </div>
          <div class="col-md-3 col-6 mb-4">
            <h3 class="display-4 fw-bold">{{ formatNumber(stats.patients) }}+</h3>
            <p>{{ $t('home.stats.patients') }}</p>
          </div>
          <div class="col-md-3 col-6 mb-4">
            <h3 class="display-4 fw-bold">{{ formatNumber(stats.specialties) }}+</h3>
            <p>{{ $t('home.stats.specialties') }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useLanguage } from '@/composables/useLanguage'

export default {
  name: 'Home',
  setup() {
    const { t, formatNumber, getSpecialtyTranslation } = useLanguage()
    
    return {
      t,
      formatNumber,
      getSpecialtyTranslation
    }
  },
  data() {
    return {
      searchQuery: '',
      features: [
        {
          id: 1,
          icon: 'fas fa-clock',
          titleKey: 'home.features.quickBooking.title',
          descriptionKey: 'home.features.quickBooking.description'
        },
        {
          id: 2,
          icon: 'fas fa-user-md',
          titleKey: 'home.features.certifiedDoctors.title',
          descriptionKey: 'home.features.certifiedDoctors.description'
        },
        {
          id: 3,
          icon: 'fas fa-mobile-alt',
          titleKey: 'home.features.easyToUse.title',
          descriptionKey: 'home.features.easyToUse.description'
        }
      ],
      popularSpecialties: [
        { id: 1, name: 'طب عام', icon: 'fas fa-stethoscope', count: 25 },
        { id: 2, name: 'أطفال', icon: 'fas fa-baby', count: 18 },
        { id: 3, name: 'أسنان', icon: 'fas fa-tooth', count: 22 },
        { id: 4, name: 'جلدية', icon: 'fas fa-hand-paper', count: 15 },
        { id: 5, name: 'عيون', icon: 'fas fa-eye', count: 12 },
        { id: 6, name: 'قلب', icon: 'fas fa-heartbeat', count: 10 },
        { id: 7, name: 'عظام', icon: 'fas fa-bone', count: 14 },
        { id: 8, name: 'نساء وولادة', icon: 'fas fa-female', count: 16 }
      ],
      stats: {
        doctors: 150,
        appointments: 5000,
        patients: 4500,
        specialties: 20
      }
    }
  },
  methods: {
    searchDoctors() {
      if (this.searchQuery.trim()) {
        this.$router.push({ 
          path: '/doctors', 
          query: { search: this.searchQuery.trim() } 
        })
      }
    },
    searchBySpecialty(specialty) {
      this.$router.push({ 
        path: '/doctors', 
        query: { specialty: specialty } 
      })
    },
    getSpecialtyName(specialtyKey) {
      return this.getSpecialtyTranslation(specialtyKey)
    },
    getDoctorText() {
      // Handle singular/plural for doctor word
      return this.$i18n.locale === 'ar' ? 'طبيب' : 'doctor'
    }
  }
}
</script>