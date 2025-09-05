<template>
  <div class="container py-4">
    <div class="row">
      <div class="col-12 text-center text-white mb-4">
        <h2><i class="fas fa-envelope me-2"></i>{{ $t('contact.title') }}</h2>
        <p>{{ $t('contact.subtitle') }}</p>
      </div>
    </div>

    <div class="row g-4">
      <!-- Contact Information -->
      <div class="col-lg-4">
        <div class="card doctor-card h-100">
          <div class="card-body">
            <h4 class="card-title text-center mb-4">{{ $t('contact.contactInfo') }}</h4>
            
            <div class="contact-info">
              <div class="contact-item mb-4">
                <div class="d-flex align-items-center">
                  <div class="contact-icon bg-primary">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div class="contact-details">
                    <h6>{{ $t('contact.address') }}</h6>
                    <p class="text-muted mb-0 ms-2" style="white-space: pre-line;">{{ $t('contact.addressText') }}</p>
                  </div>
                </div>
              </div>

              <div class="contact-item mb-4"> 
              <div class="d-flex align-items-center"> 
              <div class="contact-icon bg-success me-3"> 
              <i class="fas fa-phone"></i> 
              </div> 
              <div class="contact-details"> 
              <a href="tel:+201060475229" class="text-muted mb-0 ms-2" style="text-decoration: none; color: inherit;">
              {{ $i18n.locale === 'ar' ? '60475229 10 20+' : '+20 10 60475229' }}</a> 
              </div> </div> </div>


              <div class="contact-item mb-4">
                <div class="d-flex align-items-center">
                  <div class="contact-icon bg-info">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="contact-details">
                    <h6>{{ $t('common.email') }}</h6>
                    <p class="text-muted mb-0 ms-2">
                      <a href="mailto:info@myClinic.com" class="text-decoration-none text-muted">
                        info@myClinic.com
                      </a>
                    </p>
                    <p class="text-muted mb-0">
                      <a href="mailto:support@myClinic.com" class="text-decoration-none text-muted">
                        support@myClinic.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div class="contact-item mb-4">
                <div class="d-flex align-items-center">
                  <div class="contact-icon bg-warning">
                    <i class="fas fa-clock"></i>
                  </div>
                  <div class="contact-details">
                    <h6>{{ $t('contact.workingHours') }}</h6>
                    <p class="text-muted mb-0 ms-2" style="white-space: pre-line;">{{ $t('contact.workingHoursText') }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div class="text-center mt-4">
              <h6>{{ $t('contact.followUs') }}</h6>
              <div class="social-links">
                <a href="https://www.facebook.com/share/1FW8i2xXrf/" 
                   class="social-link facebook" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-facebook-f"></i>
                </a>
                
                <a href="https://x.com/AhmedSa22217103?t=pKx2jS8RipCqzGp1DL3fgg&s=09" 
                   class="social-link twitter" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1200 1227" fill="currentColor">
                    <path d="M714.163 519.284L1160.89 0H1053.25L667.137 450.887L356.003 0H0L468.492 681.821L0 1226.37H107.648L515.725 750.219L844.597 1226.37H1200L714.137 519.284H714.163ZM563.725 689.053L521.637 628.59L146.337 79.694H307.238L600.579 495.383L642.667 555.846L1078.2 1146.68H917.302L563.725 689.053Z"/>
                  </svg>
                </a>

                <a href="https://www.instagram.com/ahmed_sami302?igsh=MXI3cHZ2dTA4OWozZA==" 
                   class="social-link instagram" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-instagram"></i>
                </a>
                
                <a href="https://www.linkedin.com/in/ahmed-sami-11a272222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                   class="social-link linkedin" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="col-lg-8">
        <div class="form-container">
          <h3 class="text-center mb-4">{{ $t('contact.sendMessage') }}</h3>
          
          <form @submit.prevent="submitForm">
            <div class="row g-3">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-label">{{ $t('booking.fullName') }} *</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    v-model="form.name"
                    :class="{ 'is-invalid': errors.name }"
                    required
                  >
                  <div v-if="errors.name" class="invalid-feedback">
                    {{ errors.name }}
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
                  <label class="form-label">{{ $t('common.phone') }}</label>
                  <input 
                    type="tel" 
                    class="form-control" 
                    v-model="form.phone"
                    placeholder="01xxxxxxxxx"
                  >
                </div>
              </div>
              
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-label">{{ $t('contact.inquiryType') }} *</label>
                  <select 
                    class="form-control" 
                    v-model="form.subject"
                    :class="{ 'is-invalid': errors.subject }"
                    required
                  >
                    <option value="">{{ $t('contact.inquiryTypes.booking') === 'مشكلة في الحجز' ? 'اختر نوع الاستفسار' : 'Select inquiry type' }}</option>
                    <option value="booking">{{ $t('contact.inquiryTypes.booking') }}</option>
                    <option value="technical">{{ $t('contact.inquiryTypes.technical') }}</option>
                    <option value="complaint">{{ $t('contact.inquiryTypes.complaint') }}</option>
                    <option value="suggestion">{{ $t('contact.inquiryTypes.suggestion') }}</option>
                    <option value="general">{{ $t('contact.inquiryTypes.general') }}</option>
                  </select>
                  <div v-if="errors.subject" class="invalid-feedback">
                    {{ errors.subject }}
                  </div>
                </div>
              </div>
              
              <div class="col-12">
                <div class="form-group">
                  <label class="form-label">{{ $t('contact.message') }} *</label>
                  <textarea 
                    class="form-control" 
                    v-model="form.message"
                    :class="{ 'is-invalid': errors.message }"
                    rows="5"
                    :placeholder="$t('contact.messagePlaceholder')"
                    required
                  ></textarea>
                  <div v-if="errors.message" class="invalid-feedback">
                    {{ errors.message }}
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Success/Error Messages -->
            <div v-if="successMessage" class="alert alert-success mt-3">
              <i class="fas fa-check-circle me-2"></i>
              {{ successMessage }}
            </div>
            
            <div v-if="errorMessage" class="alert alert-danger mt-3">
              <i class="fas fa-exclamation-circle me-2"></i>
              {{ errorMessage }}
            </div>
            
            <div class="text-center mt-4">
              <button 
                type="submit" 
                class="btn btn-primary btn-lg"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting">
                  <i class="fas fa-spinner fa-spin me-2"></i>{{ $t('contact.sending') }}
                </span>
                <span v-else>
                  <i class="fas fa-paper-plane me-2"></i>{{ $t('contact.sendMessage') }}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="row mt-5">
      <div class="col-12">
        <div class="form-container">
          <h3 class="text-center mb-4">{{ $t('contact.faq.title') }}</h3>
          
          <div class="accordion" id="faqAccordion">
            <div class="accordion-item" v-for="(faq, index) in localizedFaqs" :key="index">
              <h2 class="accordion-header" :id="'heading' + index">
                <button 
                  class="accordion-button"
                  :class="{ collapsed: index !== 0 }"
                  type="button" 
                  data-bs-toggle="collapse" 
                  :data-bs-target="'#collapse' + index"
                  :aria-expanded="index === 0 ? 'true' : 'false'"
                  :aria-controls="'collapse' + index"
                >
                  {{ faq.question }}
                </button>
              </h2>
              <div 
                :id="'collapse' + index" 
                class="accordion-collapse collapse"
                :class="{ show: index === 0 }"
                :aria-labelledby="'heading' + index" 
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">
                  {{ faq.answer }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      },
      errors: {},
      isSubmitting: false,
      successMessage: '',
      errorMessage: ''
    }
  },
  computed: {
    localizedFaqs() {
      return [
        {
          question: this.$t('contact.faq.q1'),
          answer: this.$t('contact.faq.a1')
        },
        {
          question: this.$t('contact.faq.q2'),
          answer: this.$t('contact.faq.a2')
        },
        {
          question: this.$t('contact.faq.q3'),
          answer: this.$t('contact.faq.a3')
        },
        {
          question: this.$t('contact.faq.q4'),
          answer: this.$t('contact.faq.a4')
        },
        {
          question: this.$t('contact.faq.q5'),
          answer: this.$t('contact.faq.a5')
        }
      ]
    }
  },
  methods: {
    validateForm() {
      this.errors = {}
      
      if (!this.form.name.trim()) {
        this.errors.name = this.$t('validation.required')
      } else if (this.form.name.trim().length < 3) {
        this.errors.name = this.$t('validation.minLength', { min: 3 })
      }
      
      if (!this.form.email.trim()) {
        this.errors.email = this.$t('validation.required')
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
        this.errors.email = this.$t('validation.email')
      }
      
      if (!this.form.subject) {
        this.errors.subject = this.$t('validation.required')
      }
      
      if (!this.form.message.trim()) {
        this.errors.message = this.$t('validation.required')
      } else if (this.form.message.trim().length < 10) {
        this.errors.message = this.$t('validation.minLength', { min: 10 })
      }
      
      return Object.keys(this.errors).length === 0
    },
    
    async submitForm() {
      this.successMessage = ''
      this.errorMessage = ''
      
      if (!this.validateForm()) {
        return
      }
      
      this.isSubmitting = true
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        // Save message to localStorage (simulating backend)
        const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]')
        const newMessage = {
          id: Date.now(),
          ...this.form,
          timestamp: new Date().toISOString(),
          status: 'new',
          locale: this.$i18n.locale
        }
        messages.push(newMessage)
        localStorage.setItem('contactMessages', JSON.stringify(messages))
        
        this.successMessage = this.$t('contact.successMessage')
        
        // Reset form
        this.form = {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        }
        
      } catch (error) {
        this.errorMessage = this.$t('contact.errorMessage')
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>

<style scoped>
.contact-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-inline-end: 1rem;
  font-size: 1.2rem;
}

.contact-details h6 {
  margin-bottom: 0.3rem;
  color: #333;
}

.dark-mode .contact-details h6 {
  color: #ecf0f1;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(-3px);
  color: white;
}

.social-link.facebook {
  background: #3b5998;
}

.social-link.twitter {
  background: #000000;
}

.social-link.instagram {
  background: #e4405f;
}

.social-link.linkedin {
  background: #0077b5;
}

.accordion-button {
  background: rgba(102, 126, 234, 0.1);
  border: none;
  font-weight: 600;
}

.accordion-button:not(.collapsed) {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
}

.accordion-button:focus {
  box-shadow: none;
}

/* RTL/LTR adjustments */
[dir="rtl"] .contact-icon {
  margin-inline-end: 0;
  margin-inline-start: 1rem;
}
</style>