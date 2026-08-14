import React from 'react';
import type { Metadata } from 'next';
import { SITE_URL, defaultOGImages } from '@/lib/seo';
import { PipelineClient } from '@/components/pipeline/PipelineClient';

export const metadata: Metadata = {
  title: 'Pipeline Integrity & Emergency Repair System (EPRS) | AMS Marine',
  description:
    'AMS Marine delivers 4D condition monitoring, PIPECARE smart pigging (MFL/UT/EMAT), diverless subsea repair tools (CSS Morgrip), IO-Cofferdams, and emergency pipeline repair across Saudi Arabia & the GCC.',
  keywords: [
    'Subsea Pipeline Integrity Saudi Arabia',
    'EPRS Emergency Pipeline Repair System',
    'PIPECARE Smart Pigging MFL UT',
    'Connector Subsea Solutions Morgrip Clamps',
    'Subsea IO-Cofferdams Dry Welding',
    'سلامة الأنابيب البحرية الخبر',
    'إصلاح طوارئ الأنابيب البحرية',
    'كشط الأنابيب الذكي بايبكير',
    'مشابك Morgrip المعتمدة'
  ],
  alternates: {
    canonical: `${SITE_URL}/pipeline-integrity`,
    languages: {
      'en-US': `${SITE_URL}/pipeline-integrity?lang=EN`,
      'ar-SA': `${SITE_URL}/pipeline-integrity?lang=AR`,
    },
  },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/pipeline-integrity`,
    title: 'Pipeline Integrity & EPRS Incident Support | AMS Marine',
    description:
      'Emergency Pipeline Incident Callout, PIPECARE Smart Pigging, CSS Diverless Clamps, and IO-Cofferdams.',
    siteName: 'AMS Marine',
    images: defaultOGImages,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pipeline Integrity & EPRS | AMS Marine',
    description: 'Rapid mobilization subsea pipeline damage containment & diverless repair tools across KSA & GCC.',
    images: [
      `${SITE_URL}/og-preview.jpg`,
      `${SITE_URL}/og-preview-hero.jpg`,
      `${SITE_URL}/assets/logo/ams_logo_dark.png`,
    ],
  },
};

export default function PipelineIntegrityPage() {
  const eprsServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Emergency Pipeline Repair System (EPRS) & Integrity',
    serviceType: 'Subsea Emergency Repair',
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: ['SA', 'AE', 'KW', 'QA', 'BH', 'OM'],
    description: 'Rapid incident callout for hydrocarbon subsea pipeline leaks, smart pigging (MFL/UT), and diverless Morgrip clamp installation.'
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Pipeline Integrity & EPRS', item: `${SITE_URL}/pipeline-integrity` }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eprsServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PipelineClient />
    </>
  );
}
