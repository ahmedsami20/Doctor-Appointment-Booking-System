export default {
  // Header
  nav: {
    home: 'الرئيسية',
    doctors: 'الأطباء',
    myAppointments: 'مواعيدي',
    contact: 'اتصل بنا',
    doctorLogin: 'دخول الأطباء',
    logo: 'عيادتي'
  },


  export : {
  common: {
    darkMode: 'الوضع المظلم',
    lightMode: 'الوضع المضيء'
  },
  // باقي الترجمات
},



  // Common
  common: {
    search: 'بحث',
    submit: 'إرسال',
    cancel: 'إلغاء',
    save: 'حفظ',
    edit: 'تعديل',
    delete: 'حذف',
    close: 'إغلاق',
    loading: 'جاري التحميل...',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    phone: 'رقم الهاتف',
    date: 'التاريخ',
    time: 'الوقت',
    status: 'الحالة',
    actions: 'الإجراءات',
    details: 'التفاصيل',
    back: 'رجوع',
    next: 'التالي',
    previous: 'السابق',
    all: 'الكل',
    yes: 'نعم',
    no: 'لا',
    optional: 'اختياري',
    required: 'مطلوب'
  },

  // Home Page
  home: {
    title: 'مرحباً بك في عيادتي',
    subtitle: 'احجز موعدك مع أفضل الأطباء في مصر بكل سهولة',
    searchPlaceholder: 'ابحث عن طبيب أو تخصص...',
    popularSpecialties: 'التخصصات الأكثر طلباً',
    features: {
      fastBooking: {
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
    stats: {
      doctors: 'طبيب مُسجل',
      appointments: 'موعد تم حجزه',
      patients: 'مريض راضي',
      specialties: 'تخصص طبي'
    }
  },

  // Doctors Page
  doctors: {
    title: 'قائمة الأطباء',
    searchPlaceholder: 'ابحث عن طبيب...',
    resultsFound: 'تم العثور على {count} طبيب',
    noResults: 'لا توجد نتائج',
    noResultsDesc: 'جرب البحث بكلمات أخرى أو اختر تخصص مختلف',
    bookAppointment: 'احجز موعد',
    experience: 'سنة خبرة',
    availableToday: 'المواعيد المتاحة اليوم',
    currency: 'جنيه',
    specialties: {
      general: 'طب عام',
      pediatrics: 'أطفال',
      dentistry: 'أسنان',
      dermatology: 'جلدية',
      ophthalmology: 'عيون',
      cardiology: 'قلب',
      orthopedics: 'عظام',
      gynecology: 'نساء وولادة'
    }
  },

  // Booking Page
  booking: {
    title: 'حجز موعد',
    patientName: 'الاسم الكامل',
    phone: 'رقم الهاتف',
    email: 'البريد الإلكتروني',
    appointmentDate: 'تاريخ الموعد',
    appointmentTime: 'توقيت الموعد',
    notes: 'ملاحظات إضافية',
    notesPlaceholder: 'اكتب أي ملاحظات أو أعراض تريد إخبار الطبيب بها...',
    bookingSummary: 'ملخص الحجز',
    doctor: 'الطبيب',
    specialty: 'التخصص',
    fees: 'الرسوم',
    confirmBooking: 'تأكيد الحجز',
    booking: 'جاري الحجز...',
    success: {
      title: 'تم الحجز بنجاح',
      message: 'تم حجز موعدك بنجاح!',
      bookingNumber: 'رقم الحجز',
      confirmationMessage: 'سيتم إرسال رسالة تأكيد على رقم الهاتف والبريد الإلكتروني المُسجل'
    },
    errors: {
      nameRequired: 'الاسم مطلوب',
      nameMinLength: 'الاسم يجب أن يكون 3 أحرف على الأقل',
      phoneRequired: 'رقم الهاتف مطلوب',
      phoneInvalid: 'رقم الهاتف غير صحيح',
      emailRequired: 'البريد الإلكتروني مطلوب',
      emailInvalid: 'البريد الإلكتروني غير صحيح',
      dateRequired: 'تاريخ الموعد مطلوب',
      dateFuture: 'يجب اختيار تاريخ مستقبلي',
      timeRequired: 'وقت الموعد مطلوب'
    }
  },

  // My Appointments
  myAppointments: {
    title: 'مواعيدي',
    subtitle: 'إدارة جميع مواعيدك الطبية',
    tabs: {
      all: 'الكل',
      upcoming: 'القادمة',
      past: 'السابقة'
    },
    noAppointments: 'لا توجد مواعيد',
    noAppointmentsDesc: 'لم تقم بحجز أي موعد بعد',
    bookNewAppointment: 'احجز موعد جديد',
    bookingNumber: 'رقم الحجز',
    cancelAppointment: 'إلغاء',
    rescheduleAppointment: 'تعديل',
    viewDetails: 'التفاصيل',
    cancelConfirm: {
      title: 'تأكيد الإلغاء',
      message: 'هل أنت متأكد من إلغاء هذا الموعد؟',
      reason: 'سبب الإلغاء (اختياري)',
      reasonPlaceholder: 'أدخل سبب الإلغاء...',
      cancelOperation: 'إلغاء العملية',
      confirmCancel: 'إلغاء الموعد'
    },
    appointmentDetails: {
      title: 'تفاصيل الموعد',
      patientInfo: 'معلومات المريض',
      appointmentInfo: 'معلومات الموعد',
      bookingDate: 'تاريخ الحجز',
      additionalNotes: 'ملاحظات إضافية'
    },
    status: {
      confirmed: 'مؤكد',
      pending: 'في الانتظار',
      cancelled: 'ملغي',
      completed: 'مكتمل',
      noShow: 'لم يحضر'
    }
  },

  // Contact Page
  contact: {
    title: 'اتصل بنا',
    subtitle: 'نحن هنا لمساعدتك، تواصل معنا في أي وقت',
    contactInfo: 'معلومات التواصل',
    address: 'العنوان',
    addressValue: 'شارع التحرير، وسط البلد\nالقاهرة، مصر',
    phone: 'الهاتف',
    email: 'البريد الإلكتروني',
    workingHours: 'مواعيد العمل',
    workingHoursValue: 'الأحد - الخميس: 8:00 ص - 8:00 م\nالجمعة - السبت: 10:00 ص - 6:00 م',
    followUs: 'تابعنا على',
    sendMessage: 'أرسل لنا رسالة',
    fullName: 'الاسم الكامل',
    subject: 'نوع الاستفسار',
    message: 'الرسالة',
    messagePlaceholder: 'اكتب رسالتك هنا...',
    sendingMessage: 'جاري الإرسال...',
    sendMessageBtn: 'إرسال الرسالة',
    subjects: {
      booking: 'مشكلة في الحجز',
      technical: 'مشكلة تقنية',
      complaint: 'شكوى',
      suggestion: 'اقتراح',
      general: 'استفسار عام'
    },
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
    email: 'البريد الإلكتروني',
    password: 'كلمة المرور',
    rememberMe: 'تذكرني',
    login: 'تسجيل الدخول',
    loggingIn: 'جاري تسجيل الدخول...',
    forgotPassword: 'نسيت كلمة المرور؟',
    demoCredentials: 'بيانات تجريبية للدخول',
    useDemoCredentials: 'استخدام البيانات التجريبية',
    invalidCredentials: 'البريد الإلكتروني أو كلمة المرور غير صحيحة',
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
    welcome: 'مرحباً {name}',
    logout: 'تسجيل الخروج',
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
    noAppointmentsToday: 'لا توجد مواعيد اليوم',
    noUpcomingAppointments: 'لا توجد مواعيد قادمة',
    patientDetails: 'تفاصيل المريض',
    markComplete: 'تم الكشف',
    markNoShow: 'لم يحضر',
    patientInfo: 'معلومات المريض',
    appointmentInfo: 'معلومات الموعد',
    patientNotes: 'ملاحظات المريض',
    profile: {
      title: 'الملف الشخصي',
      name: 'الاسم',
      specialty: 'التخصص',
      phone: 'رقم الهاتف',
      email: 'البريد الإلكتروني',
      address: 'العنوان',
      saveChanges: 'حفظ التغييرات',
      changesSaved: 'تم حفظ التغييرات بنجاح'
    }
  },

  // Footer
  footer: {
    description: 'نظام حجز المواعيد الطبية الأكثر تطوراً في مصر',
    quickLinks: 'روابط سريعة',
    contactUs: 'تواصل معنا',
    rights: 'جميع الحقوق محفوظة'
  },

  // Notifications
  notifications: {
    appointmentReminder: 'تذكير بالموعد',
    upcomingAppointment: 'لديك موعد مع {doctorName} في {date} الساعة {time}',
    ok: 'حسناً'
  }
}