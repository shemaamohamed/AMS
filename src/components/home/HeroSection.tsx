'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { ShieldCheck, Anchor, ArrowRight, ArrowLeft, Activity, Award, Download, PhoneCall } from 'lucide-react';

export function HeroSection() {
  const { direction, t } = useLanguage();
  const isRtl = direction === 'rtl';

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const stats = [
    {
      value: '60+',
      label: t('statLegacy'),
      sub: isRtl ? 'تأسست عام ١٩٦٢' : 'Operating Since 1962'
    },
    {
      value: '3,000m',
      label: t('statRovDepth'),
      sub: isRtl ? 'مركبات الأعماق الفائقة' : 'Work-Class Intervention'
    },
    {
      value: '300m',
      label: t('statSatDepth'),
      sub: isRtl ? 'غوص تشبعي معتمد' : 'IMCA Member Compliant'
    },
    {
      value: '24/7',
      label: t('statEprs'),
      sub: isRtl ? 'استجابة سريعة للنوازل' : 'Rapid Subsea Callout'
    },
  ];

  return (
    <section className="relative min-h-[70vh] sm:min-h-[90vh] flex flex-col justify-center bg-slate-50 dark:bg-[#041c2c] text-slate-900 dark:text-white overflow-hidden pt-6 sm:pt-8 pb-12 sm:pb-16 border-b border-slate-200 dark:border-[#0a66a0]/30 transition-colors duration-300">
      
      {/* Background Graphic Grid / Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#0a66a0_1px,transparent_1px)] [background-size:24px_24px] opacity-10 dark:opacity-20 pointer-events-none" />

      {/* Subsea Ambient Glow Effects */}
      <div className="absolute -top-24 -left-24 w-48 sm:w-96 h-48 sm:h-96 bg-[#0a66a0]/15 dark:bg-[#0a66a0]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-48 sm:w-96 h-48 sm:h-96 bg-[#2f7c4c]/15 dark:bg-[#2f7c4c]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Headlines & CTAs */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Sovereign Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-[#0a66a0]/40 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#2f7c4c] dark:bg-[#3bd879] animate-pulse"></span>
              <span className="text-xs font-bold text-[#0a66a0] dark:text-sky-300 tracking-wide uppercase">
                {t('heroTag')}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
              <span>{t('heroTitlePrefix')}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a66a0] via-sky-500 to-[#2f7c4c] dark:from-sky-400 dark:via-teal-300 dark:to-emerald-400">
                {t('heroTitleGradient')}
              </span>
              <span>{t('heroTitleSuffix')}</span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              {t('heroSub')}
            </p>

            {/* CTAs Row */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/services"
                className="bg-[#0a66a0] hover:bg-[#085282] text-white px-7 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all shadow-lg shadow-[#0a66a0]/30 hover:scale-105 flex items-center gap-2 border border-sky-400/30"
              >
                <span>{t('btnExploreServices')}</span>
                <ArrowIcon className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="bg-[#2f7c4c] hover:bg-[#25643d] text-white px-6 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all shadow-md shadow-[#2f7c4c]/30 hover:scale-105 flex items-center gap-2 border border-emerald-400/30"
              >
                <PhoneCall className="w-4 h-4 text-emerald-200 animate-bounce" />
                <span>{t('btnEmergencySupport')}</span>
              </Link>

              <a
                href="/assets/Arabian Marine Services Profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-slate-100 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm transition-all border border-slate-300 dark:border-white/10 flex items-center gap-2 shadow-sm"
              >
                <Download className="w-4 h-4 text-[#0a66a0] dark:text-sky-400" />
                <span>{t('btnDownloadPdf')}</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-white/10">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0a66a0] dark:text-sky-400" />
                {isRtl ? 'عضو IMCA وشهادة IRATA' : 'IMCA Member & IRATA Certified'}
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#2f7c4c] dark:text-emerald-400" />
                {isRtl ? 'اعتمادات هيئات DNV و ABS' : 'DNV-GL / ABS Class Approved'}
              </span>
              <span className="flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                ISO 9001 / 14001 / 45001
              </span>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Card */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/15 shadow-2xl bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-[#041c2c] group">
              <div className="relative h-64 sm:h-80 lg:h-96 w-full">
                <Image
                  src="/assets/photos/image (30).png"
                  alt="AMS Subsea ROV Operations"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 dark:opacity-80"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent pointer-events-none" />
              </div>

              {/* Card Overlay Content */}
              <div className="absolute bottom-0 inset-x-0 p-6 space-y-3 text-white">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-[#0a66a0] text-white text-[10px] font-extrabold uppercase tracking-wider">
                    {isRtl ? 'أبرز العمليات الميدانية' : 'Operational Highlight'}
                  </span>
                  <span className="text-xs text-sky-300 font-semibold">{isRtl ? 'التدخل الفني في المياه العميقة' : 'Deepwater Subsea Intervention'}</span>
                </div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {t('heroHighlight')}
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {t('heroHighlightDesc')}
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Stats Counter Bar */}
        <motion.div
          className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 sm:p-6 shadow-md dark:shadow-none backdrop-blur-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((stat, idx) => (
            <div key={idx} className={`space-y-1 text-center md:text-left pr-2 sm:pr-4 ${idx < stats.length - 1 ? 'border-r border-slate-200 dark:border-white/10' : ''} ${idx === 1 ? 'border-r-0 md:border-r' : ''}`}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0a66a0] to-[#2f7c4c] dark:from-sky-400 dark:to-emerald-400">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">{stat.label}</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">{stat.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
