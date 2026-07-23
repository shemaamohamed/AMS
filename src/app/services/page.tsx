import React from 'react';
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/seo';
import { ServicesClient } from '@/components/services/ServicesClient';

export const metadata: Metadata = {
  title: 'Subsea Engineering & IRM Services Catalog | AMS Marine',
  description:
    'Explore AMS Marine subsea services: 3,000m deepwater ROV systems, 300m commercial saturation diving, offshore IRM, subsea construction tie-ins, and marine civils across Saudi Arabia & GCC.',
  keywords: [
    'Subsea IRM Services Saudi Arabia',
    'Deepwater ROV Systems 3000m',
    'Saturation Diving Spreads 300m',
    'Subsea Construction Tie-ins',
    'Marine Civils Cofferdam Repair',
    'دليل الخدمات البحرية',
    'فحص وصيانة الأصول البحرية',
    'غوص تشبعي 300 متر',
    'مركبات أعماق بدون غواصين'
  ],
  alternates: {
    canonical: `${SITE_URL}/services`,
    languages: {
      'en-US': `${SITE_URL}/services?lang=EN`,
      'ar-SA': `${SITE_URL}/services?lang=AR`,
    },
  },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/services`,
    title: 'Subsea Engineering & IRM Services Catalog | AMS Marine',
    description:
      'Technical specifications for 3,000m ROV intervention, 300m saturation diving, pipeline integrity, and subsea construction.',
    siteName: 'AMS Marine',
    images: [
      {
        url: `${SITE_URL}/assets/photos/image (30).png`,
        width: 1200,
        height: 630,
        alt: 'AMS Subsea Services Catalog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Subsea Services & Asset Integrity Catalog | AMS Marine',
    description: 'Detailed specs for offshore asset IRM, deepwater ROVs, and saturation diving.',
    images: [`${SITE_URL}/assets/photos/image (30).png`],
  },
};

export default function ServicesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'AMS Marine Subsea Engineering Services',
    itemListElement: [
      {
        '@type': 'Service',
        position: 1,
        name: 'Inspection, Repair & Maintenance (IRM)',
        description: 'Comprehensive platform, jacket, riser, and subsea structural IRM using CAT III/IV NDT and acoustic imaging.',
        provider: { '@id': `${SITE_URL}/#organization` }
      },
      {
        '@type': 'Service',
        position: 2,
        name: 'Deepwater ROV Systems (3,000m Rating)',
        description: 'Work-Class and Inspection ROVs equipped with acoustic multibeam, P&A tools, and diverless cutting skids.',
        provider: { '@id': `${SITE_URL}/#organization` }
      },
      {
        '@type': 'Service',
        position: 3,
        name: 'Commercial & Saturation Diving (300m Rating)',
        description: 'IMCA D014/D024 compliant 12-man hyperbaric saturation diving system and surface air/Nitrox spreads.',
        provider: { '@id': `${SITE_URL}/#organization` }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Subsea Services', item: `${SITE_URL}/services` }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicesClient />
    </>
  );
}
