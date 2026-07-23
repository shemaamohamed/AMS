'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { partnersData } from '@/data/partnersData';
import { Cpu, ArrowRight, ArrowLeft, CheckCircle2, ShieldAlert } from 'lucide-react';

export function TechPartners() {
  const { direction, t } = useLanguage();
  const isRtl = direction === 'rtl';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#041c2c] text-slate-900 dark:text-white relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-extrabold text-[#0a66a0] dark:text-sky-400 uppercase tracking-widest bg-[#0a66a0]/10 dark:bg-[#0a66a0]/20 px-3 py-1 rounded border border-[#0a66a0]/30">
            {t('partnersTag')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {t('partnersTitle')}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {t('partnersSub')}
          </p>
        </div>

        {/* Two Partner Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {partnersData.map((partner, idx) => {
            const pName = (isRtl && partner.nameAr) ? partner.nameAr : partner.name;
            const pTagline = (isRtl && partner.taglineAr) ? partner.taglineAr : partner.tagline;
            const pDesc = (isRtl && partner.descriptionAr) ? partner.descriptionAr : partner.description;
            const pTechs = (isRtl && partner.technologiesAr) ? partner.technologiesAr : partner.technologies;

            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#051826] border border-slate-200 dark:border-[#0a66a0]/40 rounded-2xl p-5 sm:p-8 backdrop-blur-md flex flex-col justify-between space-y-4 sm:space-y-6 hover:border-[#0a66a0] transition-all shadow-xl dark:shadow-none"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
                    <div>
                      <span className="text-[10px] font-bold text-[#2f7c4c] dark:text-emerald-400 uppercase tracking-wider">{isRtl ? 'شريك التكنولوجيا والحلول' : 'Technology Partner'}</span>
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white">{pName}</h3>
                    </div>
                    <Cpu className="w-8 h-8 text-[#0a66a0] dark:text-sky-400" />
                  </div>

                  <p className="text-xs font-bold text-[#0a66a0] dark:text-sky-300">{pTagline}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{pDesc}</p>

                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">{isRtl ? 'التقنيات والأدوات الرئيسية:' : 'Core Capabilities & Tools:'}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {pTechs.slice(0, 4).map((tech, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2f7c4c] dark:text-[#3bd879] shrink-0 mt-0.5" />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                  <Link
                    href="/pipeline-integrity"
                    className="text-xs font-bold text-[#0a66a0] dark:text-sky-400 hover:underline flex items-center gap-1"
                  >
                    <span>{isRtl ? 'استكشف التفاصيل الهندسية في صفحة سلامة الأنابيب' : 'Explore Deep-Dive Technical Page'}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-xs text-slate-400 font-mono">0{idx + 1} Alliance</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/pipeline-integrity"
            className="inline-flex items-center gap-2 bg-[#2f7c4c] hover:bg-[#25643d] text-white px-7 py-3 rounded-xl font-bold text-xs transition-all shadow-md shadow-[#2f7c4c]/30"
          >
            <ShieldAlert className="w-4 h-4 text-emerald-200" />
            <span>{isRtl ? 'استكشف نظام سلامة الأنابيب و 24/7 EPRS' : 'Explore Pipeline Integrity & 24/7 EPRS System'}</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
