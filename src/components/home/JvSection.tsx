'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ShieldCheck, Award, Flag, ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';

export function JvSection() {
  const { direction, t } = useLanguage();
  const isRtl = direction === 'rtl';
  const ChevronIcon = isRtl ? ChevronLeft : ChevronRight;

  return (
    <section className="py-12 sm:py-20 bg-white dark:bg-[#051624] text-slate-900 dark:text-white relative border-b border-slate-200 dark:border-[#0a66a0]/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a66a0]/10 dark:bg-[#0a66a0]/20 border border-[#0a66a0]/30 dark:border-[#0a66a0]/40 text-[#0a66a0] dark:text-sky-400 text-xs font-bold uppercase tracking-wider">
            <Flag className="w-3.5 h-3.5 text-[#2f7c4c] dark:text-emerald-400" />
            {t('jvTag')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {t('jvTitle')}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {t('jvDesc')}
          </p>
        </div>

        {/* Two Column JV Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: Alpha OMQ */}
          <div className="bg-slate-50 dark:bg-[#041c2c]/80 border border-slate-200 dark:border-[#0a66a0]/40 rounded-2xl p-5 sm:p-8 backdrop-blur-md relative overflow-hidden flex flex-col justify-between group hover:border-[#0a66a0] shadow-md dark:shadow-none transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0a66a0]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
                <div>
                  <span className="text-xs font-bold text-[#2f7c4c] dark:text-emerald-400 uppercase tracking-widest">{t('alphaOmqPartner')}</span>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">{t('alphaOmqTitle')}</h3>
                </div>
                <div className="px-3 py-1 rounded bg-emerald-500/10 dark:bg-emerald-500/20 text-[#2f7c4c] dark:text-emerald-300 border border-emerald-500/30 text-xs font-bold">
                  {t('alphaOmqTag')}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {t('alphaOmqDesc')}
              </p>

              <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2f7c4c] dark:text-[#3bd879] shrink-0 mt-0.5" />
                  <span>{isRtl ? 'متوافقة مع مبادرات رؤية السعودية 2030 البحرية السيادية' : 'Aligned with Saudi Vision 2030 sovereign maritime initiatives'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2f7c4c] dark:text-[#3bd879] shrink-0 mt-0.5" />
                  <span>{isRtl ? 'تأهيل كامل كمورد لدى أرامكو السعودية مع شبكة إقليمية واسعة' : 'Unrivaled Saudi Aramco vendor compliance & regional network'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2f7c4c] dark:text-[#3bd879] shrink-0 mt-0.5" />
                  <span>{isRtl ? 'قواعد استراتيجية في الخبر، الدمام، الجبيل، وجدة / البحر الأحمر' : 'Strategic bases in Khobar, Dammam, Jubail & Red Sea / Jeddah'}</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-white/10 mt-6 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400">{isRtl ? 'القيادة البحرية بالمملكة' : 'Saudi Arabia Subsea Leadership'}</span>
              <Award className="w-5 h-5 text-[#2f7c4c] dark:text-emerald-400" />
            </div>
          </div>

          {/* Card 2: OSC Marine Group */}
          <div className="bg-slate-50 dark:bg-[#041c2c]/80 border border-slate-200 dark:border-[#2f7c4c]/40 rounded-2xl p-5 sm:p-8 backdrop-blur-md relative overflow-hidden flex flex-col justify-between group hover:border-[#2f7c4c] shadow-md dark:shadow-none transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2f7c4c]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
                <div>
                  <span className="text-xs font-bold text-[#0a66a0] dark:text-sky-400 uppercase tracking-widest">{t('oscPartner')}</span>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">{t('oscTitle')}</h3>
                </div>
                <div className="px-3 py-1 rounded bg-sky-500/10 dark:bg-sky-500/20 text-[#0a66a0] dark:text-sky-300 border border-sky-500/30 text-xs font-bold">
                  {t('oscTag')}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {t('oscDesc')}
              </p>

              <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0a66a0] dark:text-sky-400 shrink-0 mt-0.5" />
                  <span>{isRtl ? 'أكثر من ٦٠ عاماً من التاريخ الدولي في الغوص التجاري والأعماق' : '60+ years of international subsea & commercial diving legacy'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0a66a0] dark:text-sky-400 shrink-0 mt-0.5" />
                  <span>{isRtl ? 'تمثيل عالي المستوى في مجلس إدارة قسم الغوص التابع لـ IMCA' : 'Senior representation on IMCA Diving Division Management Board'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0a66a0] dark:text-sky-400 shrink-0 mt-0.5" />
                  <span>{isRtl ? 'الريادة في عمليات الغوص التشبعي (300m) وسدود الكوفركس (IO-Cofferdam)' : 'Pioneered 300m Saturation Diving & IO-Cofferdam deployments'}</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-white/10 mt-6 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400">{isRtl ? 'التراث التكنولوجي البحري العالمي' : 'International Deepwater Heritage'}</span>
              <ShieldCheck className="w-5 h-5 text-[#0a66a0] dark:text-sky-400" />
            </div>
          </div>

        </div>

        {/* CTA to About Page */}
        <div className="mt-12 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-slate-800 dark:text-white px-6 py-3 rounded-xl font-bold text-xs transition-all border border-slate-200 dark:border-white/10 shadow-sm"
          >
            <span>{t('btnExploreTimeline')}</span>
            <ChevronIcon className="w-4 h-4 text-[#0a66a0] dark:text-sky-400" />
          </Link>
        </div>

      </div>
    </section>
  );
}
