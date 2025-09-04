export default {
  // Header
  nav: {
    home: 'Home',
    doctors: 'Doctors',
    myAppointments: 'My Appointments',
    contact: 'Contact',
    doctorLogin: 'Doctor Login',
    logo: 'MediCare'
  },


  export : {
  common: {
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode'
  },
  // باقي الترجمات
},


  // Common
  common: {
    search: 'Search',
    submit: 'Submit',
    cancel: 'Cancel',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    close: 'Close',
    loading: 'Loading...',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    date: 'Date',
    time: 'Time',
    status: 'Status',
    actions: 'Actions',
    details: 'Details',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    all: 'All',
    yes: 'Yes',
    no: 'No',
    optional: 'Optional',
    required: 'Required'
  },

  // Home Page
  home: {
    title: 'Welcome to MediCare',
    subtitle: 'Book your appointment with the best doctors in Egypt easily',
    searchPlaceholder: 'Search for doctor or specialty...',
    popularSpecialties: 'Popular Specialties',
    features: {
      fastBooking: {
        title: 'Fast Booking',
        description: 'Book your appointment in seconds'
      },
      certifiedDoctors: {
        title: 'Certified Doctors',
        description: 'All our doctors are licensed and certified'
      },
      easyToUse: {
        title: 'Easy to Use',
        description: 'Simple interface compatible with all devices'
      }
    },
    stats: {
      doctors: 'Registered Doctors',
      appointments: 'Appointments Booked',
      patients: 'Satisfied Patients',
      specialties: 'Medical Specialties'
    }
  },

  // Doctors Page
  doctors: {
    title: 'Doctors List',
    searchPlaceholder: 'Search for doctor...',
    resultsFound: 'Found {count} doctors',
    noResults: 'No Results',
    noResultsDesc: 'Try searching with different keywords or choose a different specialty',
    bookAppointment: 'Book Appointment',
    experience: 'Years Experience',
    availableToday: 'Available Today',
    currency: 'EGP',
    specialties: {
      general: 'General Medicine',
      pediatrics: 'Pediatrics',
      dentistry: 'Dentistry',
      dermatology: 'Dermatology',
      ophthalmology: 'Ophthalmology',
      cardiology: 'Cardiology',
      orthopedics: 'Orthopedics',
      gynecology: 'Gynecology'
    }
  },

  // Booking Page
  booking: {
    title: 'Book Appointment',
    patientName: 'Full Name',
    phone: 'Phone Number',
    email: 'Email Address',
    appointmentDate: 'Appointment Date',
    appointmentTime: 'Appointment Time',
    notes: 'Additional Notes',
    notesPlaceholder: 'Write any notes or symptoms you want to tell the doctor...',
    bookingSummary: 'Booking Summary',
    doctor: 'Doctor',
    specialty: 'Specialty',
    fees: 'Fees',
    confirmBooking: 'Confirm Booking',
    booking: 'Booking...',
    success: {
      title: 'Booking Successful',
      message: 'Your appointment has been booked successfully!',
      bookingNumber: 'Booking Number',
      confirmationMessage: 'A confirmation message will be sent to your registered phone and email'
    },
    errors: {
      nameRequired: 'Name is required',
      nameMinLength: 'Name must be at least 3 characters',
      phoneRequired: 'Phone number is required',
      phoneInvalid: 'Invalid phone number',
      emailRequired: 'Email is required',
      emailInvalid: 'Invalid email address',
      dateRequired: 'Appointment date is required',
      dateFuture: 'Please select a future date',
      timeRequired: 'Appointment time is required'
    }
  },

  // My Appointments
  myAppointments: {
    title: 'My Appointments',
    subtitle: 'Manage all your medical appointments',
    tabs: {
      all: 'All',
      upcoming: 'Upcoming',
      past: 'Past'
    },
    noAppointments: 'No Appointments',
    noAppointmentsDesc: 'You haven\'t booked any appointments yet',
    bookNewAppointment: 'Book New Appointment',
    bookingNumber: 'Booking Number',
    cancelAppointment: 'Cancel',
    rescheduleAppointment: 'Reschedule',
    viewDetails: 'Details',
    cancelConfirm: {
      title: 'Confirm Cancellation',
      message: 'Are you sure you want to cancel this appointment?',
      reason: 'Cancellation Reason (Optional)',
      reasonPlaceholder: 'Enter cancellation reason...',
      cancelOperation: 'Cancel Operation',
      confirmCancel: 'Cancel Appointment'
    },
    appointmentDetails: {
      title: 'Appointment Details',
      patientInfo: 'Patient Information',
      appointmentInfo: 'Appointment Information',
      bookingDate: 'Booking Date',
      additionalNotes: 'Additional Notes'
    },
    status: {
      confirmed: 'Confirmed',
      pending: 'Pending',
      cancelled: 'Cancelled',
      completed: 'Completed',
      noShow: 'No Show'
    }
  },

  // Contact Page
  contact: {
    title: 'Contact Us',
    subtitle: 'We are here to help you, contact us anytime',
    contactInfo: 'Contact Information',
    address: 'Address',
    addressValue: 'Tahrir Street, Downtown\nCairo, Egypt',
    phone: 'Phone',
    email: 'Email',
    workingHours: 'Working Hours',
    workingHoursValue: 'Sunday - Thursday: 8:00 AM - 8:00 PM\nFriday - Saturday: 10:00 AM - 6:00 PM',
    followUs: 'Follow Us',
    sendMessage: 'Send us a Message',
    fullName: 'Full Name',
    subject: 'Subject',
    message: 'Message',
    messagePlaceholder: 'Write your message here...',
    sendingMessage: 'Sending...',
    sendMessageBtn: 'Send Message',
    subjects: {
      booking: 'Booking Issue',
      technical: 'Technical Issue',
      complaint: 'Complaint',
      suggestion: 'Suggestion',
      general: 'General Inquiry'
    },
    successMessage: 'Your message has been sent successfully! We will contact you soon.',
    errorMessage: 'An error occurred while sending the message. Please try again.',
    faq: {
      title: 'Frequently Asked Questions',
      q1: 'How can I book an appointment?',
      a1: 'You can book an appointment by going to the "Doctors" page and selecting the appropriate doctor, then clicking "Book Appointment" and filling in the required information.',
      q2: 'Can I cancel or reschedule my appointment?',
      a2: 'Yes, you can cancel or reschedule your appointment through the "My Appointments" page, provided that the appointment is at least 24 hours in advance.',
      q3: 'What are the consultation fees?',
      a3: 'Consultation fees vary by specialty and doctor. You can see the fees on each doctor\'s details page before booking.',
      q4: 'Can I pay online?',
      a4: 'Currently, payment is made at the clinic, but soon we will provide online payment feature for more convenience.',
      q5: 'What if I\'m late for my appointment?',
      a5: 'In case of delay, please call the clinic immediately. The appointment may be rescheduled according to the doctor\'s schedule and availability.'
    }
  },

  // Doctor Login
  doctorLogin: {
    title: 'Doctor Login',
    subtitle: 'Sign in to access your dashboard',
    email: 'Email Address',
    password: 'Password',
    rememberMe: 'Remember Me',
    login: 'Sign In',
    loggingIn: 'Signing In...',
    forgotPassword: 'Forgot Password?',
    demoCredentials: 'Demo Credentials',
    useDemoCredentials: 'Use Demo Credentials',
    invalidCredentials: 'Invalid email or password',
    resetPassword: {
      title: 'Reset Password',
      message: 'Enter your email address and we will send you a password reset link',
      send: 'Send',
      success: 'Password reset link has been sent to your email'
    }
  },

  // Doctor Dashboard
  doctorDashboard: {
    title: 'Doctor Dashboard',
    welcome: 'Welcome {name}',
    logout: 'Sign Out',
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
    noAppointmentsToday: 'No appointments today',
    noUpcomingAppointments: 'No upcoming appointments',
    patientDetails: 'Patient Details',
    markComplete: 'Mark Complete',
    markNoShow: 'Mark No Show',
    patientInfo: 'Patient Information',
    appointmentInfo: 'Appointment Information',
    patientNotes: 'Patient Notes',
    profile: {
      title: 'Profile',
      name: 'Name',
      specialty: 'Specialty',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      saveChanges: 'Save Changes',
      changesSaved: 'Changes saved successfully'
    }
  },

  // Footer
  footer: {
    description: 'The most advanced medical appointment booking system in Egypt',
    quickLinks: 'Quick Links',
    contactUs: 'Contact Us',
    rights: 'All rights reserved'
  },

  // Notifications
  notifications: {
    appointmentReminder: 'Appointment Reminder',
    upcomingAppointment: 'You have an appointment with {doctorName} on {date} at {time}',
    ok: 'OK'
  }
}