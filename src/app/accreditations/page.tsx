import React from 'react';
import type { Metadata } from 'next';
import { SITE_URL, defaultOGImages } from '@/lib/seo';
import { AccreditationsClient } from '@/components/accreditations/AccreditationsClient';

export const metadata: Metadata = {
  title: 'Saudi Aramco Approved Vendor, Safety Standards & Class Approvals | Arabian Marine Services AMS Company',
  description:
    'Arabian Marine Services AMS Company is an officially approved Saudi Aramco vendor (Vendor ID: 10121703) certified under Saudi Aramco Cybersecurity Standard CCC. Holding full IMCA membership, IRATA 7020, ISO 9001/14001/45001, and Marine Class approvals (DNV, ABS, BV, LR).',
  keywords: [
    'Saudi Aramco Approved Vendor 10121703',
    'Aramco CCC Cybersecurity Compliance Certificate',
    'IMCA Member Contractor Saudi Arabia',
    'IRATA Rope Access Reg 7020 KSA',
    'UWILD In-Water Class Approval DNV ABS',
    'ISO 9001 14001 45001 Subsea',
    'HSE Zero Harm Diving Safety',
    'مورد معتمد ارامكو السعودية 10121703',
    'شهادة الامتثال للامن السيبراني ارامكو CCC',
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
    title: 'Safety Standards & Class Approvals | Arabian Marine Services AMS Company',
    description: 'IMCA Member, IRATA Certified, ISO 9001/14001/45001, and DNV GL/ABS Marine Class Approvals.',
    siteName: 'Arabian Marine Services AMS Company',
    images: defaultOGImages,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accreditations & Class Approvals | Arabian Marine Services AMS Company',
    description: 'Full IMCA Member, IRATA 7020, and certified UWILD Class Approvals across DNV, ABS, BV, and LR.',
    images: [
      `${SITE_URL}/og-preview.png`,
      `${SITE_URL}/og-preview-hero.jpg`,
      `${SITE_URL}/assets/logo/ams_logo_dark.png`,
    ],
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
