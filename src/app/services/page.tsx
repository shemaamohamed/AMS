'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { servicesData } from '@/data/servicesData';
import { ServiceCategory } from '@/types';
import { ShieldCheck, Building2, Bot, Anchor, Activity, Waves, CheckCircle2, Download, PhoneCall, ArrowRight, ArrowLeft, Layers, FileText } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#0a66a0] dark:text-sky-400" />,
  Building2: <Building2 className="w-5 h-5 text-[#2f7c4c] dark:text-emerald-400" />,
  Bot: <Bot className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
  Anchor: <Anchor className="w-5 h-5 text-[#2f7c4c] dark:text-[#3bd879]" />,
  Activity: <Activity className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
  Waves: <Waves className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
};

export default function ServicesPage() {
  const { direction, t } = useLanguage();
  const isRtl = direction === 'rtl';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [activeService, setActiveService] = useState<ServiceCategory>(servicesData[0]);

  const activeTitle = (isRtl && activeService.titleAr) ? activeService.titleAr : activeService.title;
  const activeFullDesc = (isRtl && activeService.fullDescAr) ? activeService.fullDescAr : activeService.fullDesc;
  const activeMaxDepth = (isRtl && activeService.maxDepthAr) ? activeService.maxDepthAr : activeService.maxDepth;
  const activeDeliveryMethods = (isRtl && activeService.deliveryMethodsAr) ? activeService.deliveryMethodsAr : activeService.deliveryMethods;
  const activeCapabilities = (isRtl && activeService.keyCapabilitiesAr) ? activeService.keyCapabilitiesAr : activeService.keyCapabilities;
  const activeEquipment = (isRtl && activeService.equipmentListAr) ? activeService.equipmentListAr : activeService.equipmentList;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#041c2c] text-slate-900 dark:text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Hero Header */}
        <div className="bg-gradient-to-r from-slate-100 via-sky-50 to-slate-100 dark:from-[#051826] dark:via-[#0a66a0]/20 dark:to-[#051826] border border-slate-200 dark:border-[#0a66a0]/40 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 text-center space-y-3 sm:space-y-4 shadow-xl dark:shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a66a0]/10 dark:bg-[#0a66a0]/20 text-[#0a66a0] dark:text-sky-300 border border-[#0a66a0]/30 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-[#2f7c4c] dark:text-emerald-400" />
            {isRtl ? 'دليل الهندسة البحرية الشامل' : 'Comprehensive Engineering Catalog'}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
            {isRtl ? 'دليل الخدمات البحرية وإدارة سلامة الأصول' : 'Subsea Services & Asset Integrity Catalog'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {isRtl
              ? 'المواصفات الهندسية التفصيلية لفحص وصيانة وتصليح الأصول البحرية (IRM)، مركبات الأعماق ROV حتى عمق ٣٠٠٠ متر، الغوص التشبعي حتى عمق ٣٠٠ متر، سلامة الأنابيب، الهندسة المدنية البحرية، وعمليات الإنقاذ.'
              : 'Detailed technical specifications for offshore asset IRM, deepwater ROV systems (3,000m depth rating), commercial saturation diving (300m rating), pipeline integrity, marine civils, and salvage operations.'}
          </p>
        </div>

        {/* Catalog Main Layout: Sidebar & Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Selectable Sidebar Tabs */}
          <div className="lg:col-span-4 bg-white dark:bg-[#051826] border border-slate-200 dark:border-white/10 rounded-2xl p-3 sm:p-4 space-y-2 lg:sticky lg:top-28 shadow-md dark:shadow-none">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-3 py-2 hidden lg:block">
              {isRtl ? 'قائمة فئات الخدمات' : 'Service Category Switcher'}
            </h3>
            <div className="flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 -mx-1 px-1 lg:mx-0 lg:px-0 scrollbar-thin">
              {servicesData.map((s) => {
                const isActive = activeService.id === s.id;
                const sTitle = (isRtl && s.titleAr) ? s.titleAr : s.title;
                const sDepth = (isRtl && s.maxDepthAr) ? s.maxDepthAr : s.maxDepth;

                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveService(s)}
                    className={`w-auto lg:w-full text-left p-2.5 sm:p-3.5 rounded-xl border transition-all flex items-center justify-between group shrink-0 lg:shrink min-w-[180px] lg:min-w-0 ${
                      isActive
                        ? 'bg-[#0a66a0] border-sky-400 text-white font-bold shadow-lg shadow-[#0a66a0]/30'
                        : 'bg-slate-50 dark:bg-[#041c2c] border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isActive ? 'bg-white/10' : 'bg-slate-200/60 dark:bg-white/5'}`}>
                        {iconMap[s.iconName]}
                      </div>
                      <div>
                        <div className="text-xs font-bold">{sTitle}</div>
                        <div className={`text-[10px] ${isActive ? 'text-sky-100' : 'text-slate-500 dark:text-slate-400'}`}>{sDepth}</div>
                      </div>
                    </div>
                    <ArrowIcon className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-1 text-white' : 'text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: In-Depth Technical Specification Sheet */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8 bg-white dark:bg-[#051826] border border-slate-200 dark:border-[#0a66a0]/40 rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-md shadow-xl dark:shadow-2xl">
            
            {/* Category Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-[#0a66a0]/10 dark:bg-[#0a66a0]/30 text-[#0a66a0] dark:text-sky-300 border border-[#0a66a0]/30 dark:border-[#0a66a0] text-[10px] font-bold uppercase tracking-wider">
                    {isRtl ? 'المواصفات الهندسية' : 'Engineering Specs'}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-[#2f7c4c]/10 dark:bg-[#2f7c4c]/20 text-[#2f7c4c] dark:text-[#3bd879] border border-[#2f7c4c]/30 text-[10px] font-bold">
                    {isRtl ? 'تقييم العمق:' : 'Depth Rating:'} {activeMaxDepth}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white">{activeTitle}</h2>
              </div>

              <a
                href="/assets/Arabian Marine Services Profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-800 dark:text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all border border-slate-200 dark:border-white/10 flex items-center gap-2 shrink-0 self-start sm:self-auto"
              >
                <Download className="w-4 h-4 text-[#0a66a0] dark:text-sky-400" />
                <span>{isRtl ? 'نشرة فنية (PDF)' : 'Datasheet (PDF)'}</span>
              </a>
            </div>

            {/* Comprehensive Description */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-[#0a66a0] dark:text-sky-400 uppercase tracking-wider">{isRtl ? 'نطاق العمليات والنظرة العامة' : 'Overview & Operational Scope'}</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeFullDesc}
              </p>
            </div>

            {/* Delivery Methods Grid */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">{isRtl ? 'آليات التسليم الرئيسية' : 'Primary Delivery Mechanisms'}</h3>
              <div className="flex flex-wrap gap-2">
                {activeDeliveryMethods.map((dm, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-[#041c2c] text-[#0a66a0] dark:text-sky-300 border border-slate-200 dark:border-white/10 text-xs font-semibold">
                    {dm}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Capabilities & Equipment List Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="bg-slate-50 dark:bg-[#041c2c] p-5 rounded-xl border border-slate-200 dark:border-white/10 space-y-3">
                <h4 className="text-xs font-bold text-[#2f7c4c] dark:text-[#3bd879] uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2f7c4c] dark:text-[#3bd879]" />
                  {isRtl ? 'القدرات الهندسية الرئيسية' : 'Key Subsea Capabilities'}
                </h4>
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  {activeCapabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2f7c4c] dark:bg-[#3bd879] mt-1.5 shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 dark:bg-[#041c2c] p-5 rounded-xl border border-slate-200 dark:border-white/10 space-y-3">
                <h4 className="text-xs font-bold text-[#0a66a0] dark:text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-[#0a66a0] dark:text-sky-400" />
                  {isRtl ? 'المعدات وفرق العمل المشغلة' : 'Deployed Equipment & Spreads'}
                </h4>
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  {activeEquipment.map((eq, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0a66a0] dark:bg-sky-400 mt-1.5 shrink-0" />
                      <span>{eq}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Case Study Card */}
            {activeService.caseStudy && (
              <div className="bg-gradient-to-r from-[#2f7c4c]/10 to-[#0a66a0]/10 border border-[#2f7c4c]/30 rounded-xl p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#2f7c4c] dark:text-[#3bd879] uppercase tracking-wider bg-[#2f7c4c]/15 px-2.5 py-1 rounded">
                    {isRtl ? 'دراسة حالة المشروع الميدانية' : 'Field Operational Case Study'}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">{isRtl ? 'حقول الخليج العربي' : 'Arabian Gulf Block'}</span>
                </div>
                <h4 className="text-base font-extrabold text-slate-900 dark:text-white">
                  {(isRtl && activeService.caseStudy.titleAr) ? activeService.caseStudy.titleAr : activeService.caseStudy.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {(isRtl && activeService.caseStudy.descriptionAr) ? activeService.caseStudy.descriptionAr : activeService.caseStudy.description}
                </p>
                <div className="pt-2 text-xs font-bold text-[#2f7c4c] dark:text-emerald-300 border-t border-slate-200 dark:border-white/10">
                  {isRtl ? 'الأثر والنتيجة:' : 'Impact & Result:'} {(isRtl && activeService.caseStudy.impactAr) ? activeService.caseStudy.impactAr : activeService.caseStudy.impact}
                </div>
              </div>
            )}

            {/* Service Inquiry Action */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {isRtl ? 'هل تحتاج إلى معلمات هندسية خاصة أو استئجار سفن بحرية؟' : 'Need customized engineering parameters or vessel charter details?'}
              </div>
              <Link
                href="/contact"
                className="bg-[#2f7c4c] hover:bg-[#25643d] text-white px-6 py-2.5 rounded-xl font-bold text-xs transition-all shadow-md flex items-center gap-2 shrink-0"
              >
                <PhoneCall className="w-4 h-4 text-emerald-200" />
                <span>{isRtl ? 'طلب تسعير خدمات الشركات' : 'Request B2B Service Quote'}</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
