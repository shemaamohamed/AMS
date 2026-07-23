export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://amsmarine.com.sa';

export const defaultSEO = {
  siteName: 'AMS Marine (Arabian Marine Services)',
  siteNameAr: 'شركة الخدمات البحرية العربية (AMS Marine)',
  title: 'AMS Marine | Sovereign Subsea Engineering & Deepwater Excellence Across the Arabian Gulf',
  titleAr: 'AMS Marine | خدمات الهندسة البحرية السيادية والتدخل الفني بالأعماق في الخليج العربي',
  description:
    'AMS Marine (Arabian Marine Services) is a sovereign Joint Venture between Alpha OMQ & OSC Marine Group (Est. 1962). Delivering 3,000m deepwater ROV intervention, 300m saturation diving, pipeline integrity, and 24/7 EPRS emergency response across KSA & the GCC.',
  descriptionAr:
    'شركة الخدمات البحرية العربية (AMS Marine) مشروع مشترك سيادي بين Alpha OMQ و OSC Marine Group (تأسست 1962). نقدم خدمات مركبات الأعماق ROV حتى 3000م، الغوص التشبعي حتى 300م، سلامة الأنابيب، و 24/7 EPRS للتدخل الطارئ.',
  keywords: [
    'Subsea Engineering Saudi Arabia',
    'Saturation Diving 300m GCC',
    'Work-Class ROV 3000m Arabian Gulf',
    'Emergency Pipeline Repair EPRS Aramco',
    'Subsea IRM Khobar',
    'Marine Civils Red Sea',
    'Alpha OMQ',
    'OSC Marine Group',
    'IMCA Subsea Contractor Saudi Arabia',
    'IRATA Rope Access Kingdom of Saudi Arabia',
    'هندسة الأعماق السعودية',
    'خدمات الغوص التشبعي 300م',
    'مركبات الأعماق ROV 3000م',
    'إصلاح الأنابيب البحرية 24/7 الخبر',
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
    foundingDate: '1962',
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
    telephone: '+966138002470',
    email: 'hq@amsmarine.com.sa',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+966138002470',
        contactType: 'emergency hotline',
        areaServed: ['SA', 'AE', 'KW', 'QA', 'BH', 'OM'],
        availableLanguage: ['en', 'ar'],
        description: '24/7 Subsea & Emergency Pipeline Incident Callout'
      },
      {
        '@type': 'ContactPoint',
        telephone: '+966138002470',
        contactType: 'customer service',
        areaServed: 'GCC',
        availableLanguage: ['en', 'ar']
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
    telephone: '+966138002470',
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
