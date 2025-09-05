export default {
  // Navigation
  nav: {
    home: 'Home',
    doctors: 'Doctors',
    myAppointments: 'My Appointments',
    contact: 'Contact',
    doctorLogin: 'Doctor Login',
    logout: 'Logout'
  },

  // Common
  common: {
    search: 'Search',
    filter: 'Filter',
    all: 'All',
    next: 'Next',
    previous: 'Previous',
    close: 'Close',
    cancel: 'Cancel',
    confirm: 'Confirm',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    view: 'View',
    loading: 'Loading...',
    submit: 'Submit',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    date: 'Date',
    time: 'Time',
    status: 'Status',
    actions: 'Actions',
    notes: 'Notes',
    required: 'Required',
    optional: 'Optional'
  },

  // Home Page
  home: {
    welcome: 'Welcome to My Clinic',
    subtitle: 'Book your appointment with the best doctors in Egypt easily',
    searchPlaceholder: 'Search for doctor or specialty...',
    features: {
      quickBooking: {
        title: 'Quick Booking',
        description: 'Book your appointment in seconds'
      },
      certifiedDoctors: {
        title: 'Certified Doctors',
        description: 'All our doctors are licensed and certified'
      },
      easyToUse: {
        title: 'Easy to Use',
        description: 'User-friendly and mobile-responsive interface'
      }
    },
    popularSpecialties: 'Most Popular Specialties',
    stats: {
      doctors: 'Registered Doctor',
      appointments: 'Appointments Booked',
      patients: 'Satisfied Patient',
      specialties: 'Medical Specialty'
    }
  },

  // Doctors Page
  doctors: {
    title: 'Doctors',
    searchPlaceholder: 'Search for doctor...',
    resultsFound: 'Found {count} doctors',
    noResults: {
      title: 'No Results Found',
      message: 'Try searching with different keywords or select a different specialty'
    },
    bookAppointment: 'Book Appointment',
    experience: 'years experience',
    availableToday: 'Available slots today:',
    egp: 'EGP'
  },

  // Specialties
  specialties: {
    'طب عام': 'General Medicine',
    'أطفال': 'Pediatrics',
    'أسنان': 'Dentistry',
    'جلدية': 'Dermatology',
    'عيون': 'Ophthalmology',
    'قلب': 'Cardiology',
    'عظام': 'Orthopedics',
    'نساء وولادة': 'Obstetrics & Gynecology'
  },

  // Booking Page
  booking: {
    title: 'Book Appointment',
    patientInfo: 'Patient Information',
    fullName: 'Full Name',
    appointmentDate: 'Appointment Date',
    appointmentTime: 'Appointment Time',
    additionalNotes: 'Additional Notes',
    notesPlaceholder: 'Write any notes or symptoms you want to tell the doctor...',
    bookingSummary: 'Booking Summary',
    doctor: 'Doctor',
    specialty: 'Specialty',
    fees: 'Fees',
    confirmBooking: 'Confirm Booking',
    booking: 'Booking...',
    success: {
      title: 'Booking Successful!',
      message: 'Your appointment has been booked successfully!',
      bookingNumber: 'Booking Number',
      confirmationMessage: 'A confirmation message will be sent to your registered phone and email'
    }
  },

  // My Appointments
  myAppointments: {
    title: 'My Appointments',
    subtitle: 'Manage all your medical appointments',
    filters: {
      all: 'All',
      upcoming: 'Upcoming',
      past: 'Past'
    },
    noAppointments: {
      title: 'No Appointments',
      message: 'You haven\'t booked any appointments yet',
      bookNew: 'Book New Appointment'
    },
    bookingId: 'Booking ID',
    cancelAppointment: 'Cancel',
    reschedule: 'Reschedule',
    viewDetails: 'Details',
    cancelConfirm: {
      title: 'Confirm Cancellation',
      message: 'Are you sure you want to cancel this appointment?',
      reason: 'Cancellation Reason (Optional)',
      reasonPlaceholder: 'Enter cancellation reason...',
      confirmCancel: 'Cancel Appointment',
      cancelAction: 'Cancel Action'
    },
    appointmentDetails: 'Appointment Details',
    patientName: 'Patient Name',
    createdAt: 'Booking Date',
    additionalNotes: 'Additional Notes'
  },

  // Contact Page
  contact: {
    title: 'Contact Us',
    subtitle: 'We\'re here to help you, contact us anytime',
    contactInfo: 'Contact Information',
    address: 'Address',
    addressText: 'Tahrir Street, Downtown\nCairo, Egypt',
    workingHours: 'Working Hours',
    workingHoursText: 'Sunday - Thursday: 8:00 AM - 8:00 PM\nFriday - Saturday: 10:00 AM - 6:00 PM',
    followUs: 'Follow Us',
    sendMessage: 'Send us a message',
    inquiryType: 'Inquiry Type',
    inquiryTypes: {
      booking: 'Booking Issue',
      technical: 'Technical Issue',
      complaint: 'Complaint',
      suggestion: 'Suggestion',
      general: 'General Inquiry'
    },
    message: 'Message',
    messagePlaceholder: 'Write your message here...',
    sending: 'Sending...',
    sendMessage: 'Send Message',
    successMessage: 'Your message has been sent successfully! We will contact you soon.',
    errorMessage: 'An error occurred while sending the message. Please try again.',
    faq: {
      title: 'Frequently Asked Questions',
      q1: 'How can I book an appointment?',
      a1: 'You can book an appointment by going to the "Doctors" page and selecting the appropriate doctor, then clicking "Book Appointment" and filling out the required information.',
      q2: 'Can I cancel or reschedule my appointment?',
      a2: 'Yes, you can cancel or reschedule your appointment through the "My Appointments" page, provided the appointment is at least 24 hours away.',
      q3: 'What are the consultation fees?',
      a3: 'Consultation fees vary by specialty and doctor. You can see the fees on each doctor\'s details page before booking.',
      q4: 'Can I pay online?',
      a4: 'Currently payment is made at the clinic, but we will soon provide online payment for more convenience.',
      q5: 'What if I\'m late for my appointment?',
      a5: 'In case of delay, please call the clinic immediately. The appointment may be rescheduled based on the doctor\'s schedule and availability.'
    }
  },

  // Doctor Login
  doctorLogin: {
    title: 'Doctor Login',
    subtitle: 'Login to access your dashboard',
    password: 'Password',
    rememberMe: 'Remember Me',
    login: 'Login',
    loggingIn: 'Logging in...',
    forgotPassword: 'Forgot Password?',
    demoCredentials: 'Demo credentials for login:',
    useDemoCredentials: 'Use Demo Credentials',
    resetPassword: {
      title: 'Reset Password',
      message: 'Enter your email and we\'ll send you a reset link',
      send: 'Send',
      success: 'Password reset link has been sent to your email'
    }
  },

  // Doctor Dashboard
  doctorDashboard: {
    title: 'Doctor Dashboard',
    welcome: 'Welcome',
    stats: {
      todayAppointments: 'Today\'s Appointments',
      upcomingAppointments: 'Upcoming Appointments',
      totalPatients: 'Total Patients',
      rating: 'Rating'
    },
    tabs: {
      today: 'Today\'s Appointments',
      upcoming: 'Upcoming Appointments',
      history: 'Patient History',
      profile: 'Profile'
    },
    todayAppointments: 'Today\'s Appointments',
    noTodayAppointments: 'No appointments today',
    upcomingAppointments: 'Upcoming Appointments',
    noUpcomingAppointments: 'No upcoming appointments',
    patientHistory: 'Patient History',
    patientName: 'Patient Name',
    viewDetails: 'View Details',
    markComplete: 'Mark Complete',
    markNoShow: 'Mark No Show',
    profile: 'Profile',
    updateProfile: 'Update Profile',
    saveChanges: 'Save Changes',
    profileUpdated: 'Changes saved successfully',
    patientDetails: 'Patient Details',
    patientInfo: 'Patient Information',
    appointmentInfo: 'Appointment Information',
    patientNotes: 'Patient Notes'
  },

  // Status
  status: {
    مؤكد: 'Confirmed',
    'في الانتظار': 'Waiting',
    ملغي: 'Cancelled',
    مكتمل: 'Completed',
    'لم يحضر': 'No Show'
  },

  // Footer
  footer: {
    description: 'The most advanced medical appointment booking system in Egypt',
    quickLinks: 'Quick Links',
    contactUs: 'Contact Us',
    rightsReserved: 'All rights reserved.'
  },

  // Validation Messages
  validation: {
    required: 'This field is required',
    email: 'Invalid email address',
    phone: 'Invalid phone number',
    minLength: 'Must be at least {min} characters',
    futureDate: 'Must select a future date',
    invalidCredentials: 'Invalid email or password'
  },

  // Theme
  theme: {
    light: 'Light Mode',
    dark: 'Dark Mode'
  },

  // Language
  language: {
    arabic: 'العربية',
    english: 'English'
  },

  // Reminders
  reminder: {
    title: 'Appointment Reminder',
    message: 'You have an appointment with {doctorName} on {date} at {time}',
    ok: 'OK'
  }
}
