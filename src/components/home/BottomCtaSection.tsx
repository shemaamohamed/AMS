'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldAlert, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function BottomCtaSection() {
  const { language, direction, t } = useLanguage();
  const isRtl = direction === 'rtl' || language === 'AR';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="py-10 sm:py-16 bg-gradient-to-r from-[#0a66a0] via-[#051826] to-[#2f7c4c] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
        <div className={`space-y-2 text-center ${isRtl ? 'md:text-right' : 'md:text-left'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4 text-emerald-300 shrink-0" />
            <span>{isRtl ? 'خط طوارئ النوازل 24/7' : 'EMERGENCY INCIDENT HOTLINE 24/7'}</span>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-snug">
            {t('calloutBannerTitle')}
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl">
            {t('calloutBannerSub')}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full md:w-auto shrink-0">
          <a
            href="tel:+966138002470"
            className="w-full sm:w-auto bg-[#2f7c4c] hover:bg-[#25643d] text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-xl border border-emerald-400/30 text-center whitespace-nowrap"
          >
            <span dir="ltr" className="inline-block font-mono">
              {isRtl ? '+966 13 800 2470' : 'Call +966 13 800 2470'}
            </span>
          </a>
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all border border-white/20 inline-flex items-center justify-center gap-2 whitespace-nowrap group"
          >
            <span>{isRtl ? 'تقديم طلب طوارئ' : 'Submit Dispatch Form'}</span>
            <ArrowIcon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
