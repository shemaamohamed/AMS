import React from 'react';
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/seo';
import { AccreditationsClient } from '@/components/accreditations/AccreditationsClient';

export const metadata: Metadata = {
  title: 'Safety Standards & Marine Class Approvals | AMS Marine',
  description:
    'AMS Marine holds full IMCA membership, IRATA Reg 7020 Rope Access certification, ISO 9001/14001/45001, and Class approvals (DNV-GL, ABS, BV, LR) for certified in-water UWILD surveys.',
  keywords: [
    'IMCA Member Contractor Saudi Arabia',
    'IRATA Rope Access Reg 7020 KSA',
    'UWILD In-Water Class Approval DNV ABS',
    'ISO 9001 14001 45001 Subsea',
    'HSE Zero Harm Diving Safety',
    'اعتمادات IMCA الغوص التجاري',
    'شهادات IRATA السعودية',
    'معاينات UWILD هيئات التصنيف البحرية'
  ],
  alternates: {
    canonical: `${SITE_URL}/accreditations`,
    languages: {
      'en-US': `${SITE_URL}/accreditations?lang=EN`,
      'ar-SA': `${SITE_URL}/accreditations?lang=AR`,
    },
  },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/accreditations`,
    title: 'Safety Standards & Class Approvals | AMS Marine',
    description: 'IMCA Member, IRATA Certified, ISO 9001/14001/45001, and DNV GL/ABS Marine Class Approvals.',
    siteName: 'AMS Marine',
    images: [
      {
        url: `${SITE_URL}/assets/photos/image (30).png`,
        width: 1200,
        height: 630,
        alt: 'AMS Marine Certifications & Class Approvals',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accreditations & Class Approvals | AMS Marine',
    description: 'Full IMCA Member, IRATA 7020, and certified UWILD Class Approvals across DNV, ABS, BV, and LR.',
    images: [`${SITE_URL}/assets/photos/image (30).png`],
  },
};

export default function AccreditationsPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Accreditations & Safety', item: `${SITE_URL}/accreditations` }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AccreditationsClient />
    </>
  );
}
