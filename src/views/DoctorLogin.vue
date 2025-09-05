<template>
  <div class="container py-4">
    <div class="row justify-content-center">
      <div class="col-lg-5 col-md-7">
        <div class="form-container">
          <div class="text-center mb-4">
            <i class="fas fa-user-md text-primary" style="font-size: 3rem;"></i>
            <h3 class="mt-3">{{ $t('doctorLogin.title') }}</h3>
            <p class="text-muted">{{ $t('doctorLogin.subtitle') }}</p>
          </div>
          
          <form @submit.prevent="login">
            <div class="form-group mb-3">
              <label class="form-label">{{ $t('common.email') }} *</label>
              <div class="input-group">
                <span class="input-group-text">
                  <i class="fas fa-envelope"></i>
                </span>
                <input 
                  type="email" 
                  class="form-control" 
                  v-model="form.email"
                  :class="{ 'is-invalid': errors.email }"
                  placeholder="doctor@example.com"
                  required
                >
              </div>
              <div v-if="errors.email" class="invalid-feedback d-block">
                {{ errors.email }}
              </div>
            </div>
            
            <div class="form-group mb-3">
              <label class="form-label">{{ $t('doctorLogin.password') }} *</label>
              <div class="input-group">
                <span class="input-group-text">
                  <i class="fas fa-lock"></i>
                </span>
                <input 
                  :type="showPassword ? 'text' : 'password'" 
                  class="form-control" 
                  v-model="form.password"
                  :class="{ 'is-invalid': errors.password }"
                  placeholder="********"
                  required
                >
                <button 
                  class="btn btn-outline-secondary" 
                  type="button" 
                  @click="showPassword = !showPassword"
                >
                  <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                </button>
              </div>
              <div v-if="errors.password" class="invalid-feedback d-block">
                {{ errors.password }}
              </div>
            </div>
            
            <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" v-model="form.remember" id="remember">
              <label class="form-check-label" for="remember">
                {{ $t('doctorLogin.rememberMe') }}
              </label>
            </div>
            
            <!-- Error Message -->
            <div v-if="errorMessage" class="alert alert-danger">
              <i class="fas fa-exclamation-circle me-2"></i>
              {{ errorMessage }}
            </div>
            
            <button 
              type="submit" 
              class="btn btn-primary w-100 mb-3"
              :disabled="isLoading"
            >
              <span v-if="isLoading">
                <i class="fas fa-spinner fa-spin me-2"></i>{{ $t('doctorLogin.loggingIn') }}
              </span>
              <span v-else>
                <i class="fas fa-sign-in-alt me-2"></i>{{ $t('doctorLogin.login') }}
              </span>
            </button>
            
            <div class="text-center">
              <a href="#" class="text-decoration-none" @click="showForgotPassword = true">
                {{ $t('doctorLogin.forgotPassword') }}
              </a>
            </div>
          </form>
          
          <!-- Demo Credentials -->
          <div class="mt-4 p-3 bg-light rounded">
            <h6 class="text-muted mb-2">{{ $t('doctorLogin.demoCredentials') }}</h6>
            <div class="row">
              <div class="col-12 mb-2">
                <small class="text-muted">
                  <strong>{{ $t('common.email') }}:</strong> doctor@eyadaty.com<br>
                  <strong>{{ $t('doctorLogin.password') }}:</strong> doctor123
                </small>
              </div>
            </div>
            <button 
              type="button" 
              class="btn btn-outline-primary btn-sm"
              @click="fillDemoCredentials"
            >
              {{ $t('doctorLogin.useDemoCredentials') }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Forgot Password Modal -->
    <div v-if="showForgotPassword" class="modal fade show" style="display: block;" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ $t('doctorLogin.resetPassword.title') }}</h5>
            <button type="button" class="btn-close" @click="showForgotPassword = false"></button>
          </div>
          <div class="modal-body">
            <p>{{ $t('doctorLogin.resetPassword.message') }}</p>
            <div class="form-group">
              <label class="form-label">{{ $t('common.email') }}</label>
              <input 
                type="email" 
                class="form-control" 
                v-model="resetEmail"
                placeholder="doctor@example.com"
              >
            </div>
            <div v-if="resetMessage" class="alert alert-success mt-3">
              <i class="fas fa-check-circle me-2"></i>
              {{ resetMessage }}
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="showForgotPassword = false">
              {{ $t('common.cancel') }}
            </button>
            <button type="button" class="btn btn-primary" @click="resetPassword">
              <i class="fas fa-paper-plane me-2"></i>{{ $t('doctorLogin.resetPassword.send') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DoctorLogin',
  data() {
    return {
      form: {
        email: '',
        password: '',
        remember: false
      },
      errors: {},
      errorMessage: '',
      isLoading: false,
      showPassword: false,
      showForgotPassword: false,
      resetEmail: '',
      resetMessage: ''
    }
  },
  mounted() {
    // Check if already logged in
    const doctorSession = localStorage.getItem('doctorSession')
    if (doctorSession) {
      this.$router.push('/doctor-dashboard')
    }
  },
  methods: {
    validateForm() {
      this.errors = {}
      
      if (!this.form.email.trim()) {
        this.errors.email = this.$t('validation.required')
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
        this.errors.email = this.$t('validation.email')
      }
      
      if (!this.form.password) {
        this.errors.password = this.$t('validation.required')
      } else if (this.form.password.length < 6) {
        this.errors.password = this.$t('validation.minLength', { min: 6 })
      }
      
      return Object.keys(this.errors).length === 0
    },
    
    async login() {
      this.errorMessage = ''
      
      if (!this.validateForm()) {
        return
      }
      
      this.isLoading = true
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        // Demo credentials check
        if (this.form.email === 'doctor@eyadaty.com' && this.form.password === 'doctor123') {
          // Create doctor session
          const doctorData = {
            id: 1,
            name: this.$i18n.locale === 'ar' ? 'د. أحمد محمد علي' : 'Dr. Ahmed Mohamed Ali',
            email: 'doctor@eyadaty.com',
            specialty: 'طب عام',
            loginTime: new Date().toISOString()
          }
          
          localStorage.setItem('doctorSession', JSON.stringify(doctorData))
          
          // Redirect to dashboard
          this.$router.push('/doctor-dashboard')
        } else {
          this.errorMessage = this.$t('validation.invalidCredentials')
        }
        
      } catch (error) {
        this.errorMessage = this.$t('contact.errorMessage')
      } finally {
        this.isLoading = false
      }
    },
    
    fillDemoCredentials() {
      this.form.email = 'doctor@eyadaty.com'
      this.form.password = 'doctor123'
      this.errors = {}
    },
    
    async resetPassword() {
      if (!this.resetEmail) {
        return
      }
      
      // Simulate sending reset email
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      this.resetMessage = this.$t('doctorLogin.resetPassword.success')
      
      setTimeout(() => {
        this.showForgotPassword = false
        this.resetMessage = ''
        this.resetEmail = ''
      }, 3000)
    }
  }
}
</script>

<style scoped>
.input-group-text {
  background: rgba(102, 126, 234, 0.1);
  border-color: rgba(102, 126, 234, 0.3);
}

.form-check-input:checked {
  background-color: #667eea;
  border-color: #667eea;
}

.bg-light {
  background-color: rgba(102, 126, 234, 0.05) !important;
}

.dark-mode .bg-light {
  background-color: rgba(52, 73, 94, 0.3) !important;
}
</style>