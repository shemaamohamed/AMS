import React from 'react';
import type { Metadata } from 'next';
import { SITE_URL, defaultOGImages } from '@/lib/seo';
import { AboutClient } from '@/components/about/AboutClient';

export const metadata: Metadata = {
  title: 'About AMS Marine | Sovereign Joint Venture & Vision 2030 Heritage',
  description:
    'Discover AMS Marine (Alpha OMQ × OSC Marine Group alliance). 60+ years of deepwater commercial diving heritage, Saudi Arabia subsea autonomy, and Saudi Vision 2030 alignment.',
  keywords: [
    'About AMS Marine',
    'Alpha OMQ Joint Venture',
    'OSC Marine Group History 1962',
    'Saudi Subsea Sovereignty',
    'Saudi Vision 2030 Maritime Autonomy',
    'عن AMS Marine',
    'الفاع و إم كيو',
    'أوشين سابسي مارين',
    'تاريخ الغوص التجاري السعودية'
  ],
  alternates: {
    canonical: `${SITE_URL}/about`,
    languages: {
      'en-US': `${SITE_URL}/about?lang=EN`,
      'ar-SA': `${SITE_URL}/about?lang=AR`,
    },
  },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/about`,
    title: 'About AMS Marine | Sovereign JV & Vision 2030 Heritage',
    description: 'Uniting Saudi commercial diving leadership with over 60 years of international subsea engineering legacy.',
    siteName: 'AMS Marine',
    images: defaultOGImages,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About AMS Marine | Sovereign Subsea Excellence',
    description: 'Alpha OMQ & OSC Marine Group (Est. 1962). Building subsea autonomy across KSA.',
    images: [
      `${SITE_URL}/assets/photos/image (30).png`,
      `${SITE_URL}/assets/logo/ams_logo_dark.png`,
    ],
  },
};

export default function AboutPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'About Us', item: `${SITE_URL}/about` }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutClient />
    </>
  );
}
