import { LocationHub } from '@/types';

export const locationsData: LocationHub[] = [
  {
    id: 'khobar_hq',
    city: 'Al Khobar Headquarters',
    cityAr: 'المقر الرئيسي بالخبر',
    country: 'Kingdom of Saudi Arabia',
    countryAr: 'المملكة العربية السعودية',
    type: 'Headquarters',
    typeAr: 'المقر الرئيسي العالمي',
    address: 'King Fahd Road, Enterprise Tower, Level 14, Al Khobar 31952, KSA',
    addressAr: 'طريق الملك فهد، برج المشاريع، الطابق ١٤، الخبر ٣١٩٥٢، المملكة العربية السعودية',
    phone: '+966 13 800 2470',
    email: 'hq@amsmarine.com.sa',
    coordinates: { lat: 26.2172, lng: 50.1971 }
  },
  {
    id: 'dammam_jubail',
    city: 'Dammam & Jubail Base',
    cityAr: 'قاعدة الدمام والجبيل',
    country: 'Kingdom of Saudi Arabia (Eastern Province)',
    countryAr: 'المملكة العربية السعودية (المنطقة الشرقية)',
    type: 'Strategic KSA Hub',
    typeAr: 'مركز استراتيجي بالمملكة',
    address: 'King Abdulaziz Port Road, Subsea Logistics Base 4, Dammam / Jubail Commercial Port, KSA',
    addressAr: 'طريق ميناء الملك عبد العزيز، قاعدة اللوجستيات البحرية ٤، الدمام / ميناء الجبيل التجاري',
    phone: '+966 13 811 4455',
    email: 'eastern.ops@amsmarine.com.sa',
    coordinates: { lat: 26.4344, lng: 50.1033 }
  },
  {
    id: 'jeddah_redsea',
    city: 'Jeddah / Red Sea Base',
    cityAr: 'قاعدة جدة / البحر الأحمر',
    country: 'Kingdom of Saudi Arabia (Western Region)',
    countryAr: 'المملكة العربية السعودية (المنطقة الغربية)',
    type: 'Strategic KSA Hub',
    typeAr: 'مركز استراتيجي بالمملكة',
    address: 'Jeddah Islamic Port Marine Hub, Gate 7, Jeddah 21411, KSA',
    addressAr: 'المركز البحري بميناء جدة الإسلامي، البوابة ٧، جدة ٢١٤١١، المملكة العربية السعودية',
    phone: '+966 12 654 3322',
    email: 'redsea.ops@amsmarine.com.sa',
    coordinates: { lat: 21.4858, lng: 39.1925 }
  },
  {
    id: 'riyadh_office',
    city: 'Riyadh Corporate Office',
    cityAr: 'المكتب الرئيسي بالرياض',
    country: 'Kingdom of Saudi Arabia',
    countryAr: 'المملكة العربية السعودية',
    type: 'Strategic KSA Hub',
    typeAr: 'مركز استراتيجي بالمملكة',
    address: 'Olaya District, Sovereign Business Center, Riyadh 11564, KSA',
    addressAr: 'حي العليا، مركز الأعمال السيادي، الرياض ١١٥٦٤، المملكة العربية السعودية',
    phone: '+966 11 456 7890',
    email: 'riyadh@amsmarine.com.sa',
    coordinates: { lat: 24.7136, lng: 46.6753 }
  },
  {
    id: 'uae_hub',
    city: 'Abu Dhabi & Dubai Operations',
    cityAr: 'عمليات أبوظبي ودبي',
    country: 'United Arab Emirates',
    countryAr: 'الإمارات العربية المتحدة',
    type: 'GCC Regional Operations',
    typeAr: 'عمليات دول مجلس التعاون',
    address: 'Mussafah Offshore Supply Base / Dubai Maritime City, UAE',
    addressAr: 'قاعدة مصفح للإمداد البحري / مدينة دبي الملاحية، الإمارات',
    phone: '+971 2 678 9100',
    email: 'uae@amsmarine.com',
    coordinates: { lat: 24.4539, lng: 54.3773 }
  },
  {
    id: 'qatar_hub',
    city: 'Doha Marine Base',
    cityAr: 'قاعدة الدوحة البحرية',
    country: 'State of Qatar',
    countryAr: 'دولة قطر',
    type: 'GCC Regional Operations',
    typeAr: 'عمليات دول مجلس التعاون',
    address: 'Ras Laffan Industrial City Marine Logistics Zone, Qatar',
    addressAr: 'منطقة اللوجستيات البحرية بمدينة رأس لفان الصناعية، قطر',
    phone: '+974 4 455 6677',
    email: 'qatar@amsmarine.com',
    coordinates: { lat: 25.2854, lng: 51.5310 }
  }
];
