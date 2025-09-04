<template>
  <header class="header">
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <router-link to="/" class="navbar-brand logo">
            <i class="fas fa-stethoscope me-2"></i>
            عيادتي
          </router-link>
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon" style="background-image: url('data:image/svg+xml;charset=utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' fill=\'white\' viewBox=\'0 0 30 30\'><path stroke=\'white\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/></svg>');"></span>
          </button>
          
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <router-link to="/" class="nav-link" :class="{ active: currentRoute === 'Home' }">
                  <i class="fas fa-home me-1"></i>الرئيسية
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/doctors" class="nav-link" :class="{ active: currentRoute === 'Doctors' }">
                  <i class="fas fa-user-md me-1"></i>الأطباء
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/my-appointments" class="nav-link" :class="{ active: currentRoute === 'MyAppointments' }">
                  <i class="fas fa-calendar-check me-1"></i>مواعيدي
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link" :class="{ active: currentRoute === 'Contact' }">
                  <i class="fas fa-envelope me-1"></i>اتصل بنا
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/doctor-login" class="nav-link" :class="{ active: currentRoute === 'DoctorLogin' }">
                  <i class="fas fa-sign-in-alt me-1"></i>دخول الأطباء
                </router-link>
              </li>
            </ul>
            
            <button class="theme-toggle" @click="$emit('toggle-theme')" :title="isDarkMode ? 'الوضع المضيء' : 'الوضع المظلم'">
              <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
            </button>
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
    currentRoute: String
  },
  emits: ['toggle-theme']
}
</script>
