import doctor1 from '@/assets/images/1.jpg'
import doctor2 from '@/assets/images/2.jpg'

export const doctors = [
  {
    id: 1,
    name: 'د. أحمد محمد علي',
    specialty: 'طب عام',
    location: 'القاهرة - مدينة نصر',
    image: doctor1,
    experience: '15 سنة خبرة',
    rating: 4.8,
    price: 200,
    availableSlots: ['09:00', '10:30', '02:00', '03:30', '05:00'],
    phone: '+20 123 456 7890',
    email: 'ahmed.ali@example.com'
  },
  {
    id: 2,
    name: 'د. فاطمة حسن',
    specialty: 'أطفال',
    location: 'الجيزة - المهندسين',
    image: doctor2,
    experience: '12 سنة خبرة',
    rating: 4.9,
    price: 250,
    availableSlots: ['09:30', '11:00', '01:00', '02:30', '04:00'],
    phone: '+20 123 456 7891',
    email: 'fatma.hassan@example.com'
  },
  {
    id: 3,
    name: 'د. محمود السيد',
    specialty: 'أسنان',
    location: 'الإسكندرية - سيدي جابر',
    image: doctor1,
    experience: '10 سنوات خبرة',
    rating: 4.7,
    price: 300,
    availableSlots: ['08:00', '09:30', '01:30', '03:00', '04:30'],
    phone: '+20 123 456 7892',
    email: 'mahmoud.elsayed@example.com'
  },
  {
    id: 4,
    name: 'د. سارة أحمد',
    specialty: 'جلدية',
    location: 'القاهرة - مصر الجديدة',
    image: doctor2,
    experience: '8 سنوات خبرة',
    rating: 4.6,
    price: 280,
    availableSlots: ['10:00', '11:30', '02:00', '03:30', '05:00'],
    phone: '+20 123 456 7893',
    email: 'sara.ahmed@example.com'
  },
  {
    id: 5,
    name: 'د. خالد عبد الله',
    specialty: 'عيون',
    location: 'الجيزة - الدقي',
    image: doctor1,
    experience: '20 سنة خبرة',
    rating: 4.9,
    price: 350,
    availableSlots: ['08:30', '10:00', '12:00', '02:30', '04:00'],
    phone: '+20 123 456 7894',
    email: 'khaled.abdullah@example.com'
  },
  {
    id: 6,
    name: 'د. نورهان علي',
    specialty: 'نساء وولادة',
    location: 'القاهرة - الزمالك',
    image: doctor2,
    experience: '14 سنة خبرة',
    rating: 4.8,
    price: 400,
    availableSlots: ['09:00', '10:30', '01:00', '02:30', '04:30'],
    phone: '+20 123 456 7895',
    email: 'norhan.ali@example.com'
  },
  {
    id: 7,
    name: 'د. عمرو محمد',
    specialty: 'قلب',
    location: 'القاهرة - مدينة نصر',
    image: doctor1,
    experience: '18 سنة خبرة',
    rating: 4.9,
    price: 450,
    availableSlots: ['08:00', '09:30', '12:30', '02:00', '03:30'],
    phone: '+20 123 456 7896',
    email: 'amr.mohamed@example.com'
  },
  {
    id: 8,
    name: 'د. منى حسام',
    specialty: 'عظام',
    location: 'الجيزة - المهندسين',
    image: doctor2,
    experience: '11 سنة خبرة',
    rating: 4.7,
    price: 320,
    availableSlots: ['09:00', '10:30', '01:30', '03:00', '04:30'],
    phone: '+20 123 456 7897',
    email: 'mona.hossam@example.com'
  },
  {
    id: 9,
    name: 'د. يوسف إبراهيم',
    specialty: 'طب عام',
    location: 'الإسكندرية - محطة الرمل',
    image: doctor1,
    experience: '9 سنوات خبرة',
    rating: 4.5,
    price: 180,
    availableSlots: ['08:30', '10:00', '12:00', '02:00', '03:30'],
    phone: '+20 123 456 7898',
    email: 'youssef.ibrahim@example.com'
  },
  {
    id: 10,
    name: 'د. هالة سعد',
    specialty: 'أطفال',
    location: 'القاهرة - حلوان',
    image: doctor2,
    experience: '13 سنة خبرة',
    rating: 4.8,
    price: 220,
    availableSlots: ['09:30', '11:00', '01:00', '02:30', '04:00'],
    phone: '+20 123 456 7899',
    email: 'hala.saad@example.com'
  },
  {
    id: 11,
    name: 'د. أحمد صلاح',
    specialty: 'أسنان',
    location: 'القاهرة - المعادي',
    image: doctor1,
    experience: '16 سنة خبرة',
    rating: 4.9,
    price: 350,
    availableSlots: ['08:00', '09:30', '01:30', '03:00', '04:30'],
    phone: '+20 123 456 7800',
    email: 'ahmed.salah@example.com'
  },
  {
    id: 12,
    name: 'د. رانيا محمود',
    specialty: 'جلدية',
    location: 'الجيزة - الهرم',
    image: doctor2,
    experience: '7 سنوات خبرة',
    rating: 4.6,
    price: 260,
    availableSlots: ['10:00', '11:30', '02:00', '03:30', '05:00'],
    phone: '+20 123 456 7801',
    email: 'rania.mahmoud@example.com'
  }
]

export const specialties = [
  'الكل',
  'طب عام',
  'أطفال',
  'أسنان',
  'جلدية',
  'عيون',
  'قلب',
  'عظام',
  'نساء وولادة'
]