<template>
  <footer class="footer">
    <div class="container">
      <div class="row g-4">
        <!-- Brand Section -->
        <div class="col-lg-4 col-md-6">
          <div class="footer-section">
            <div class="footer-brand">
              <i class="fas fa-stethoscope brand-icon"></i>
              <h4 class="brand-title">{{ $i18n.locale === 'ar' ? 'عيادتي' : 'My Clinic' }}</h4>
            </div>
            <p class="brand-description">{{ $t('footer.description') }}</p>
            
            <!-- Contact Info -->
            <div class="contact-info">
              <div class="contact-item">
                <i class="fas fa-phone contact-icon"></i>
                <a href="tel:+201060475229" class="contact-link">{{ $i18n.locale === 'ar' ? '60475229 10 20+' : '+20 10 60475229' }}</a>
              </div>
              <div class="contact-item">
                <i class="fas fa-envelope contact-icon"></i>
                <a href="mailto:info@eyadaty.com" class="contact-link">info@myClinic.com</a>
              </div>
              <div class="contact-item">
                <i class="fas fa-map-marker-alt contact-icon"></i>
                <span class="contact-text">{{ $i18n.locale === 'ar' ? 'القاهرة، مصر' : 'Cairo, Egypt' }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Links Section -->
        <div class="col-lg-2 col-md-6">
          <div class="footer-section">
            <h5 class="section-title">{{ $t('footer.quickLinks') }}</h5>
            <ul class="footer-links">
              <li><router-link to="/" class="footer-link">{{ $t('nav.home') }}</router-link></li>
              <li><router-link to="/doctors" class="footer-link">{{ $t('nav.doctors') }}</router-link></li>
              <li><router-link to="/my-appointments" class="footer-link">{{ $t('nav.myAppointments') }}</router-link></li>
              <li><router-link to="/contact" class="footer-link">{{ $t('nav.contact') }}</router-link></li>
            </ul>
          </div>
        </div>

        <!-- Services Section -->
        <div class="col-lg-3 col-md-6">
          <div class="footer-section">
            <h5 class="section-title">{{ $i18n.locale === 'ar' ? 'خدماتنا' : 'Our Services' }}</h5>
            <ul class="footer-links">
              <li><span class="footer-link">{{ $t('specialties.طب عام') }}</span></li>
              <li><span class="footer-link">{{ $t('specialties.أطفال') }}</span></li>
              <li><span class="footer-link">{{ $t('specialties.أسنان') }}</span></li>
              <li><span class="footer-link">{{ $t('specialties.جلدية') }}</span></li>
              <li><span class="footer-link">{{ $t('specialties.عيون') }}</span></li>
              <li><span class="footer-link">{{ $t('specialties.قلب') }}</span></li>
              <li><span class="footer-link">{{ $t('specialties.عظام') }}</span></li>
              <li><span class="footer-link">{{ $t('specialties.نساء وولادة') }}</span></li>
              
            </ul>
          </div>
        </div>

        <!-- Social Media Section -->
        <div class="col-lg-3 col-md-6">
          <div class="footer-section">
            <h5 class="section-title">{{ $t('contact.followUs') }}</h5>
            <div class="social-links">
              <a href="https://www.facebook.com/share/1FW8i2xXrf/" 
                 class="social-link facebook" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 :title="$i18n.locale === 'ar' ? 'فيسبوك' : 'Facebook'">
                <i class="fab fa-facebook-f"></i>
                <span class="social-name">Facebook</span>
              </a>

              <a href="https://x.com/AhmedSa22217103?t=pKx2jS8RipCqzGp1DL3fgg&s=09"                
              class="social-link twitter" target="_blank"rel="noopener noreferrer"
              :title="$i18n.locale === 'ar' ? 'تويتر' : 'Twitter'">                 
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1200 1227" fill="currentColor">
                    <path d="M714.163 519.284L1160.89 0H1053.25L667.137 450.887L356.003 0H0L468.492 681.821L0 1226.37H107.648L515.725 750.219L844.597 1226.37H1200L714.137 519.284H714.163ZM563.725 689.053L521.637 628.59L146.337 79.694H307.238L600.579 495.383L642.667 555.846L1078.2 1146.68H917.302L563.725 689.053Z"/>
                  </svg>                 
              <span class="social-name">Twitter</span></a>

              <a href="https://www.instagram.com/ahmed_sami302?igsh=MXI3cHZ2dTA4OWozZA==" 
                 class="social-link instagram" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 :title="$i18n.locale === 'ar' ? 'انستجرام' : 'Instagram'">
                <i class="fab fa-instagram"></i>
                <span class="social-name">Instagram</span>
              </a>
              
              <a href="https://www.linkedin.com/in/ahmed-sami-11a272222" 
                 class="social-link linkedin" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 :title="$i18n.locale === 'ar' ? 'لينكدإن' : 'LinkedIn'">
                <i class="fab fa-linkedin-in"></i>
                <span class="social-name">LinkedIn</span>
              </a>
            </div>
            
            <!-- Newsletter Signup -->
            <div class="newsletter">
              <h6 class="newsletter-title">{{ $i18n.locale === 'ar' ? 'اشترك في النشرة' : 'Newsletter' }}</h6>
              <div class="newsletter-form">
                <input type="email" class="newsletter-input" :placeholder="$i18n.locale === 'ar' ? 'بريدك الإلكتروني' : 'Your email'">
                <button class="newsletter-btn">
                  <i class="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <div class="row align-items-center">
          <div class="col-md-6">
            <p class="copyright">
              &copy; {{ new Date().getFullYear() }} {{ $i18n.locale === 'ar' ? 'عيادتي' : 'My Clinic' }}. {{ $t('footer.rightsReserved') }}
            </p>
          </div>
          <div class="col-md-6 text-md-end">
            <div class="footer-badges">
              <span class="badge-item">
                <i class="fas fa-shield-alt"></i>
                {{ $i18n.locale === 'ar' ? 'آمن ومحمي' : 'Secure' }}
              </span>
              <span class="badge-item">
                <i class="fas fa-clock"></i>
                {{ $i18n.locale === 'ar' ? '24/7 دعم' : '24/7 Support' }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
/* Footer Base Styles */
.footer {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7));
  backdrop-filter: blur(20px);
  color: white;
  padding: 3rem 0 1rem;
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.5), transparent);
}

