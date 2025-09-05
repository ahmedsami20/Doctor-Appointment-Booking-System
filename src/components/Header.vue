<template>
  <header class="header">
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid" :class="{ 'rtl-layout': currentLanguage === 'ar' }">
          <!-- Logo and Brand - positioned based on language -->
          <router-link to="/" class="navbar-brand logo" :class="{ 'ms-auto': currentLanguage === 'ar', 'me-auto': currentLanguage !== 'ar' }">
            <i class="fas fa-stethoscope" :class="currentLanguage === 'ar' ? 'ms-2' : 'me-2'"></i>
            {{ currentLanguage === 'ar' ? 'عيادتي' : 'My Clinic' }}
          </router-link>
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon" style="background-image: url('data:image/svg+xml;charset=utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' fill=\'white\' viewBox=\'0 0 30 30\'><path stroke=\'white\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/></svg>');"></span>
          </button>
          
          <div class="collapse navbar-collapse" id="navbarNav">
            <!-- Navigation Links - positioned based on language -->
            <ul class="navbar-nav" :class="currentLanguage === 'ar' ? 'ms-auto me-3' : 'me-auto'">
              <li class="nav-item">
                <router-link to="/" class="nav-link" :class="{ active: currentRoute === 'Home' }">
                  <i class="fas fa-home" :class="currentLanguage === 'ar' ? 'ms-1' : 'me-1'"></i>{{ $t('nav.home') }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/doctors" class="nav-link" :class="{ active: currentRoute === 'Doctors' }">
                  <i class="fas fa-user-md" :class="currentLanguage === 'ar' ? 'ms-1' : 'me-1'"></i>{{ $t('nav.doctors') }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/my-appointments" class="nav-link" :class="{ active: currentRoute === 'MyAppointments' }">
                  <i class="fas fa-calendar-check" :class="currentLanguage === 'ar' ? 'ms-1' : 'me-1'"></i>{{ $t('nav.myAppointments') }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link" :class="{ active: currentRoute === 'Contact' }">
                  <i class="fas fa-envelope" :class="currentLanguage === 'ar' ? 'ms-1' : 'me-1'"></i>{{ $t('nav.contact') }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/doctor-login" class="nav-link" :class="{ active: currentRoute === 'DoctorLogin' }">
                  <i class="fas fa-sign-in-alt" :class="currentLanguage === 'ar' ? 'ms-1' : 'me-1'"></i>{{ $t('nav.doctorLogin') }}
                </router-link>
              </li>
            </ul>
            
            <!-- Theme and Language Controls - always on the left/start -->
            <div class="d-flex align-items-center gap-2">
              <!-- Language Toggle -->
              <button class="theme-toggle" @click="$emit('toggle-language')" :title="$t('language.' + (currentLanguage === 'ar' ? 'english' : 'arabic'))">
                <i class="fas fa-globe"></i>
                <small :class="currentLanguage === 'ar' ? 'me-1' : 'ms-1'">{{ currentLanguage === 'ar' ? 'EN' : 'ع' }}</small>
              </button>
              <!-- Theme Toggle -->
              <button class="theme-toggle" @click="$emit('toggle-theme')" :title="$t('theme.' + (isDarkMode ? 'light' : 'dark'))">
                <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    isDarkMode: Boolean,
    currentRoute: String,
    currentLanguage: String
  },
  emits: ['toggle-theme', 'toggle-language']
}
</script>

