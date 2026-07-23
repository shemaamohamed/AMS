import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { JvSection } from '@/components/home/JvSection';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { DeliveryMethods } from '@/components/home/DeliveryMethods';
import { TechPartners } from '@/components/home/TechPartners';
import { LogoMarquee } from '@/components/home/LogoMarquee';
import { MapSection } from '@/components/home/MapSection';
import Link from 'next/link';
import { ShieldAlert, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'AMS Marine | Sovereign Subsea Engineering & Deepwater Excellence Across the Arabian Gulf',
  description: 'AMS Marine (Arabian Marine Services) is a Joint Venture between Alpha OMQ & OSC Marine Group. Providing deepwater ROV (3,000m), saturation diving (300m), pipeline integrity, and 24/7 EPRS emergency response in Saudi Arabia & the GCC.',
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
      <section className="py-10 sm:py-16 bg-gradient-to-r from-[#0a66a0] via-[#051826] to-[#2f7c4c] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4 text-emerald-300" />
              24/7 Emergency Incident Hotline
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold">Need Immediate Subsea Support or Emergency Pipeline Repair?</h3>
            <p className="text-xs sm:text-sm text-slate-200">Our engineering dispatch team is available 24/7 for rapid mobilization across KSA & GCC offshore blocks.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full md:w-auto">
            <a
              href="tel:+966138002470"
              className="w-full sm:w-auto bg-[#2f7c4c] hover:bg-[#25643d] text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all shadow-xl border border-emerald-400/30 text-center"
            >
              Call +966 13 800 2470
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all border border-white/20 flex items-center justify-center gap-2"
            >
              <span>Submit Dispatch Form</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
