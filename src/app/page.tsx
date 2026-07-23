import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { JvSection } from '@/components/home/JvSection';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { DeliveryMethods } from '@/components/home/DeliveryMethods';
import { TechPartners } from '@/components/home/TechPartners';
import { LogoMarquee } from '@/components/home/LogoMarquee';
import { MapSection } from '@/components/home/MapSection';
import { BottomCtaSection } from '@/components/home/BottomCtaSection';

import type { Metadata } from 'next';
import { SITE_URL, defaultSEO, defaultOGImages } from '@/lib/seo';

export const metadata: Metadata = {
  title: defaultSEO.title,
  description: defaultSEO.description,
  keywords: defaultSEO.keywords,
  alternates: {
    canonical: SITE_URL,
    languages: {
      'en-US': `${SITE_URL}?lang=EN`,
      'ar-SA': `${SITE_URL}?lang=AR`,
    },
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: defaultSEO.title,
    description: defaultSEO.description,
    siteName: defaultSEO.siteName,
    images: defaultOGImages,
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultSEO.title,
    description: defaultSEO.description,
    images: [
      `${SITE_URL}/assets/photos/image (30).png`,
      `${SITE_URL}/assets/logo/ams_logo_dark.png`,
    ],
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#041c2c] text-white">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Strategic JV Overview */}
      <JvSection />

      {/* 3. Core Services Grid */}
      <ServicesGrid />

      {/* 4. 5 Pillars of Delivery Wheel / Tabs */}
      <DeliveryMethods />

      {/* 5. Technology Partnerships Banner (PIPECARE & CSS) */}
      <TechPartners />

      {/* 6. Accreditations & Key Clients Logo Slider */}
      <LogoMarquee />

      {/* 7. Regional GCC Footprint & Operational Map */}
      <MapSection />

      {/* 8. Bottom Emergency Dispatch CTA Banner */}
      <BottomCtaSection />
    </main>
  );
}
