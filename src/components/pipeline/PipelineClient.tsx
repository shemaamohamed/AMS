'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Activity, ShieldAlert, Cpu, PhoneCall, ArrowRight, ArrowLeft, Layers, Database, Zap, Wrench } from 'lucide-react';

export function PipelineClient() {
  const { direction, t } = useLanguage();
  const isRtl = direction === 'rtl';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const eprsFeatures = isRtl
    ? [
        { title: 'إرسال الطوارئ 24/7', desc: 'فريق استجابة الطوارئ متاح 24 ساعة يومياً لاحتواء الأضرار المفاجئة في الأنابيب البحرية.' },
        { title: 'سدود الكوفركس القريبة من الشاطئ', desc: 'تطبيق سدود IO-Cofferdams المبتكرة لتنفيذ اللحام الجاف دون الحاجة لحوض أحواض الجفاف.' },
        { title: 'مشابك Morgrip المعتمدة من DNV', desc: 'مشابك وتوصيلات دائمة للأنابيب البحرية تتحمل الضغط العالي في نقل الهيدروكربونات.' },
        { title: 'قاعدة بيانات مراقبة الأنابيب 4D', desc: 'قاعدة بيانات ثلاثية الأبعاد لمسارات الأنابيب مزامنة مع الكشط الذكي والحماية الكاثودية.' },
      ]
    : [
        { title: '24/7 Incident Dispatch', desc: 'Emergency response team on call 24 hours a day for rapid subsea pipeline damage containment.' },
        { title: 'Near-Shore IO-Cofferdams', desc: 'Deployment of specialized IO-Cofferdams to execute dry hyperbaric welding on active lines without drydocking.' },
        { title: 'DNV-Approved Morgrip Connectors', desc: 'Permanent structural repair clamps and connectors rated for high-pressure hydrocarbon service.' },
        { title: '4D Condition Monitoring Database', desc: 'Centralized 3D pipeline route database with synchronized pigging, CP, and soil resistivity data.' },
      ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#041c2c] text-slate-900 dark:text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero */}
        <div className="bg-gradient-to-r from-slate-100 via-sky-50 to-slate-100 dark:from-[#051826] dark:via-[#0a66a0]/30 dark:to-[#051826] border border-slate-200 dark:border-[#0a66a0]/40 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 text-center space-y-3 sm:space-y-4 shadow-xl dark:shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a66a0]/10 dark:bg-[#0a66a0]/20 text-[#0a66a0] dark:text-sky-300 border border-[#0a66a0]/30 text-xs font-bold uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            {isRtl ? 'حلول سلامة الأنابيب الاستراتيجية' : 'Strategic Pipeline Solutions'}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
            {isRtl ? 'سلامة الأنابيب وإصلاح الطوارئ (EPRS) على مدار 24/7' : 'Pipeline Integrity & 24/7 Emergency Repair (EPRS)'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {isRtl
              ? 'تقديم أنظمة الفحص الذكي للكشط (PIPECARE)، والمشابك بدون غواصين (Connector Subsea Solutions)، وسدود الكوفركس الجافة، ونظام الاستجابة الطارئة للحوادث 24/7 عبر الخليج العربي.'
              : 'Delivering 4D condition monitoring, smart pigging (PIPECARE), diverless subsea clamps (Connector Subsea Solutions), near-shore IO-Cofferdams, and 24/7 emergency incident dispatch across the Arabian Gulf.'}
          </p>
        </div>

        {/* 24/7 EPRS System Spotlight */}
        <div className="bg-white dark:bg-[#051826] border border-[#2f7c4c]/40 rounded-2xl p-5 sm:p-8 backdrop-blur-md space-y-6 sm:space-y-8 shadow-xl dark:shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#2f7c4c]/10 dark:bg-[#2f7c4c]/20 text-[#2f7c4c] dark:text-[#3bd879] border border-[#2f7c4c]/30 text-xs font-bold uppercase">
                <ShieldAlert className="w-4 h-4 text-[#2f7c4c] dark:text-[#3bd879]" />
                {isRtl ? 'نظام إصلاح الأنابيب الطارئ' : 'Emergency Pipeline Repair System'}
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white">{isRtl ? 'بروتوكول دعم طوارئ الأنابيب 24/7 لدى AMS' : 'AMS 24/7 EPRS Support Protocol'}</h2>
            </div>

            <a
              href="tel:+966138002470"
              className="w-full sm:w-auto bg-[#2f7c4c] hover:bg-[#25643d] text-white px-6 py-3 rounded-xl font-extrabold text-xs transition-all shadow-lg flex items-center justify-center gap-2 border border-emerald-400/30 self-start md:self-auto"
            >
              <PhoneCall className="w-4 h-4 animate-bounce text-emerald-200" />
              <span>{isRtl ? 'خط طوارئ 24/7: 2470 800 13 966+' : '24/7 Emergency Call: +966 13 800 2470'}</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {eprsFeatures.map((feat, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-[#041c2c] p-5 rounded-xl border border-slate-200 dark:border-white/10 space-y-2">
                <div className="text-xs font-mono font-bold text-[#2f7c4c] dark:text-emerald-400">0{idx + 1} EPRS Pillar</div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{feat.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PIPECARE Partnership Section */}
        <div id="pipecare" className="bg-white dark:bg-[#051826] border border-slate-200 dark:border-[#0a66a0]/40 rounded-2xl p-5 sm:p-8 backdrop-blur-md space-y-6 sm:space-y-8 shadow-xl dark:shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
            <div>
              <span className="text-xs font-bold text-[#0a66a0] dark:text-sky-400 uppercase tracking-widest">{isRtl ? 'تحالف الكشط والفحص الذكي' : 'In-Line Inspection Alliance'}</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white">{isRtl ? 'فحص الأنابيب الذكي المباشر مع PIPECARE' : 'PIPECARE Smart Pigging & In-Line Inspection'}</h2>
            </div>
            <span className="text-xs font-bold text-[#0a66a0] dark:text-sky-300 bg-[#0a66a0]/10 dark:bg-[#0a66a0]/20 px-3 py-1 rounded border border-[#0a66a0]/30">
              MFL / UT / EMAT / Geometry
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {isRtl
              ? 'من خلال شراكتنا مع PIPECARE، تقدم AMS Marine مكاشط ذكية متطورة لاكتشاف انبعاجات الأنابيب، والتآكل الداخلي، ونقص سمك الجدار، والشقوق الهيكلية قبل وقوع أي أعطال طارئة.'
              : 'Through our partnership with PIPECARE (formerly LINSCAN), AMS Marine deploys advanced smart pigs to detect pipeline dents, internal corrosion, wall thickness reduction, and structural flaws before catastrophic failures occur.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-slate-50 dark:bg-[#041c2c] p-6 rounded-xl border border-slate-200 dark:border-white/10 space-y-3">
              <Zap className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">{isRtl ? 'تسرب التدفق المغناطيسي (MFL)' : 'Magnetic Flux Leakage (MFL)'}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">{isRtl ? 'مكاشط MFL عالية الدقة لتحديد تآكل المعدن الداخلي والخارجي والتشققات الدقيقة.' : 'High-resolution MFL and MFL Transverse Field (TFI) pigs identifying internal and external metal loss, micro-pitting, and weld anomalies.'}</p>
            </div>

            <div className="bg-slate-50 dark:bg-[#041c2c] p-6 rounded-xl border border-slate-200 dark:border-white/10 space-y-3">
              <Database className="w-6 h-6 text-[#0a66a0] dark:text-sky-400" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">{isRtl ? 'الموجات فوق الصوتية (UTWM & UTCD)' : 'Ultrasonic (UTWM & UTCD)'}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">{isRtl ? 'مكاشط الموجات الصوتية لقياس سمك جدار الأنابيب بدقة متناهية واكتشاف التشققات.' : 'Ultrasonic wall thickness measurement and crack detection pigs providing direct quantitative depth metrics for critical lines.'}</p>
            </div>

            <div className="bg-slate-50 dark:bg-[#041c2c] p-6 rounded-xl border border-slate-200 dark:border-white/10 space-y-3">
              <Layers className="w-6 h-6 text-[#2f7c4c] dark:text-emerald-400" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">{isRtl ? 'نظام إدارة البيانات 4D' : '4D Data Management System'}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">{isRtl ? 'قاعدة بيانات مركزية تربط خرائط المسارات ثلاثية الأبعاد وبيانات الحماية الكاثودية.' : 'Centralized database synchronizing 3D pipeline route maps, geographical joint coordinates, CP data, and historical inspection campaigns.'}</p>
            </div>
          </div>
        </div>

        {/* Connector Subsea Solutions (CSS) Section */}
        <div id="css" className="bg-white dark:bg-[#051826] border border-slate-200 dark:border-[#0a66a0]/40 rounded-2xl p-5 sm:p-8 backdrop-blur-md space-y-6 sm:space-y-8 shadow-xl dark:shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
            <div>
              <span className="text-xs font-bold text-[#2f7c4c] dark:text-emerald-400 uppercase tracking-widest">{isRtl ? 'تحالف المعدات والأدوات بدون غواصين' : 'Diverless Subsea Tooling Alliance'}</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white">{isRtl ? 'مجموعة أدوات الإصلاح من Connector Subsea Solutions (CSS)' : 'Connector Subsea Solutions (CSS) Repair Suite'}</h2>
            </div>
            <span className="text-xs font-bold text-[#2f7c4c] dark:text-emerald-300 bg-[#2f7c4c]/10 dark:bg-[#2f7c4c]/20 px-3 py-1 rounded border border-[#2f7c4c]/30">
              Norway Technology Track Record
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {isRtl
              ? 'ابتكار أدوات فريدة وموثوقة لإصلاح الأنابيب البحرية بدون غواصين مصممة للعمل في البيئات القاسية حتى عمق ١٣٠٠ متر.'
              : 'Engineering novel, reliable, and cost-effective diverless pipeline repair tools rated for extreme subsea environments up to 1,300m MWD.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-50 dark:bg-[#041c2c] p-5 rounded-xl border border-slate-200 dark:border-white/10 space-y-2">
              <Wrench className="w-5 h-5 text-[#0a66a0] dark:text-sky-400" />
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">{isRtl ? 'مشابك Morgrip (حتى 42 بوصة)' : 'Morgrip Connectors (up to 42")'}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">{isRtl ? 'مشابك دائمة معتمدة من DNV-GL لإصلاح الأنابيب بدون أعمال اللحام الساخن.' : 'Permanent DNV-GL approved structural connectors for hotwork-free hydrocarbon line repairs.'}</p>
            </div>

            <div className="bg-slate-50 dark:bg-[#041c2c] p-5 rounded-xl border border-slate-200 dark:border-white/10 space-y-2">
              <Cpu className="w-5 h-5 text-[#2f7c4c] dark:text-emerald-400" />
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">{isRtl ? 'إطارات رفع الأنابيب H-Frames' : 'ROV Handling H-Frames'}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">{isRtl ? 'إطارات محمولة بمركبات ROV لرفع ومحاذاة الأنابيب في الأعماق.' : 'Portable ROV-operated pipe lifting and alignment frames for deepwater spool replacement.'}</p>
            </div>

            <div className="bg-slate-50 dark:bg-[#041c2c] p-5 rounded-xl border border-slate-200 dark:border-white/10 space-y-2">
              <Layers className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">{isRtl ? 'أدوات إزالة الطلاء والقطع' : 'Pipe Coating & Cutting Tools'}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">{isRtl ? 'معدات ميكانيكية لإزالة طلاء الأنابيب ومناشير قطع دقيقة لتجهيز المشابك.' : 'Mechanical coating removal tools and precision saws preparing pipes for clamp activation.'}</p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="text-center bg-white dark:bg-[#051826] p-5 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 space-y-3 sm:space-y-4 shadow-lg">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t('calloutBannerTitle')}</h3>
          <p className="text-xs text-slate-600 dark:text-slate-300">{t('calloutBannerSub')}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0a66a0] hover:bg-[#085282] text-white px-7 py-3 rounded-xl font-bold text-xs shadow-lg"
          >
            <span>{isRtl ? 'الاتصال بمهندسي سلامة الأنابيب' : 'Contact Pipeline Integrity Engineers'}</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </main>
  );
}
