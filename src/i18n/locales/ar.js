export default {
  // Navigation
  nav: {
    home: 'الرئيسية',
    doctors: 'الأطباء',
    myAppointments: 'مواعيدي',
    contact: 'اتصل بنا',
    doctorLogin: 'دخول الأطباء',
    logout: 'تسجيل الخروج'
  },

  // Common
  common: {
    search: 'بحث',
    filter: 'فلتر',
    all: 'الكل',
    next: 'التالي',
    previous: 'السابق',
    close: 'إغلاق',
    cancel: 'إلغاء',
    confirm: 'تأكيد',
    save: 'حفظ',
    edit: 'تعديل',
    delete: 'حذف',
    view: 'عرض',
    loading: 'جاري التحميل...',
    submit: 'إرسال',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    phone: 'رقم الهاتف',
    date: 'التاريخ',
    time: 'الوقت',
    status: 'الحالة',
    actions: 'الإجراءات',
    notes: 'ملاحظات',
    required: 'مطلوب',
    optional: 'اختياري'
  },

  // Home Page
  home: {
    welcome: 'مرحباً بك في عيادتي',
    subtitle: 'احجز موعدك مع أفضل الأطباء في مصر بكل سهولة',
    searchPlaceholder: 'ابحث عن طبيب أو تخصص...',
    features: {
      quickBooking: {
        title: 'حجز سريع',
        description: 'احجز موعدك في ثوانٍ معدودة'
      },
      certifiedDoctors: {
        title: 'أطباء معتمدون',
        description: 'جميع أطبائنا مُرخصون ومعتمدون'
      },
      easyToUse: {
        title: 'سهولة الاستخدام',
        description: 'واجهة سهلة ومتوافقة مع الهواتف'
      }
    },
    popularSpecialties: 'التخصصات الأكثر طلباً',
    stats: {
      doctors: 'طبيب مُسجل',
      appointments: 'موعد تم حجزه',
      patients: 'مريض راضي',
      specialties: 'تخصص طبي'
    }
  },

  // Doctors Page
  doctors: {
    title: 'الأطباء',
    searchPlaceholder: 'ابحث عن طبيب...',
    resultsFound: 'تم العثور على {count} طبيب',
    noResults: {
      title: 'لا توجد نتائج',
      message: 'جرب البحث بكلمات أخرى أو اختر تخصص مختلف'
    },
    bookAppointment: 'احجز موعد',
    experience: 'سنة خبرة | سنوات خبرة',
    availableToday: 'المواعيد المتاحة اليوم:',
    egp: 'جنيه'
  },

  // Specialties
  specialties: {
    'طب عام': 'طب عام',
    'أطفال': 'أطفال',
    'أسنان': 'أسنان',
    'جلدية': 'جلدية',
    'عيون': 'عيون',
    'قلب': 'قلب',
    'عظام': 'عظام',
    'نساء وولادة': 'نساء وولادة'
  },

  // Booking Page
  booking: {
    title: 'حجز موعد',
    patientInfo: 'معلومات المريض',
    fullName: 'الاسم الكامل',
    appointmentDate: 'تاريخ الموعد',
    appointmentTime: 'توقيت الموعد',
    additionalNotes: 'ملاحظات إضافية',
    notesPlaceholder: 'اكتب أي ملاحظات أو أعراض تريد إخبار الطبيب بها...',
    bookingSummary: 'ملخص الحجز',
    doctor: 'الطبيب',
    specialty: 'التخصص',
    fees: 'الرسوم',
    confirmBooking: 'تأكيد الحجز',
    booking: 'جاري الحجز...',
    success: {
      title: 'تم الحجز بنجاح!',
      message: 'تم حجز موعدك بنجاح!',
      bookingNumber: 'رقم الحجز',
      confirmationMessage: 'سيتم إرسال رسالة تأكيد على رقم الهاتف والبريد الإلكتروني المُسجل'
    }
  },

  // My Appointments
  myAppointments: {
    title: 'مواعيدي',
    subtitle: 'إدارة جميع مواعيدك الطبية',
    filters: {
      all: 'الكل',
      upcoming: 'القادمة',
      past: 'السابقة'
    },
    noAppointments: {
      title: 'لا توجد مواعيد',
      message: 'لم تقم بحجز أي موعد بعد',
      bookNew: 'احجز موعد جديد'
    },
    bookingId: 'رقم الحجز',
    cancelAppointment: 'إلغاء',
    reschedule: 'تعديل',
    viewDetails: 'التفاصيل',
    cancelConfirm: {
      title: 'تأكيد الإلغاء',
      message: 'هل أنت متأكد من إلغاء هذا الموعد؟',
      reason: 'سبب الإلغاء (اختياري)',
      reasonPlaceholder: 'أدخل سبب الإلغاء...',
      confirmCancel: 'إلغاء الموعد',
      cancelAction: 'إلغاء العملية'
    },
    appointmentDetails: 'تفاصيل الموعد',
    patientName: 'اسم المريض',
    createdAt: 'تاريخ الحجز',
    additionalNotes: 'ملاحظات إضافية'
  },

  // Contact Page
  contact: {
    title: 'اتصل بنا',
    subtitle: 'نحن هنا لمساعدتك، تواصل معنا في أي وقت',
    contactInfo: 'معلومات التواصل',
    address: 'العنوان',
    addressText: 'شارع التحرير، وسط البلد\nالقاهرة، مصر',
    workingHours: 'مواعيد العمل',
    workingHoursText: 'الأحد - الخميس: 8:00 ص - 8:00 م\nالجمعة - السبت: 10:00 ص - 6:00 م',
    followUs: 'تابعنا على',
    sendMessage: 'أرسل لنا رسالة',
    inquiryType: 'نوع الاستفسار',
    inquiryTypes: {
      booking: 'مشكلة في الحجز',
      technical: 'مشكلة تقنية',
      complaint: 'شكوى',
      suggestion: 'اقتراح',
      general: 'استفسار عام'
    },
    message: 'الرسالة',
    messagePlaceholder: 'اكتب رسالتك هنا...',
    sending: 'جاري الإرسال...',
    sendMessage: 'إرسال الرسالة',
    successMessage: 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.',
    errorMessage: 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.',
    faq: {
      title: 'الأسئلة الشائعة',
      q1: 'كيف يمكنني حجز موعد؟',
      a1: 'يمكنك حجز موعد من خلال الذهاب إلى صفحة "الأطباء" واختيار الطبيب المناسب، ثم النقر على "احجز موعد" وملء البيانات المطلوبة.',
      q2: 'هل يمكنني إلغاء أو تعديل موعدي؟',
      a2: 'نعم، يمكنك إلغاء أو تعديل موعدك من خلال صفحة "مواعيدي" بشرط أن يكون الموعد قبل 24 ساعة على الأقل من الوقت المحدد.',
      q3: 'ما هي رسوم الكشف؟',
      a3: 'تختلف رسوم الكشف حسب التخصص والطبيب. يمكنك رؤية الرسوم في صفحة تفاصيل كل طبيب قبل الحجز.',
      q4: 'هل يمكنني الدفع أونلاين؟',
      a4: 'حالياً الدفع يتم في العيادة، لكن قريباً سنوفر خاصية الدفع الإلكتروني لمزيد من الراحة.',
      q5: 'ماذا لو تأخرت عن موعدي؟',
      a5: 'في حالة التأخير، يرجى الاتصال بالعيادة فوراً. قد يتم تأجيل الموعد حسب جدول الطبيب وتوفر المواعيد.'
    }
  },

  // Doctor Login
  doctorLogin: {
    title: 'دخول الأطباء',
    subtitle: 'سجل دخولك للوصول إلى لوحة التحكم',
    password: 'كلمة المرور',
    rememberMe: 'تذكرني',
    login: 'تسجيل الدخول',
    loggingIn: 'جاري تسجيل الدخول...',
    forgotPassword: 'نسيت كلمة المرور؟',
    demoCredentials: 'بيانات تجريبية للدخول:',
    useDemoCredentials: 'استخدام البيانات التجريبية',
    resetPassword: {
      title: 'استعادة كلمة المرور',
      message: 'أدخل بريدك الإلكتروني وسنرسل لك رابط لاستعادة كلمة المرور',
      send: 'إرسال',
      success: 'تم إرسال رابط استعادة كلمة المرور إلى بريدك الإلكتروني'
    }
  },

  // Doctor Dashboard
  doctorDashboard: {
    title: 'لوحة تحكم الطبيب',
    welcome: 'مرحباً',
    stats: {
      todayAppointments: 'مواعيد اليوم',
      upcomingAppointments: 'مواعيد قادمة',
      totalPatients: 'إجمالي المرضى',
      rating: 'التقييم'
    },
    tabs: {
      today: 'مواعيد اليوم',
      upcoming: 'مواعيد قادمة',
      history: 'التاريخ المرضي',
      profile: 'الملف الشخصي'
    },
    todayAppointments: 'مواعيد اليوم',
    noTodayAppointments: 'لا توجد مواعيد اليوم',
    upcomingAppointments: 'المواعيد القادمة',
    noUpcomingAppointments: 'لا توجد مواعيد قادمة',
    patientHistory: 'التاريخ المرضي',
    patientName: 'اسم المريض',
    viewDetails: 'عرض التفاصيل',
    markComplete: 'تم الكشف',
    markNoShow: 'لم يحضر',
    profile: 'الملف الشخصي',
    updateProfile: 'تحديث الملف الشخصي',
    saveChanges: 'حفظ التغييرات',
    profileUpdated: 'تم حفظ التغييرات بنجاح',
    patientDetails: 'تفاصيل المريض',
    patientInfo: 'معلومات المريض',
    appointmentInfo: 'معلومات الموعد',
    patientNotes: 'ملاحظات المريض'
  },

  // Status
  status: {
    مؤكد: 'مؤكد',
    'في الانتظار': 'في الانتظار',
    ملغي: 'ملغي',
    مكتمل: 'مكتمل',
    'لم يحضر': 'لم يحضر'
  },

  // Footer
  footer: {
    description: 'نظام حجز المواعيد الطبية الأكثر تطوراً في مصر',
    quickLinks: 'روابط سريعة',
    contactUs: 'تواصل معنا',
    rightsReserved: 'جميع الحقوق محفوظة.'
  },

  // Validation Messages
  validation: {
    required: 'هذا الحقل مطلوب',
    email: 'البريد الإلكتروني غير صحيح',
    phone: 'رقم الهاتف غير صحيح',
    minLength: 'يجب أن يكون {min} أحرف على الأقل',
    futureDate: 'يجب اختيار تاريخ مستقبلي',
    invalidCredentials: 'البريد الإلكتروني أو كلمة المرور غير صحيحة'
  },

  // Theme
  theme: {
    light: 'الوضع المضيء',
    dark: 'الوضع المظلم'
  },

  // Language
  language: {
    arabic: 'العربية',
    english: 'English'
  },

  // Reminders
  reminder: {
    title: 'تذكير بالموعد',
    message: 'لديك موعد مع {doctorName} في {date} الساعة {time}',
    ok: 'حسناً'
  }
}
