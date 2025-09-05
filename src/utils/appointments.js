/**
 * Utility functions for appointment management
 */

// Appointment status constants
export const APPOINTMENT_STATUS = {
  CONFIRMED: 'مؤكد',
  PENDING: 'في الانتظار',
  CANCELLED: 'ملغي',
  COMPLETED: 'مكتمل',
  NO_SHOW: 'لم يحضر'
}

/**
 * Get all appointments from localStorage
 * @returns {Array} Array of appointments
 */
export const getAppointments = () => {
  try {
    return JSON.parse(localStorage.getItem('appointments') || '[]')
  } catch (error) {
    console.error('Error loading appointments:', error)
    return []
  }
}

/**
 * Save appointments to localStorage
 * @param {Array} appointments - Array of appointments to save
 */
export const saveAppointments = (appointments) => {
  try {
    localStorage.setItem('appointments', JSON.stringify(appointments))
    return true
  } catch (error) {
    console.error('Error saving appointments:', error)
    return false
  }
}

/**
 * Get appointments for a specific doctor
 * @param {number} doctorId - Doctor ID
 * @returns {Array} Array of doctor's appointments
 */
export const getDoctorAppointments = (doctorId) => {
  const appointments = getAppointments()
  return appointments.filter(apt => apt.doctorId === doctorId)
}

/**
 * Get appointments for today
 * @param {number} doctorId - Doctor ID (optional)
 * @returns {Array} Array of today's appointments
 */
export const getTodayAppointments = (doctorId = null) => {
  const appointments = getAppointments()
  const today = new Date().toISOString().split('T')[0]
  
  let filtered = appointments.filter(apt => apt.date === today)
  
  if (doctorId) {
    filtered = filtered.filter(apt => apt.doctorId === doctorId)
  }
  
  return filtered.sort((a, b) => a.time.localeCompare(b.time))
}

/**
 * Get upcoming appointments
 * @param {number} doctorId - Doctor ID (optional)
 * @returns {Array} Array of upcoming appointments
 */
export const getUpcomingAppointments = (doctorId = null) => {
  const appointments = getAppointments()
  const now = new Date()
  
  let filtered = appointments.filter(apt => {
    const appointmentDate = new Date(apt.date)
    return appointmentDate > now && apt.status === APPOINTMENT_STATUS.CONFIRMED
  })
  
  if (doctorId) {
    filtered = filtered.filter(apt => apt.doctorId === doctorId)
  }
  
  return filtered.sort((a, b) => new Date(a.date) - new Date(b.date))
}

/**
 * Get past appointments
 * @param {number} doctorId - Doctor ID (optional)
 * @returns {Array} Array of past appointments
 */
export const getPastAppointments = (doctorId = null) => {
  const appointments = getAppointments()
  const now = new Date()
  
  let filtered = appointments.filter(apt => {
    const appointmentDate = new Date(apt.date)
    return appointmentDate < now || apt.status === APPOINTMENT_STATUS.COMPLETED
  })
  
  if (doctorId) {
    filtered = filtered.filter(apt => apt.doctorId === doctorId)
  }
  
  return filtered.sort((a, b) => new Date(b.date) - new Date(a.date))
}

/**
 * Check if a time slot is available for booking
 * @param {number} doctorId - Doctor ID
 * @param {string} date - Date in YYYY-MM-DD format
 * @param {string} time - Time in HH:MM format
 * @returns {boolean} True if slot is available
 */
export const isSlotAvailable = (doctorId, date, time) => {
  const appointments = getAppointments()
  return !appointments.some(apt => 
    apt.doctorId === doctorId && 
    apt.date === date && 
    apt.time === time &&
    apt.status !== APPOINTMENT_STATUS.CANCELLED
  )
}

/**
 * Create a new appointment
 * @param {Object} appointmentData - Appointment data
 * @returns {Object} Created appointment with generated ID
 */
export const createAppointment = (appointmentData) => {
  const appointments = getAppointments()
  
  const newAppointment = {
    id: Date.now(),
    bookingId: generateBookingId(),
    status: APPOINTMENT_STATUS.CONFIRMED,
    createdAt: new Date().toISOString(),
    ...appointmentData
  }
  
  appointments.push(newAppointment)
  saveAppointments(appointments)
  
  return newAppointment
}

/**
 * Update an appointment
 * @param {number} appointmentId - Appointment ID
 * @param {Object} updates - Updates to apply
 * @returns {boolean} True if updated successfully
 */
export const updateAppointment = (appointmentId, updates) => {
  const appointments = getAppointments()
  const index = appointments.findIndex(apt => apt.id === appointmentId)
  
  if (index === -1) {
    return false
  }
  
  appointments[index] = {
    ...appointments[index],
    ...updates,
    updatedAt: new Date().toISOString()
  }
  
  return saveAppointments(appointments)
}

/**
 * Cancel an appointment
 * @param {number} appointmentId - Appointment ID
 * @param {string} reason - Cancellation reason
 * @returns {boolean} True if cancelled successfully
 */
export const cancelAppointment = (appointmentId, reason = '') => {
  return updateAppointment(appointmentId, {
    status: APPOINTMENT_STATUS.CANCELLED,
    cancelReason: reason,
    canceledAt: new Date().toISOString()
  })
}