.footer-section {
  height: 100%;
}

/* Brand Section */
.footer-brand {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.brand-icon {
  font-size: 2rem;
  margin-inline-end: 0.75rem;
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: glow 3s ease-in-out infinite alternate;
}

@keyframes glow {
  from { filter: drop-shadow(0 0 5px rgba(102, 126, 234, 0.5)); }
  to { filter: drop-shadow(0 0 15px rgba(118, 75, 162, 0.8)); }
}

.brand-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.brand-description {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

/* Contact Info */
.contact-info {
  margin-top: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  transition: all 0.3s ease;
}

.contact-item:hover {
  transform: translateX(5px);
}

[dir="rtl"] .contact-item:hover {
  transform: translateX(-5px);
}

.contact-icon {
  width: 20px;
  margin-inline-end: 0.75rem;
  color: #667eea;
  font-size: 0.9rem;
}

.contact-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
}

.contact-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  transition: width 0.3s ease;
}

.contact-link:hover {
  color: white;
}

.contact-link:hover::after {
  width: 100%;
}

.contact-text {
  color: rgba(255, 255, 255, 0.8);
}

/* Section Titles */
.section-title {
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  color: white;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 30px;
  height: 3px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 2px;
}

[dir="rtl"] .section-title::after {
  left: auto;
  right: 0;
}

/* Footer Links */
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  position: relative;
  padding: 0.25rem 0;
}

