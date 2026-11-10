import React from 'react';
import type { Metadata } from 'next';
import { SITE_URL, defaultOGImages } from '@/lib/seo';
import { ContactClient } from '@/components/contact/ContactClient';

export const metadata: Metadata = {
  title: 'Contact & Subsea Support | Arabian Marine Services AMS Company',
  description:
    'Contact Arabian Marine Services AMS Company Headquarters in Al Khobar, Saudi Arabia for commercial enquiries, engineering support, and subsea service requests.',
    keywords: [
    'Arabian Marine Services AMS Company Contact Saudi Arabia',
    'Arabian Marine Services AMS Company Khobar Address',
    'Pipeline Repair Dispatch',
    'Subsea B2B Inquiry Matrix',
    'اتصال شركة أربيان مارين سيرفيسز إيه.إم.إس الخبر',
    'طلبات دعم هندسي',
    'رقم هاتف شركة أربيان مارين سيرفيسز إيه.إم.إس الخبر'
  ],
  alternates: {
    canonical: `${SITE_URL}/contact`,
    languages: {
      'en-US': `${SITE_URL}/contact?lang=EN`,
      'ar-SA': `${SITE_URL}/contact?lang=AR`,
    },
  },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/contact`,
    title: 'Contact & Subsea Support | Arabian Marine Services AMS Company',
    description: 'Contact our Khobar headquarters for commercial inquiries, engineering support, and subsea services.',
    siteName: 'Arabian Marine Services AMS Company',
    images: defaultOGImages,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Arabian Marine Services AMS Company',
    description: 'Contact +966 13 835 2296 for corporate and subsea service enquiries across KSA & GCC.',
    images: [
      `${SITE_URL}/og-preview.png`,
      `${SITE_URL}/og-preview-hero.jpg`,
      `${SITE_URL}/assets/logo/ams_logo_dark.png`,
    ],
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Arabian Marine Services AMS Company Contact & Corporate Matrix',
    url: `${SITE_URL}/contact`,
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Arabian Marine Services AMS Company Headquarters Al Khobar',
      telephone: '+966138352296',
      email: 'hq@amsmarine.com.sa',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'King Fahd Road, Enterprise Tower, Level 14',
        addressLocality: 'Al Khobar',
        postalCode: '31952',
        addressCountry: 'SA'
      }
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE_URL}/contact` }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactClient />
    </>
  );
}
