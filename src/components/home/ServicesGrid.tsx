'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { servicesData } from '@/data/servicesData';
import { ServiceCategory } from '@/types';
import { ShieldCheck, Building2, Bot, Anchor, Activity, Waves, ArrowRight, ArrowLeft, X, CheckCircle2, Cpu } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#0a66a0] dark:text-sky-400" />,
  Building2: <Building2 className="w-6 h-6 text-[#2f7c4c] dark:text-emerald-400" />,
  Bot: <Bot className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
  Anchor: <Anchor className="w-6 h-6 text-[#2f7c4c] dark:text-[#3bd879]" />,
  Activity: <Activity className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
  Waves: <Waves className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
};

export function ServicesGrid() {
  const { direction, t } = useLanguage();
  const isRtl = direction === 'rtl';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [selectedService, setSelectedService] = useState<ServiceCategory | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#041c2c] text-slate-900 dark:text-white relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-extrabold text-[#0a66a0] dark:text-sky-400 uppercase tracking-widest bg-[#0a66a0]/10 px-3 py-1 rounded border border-[#0a66a0]/30">
              {t('servicesTag')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              {t('servicesTitle')}
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#0a66a0] dark:text-sky-400 hover:opacity-80 font-bold text-xs uppercase tracking-wider group"
          >
            <span>{t('btnViewAllServices')}</span>
            <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, idx) => {
            const title = (isRtl && service.titleAr) ? service.titleAr : service.title;
            const shortDesc = (isRtl && service.shortDescAr) ? service.shortDescAr : service.shortDesc;
            const maxDepth = (isRtl && service.maxDepthAr) ? service.maxDepthAr : service.maxDepth;
            const methods = (isRtl && service.deliveryMethodsAr) ? service.deliveryMethodsAr : service.deliveryMethods;

            return (
              <div
                key={service.id}
                className="bg-white/75 dark:bg-[#051826] backdrop-blur-md border border-slate-200/80 dark:border-white/10 hover:border-[#0a66a0] dark:hover:border-sky-400 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-slate-200/60 dark:hover:shadow-none shadow-md shadow-slate-200/30"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 group-hover:bg-[#0a66a0]/10 dark:group-hover:bg-[#0a66a0]/20 transition-colors">
                      {iconMap[service.iconName] || <Cpu className="w-6 h-6 text-[#0a66a0]" />}
                    </div>
                    {maxDepth && (
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-[#2f7c4c]/15 text-[#2f7c4c] dark:text-[#3bd879] border border-[#2f7c4c]/30">
                        {maxDepth}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#0a66a0] dark:group-hover:text-sky-300 transition-colors">
                    {title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {shortDesc}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {methods.slice(0, 3).map((m, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-100/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/5">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200/80 dark:border-white/10 mt-6 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold text-[#0a66a0] dark:text-sky-400 hover:opacity-80 inline-flex items-center gap-1.5 transition-colors shrink-0"
                  >
                    <span>{t('btnSpecsDialog')}</span>
                    <ArrowIcon className="w-3.5 h-3.5 shrink-0" />
                  </button>
                  <span className="text-[10px] text-slate-400 font-mono">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Dialog Modal for Technical Specs */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white/90 dark:bg-[#041c2c] backdrop-blur-xl border border-slate-200/90 dark:border-[#0a66a0] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 text-slate-900 dark:text-white relative shadow-2xl shadow-slate-900/20">
            
            <button
              onClick={() => setSelectedService(null)}
              className={`absolute top-4 p-2 rounded-lg bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-600 dark:text-slate-300 ${isRtl ? 'left-4' : 'right-4'}`}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 border-b border-slate-200 dark:border-white/10 pb-4">
              <div className="p-3 rounded-xl bg-[#0a66a0]/15 dark:bg-[#0a66a0]/30 border border-[#0a66a0]">
                {iconMap[selectedService.iconName]}
              </div>
              <div>
                <span className="text-xs font-bold text-[#2f7c4c] dark:text-emerald-400 uppercase tracking-widest">{isRtl ? 'المواصفات الهندسية' : 'Engineering Specification'}</span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  {(isRtl && selectedService.titleAr) ? selectedService.titleAr : selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {(isRtl && selectedService.fullDescAr) ? selectedService.fullDescAr : selectedService.fullDesc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-3 bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10">
                <h4 className="text-xs font-bold text-[#0a66a0] dark:text-sky-400 uppercase tracking-wider">{isRtl ? 'القدرات والإمكانيات الهندسية' : 'Key Capabilities'}</h4>
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  {((isRtl && selectedService.keyCapabilitiesAr) ? selectedService.keyCapabilitiesAr : selectedService.keyCapabilities).map((cap, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2f7c4c] dark:text-[#3bd879] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10">
                <h4 className="text-xs font-bold text-[#2f7c4c] dark:text-emerald-400 uppercase tracking-wider">{isRtl ? 'المعدات وفرق العمل المشغلة' : 'Equipment & Spreads'}</h4>
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  {((isRtl && selectedService.equipmentListAr) ? selectedService.equipmentListAr : selectedService.equipmentList).map((eq, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0a66a0] dark:text-sky-400 shrink-0 mt-0.5" />
                      <span>{eq}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Case Study Highlight */}
            {selectedService.caseStudy && (
              <div className="bg-[#2f7c4c]/10 border border-[#2f7c4c]/30 rounded-xl p-4 space-y-2">
                <span className="text-[10px] font-bold text-[#2f7c4c] dark:text-[#3bd879] uppercase tracking-wider">{isRtl ? 'دراسة حالة المشروع الميدانية' : 'Project Case Study'}</span>
                <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                  {(isRtl && selectedService.caseStudy.titleAr) ? selectedService.caseStudy.titleAr : selectedService.caseStudy.title}
                </h5>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {(isRtl && selectedService.caseStudy.descriptionAr) ? selectedService.caseStudy.descriptionAr : selectedService.caseStudy.description}
                </p>
                <div className="text-xs font-bold text-[#2f7c4c] dark:text-emerald-300 pt-1">
                  {isRtl ? 'الأثر والنتيجة:' : 'Impact:'} {(isRtl && selectedService.caseStudy.impactAr) ? selectedService.caseStudy.impactAr : selectedService.caseStudy.impact}
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex justify-between items-center">
              <Link
                href="/services"
                onClick={() => setSelectedService(null)}
                className="text-xs font-bold text-[#0a66a0] dark:text-sky-400 hover:underline flex items-center gap-1"
              >
                {isRtl ? 'الانتقال إلى دليل الخدمات الكامل ←' : 'Go to Full Services Hub Page →'}
              </Link>
              <button
                onClick={() => setSelectedService(null)}
                className="bg-[#0a66a0] hover:bg-[#085282] text-white px-5 py-2 rounded-lg font-bold text-xs"
              >
                {isRtl ? 'إغلاق النافذة' : 'Close Dialog'}
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
