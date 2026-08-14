export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://amsmarine.com.sa';

export const defaultSEO = {
  siteName: 'AMS Marine (Arabian Marine Services)',
  siteNameAr: 'شركة الخدمات البحرية العربية (AMS Marine)',
  title: 'AMS Marine | Sovereign Subsea Engineering & Deepwater Excellence Across the Arabian Gulf',
  titleAr: 'AMS Marine | خدمات الهندسة البحرية السيادية والتدخل الفني بالأعماق في الخليج العربي',
  description:
    'AMS Marine (Arabian Marine Services) is a sovereign Joint Venture between Alpha OMQ & OSC Marine Group. Delivering ROV inspection & survey, 300m saturation diving, pipeline integrity, and EPRS emergency response across KSA & the GCC.',
  descriptionAr:
    'شركة الخدمات البحرية العربية (AMS Marine) مشروع مشترك سيادي بين Alpha OMQ و OSC Marine Group. نقدم خدمات مركبات ROV للمسح والتفتيش، الغوص التشبعي حتى 300م، سلامة الأنابيب، و EPRS للتدخل الطارئ.',
  keywords: [
    'Subsea Engineering Saudi Arabia',
    'Saturation Diving GCC',
    'Subsea Pipeline Engineering Arabian Gulf',
    'Emergency Salvage and Pipeline Repair ME Africa',
    'Subsea IRM Khobar',
    'Marine Civils Red Sea',
    'Dry Space Engineering and Subsea Welding',
    'Inline Inspection ILI Pipecare',
    'Alpha OMQ',
    'OSC Marine Group',
    'IMCA Subsea Contractor Saudi Arabia',
    'IRATA Rope Access Kingdom of Saudi Arabia',
    'هندسة الأعماق السعودية',
    'خدمات الغوص التشبعي',
    'هندسة وإصلاح الأنابيب البحرية',
    'اللحام الجاف تحت الضغط',
    'الفحص المباشر للأنابيب ILI',
    'إصلاح الأنابيب البحرية الخبر',
    'صيانة المنصات البحرية الخليج العربي',
    'Alpha OMQ',
    'OSC Marine Group',
    'AMS Marine'
  ]
};

export const defaultOGImages = [
  {
    url: `${SITE_URL}/og-preview.png`,
    width: 1200,
    height: 630,
    alt: 'AMS Marine - Sovereign Subsea Engineering & Deepwater Excellence',
    type: 'image/png',
  },
  {
    url: `${SITE_URL}/og-preview-hero.jpg`,
    width: 1200,
    height: 630,
    alt: 'AMS Marine Hero Operations Preview',
    type: 'image/jpeg',
  },
  {
    url: `${SITE_URL}/assets/logo/ams_logo_dark.png`,
    width: 1200,
    height: 630,
    alt: 'AMS Marine Official Brand Logo (Alpha OMQ x OSC Marine)',
    type: 'image/png',
  },
  {
    url: `${SITE_URL}/faviconams.png`,
    width: 512,
    height: 512,
    alt: 'AMS Marine Icon',
    type: 'image/png',
  },
];

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    '@id': `${SITE_URL}/#organization`,
    name: 'AMS Marine (Arabian Marine Services)',
    alternateName: 'شركة الخدمات البحرية العربية',
    url: SITE_URL,
    logo: `${SITE_URL}/assets/logo/ams_logo_white.png`,
    image: `${SITE_URL}/assets/photos/image (30).png`,
    description: defaultSEO.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'King Fahd Road, Enterprise Tower, Level 14',
      addressLocality: 'Al Khobar',
      postalCode: '31952',
      addressCountry: 'SA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '26.2172',
      longitude: '50.1971'
    },
    telephone: '+966138352296',
    email: 'hq@amsmarine.com.sa',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+966138352296',
        contactType: 'customer service',
        areaServed: ['SA', 'AE', 'KW', 'QA', 'BH', 'OM'],
        availableLanguage: ['en', 'ar'],
        description: 'Subsea technical support and service inquiries'
      }
    ],
    sameAs: [
      'https://www.linkedin.com/company/ams-marine'
    ]
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: 'AMS Marine Headquarters Al Khobar',
    image: `${SITE_URL}/assets/photos/image (30).png`,
    url: SITE_URL,
    telephone: '+966138352296',
    priceRange: '$$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'King Fahd Road, Enterprise Tower, Level 14',
      addressLocality: 'Al Khobar',
      postalCode: '31952',
      addressCountry: 'SA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '26.2172',
      longitude: '50.1971'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '08:00',
      closes: '17:00'
    }
  };
}