/**
 * Mark appointment as completed
 * @param {number} appointmentId - Appointment ID
 * @returns {boolean} True if marked as completed successfully
 */
export const completeAppointment = (appointmentId) => {
  return updateAppointment(appointmentId, {
    status: APPOINTMENT_STATUS.COMPLETED,
    completedAt: new Date().toISOString()
  })
}

/**
 * Mark appointment as no-show
 * @param {number} appointmentId - Appointment ID
 * @returns {boolean} True if marked as no-show successfully
 */
export const markNoShow = (appointmentId) => {
  return updateAppointment(appointmentId, {
    status: APPOINTMENT_STATUS.NO_SHOW,
    noShowAt: new Date().toISOString()
  })
}

/**
 * Check if appointment can be cancelled
 * @param {Object} appointment - Appointment object
 * @returns {boolean} True if can be cancelled
 */
export const canCancelAppointment = (appointment) => {
  const appointmentDateTime = new Date(`${appointment.date}T${appointment.time}`)
  const now = new Date()
  const hoursDiff = (appointmentDateTime - now) / (1000 * 60 * 60)
  
  return hoursDiff > 24 && appointment.status === APPOINTMENT_STATUS.CONFIRMED
}

/**
 * Check if appointment can be rescheduled
 * @param {Object} appointment - Appointment object
 * @returns {boolean} True if can be rescheduled
 */
export const canRescheduleAppointment = (appointment) => {
  const appointmentDateTime = new Date(`${appointment.date}T${appointment.time}`)
  const now = new Date()
  const hoursDiff = (appointmentDateTime - now) / (1000 * 60 * 60)
  
  return hoursDiff > 24 && appointment.status === APPOINTMENT_STATUS.CONFIRMED
}

/**
 * Generate a unique booking ID
 * @returns {string} Booking ID
 */
export const generateBookingId = () => {
  return Math.random().toString(36).substr(2, 9).toUpperCase()
}

/**
 * Get total number of unique patients for a doctor
 * @param {number} doctorId - Doctor ID
 * @returns {number} Number of unique patients
 */
export const getTotalPatients = (doctorId) => {
  const appointments = getDoctorAppointments(doctorId)
  const uniquePatients = new Set(appointments.map(apt => apt.email))
  return uniquePatients.size
}

/**
 * Get appointment statistics
 * @param {number} doctorId - Doctor ID (optional)
 * @returns {Object} Statistics object
 */
export const getAppointmentStats = (doctorId = null) => {
  const appointments = doctorId ? getDoctorAppointments(doctorId) : getAppointments()
  
  return {
    total: appointments.length,
    confirmed: appointments.filter(apt => apt.status === APPOINTMENT_STATUS.CONFIRMED).length,
    completed: appointments.filter(apt => apt.status === APPOINTMENT_STATUS.COMPLETED).length,
    cancelled: appointments.filter(apt => apt.status === APPOINTMENT_STATUS.CANCELLED).length,
    noShow: appointments.filter(apt => apt.status === APPOINTMENT_STATUS.NO_SHOW).length,
    today: getTodayAppointments(doctorId).length,
    upcoming: getUpcomingAppointments(doctorId).length,
    totalPatients: doctorId ? getTotalPatients(doctorId) : new Set(appointments.map(apt => apt.email)).size
  }
}

/**
 * Validate appointment data
 * @param {Object} appointmentData - Appointment data to validate
 * @returns {Object} Validation result with errors
 */
export const validateAppointment = (appointmentData) => {
  const errors = {}
  
  // Required fields validation
  if (!appointmentData.patientName?.trim()) {
    errors.patientName = 'Patient name is required'
  }
  
  if (!appointmentData.phone?.trim()) {
    errors.phone = 'Phone number is required'
  } else if (!/^01[0-9]{9}$/.test(appointmentData.phone.replace(/\s/g, ''))) {
    errors.phone = 'Invalid phone number format'
  }
  
  if (!appointmentData.email?.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(appointmentData.email)) {
    errors.email = 'Invalid email format'
  }
  
  if (!appointmentData.date) {
    errors.date = 'Appointment date is required'
  } else if (new Date(appointmentData.date) <= new Date()) {
    errors.date = 'Appointment date must be in the future'
  }
  
  if (!appointmentData.time) {
    errors.time = 'Appointment time is required'
  }
  
  if (!appointmentData.doctorId) {
    errors.doctorId = 'Doctor selection is required'
  }
  
  // Check slot availability
  if (appointmentData.doctorId && appointmentData.date && appointmentData.time) {
    if (!isSlotAvailable(appointmentData.doctorId, appointmentData.date, appointmentData.time)) {
      errors.time = 'Selected time slot is not available'
    }
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

/**
 * Get appointments that need reminders (within 24 hours)
 * @returns {Array} Array of appointments needing reminders
 */
export const getAppointmentsNeedingReminders = () => {
  const appointments = getAppointments()
  const now = new Date()
  const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000)
  
  return appointments.filter(appointment => {
    if (appointment.status !== APPOINTMENT_STATUS.CONFIRMED) {
      return false
    }
    
    const appointmentDate = new Date(appointment.date)
    return appointmentDate >= now && appointmentDate <= tomorrow
  })
}