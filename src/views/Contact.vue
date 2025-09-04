<template>
  <div class="container py-4">
    <div class="row">
      <div class="col-12 text-center text-white mb-4">
        <h2><i class="fas fa-envelope me-2"></i>اتصل بنا</h2>
        <p>نحن هنا لمساعدتك، تواصل معنا في أي وقت</p>
      </div>
    </div>

    <div class="row g-4">
      <!-- Contact Information -->
      <div class="col-lg-4">
        <div class="card doctor-card h-100">
          <div class="card-body">
            <h4 class="card-title text-center mb-4">معلومات التواصل</h4>
            
            <div class="contact-info">
              <div class="contact-item mb-4">
                <div class="d-flex align-items-center">
                  <div class="contact-icon bg-primary">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div class="contact-details">
                    <h6>العنوان</h6>
                    <p class="text-muted mb-0">شارع التحرير، وسط البلد<br>القاهرة، مصر</p>
                  </div>
                </div>
              </div>

              <div class="contact-item mb-4">
                <div class="d-flex align-items-center">
                  <div class="contact-icon bg-success">
                    <i class="fas fa-phone"></i>
                  </div>
                  <div class="contact-details">
                    <h6>الهاتف</h6>
                    <p class="text-muted mb-0">60475229 10 20+</p>
                    <p class="text-muted mb-0">55211147 15 20+</p>
                  </div>
                </div>
              </div>

              <div class="contact-item mb-4">
                <div class="d-flex align-items-center">
                  <div class="contact-icon bg-info">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="contact-details">
                    <h6>البريد الإلكتروني</h6>
                    <p class="text-muted mb-0">
                    <a href="mailto:info@eyadaty.com">info@eyadaty.com</a></p>
                    <p class="text-muted mb-0">
                    <a href="mailto:support@eyadaty.com">support@eyadaty.com</a></p>
                  </div>
                </div>
              </div>

              <div class="contact-item mb-4">
                <div class="d-flex align-items-center">
                  <div class="contact-icon bg-warning">
                    <i class="fas fa-clock"></i>
                  </div>
                  <div class="contact-details">
                    <h6>مواعيد العمل</h6>
                    <p class="text-muted mb-0">الأحد - الخميس: 8:00 ص - 8:00 م</p>
                    <p class="text-muted mb-0">الجمعة - السبت: 10:00 ص - 6:00 م</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div class="text-center mt-4">
              <h6>تابعنا على</h6>
              <div class="social-links">
                <a href="https://www.facebook.com/share/1FW8i2xXrf/" class="social-link facebook">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://x.com/AhmedSa22217103?t=pKx2jS8RipCqzGp1DL3fgg&s=09" class="social-link twitter">
                <i class="fab fa-x-twitter"></i>
                </a>
                <a href="https://www.instagram.com/ahmed_sami302?igsh=MXI3cHZ2dTA4OWozZA==" class="social-link instagram">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/ahmed-sami-11a272222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" class="social-link linkedin">
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
          <h3 class="text-center mb-4">أرسل لنا رسالة</h3>
          
          <form @submit.prevent="submitForm">
            <div class="row g-3">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-label">الاسم الكامل *</label>
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
                  <label class="form-label">البريد الإلكتروني *</label>
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
                  <label class="form-label">رقم الهاتف</label>
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
                  <label class="form-label">نوع الاستفسار *</label>
                  <select 
                    class="form-control" 
                    v-model="form.subject"
                    :class="{ 'is-invalid': errors.subject }"
                    required
                  >
                    <option value="">اختر نوع الاستفسار</option>
                    <option value="booking">مشكلة في الحجز</option>
                    <option value="technical">مشكلة تقنية</option>
                    <option value="complaint">شكوى</option>
                    <option value="suggestion">اقتراح</option>
                    <option value="general">استفسار عام</option>
                  </select>
                  <div v-if="errors.subject" class="invalid-feedback">
                    {{ errors.subject }}
                  </div>
                </div>
              </div>
              
              <div class="col-12">
                <div class="form-group">
                  <label class="form-label">الرسالة *</label>
                  <textarea 
                    class="form-control" 
                    v-model="form.message"
                    :class="{ 'is-invalid': errors.message }"
                    rows="5"
                    placeholder="اكتب رسالتك هنا..."
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
                  <i class="fas fa-spinner fa-spin me-2"></i>جاري الإرسال...
                </span>
                <span v-else>
                  <i class="fas fa-paper-plane me-2"></i>إرسال الرسالة
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
          <h3 class="text-center mb-4">الأسئلة الشائعة</h3>
          
          <div class="accordion" id="faqAccordion">
            <div class="accordion-item" v-for="(faq, index) in faqs" :key="index">
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
      errorMessage: '',
      faqs: [
        {
          question: 'كيف يمكنني حجز موعد؟',
          answer: 'يمكنك حجز موعد من خلال الذهاب إلى صفحة "الأطباء" واختيار الطبيب المناسب، ثم النقر على "احجز موعد" وملء البيانات المطلوبة.'
        },
        {
          question: 'هل يمكنني إلغاء أو تعديل موعدي؟',
          answer: 'نعم، يمكنك إلغاء أو تعديل موعدك من خلال صفحة "مواعيدي" بشرط أن يكون الموعد قبل 24 ساعة على الأقل من الوقت المحدد.'
        },
        {
          question: 'ما هي رسوم الكشف؟',
          answer: 'تختلف رسوم الكشف حسب التخصص والطبيب. يمكنك رؤية الرسوم في صفحة تفاصيل كل طبيب قبل الحجز.'
        },
        {
          question: 'هل يمكنني الدفع أونلاين؟',
          answer: 'حالياً الدفع يتم في العيادة، لكن قريباً سنوفر خاصية الدفع الإلكتروني لمزيد من الراحة.'
        },
        {
          question: 'ماذا لو تأخرت عن موعدي؟',
          answer: 'في حالة التأخير، يرجى الاتصال بالعيادة فوراً. قد يتم تأجيل الموعد حسب جدول الطبيب وتوفر المواعيد.'
        }
      ]
    }
  },
  methods: {
    validateForm() {
      this.errors = {}
      
      if (!this.form.name.trim()) {
        this.errors.name = 'الاسم مطلوب'
      } else if (this.form.name.trim().length < 3) {
        this.errors.name = 'الاسم يجب أن يكون 3 أحرف على الأقل'
      }
      
      if (!this.form.email.trim()) {
        this.errors.email = 'البريد الإلكتروني مطلوب'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
        this.errors.email = 'البريد الإلكتروني غير صحيح'
      }
      
      if (!this.form.subject) {
        this.errors.subject = 'نوع الاستفسار مطلوب'
      }
      
      if (!this.form.message.trim()) {
        this.errors.message = 'الرسالة مطلوبة'
      } else if (this.form.message.trim().length < 10) {
        this.errors.message = 'الرسالة يجب أن تكون 10 أحرف على الأقل'
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
          status: 'جديدة'
        }
        messages.push(newMessage)
        localStorage.setItem('contactMessages', JSON.stringify(messages))
        
        this.successMessage = 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.'
        
        // Reset form
        this.form = {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        }
        
      } catch (error) {
        this.errorMessage = 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.'
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
  margin-left: 1rem;
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
  background: #1da1f2;
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
</style>