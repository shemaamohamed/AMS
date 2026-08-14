import React from 'react';
import type { Metadata } from 'next';
import { SITE_URL, defaultOGImages } from '@/lib/seo';
import { ContactClient } from '@/components/contact/ContactClient';

export const metadata: Metadata = {
  title: 'Contact & Subsea Support | AMS Marine',
  description:
    'Contact AMS Marine Headquarters in Al Khobar, Saudi Arabia for commercial enquiries, engineering support, and subsea service requests.',
    keywords: [
    'AMS Marine Contact Saudi Arabia',
    'AMS Marine Khobar Address',
    'Pipeline Repair Dispatch',
    'Subsea B2B Inquiry Matrix',
    'اتصال AMS Marine الخبر',
    'طلبات دعم هندسي',
    'رقم هاتف AMS Marine الخبر'
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
    title: 'Contact & Subsea Support | AMS Marine',
    description: 'Contact our Khobar headquarters for commercial inquiries, engineering support, and subsea services.',
    siteName: 'AMS Marine',
    images: defaultOGImages,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | AMS Marine',
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
    name: 'AMS Marine Contact & Corporate Matrix',
    url: `${SITE_URL}/contact`,
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'AMS Marine Headquarters Al Khobar',
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
