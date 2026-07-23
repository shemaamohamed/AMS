import React from 'react';
import type { Metadata } from 'next';
import { SITE_URL, defaultOGImages } from '@/lib/seo';
import { ContactClient } from '@/components/contact/ContactClient';

export const metadata: Metadata = {
  title: '24/7 Subsea Incident Hotline & Emergency Dispatch | AMS Marine',
  description:
    'Contact AMS Marine Headquarters in Al Khobar, Saudi Arabia (+966 13 800 2470). 24/7 emergency hotline for subsea pipeline leak repairs, saturation diving callouts, and EPIC project bidding.',
  keywords: [
    'Subsea Emergency Hotline Saudi Arabia',
    'AMS Marine Khobar Address',
    '24/7 Pipeline Repair Dispatch',
    'Subsea B2B Inquiry Matrix',
    'اتصال AMS Marine الخبر',
    'خط طوارئ التسربات البحرية 24/7',
    'رقم هاتفAMS Marine الخبر'
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
    title: '24/7 Emergency Support & Contact Matrix | AMS Marine',
    description: 'Direct priority dispatch lines for Khobar Headquarters and emergency subsea incident callouts.',
    siteName: 'AMS Marine',
    images: defaultOGImages,
  },
  twitter: {
    card: 'summary_large_image',
    title: '24/7 Emergency Incident Hotline | AMS Marine',
    description: 'Call +966 13 800 2470 for immediate subsea & pipeline incident dispatch across KSA & GCC.',
    images: [
      `${SITE_URL}/assets/photos/image (30).png`,
      `${SITE_URL}/assets/logo/ams_logo_dark.png`,
    ],
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'AMS Marine 24/7 Emergency & Corporate Contact Matrix',
    url: `${SITE_URL}/contact`,
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'AMS Marine Headquarters Al Khobar',
      telephone: '+966138002470',
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
      { '@type': 'ListItem', position: 2, name: 'Contact & 24/7 Hotline', item: `${SITE_URL}/contact` }
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
