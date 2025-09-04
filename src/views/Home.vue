<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="fade-in-up">
          <h1>مرحباً بك في عيادتي</h1>
          <p>احجز موعدك مع أفضل الأطباء في مصر بكل سهولة</p>
          
          <div class="search-box mt-4">
            <div class="input-group">
              <input 
                type="text" 
                class="form-control search-input" 
                placeholder="ابحث عن طبيب أو تخصص..."
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
                <h5 class="card-title">{{ feature.title }}</h5>
                <p class="card-text">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Specialties -->
    <section class="py-5">
      <div class="container">
        <h2 class="text-center text-white mb-5">التخصصات الأكثر طلباً</h2>
        <div class="row g-4">
          <div class="col-md-3 col-sm-6" v-for="specialty in popularSpecialties" :key="specialty.id">
            <div class="card doctor-card text-center h-100" @click="searchBySpecialty(specialty.name)">
              <div class="card-body">
                <i :class="specialty.icon" style="font-size: 2.5rem; color: #667eea;" class="mb-3"></i>
                <h6 class="card-title">{{ specialty.name }}</h6>
                <p class="text-muted small">{{ specialty.count }} طبيب</p>
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
            <h3 class="display-4 fw-bold">{{ stats.doctors }}+</h3>
            <p>طبيب مُسجل</p>
          </div>
          <div class="col-md-3 col-6 mb-4">
            <h3 class="display-4 fw-bold">{{ stats.appointments }}+</h3>
            <p>موعد تم حجزه</p>
          </div>
          <div class="col-md-3 col-6 mb-4">
            <h3 class="display-4 fw-bold">{{ stats.patients }}+</h3>
            <p>مريض راضي</p>
          </div>
          <div class="col-md-3 col-6 mb-4">
            <h3 class="display-4 fw-bold">{{ stats.specialties }}+</h3>
            <p>تخصص طبي</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      searchQuery: '',
      features: [
        {
          id: 1,
          icon: 'fas fa-clock',
          title: 'حجز سريع',
          description: 'احجز موعدك في ثوانٍ معدودة'
        },
        {
          id: 2,
          icon: 'fas fa-user-md',
          title: 'أطباء معتمدون',
          description: 'جميع أطبائنا مُرخصون ومعتمدون'
        },
        {
          id: 3,
          icon: 'fas fa-mobile-alt',
          title: 'سهولة الاستخدام',
          description: 'واجهة سهلة ومتوافقة مع الهواتف'
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
    }
  }
}
</script>