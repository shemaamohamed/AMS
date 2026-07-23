'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { timelineData } from '@/data/timelineData';
import { Flag, CheckCircle2, History, GraduationCap, Building } from 'lucide-react';

export function AboutClient() {
  const { direction, t } = useLanguage();
  const isRtl = direction === 'rtl';

  const [selectedMilestone, setSelectedMilestone] = useState(timelineData[0]);

  const milestoneTitle = (isRtl && selectedMilestone.titleAr) ? selectedMilestone.titleAr : selectedMilestone.title;
  const milestoneDesc = (isRtl && selectedMilestone.descriptionAr) ? selectedMilestone.descriptionAr : selectedMilestone.description;
  const milestoneBadge = (isRtl && selectedMilestone.badgeAr) ? selectedMilestone.badgeAr : selectedMilestone.badge;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#041c2c] text-slate-900 dark:text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero */}
        <div className="bg-gradient-to-r from-slate-100 via-sky-50 to-slate-100 dark:from-[#051826] dark:via-[#0a66a0]/20 dark:to-[#051826] border border-slate-200 dark:border-[#0a66a0]/40 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 text-center space-y-3 sm:space-y-4 shadow-xl dark:shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a66a0]/10 dark:bg-[#0a66a0]/20 text-[#0a66a0] dark:text-sky-300 border border-[#0a66a0]/30 text-xs font-bold uppercase tracking-wider">
            <Flag className="w-3.5 h-3.5 text-[#2f7c4c] dark:text-emerald-400" />
            {isRtl ? 'التراث السيادي ورؤية 2030' : 'Sovereign Heritage & Vision 2030'}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
            {isRtl ? 'تحالف Alpha OMQ × OSC Marine Group' : 'Alpha OMQ × OSC Marine Group Alliance'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {isRtl
              ? 'تجميع الهيئة الوطنية الرائدة للغوص التجاري في المملكة العربية السعودية مع أكثر من ٦٠ عاماً من التاريخ العالمي في الهندسة البحرية (تأسست ١٩٦٢). بناء الاستقلالية البحرية السيادية اتساقاً مع رؤية السعودية ٢٠٣٠.'
              : 'Uniting Saudi Arabia’s premier national commercial diving authority with over 60 years of global subsea engineering legacy (est. 1962). Building sovereign maritime independence in alignment with Saudi Vision 2030.'}
          </p>
        </div>

        {/* Strategic JV Narrative Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white dark:bg-[#051826] border border-slate-200 dark:border-[#0a66a0]/40 rounded-2xl p-5 sm:p-8 backdrop-blur-md space-y-4 sm:space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
              <div>
                <span className="text-xs font-bold text-[#2f7c4c] dark:text-emerald-400 uppercase tracking-widest">{t('alphaOmqPartner')}</span>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">{isRtl ? 'قيادة Alpha OMQ' : 'Alpha OMQ Leadership'}</h2>
              </div>
              <Building className="w-8 h-8 text-[#2f7c4c] dark:text-emerald-400" />
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {t('alphaOmqDesc')}
            </p>

            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-200">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2f7c4c] dark:text-[#3bd879] shrink-0 mt-0.5" />
                <span>{isRtl ? 'التزام تام بنسبة ١٠٠٪ مع برنامج تعزيز القيمة المضافة الإجمالية (إكتفاء IKTVA)' : '100% committed to Saudi Arabia’s In-Kingdom Total Value Add (IKTVA) program'}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2f7c4c] dark:text-[#3bd879] shrink-0 mt-0.5" />
                <span>{isRtl ? 'تدريب وتطوير الكوادر السعودية في مجالات الغوص التجاري والهندسة البحرية' : 'Local commercial diver training and engineering workforce development'}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2f7c4c] dark:text-[#3bd879] shrink-0 mt-0.5" />
                <span>{isRtl ? 'المقر الرئيسي في الخبر مع قواعد تشغيلية في الدمام، الجبيل، وجدة / البحر الأحمر' : 'Headquarters in Al Khobar with bases in Dammam, Jubail & Red Sea / Jeddah'}</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-[#051826] border border-slate-200 dark:border-[#2f7c4c]/40 rounded-2xl p-5 sm:p-8 backdrop-blur-md space-y-4 sm:space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
              <div>
                <span className="text-xs font-bold text-[#0a66a0] dark:text-sky-400 uppercase tracking-widest">{t('oscPartner')}</span>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">{isRtl ? 'مجموعة أوشين سابسي (تأسست ١٩٦٢)' : 'OSC Marine Group (Est. 1962)'}</h2>
              </div>
              <History className="w-8 h-8 text-[#0a66a0] dark:text-sky-400" />
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {t('oscDesc')}
            </p>

            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-200">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0a66a0] dark:text-sky-400 shrink-0 mt-0.5" />
                <span>{isRtl ? 'عضوية تنفيذية رئيسية في مجلس إدارة قسم الغوص التابع لـ IMCA' : 'Senior Executive representation on IMCA Diving Division Management Board'}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0a66a0] dark:text-sky-400 shrink-0 mt-0.5" />
                <span>{isRtl ? 'أكثر من ٦٠ عاماً من عمليات الغوص التشبعي بدون حوادث خاسرة للوقت' : 'Over 60 years of accident-free deepwater saturation diving operations'}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0a66a0] dark:text-sky-400 shrink-0 mt-0.5" />
                <span>{isRtl ? 'سجل نجاح دولي ممتد عبر غرب أفريقيا، موزمبيق، الإمارات، والمملكة' : 'International track record across West Africa, Mozambique, UAE & KSA'}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Saudi Vision 2030 Alignment Banner */}
        <div className="bg-gradient-to-r from-[#2f7c4c]/10 via-slate-100 to-[#0a66a0]/10 dark:from-[#2f7c4c]/20 dark:via-[#051826] dark:to-[#0a66a0]/20 border border-[#2f7c4c]/30 rounded-2xl p-5 sm:p-8 backdrop-blur-md space-y-4 sm:space-y-6 shadow-md">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-[#2f7c4c] dark:text-emerald-400" />
            <div>
              <span className="text-xs font-bold text-[#2f7c4c] dark:text-emerald-400 uppercase tracking-widest">{isRtl ? 'بناء القدرات الوطنية' : 'National Capability Building'}</span>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">{isRtl ? 'التوافق مع رؤية السعودية 2030 وتوطين الوظائف' : 'Saudi Vision 2030 Alignment & Saudization'}</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 pt-2">
            <div className="bg-white dark:bg-[#041c2c] p-5 rounded-xl border border-slate-200 dark:border-white/10 space-y-2 shadow-sm">
              <div className="text-sm font-bold text-slate-900 dark:text-white">{isRtl ? 'الاستقلالية البحرية السيادية' : 'Sovereign Maritime Autonomy'}</div>
              <p className="text-xs text-slate-600 dark:text-slate-300">{isRtl ? 'تقليل الاعتماد على المقاولين الأجانب وتأسيس أنظمة غوص تشبعي ومعدات ROV محلية داخل المملكة.' : 'Reducing reliance on foreign subsea contractors by establishing complete localized engineering spreads and saturation diving assets within KSA.'}</p>
            </div>

            <div className="bg-white dark:bg-[#041c2c] p-5 rounded-xl border border-slate-200 dark:border-white/10 space-y-2 shadow-sm">
              <div className="text-sm font-bold text-slate-900 dark:text-white">{isRtl ? 'تطوير المواهب السعودية' : 'Saudi Talent Development'}</div>
              <p className="text-xs text-slate-600 dark:text-slate-300">{isRtl ? 'الاستثمار في برامج تدريب الغواصين التجاريين وفنيي ROV والمهندسين البحريين السعوديين.' : 'Investing in specialized commercial diving certification, ROV pilot technician training, and subsea engineering programs for Saudi nationals.'}</p>
            </div>

            <div className="bg-white dark:bg-[#041c2c] p-5 rounded-xl border border-slate-200 dark:border-white/10 space-y-2 shadow-sm">
              <div className="text-sm font-bold text-slate-900 dark:text-white">{isRtl ? 'التوسع في البحر الأحمر والخليج' : 'Red Sea & Gulf Expansion'}</div>
              <p className="text-xs text-slate-600 dark:text-slate-300">{isRtl ? 'دعم المشاريع العملاقة في البحر الأحمر (نيوم، المشروع، ميناء الملك عبد الله) والمنطقة الشرقية.' : 'Supporting landmark maritime mega-projects along the Red Sea coast (NEOM, Red Sea Project, King Abdullah Port) and Eastern Province oilfield hubs.'}</p>
            </div>
          </div>
        </div>

        {/* Interactive History Timeline (1962 - 2026) */}
        <div className="bg-white dark:bg-[#051826] border border-slate-200 dark:border-[#0a66a0]/40 rounded-2xl p-5 sm:p-8 backdrop-blur-md space-y-6 sm:space-y-8 shadow-xl dark:shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
            <div>
              <span className="text-xs font-bold text-[#0a66a0] dark:text-sky-400 uppercase tracking-widest">{isRtl ? 'تاريخ الشركة التفاعلي' : 'Interactive Corporate Heritage'}</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white">{isRtl ? 'جدول المحطات التاريخية (1962 — الحاضر)' : 'History Timeline (1962 — Present)'}</h2>
            </div>
            <span className="text-xs font-bold text-[#0a66a0] dark:text-sky-300 bg-[#0a66a0]/10 dark:bg-[#0a66a0]/20 px-3 py-1 rounded border border-[#0a66a0]/30">
              60+ Years Evolution
            </span>
          </div>

          {/* Timeline Buttons Horizontal Slider */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 -mx-2 px-2 scrollbar-thin">
            {timelineData.map((m) => {
              const isSelected = selectedMilestone.year === m.year;
              return (
                <button
                  key={m.year}
                  onClick={() => setSelectedMilestone(m)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all shrink-0 border ${
                    isSelected
                      ? 'bg-[#0a66a0] border-sky-400 text-white shadow-lg shadow-[#0a66a0]/30'
                      : 'bg-slate-100 dark:bg-[#041c2c] border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {m.year}
                </button>
              );
            })}
          </div>

          {/* Selected Milestone Detail Box */}
          <div className="bg-slate-50 dark:bg-[#041c2c] border border-slate-200 dark:border-[#0a66a0]/50 rounded-xl p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4 shadow-md">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-white/10 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0a66a0] to-[#2f7c4c] dark:from-sky-400 dark:to-emerald-400">
                  {selectedMilestone.year}
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-sky-300">
                  {selectedMilestone.entity}
                </span>
              </div>

              {milestoneBadge && (
                <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-[#2f7c4c]/15 text-[#2f7c4c] dark:text-[#3bd879] border border-[#2f7c4c]/30">
                  {milestoneBadge}
                </span>
              )}
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{milestoneTitle}</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{milestoneDesc}</p>
          </div>
        </div>

      </div>
    </main>
  );
}
