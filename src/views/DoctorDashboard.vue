<template>
  <div class="container py-4">
    <!-- Header -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center text-white">
          <div>
            <h2>لوحة تحكم الطبيب</h2>
            <p class="mb-0">مرحباً {{ doctorData?.name }}</p>
          </div>
          <button class="btn btn-outline-light" @click="logout">
            <i class="fas fa-sign-out-alt me-2"></i>تسجيل الخروج
          </button>
        </div>
      </div>
    </div>

    <!-- Statistics Cards -->
    <div class="row g-4 mb-4">
      <div class="col-lg-3 col-md-6">
        <div class="card doctor-card text-center">
          <div class="card-body">
            <div class="stat-icon bg-primary mb-3">
              <i class="fas fa-calendar-day"></i>
            </div>
            <h3 class="mb-1">{{ todayAppointments.length }}</h3>
            <p class="text-muted mb-0">مواعيد اليوم</p>
          </div>
        </div>
      </div>
      
      <div class="col-lg-3 col-md-6">
        <div class="card doctor-card text-center">
          <div class="card-body">
            <div class="stat-icon bg-success mb-3">
              <i class="fas fa-calendar-check"></i>
            </div>
            <h3 class="mb-1">{{ upcomingAppointments.length }}</h3>
            <p class="text-muted mb-0">مواعيد قادمة</p>
          </div>
        </div>
      </div>
      
      <div class="col-lg-3 col-md-6">
        <div class="card doctor-card text-center">
          <div class="card-body">
            <div class="stat-icon bg-info mb-3">
              <i class="fas fa-users"></i>
            </div>
            <h3 class="mb-1">{{ totalPatients }}</h3>
            <p class="text-muted mb-0">إجمالي المرضى</p>
          </div>
        </div>
      </div>
      
      <div class="col-lg-3 col-md-6">
        <div class="card doctor-card text-center">
          <div class="card-body">
            <div class="stat-icon bg-warning mb-3">
              <i class="fas fa-star"></i>
            </div>
            <h3 class="mb-1">4.8</h3>
            <p class="text-muted mb-0">التقييم</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Tabs -->
    <div class="row">
      <div class="col-12">
        <div class="card doctor-card">
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs" role="tablist">
              <li class="nav-item">
                <button 
                  class="nav-link"
                  :class="{ active: activeTab === 'today' }"
                  @click="activeTab = 'today'"
                >
                  <i class="fas fa-calendar-day me-2"></i>مواعيد اليوم
                </button>
              </li>
              <li class="nav-item">
                <button 
                  class="nav-link"
                  :class="{ active: activeTab === 'upcoming' }"
                  @click="activeTab = 'upcoming'"
                >
                  <i class="fas fa-calendar-alt me-2"></i>مواعيد قادمة
                </button>
              </li>
              <li class="nav-item">
                <button 
                  class="nav-link"
                  :class="{ active: activeTab === 'history' }"
                  @click="activeTab = 'history'"
                >
                  <i class="fas fa-history me-2"></i>التاريخ المرضي
                </button>
              </li>
              <li class="nav-item">
                <button 
                  class="nav-link"
                  :class="{ active: activeTab === 'profile' }"
                  @click="activeTab = 'profile'"
                >
                  <i class="fas fa-user-cog me-2"></i>الملف الشخصي
                </button>
              </li>
            </ul>
          </div>
          
          <div class="card-body">
            <!-- Today's Appointments -->
            <div v-if="activeTab === 'today'">
              <h5 class="mb-3">مواعيد اليوم - {{ formatDate(new Date()) }}</h5>
              
              <div v-if="todayAppointments.length === 0" class="text-center py-4">
                <i class="fas fa-calendar-times fa-3x text-muted mb-3"></i>
                <h6 class="text-muted">لا توجد مواعيد اليوم</h6>
              </div>
              
              <div v-else class="row g-3">
                <div class="col-12" v-for="appointment in todayAppointments" :key="appointment.id">
                  <div class="appointment-item">
                    <div class="row align-items-center">
                      <div class="col-md-2">
                        <div class="time-badge">
                          {{ appointment.time }}
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="patient-info">
                          <h6 class="mb-1">{{ appointment.patientName }}</h6>
                          <p class="text-muted mb-1">
                            <i class="fas fa-phone me-1"></i>{{ appointment.phone }}
                          </p>
                          <p class="text-muted mb-0">
                            <i class="fas fa-envelope me-1"></i>{{ appointment.email }}
                          </p>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <span class="status-badge" :class="'status-' + appointment.status">
                          {{ appointment.status }}
                        </span>
                      </div>
                      <div class="col-md-2">
                        <div class="dropdown">
                          <button class="btn btn-outline-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            إجراءات
                          </button>
                          <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#" @click="viewPatientDetails(appointment)">عرض التفاصيل</a></li>
                            <li><a class="dropdown-item" href="#" @click="markComplete(appointment)">تم الكشف</a></li>
                            <li><a class="dropdown-item" href="#" @click="markNoShow(appointment)">لم يحضر</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div v-if="appointment.notes" class="mt-2 p-2 bg-light rounded">
                      <small><strong>ملاحظات:</strong> {{ appointment.notes }}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Upcoming Appointments -->
            <div v-if="activeTab === 'upcoming'">
              <h5 class="mb-3">المواعيد القادمة</h5>
              
              <div v-if="upcomingAppointments.length === 0" class="text-center py-4">
                <i class="fas fa-calendar-plus fa-3x text-muted mb-3"></i>
                <h6 class="text-muted">لا توجد مواعيد قادمة</h6>
              </div>
              
              <div v-else class="row g-3">
                <div class="col-lg-6" v-for="appointment in upcomingAppointments" :key="appointment.id">
                  <div class="card appointment-card">
                    <div class="card-body">
                      <div class="d-flex justify-content-between mb-2">
                        <h6 class="mb-0">{{ appointment.patientName }}</h6>
                        <span class="status-badge" :class="'status-' + appointment.status">
                          {{ appointment.status }}
                        </span>
                      </div>
                      <p class="text-muted mb-2">
                        <i class="fas fa-calendar me-1"></i>{{ formatDate(appointment.date) }}
                        <i class="fas fa-clock me-1 ms-3"></i>{{ appointment.time }}
                      </p>
                      <p class="text-muted mb-2">
                        <i class="fas fa-phone me-1"></i>{{ appointment.phone }}
                      </p>
                      <div v-if="appointment.notes" class="mt-2 p-2 bg-light rounded">
                        <small><strong>ملاحظات:</strong> {{ appointment.notes }}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Patient History -->
            <div v-if="activeTab === 'history'">
              <h5 class="mb-3">التاريخ المرضي</h5>
              
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>اسم المريض</th>
                      <th>التاريخ</th>
                      <th>الوقت</th>
                      <th>الحالة</th>
                      <th>الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="appointment in allAppointments" :key="appointment.id">
                      <td>{{ appointment.patientName }}</td>
                      <td>{{ formatDate(appointment.date) }}</td>
                      <td>{{ appointment.time }}</td>
                      <td>
                        <span class="status-badge" :class="'status-' + appointment.status">
                          {{ appointment.status }}
                        </span>
                      </td>
                      <td>
                        <button class="btn btn-info btn-sm" @click="viewPatientDetails(appointment)">
                          <i class="fas fa-eye"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Profile Settings -->
            <div v-if="activeTab === 'profile'">
              <h5 class="mb-3">الملف الشخصي</h5>
              
              <div class="row">
                <div class="col-md-8">
                  <form @submit.prevent="updateProfile">
                    <div class="row g-3">
                      <div class="col-md-6">
                        <label class="form-label">الاسم</label>
                        <input type="text" class="form-control" v-model="profileData.name">
                      </div>
                      <div class="col-md-6">
                        <label class="form-label">التخصص</label>
                        <input type="text" class="form-control" v-model="profileData.specialty">
                      </div>
                      <div class="col-md-6">
                        <label class="form-label">رقم الهاتف</label>
                        <input type="tel" class="form-control" v-model="profileData.phone">
                      </div>
                      <div class="col-md-6">
                        <label class="form-label">البريد الإلكتروني</label>
                        <input type="email" class="form-control" v-model="profileData.email">
                      </div>
                      <div class="col-12">
                        <label class="form-label">العنوان</label>
                        <textarea class="form-control" v-model="profileData.address" rows="3"></textarea>
                      </div>
                      <div class="col-12">
                        <button type="submit" class="btn btn-primary">
                          <i class="fas fa-save me-2"></i>حفظ التغييرات
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Patient Details Modal -->
    <div v-if="showPatientModal" class="modal fade show" style="display: block;" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">تفاصيل المريض</h5>
            <button type="button" class="btn-close" @click="closePatientModal"></button>
          </div>
          <div class="modal-body" v-if="selectedPatient">
            <div class="row">
              <div class="col-md-6">
                <h6 class="text-primary">معلومات المريض</h6>
                <table class="table table-borderless">
                  <tr>
                    <td><strong>الاسم:</strong></td>
                    <td>{{ selectedPatient.patientName }}</td>
                  </tr>
                  <tr>
                    <td><strong>رقم الهاتف:</strong></td>
                    <td>{{ selectedPatient.phone }}</td>
                  </tr>
                  <tr>
                    <td><strong>البريد الإلكتروني:</strong></td>
                    <td>{{ selectedPatient.email }}</td>
                  </tr>
                </table>
              </div>
              <div class="col-md-6">
                <h6 class="text-primary">معلومات الموعد</h6>
                <table class="table table-borderless">
                  <tr>
                    <td><strong>التاريخ:</strong></td>
                    <td>{{ formatDate(selectedPatient.date) }}</td>
                  </tr>
                  <tr>
                    <td><strong>الوقت:</strong></td>
                    <td>{{ selectedPatient.time }}</td>
                  </tr>
                  <tr>
                    <td><strong>الحالة:</strong></td>
                    <td>
                      <span class="status-badge" :class="'status-' + selectedPatient.status">
                        {{ selectedPatient.status }}
                      </span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            
            <div v-if="selectedPatient.notes" class="mt-3">
              <h6 class="text-primary">ملاحظات المريض</h6>
              <div class="p-3 bg-light rounded">
                {{ selectedPatient.notes }}
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closePatientModal">
              إغلاق
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DoctorDashboard',
  data() {
    return {
      doctorData: null,
      activeTab: 'today',
      allAppointments: [],
      showPatientModal: false,
      selectedPatient: null,
      profileData: {
        name: '',
        specialty: '',
        phone: '',
        email: '',
        address: ''
      }
    }
  },
  computed: {
    todayAppointments() {
      const today = new Date().toISOString().split('T')[0]
      return this.allAppointments.filter(apt => apt.date === today)
        .sort((a, b) => a.time.localeCompare(b.time))
    },
    upcomingAppointments() {
      const today = new Date()
      return this.allAppointments.filter(apt => {
        const appointmentDate = new Date(apt.date)
        return appointmentDate > today && apt.status === 'مؤكد'
      }).sort((a, b) => new Date(a.date) - new Date(b.date))
    },
    totalPatients() {
      const uniquePatients = new Set(this.allAppointments.map(apt => apt.email))
      return uniquePatients.size
    }
  },
  mounted() {
    this.checkAuth()
    this.loadData()
  },
  methods: {
    checkAuth() {
      const doctorSession = localStorage.getItem('doctorSession')
      if (!doctorSession) {
        this.$router.push('/doctor-login')
        return
      }
      this.doctorData = JSON.parse(doctorSession)
      this.profileData = { ...this.doctorData }
    },
    loadData() {
      // Load all appointments for this doctor
      const appointments = JSON.parse(localStorage.getItem('appointments') || '[]')
      this.allAppointments = appointments.filter(apt => apt.doctorId === this.doctorData?.id)
    },
    logout() {
      localStorage.removeItem('doctorSession')
      this.$router.push('/doctor-login')
    },
    viewPatientDetails(appointment) {
      this.selectedPatient = appointment
      this.showPatientModal = true
    },
    closePatientModal() {
      this.showPatientModal = false
      this.selectedPatient = null
    },
    markComplete(appointment) {
      const appointments = JSON.parse(localStorage.getItem('appointments') || '[]')
      const index = appointments.findIndex(apt => apt.id === appointment.id)
      if (index !== -1) {
        appointments[index].status = 'مكتمل'
        localStorage.setItem('appointments', JSON.stringify(appointments))
        this.loadData()
      }
    },
    markNoShow(appointment) {
      const appointments = JSON.parse(localStorage.getItem('appointments') || '[]')
      const index = appointments.findIndex(apt => apt.id === appointment.id)
      if (index !== -1) {
        appointments[index].status = 'لم يحضر'
        localStorage.setItem('appointments', JSON.stringify(appointments))
        this.loadData()
      }
    },
    updateProfile() {
      // Update doctor profile
      const updatedData = {
        ...this.doctorData,
        ...this.profileData
      }
      localStorage.setItem('doctorSession', JSON.stringify(updatedData))
      this.doctorData = updatedData
      
      // Show success message
      alert('تم حفظ التغييرات بنجاح')
    },
    formatDate(dateString) {
      const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        weekday: 'long'
      }
      return new Date(dateString).toLocaleDateString('ar-EG', options)
    }
  }
}
</script>

<style scoped>
.stat-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  margin: 0 auto;
}

.appointment-item {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-left: 4px solid #667eea;
}

.dark-mode .appointment-item {
  background: rgba(52, 73, 94, 0.3);
}

.time-badge {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  text-align: center;
}

.status-badge {
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
}

.status-مؤكد {
  background: #28a745;
  color: white;
}

.status-مكتمل {
  background: #6c757d;
  color: white;
}

.status-ملغي {
  background: #dc3545;
  color: white;
}

.status-لم\ يحضر {
  background: #fd7e14;
  color: white;
}

.nav-tabs .nav-link {
  color: #667eea;
  border: none;
  background: transparent;
}

.nav-tabs .nav-link.active {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  border: none;
}

.patient-info h6 {
  color: #333;
  font-weight: 600;
}

.dark-mode .patient-info h6 {
  color: #ecf0f1;
}
</style>