.footer-link::before {
  content: '';
  position: absolute;
  top: 50%;
  left: -15px;
  transform: translateY(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  transition: width 0.3s ease;
}

[dir="rtl"] .footer-link::before {
  left: auto;
  right: -15px;
}

.footer-link:hover {
  color: white;
  transform: translateX(10px);
  padding-left: 15px;
}

[dir="rtl"] .footer-link:hover {
  transform: translateX(-10px);
  padding-left: 0;
  padding-right: 15px;
}

.footer-link:hover::before {
  width: 10px;
}

/* Social Links */
.social-links {
  display: grid;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.social-link {
  display: flex;
  align-items: center;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  color: white;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.social-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s ease;
}

.social-link:hover::before {
  left: 100%;
}

.social-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.social-link i {
  font-size: 1.2rem;
  margin-inline-end: 0.75rem;
  transition: all 0.3s ease;
}

.social-link:hover i {
  transform: scale(1.2);
}

.social-name {
  font-weight: 500;
  font-size: 0.9rem;
}

/* Social Link Colors */
.social-link.facebook:hover {
  background: linear-gradient(135deg, #3b5998, #4c70ba);
  border-color: #3b5998;
}

.social-link.twitter:hover {
  background: linear-gradient(135deg, #1da1f2, #0d8bd9);
  border-color: #1da1f2;
}

.social-link.instagram:hover {
  background: linear-gradient(135deg, #e4405f, #fd1d1d, #fcb045);
  border-color: #e4405f;
}

.social-link.linkedin:hover {
  background: linear-gradient(135deg, #0077b5, #005885);
  border-color: #0077b5;
}

/* Newsletter */
.newsletter {
  margin-top: 1.5rem;
}

.newsletter-title {
  font-weight: 600;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.newsletter-form {
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.newsletter-form:hover {
  border-color: rgba(102, 126, 234, 0.5);
  box-shadow: 0 0 15px rgba(102, 126, 234, 0.2);
}

.newsletter-input {
  flex: 1;
  background: transparent;
  border: none;
  padding: 0.75rem 1rem;
  color: white;
  font-size: 0.9rem;
}

.newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.newsletter-input:focus {
  outline: none;
}

.newsletter-btn {
  background: linear-gradient(45deg, #667eea, #764ba2);
  border: none;
  padding: 0.75rem 1rem;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.newsletter-btn:hover {
  background: linear-gradient(45deg, #764ba2, #667eea);
  transform: scale(1.05);
}

/* Footer Bottom */
.footer-bottom {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.copyright {
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  font-size: 0.9rem;
}

.footer-badges {
  display: flex;
  gap: 1rem;
  justify-content: end;
}

.badge-item {
  display: flex;
  align-items: center;
  background: rgba(102, 126, 234, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(102, 126, 234, 0.3);
}

.badge-item i {
  margin-inline-end: 0.5rem;
  color: #667eea;
}

/* Responsive Design */
@media (max-width: 767.98px) {
  .footer {
    padding: 2rem 0 1rem;
  }
  
  .footer-badges {
    justify-content: center;
    margin-top: 1rem;
  }
  
  .badge-item {
    font-size: 0.75rem;
    padding: 0.4rem 0.8rem;
  }
  
  .social-links {
    grid-template-columns: 1fr;
  }
  
  .newsletter-form {
    margin-top: 1rem;
  }
}

@media (max-width: 575.98px) {
  .brand-title {
    font-size: 1.3rem;
  }
  
  .brand-icon {
    font-size: 1.7rem;
  }
  
  .footer-badges {
    flex-direction: column;
    gap: 0.5rem;
  }
}

/* Dark Mode Adjustments */
.dark-mode .footer {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.85));
}

.dark-mode .social-link {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(255, 255, 255, 0.05);
}

.dark-mode .newsletter-form {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
}
</style>