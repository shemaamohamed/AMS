'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { accreditationsData } from '@/data/accreditationsData';
import { Award, FileCheck, Download, HeartPulse } from 'lucide-react';

export function AccreditationsClient() {
  const { direction, t } = useLanguage();
  const isRtl = direction === 'rtl';

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#041c2c] text-slate-900 dark:text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero Header */}
        <div className="bg-white/70 dark:bg-gradient-to-r dark:from-[#051826] dark:via-[#0a66a0]/20 dark:to-[#051826] backdrop-blur-xl border border-slate-200/80 dark:border-[#0a66a0]/40 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 text-center space-y-3 sm:space-y-4 shadow-xl shadow-slate-200/50 dark:shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a66a0]/10 dark:bg-[#0a66a0]/20 text-[#0a66a0] dark:text-sky-300 border border-[#0a66a0]/30 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-[#2f7c4c] dark:text-emerald-400" />
            {isRtl ? 'السلامة والامتثال وتأكيد الجودة' : 'Safety, Compliance & Quality Assurance'}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
            {isRtl ? 'معايير السلامة واعتمادات هيئات التصنيف البحرية' : 'Safety Standards & Class Approvals'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {isRtl
              ? 'تلتزم AMS Marine بعضوية منظمة IMCA الدولية الكاملة، وشهادات IRATA للوصول بالحبال، واعتمادات ISO 9001/14001/45001، وموافقات هيئات التصنيف البحرية العالمية.'
              : 'AMS Marine maintains full IMCA contractor membership, IRATA certification, ISO 9001/14001/45001 accreditations, and Marine Class approvals across all major global classification societies.'}
          </p>
        </div>

        {/* Zero Harm HSE Policy Banner */}
        <div className="bg-white/80 dark:bg-[#051826] border border-[#2f7c4c]/40 rounded-2xl p-5 sm:p-8 backdrop-blur-xl space-y-4 sm:space-y-6 shadow-xl shadow-slate-200/40 dark:shadow-2xl">
          <div className="flex items-center gap-3 border-b border-slate-200/80 dark:border-white/10 pb-4">
            <HeartPulse className="w-8 h-8 text-[#2f7c4c] dark:text-[#3bd879]" />
            <div>
              <span className="text-xs font-bold text-[#2f7c4c] dark:text-[#3bd879] uppercase tracking-widest">{isRtl ? 'ثقافة الصحة والسلامة والبيئة' : 'HSE Culture'}</span>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">{isRtl ? 'سياسة الانعدام التام للحوادث (Zero Harm)' : 'Zero Harm & Target Zero Commitment'}</h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {isRtl
              ? 'تم تصميم نظام إدارة الصحة والسلامة والبيئة لمنع جميع حوادث الوقت الخاسر والتسريبات البيئية. بناءً على إرشادات السلامة IMCA D014 و D024، تخضع كل عملية بحرية لتقييم المخاطر والمراجعات الدورية.'
              : 'Our Health, Safety & Environmental (HSE) management system is designed to prevent all lost-time incidents, environmental discharges, and equipment failures. Built upon strict IMCA D014 and D024 diving safety guidelines, every subsea operation undergoes rigorous Risk Assessment, Tool Box Talks, and Management of Change (MOC) reviews.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="bg-white/70 dark:bg-[#041c2c] backdrop-blur-md p-5 rounded-xl border border-slate-200/80 dark:border-white/10 space-y-1">
              <div className="text-2xl font-black text-[#2f7c4c] dark:text-emerald-400">Zero LTI</div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">{isRtl ? 'سجل صفر حوادث خاسرة للوقت' : 'Lost Time Injury Record'}</div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">{isRtl ? 'فلسفة الهدف صفر عبر جميع فرق الغوص ومركبات ROV.' : 'Target zero philosophy across all diving and ROV spreads.'}</p>
            </div>

            <div className="bg-white/70 dark:bg-[#041c2c] backdrop-blur-md p-5 rounded-xl border border-slate-200/80 dark:border-white/10 space-y-1">
              <div className="text-2xl font-black text-[#0a66a0] dark:text-sky-400">IMCA Audited</div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">{isRtl ? 'عضوية مدققة بالكامل' : 'Full Member Compliance'}</div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">{isRtl ? 'مفحوصة وفقاً لقواعد السلامة IMCA D014 & D024.' : 'Audited to IMCA D014 & D024 diving spread safety codes.'}</p>
            </div>

            <div className="bg-white/70 dark:bg-[#041c2c] backdrop-blur-md p-5 rounded-xl border border-slate-200/80 dark:border-white/10 space-y-1">
              <div className="text-2xl font-black text-amber-600 dark:text-amber-400">IRATA Reg 7020</div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">{isRtl ? 'مشغل معتمد للوصول بالحبال' : 'Rope Access Operator'}</div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">{isRtl ? 'معتمدة لفحوصات الهياكل البحرية CAT III & IV.' : 'Certified for CAT III & IV topside structure inspections.'}</p>
            </div>
          </div>
        </div>

        {/* Accreditations Grid & Details */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {isRtl ? 'الشهادات الرسمية وشارات اعتمادات الفئات' : 'Official Certifications & Class Approval Badges'}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {isRtl ? 'اضغط على أي بطاقة شهادة أدناه لمعاينة النطاق أو طلب وثائق الاعتماد.' : 'Click any certification card below to inspect scope details or request official certificate documentation.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {accreditationsData.map((item) => {
              const accTitle = (isRtl && item.titleAr) ? item.titleAr : item.title;
              const accIssuer = (isRtl && item.issuerAr) ? item.issuerAr : item.issuer;
              const accScope = (isRtl && item.scopeAr) ? item.scopeAr : item.scope;

              return (
                <div
                  key={item.id}
                  className="bg-white/75 dark:bg-[#051826] backdrop-blur-md border border-slate-200/80 dark:border-white/10 hover:border-[#0a66a0] rounded-2xl p-6 transition-all flex flex-col justify-between space-y-4 shadow-md shadow-slate-200/30 dark:shadow-none group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-[#0a66a0]/10 dark:bg-[#0a66a0]/20 text-[#0a66a0] dark:text-sky-300 border border-[#0a66a0]/30">
                        {item.category}
                      </span>
                      <FileCheck className="w-5 h-5 text-[#2f7c4c] dark:text-emerald-400" />
                    </div>

                    {item.imageSrc && (
                      <div className="relative w-full h-20 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 p-2 flex items-center justify-center">
                        <Image
                          src={item.imageSrc}
                          alt={item.title}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                    )}

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#0a66a0] dark:group-hover:text-sky-300 transition-colors">
                      {accTitle}
                    </h3>

                    <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                      {isRtl ? 'جهة الإصدار:' : 'Issuing Authority:'} <span className="text-slate-800 dark:text-slate-200">{accIssuer}</span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {accScope}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                    <a
                      href="/assets/Arabian Marine Services Profile.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0a66a0] dark:text-sky-400 hover:underline transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{isRtl ? 'تحميل ملف الشهادات (PDF)' : 'Download Certificate Record (PDF)'}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Marine Class Approvals Detailed List */}
        <div className="bg-white dark:bg-[#051826] border border-slate-200 dark:border-[#0a66a0]/40 rounded-2xl p-5 sm:p-8 backdrop-blur-md space-y-4 sm:space-y-6 shadow-md">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 pb-4">
            {isRtl ? 'هيئات التصنيف البحرية المعتمدة لمعاينات UWILD وصيانة السفن' : 'Recognized Classification Societies for In-Water UWILD & Hull IRM'}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {isRtl
              ? 'تمتلك AMS Marine شهادات اعتراف من جميع هيئات التصنيف البحرية الدولية لإجراء الفحوصات تحت الماء بدلاً من الأحواض الجافة (UWILD)، وفحوصات NDT للهياكل.'
              : 'AMS Marine holds official class approval certificates from all major international classification societies to conduct certified underwater in-lieu of drydocking (UWILD) surveys, NDT hull flaw detection, thruster recoveries, and cofferdam repairs:'}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 text-center">
            {['DNV GL', 'American Bureau of Shipping (ABS)', 'Bureau Veritas (BV)', 'Lloyd’s Register (LR)', 'RINA', 'ClassNK', 'China Classification Society (CCS)'].map((cls, i) => (
              <div key={i} className="bg-slate-50 dark:bg-[#041c2c] p-4 rounded-xl border border-slate-200 dark:border-white/10 text-xs font-bold text-[#0a66a0] dark:text-sky-300 flex items-center justify-center">
                {cls}
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
