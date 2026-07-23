'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Bot, Anchor, ShieldAlert, Cpu, Flame, CheckCircle2 } from 'lucide-react';

export function DeliveryMethods() {
  const { direction, t } = useLanguage();
  const isRtl = direction === 'rtl';

  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: 'rov',
      number: '01',
      title: isRtl ? 'أنظمة ROV للأعماق' : 'ROV Systems',
      subtitle: isRtl ? 'التدخل البعيد في المياه العميقة' : 'Deepwater Remote Intervention',
      icon: <Bot className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      depth: isRtl ? 'حتى عمق 3000 متر' : 'Up to 3,000m Depth',
      description: isRtl
        ? 'مركبات الأعماق الفائقة والمجهزة بسونار عالي الدقة، ومقابض هيدروليكية متعددة المحاور، وزلاجات قطع الأنابيب بدون غواصين.'
        : 'Work-Class and Inspection ROVs equipped with high-definition sonar, multi-axis hydraulic manipulators, subsea cutting skids, and diverless clamp installation frames.',
      points: isRtl
        ? [
            'التدخل في الأعماق حتى عمق 3000 متر تحت سطح البحر',
            'مسوحات التصوير السوناري والموجات الصوتية 3D',
            'عمليات إغلاق وهجر آبار النفط البحرية (P&A)',
            'دعم تمديد الأنابيب والسلاسل المرنة تحت الماء'
          ]
        : [
            '3,000m deepwater subsea intervention',
            '3D photogrammetry and acoustic multibeam surveys',
            'Wellhead Plug & Abandonment (P&A) operations',
            'Flexible flowline & umbilical lay support'
          ]
    },
    {
      id: 'diving',
      number: '02',
      title: isRtl ? 'الغوص التجاري' : 'Commercial Diving',
      subtitle: isRtl ? 'الغوص التشبعي والهواء والنيتروكس' : 'Saturation / Air / Nitrox / TUP',
      icon: <Anchor className="w-5 h-5 text-[#2f7c4c] dark:text-[#3bd879]" />,
      depth: isRtl ? 'غوص تشبعي حتى 300m' : 'Up to 300m Saturation',
      description: isRtl
        ? 'منظومات الغوص التشبعي المعتمدة من IMCA والمصممة للعمل حتى عمق 300m، مدعومة بفرق غوص السطح بالهواء والنيتروكس.'
        : 'IMCA-compliant saturation diving spreads operating down to 300m, supported by surface-supplied air and Nitrox diving teams for shallow water IRM.',
      points: isRtl
        ? [
            'نظام غوص تشبعي يتسع لـ 12 غواصاً (حتى عمق 300m)',
            'منظومات غوص السطح المجهزة بالهواء والنيتروكس',
            'أنظمة غرف نقل الغواصين تحت الضغط (TUP)',
            'التوافق التام مع معايير السلامة IMCA D014 & D024'
          ]
        : [
            '12-man hyperbaric saturation system (300m rating)',
            'Surface-supplied air and Nitrox dive control spreads',
            'TUP (Transfer Under Pressure) chamber systems',
            'IMCA D014 & D024 audit compliant spreads'
          ]
    },
    {
      id: 'rope',
      number: '03',
      title: isRtl ? 'الوصول بالحبال' : 'Rope Access',
      subtitle: isRtl ? 'اعتماد IRATA (رقم 7020/OT)' : 'IRATA Reg: 7020/OT CAT III/IV',
      icon: <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      depth: isRtl ? 'الوصول للهياكل والمفصلات' : 'Topside & Riser Access',
      description: isRtl
        ? 'شركة معتمدة بالكامل من IRATA لتقديم فحوصات CAT III & CAT IV للهياكل البحرية، ومسوحات الأجسام المتساقطة DROPS.'
        : 'Full IRATA member company delivering CAT III & CAT IV structure inspections, DROPS surveys, confined space entry, and FPSO hook-up commissioning.',
      points: isRtl
        ? [
            'شركة معتمدة بالكامل في منظمة IRATA العالمية',
            'فحص الصواعد، أبراج الشعلة، والقواعد المعدنية',
            'مسوحات مخاطر الأجسام المتساقطة (DROPS)',
            'إعداد تقارير التفتيش القائمة على المخاطر (RBI)'
          ]
        : [
            'IRATA Full Member Company (Operator & Trainer)',
            'Topside riser, flare tower, and jacket NDT inspections',
            'DROPS surveys and hazard mitigation',
            'Risk-Based Inspection (RBI) tracker reporting'
          ]
    },
    {
      id: 'remote',
      number: '04',
      title: isRtl ? 'الأنظمة عن بعد' : 'Remote Systems',
      subtitle: isRtl ? 'أدوات إصلاح الأنابيب بدون غواصين' : 'Diverless Pipeline Repair Tools',
      icon: <Cpu className="w-5 h-5 text-[#0a66a0] dark:text-sky-400" />,
      depth: isRtl ? 'حتى عمق 1300m MWD' : 'Up to 1,300m MWD',
      description: isRtl
        ? 'أدوات متخصصة لإصلاح الأنابيب بدون غواصين تم تطويرها بالشراكة مع Connector Subsea Solutions لتشغيلها بمركبات ROV.'
        : 'Specialized diverless pipeline tools developed with Connector Subsea Solutions, including ROV pipe lifting H-frames, coating removal tools, and pipe cutters.',
      points: isRtl
        ? [
            'إطارات "H" المحمولة بمركبات ROV لرفع ومحاذاة الأنابيب',
            'أدوات إزالة طلاء الأنابيب الميكانيكية بدقة عالية',
            'منشار قطع الأنابيب السريع والموجّه بمركبات الأعماق',
            'معدات تفعيل مشابك Morgrip الهيدروليكية بدون غواصين'
          ]
        : [
            'ROV-operated "H" frames for subsea pipe handling',
            'Mechanical pipe coating removal to precise OD finish',
            'Fast precision subsea pipe cutting saws',
            'Diverless Morgrip connector activation frames'
          ]
    },
    {
      id: 'welding',
      number: '05',
      title: isRtl ? 'اللحام تحت الضغط' : 'Hyperbaric Welding',
      subtitle: isRtl ? 'لحام الأنابيب الفولاذية و HDPE' : 'Subsea Steel & HDPE Joint Repair',
      icon: <Flame className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
      depth: isRtl ? 'غرف اللحام الجاف والحي' : 'Dry Habitat & Wet Welding',
      description: isRtl
        ? 'غرف اللحام الجاف المتخصصة تحت الماء لإصلاح أنابيب الهيدروكربون الفولاذية الحيوية ودمج أنابيب HDPE الغاطسة.'
        : 'Specialist dry hyperbaric welding habitats for critical hydrocarbon steel pipelines and subsea joint fusion for submerged HDPE pipelines.',
      points: isRtl
        ? [
            'إجراءات لحام جاف في غرف الضغط معتمدة من هيئات التصنيف',
            'عمليات اللحام الرطب المباشر ضمن نطاق غوص السطح',
            'إصلاح أنابيب HDPE الغاطسة باستخدام سدود الكوفركس',
            'أكثر من 25 عاماً من الخبرة التشغيلية في اللحام تحت الماء'
          ]
        : [
            'Class-approved hyperbaric dry habitat welding procedures',
            'Wet welding in surface air diving range',
            'In-situ repair of submerged HDPE pipelines with cofferdams',
            'Over 25 years of hyperbaric design & operational experience'
          ]
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-white dark:bg-[#051624] text-slate-900 dark:text-white border-b border-slate-200 dark:border-[#0a66a0]/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-extrabold text-[#2f7c4c] dark:text-emerald-400 uppercase tracking-widest bg-[#2f7c4c]/10 dark:bg-[#2f7c4c]/20 px-3 py-1 rounded border border-[#2f7c4c]/30">
            {t('pillarsTag')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {t('pillarsTitle')}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {t('pillarsSub')}
          </p>
        </div>

        {/* Tab Buttons Row */}
        <div className="flex gap-3 mb-10 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 md:grid-cols-5 scrollbar-thin">
          {pillars.map((p, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(idx)}
                className={`p-3 sm:p-4 rounded-xl text-left border transition-all flex flex-col justify-between space-y-2 sm:space-y-3 min-w-[140px] sm:min-w-0 shrink-0 sm:shrink ${
                  isActive
                    ? 'bg-[#0a66a0] border-sky-400 text-white shadow-lg shadow-[#0a66a0]/30 scale-[1.02]'
                    : 'bg-slate-50 dark:bg-[#041c2c] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-slate-700 dark:text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-sky-200' : 'text-[#0a66a0] dark:text-sky-400'}`}>{p.number}</span>
                  {p.icon}
                </div>
                <div>
                  <div className={`text-sm font-extrabold ${isActive ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{p.title}</div>
                  <div className={`text-[10px] ${isActive ? 'text-sky-100' : 'text-slate-500 dark:text-slate-400'}`}>{p.subtitle}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Tab Content Card */}
        <div className="bg-slate-50 dark:bg-[#041c2c] border border-slate-200 dark:border-[#0a66a0]/50 rounded-2xl p-5 sm:p-8 backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center shadow-lg dark:shadow-none">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-[#0a66a0] dark:text-sky-400 bg-[#0a66a0]/10 dark:bg-[#0a66a0]/20 px-2.5 py-1 rounded border border-[#0a66a0]/30">
                {isRtl ? `الركيزة ${pillars[activeTab].number}` : `Pillar ${pillars[activeTab].number}`}
              </span>
              <span className="text-xs font-bold text-[#2f7c4c] dark:text-[#3bd879] bg-[#2f7c4c]/10 dark:bg-[#2f7c4c]/20 px-2.5 py-1 rounded border border-[#2f7c4c]/30">
                {pillars[activeTab].depth}
              </span>
            </div>

            <h3 className="text-2xl font-black text-slate-900 dark:text-white">
              {pillars[activeTab].title} — <span className="text-[#0a66a0] dark:text-sky-300">{pillars[activeTab].subtitle}</span>
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {pillars[activeTab].description}
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pillars[activeTab].points.map((pt, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#2f7c4c] dark:text-[#3bd879] shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-100 dark:bg-gradient-to-br dark:from-[#051826] dark:to-[#0a66a0]/30 p-6 rounded-xl border border-slate-200 dark:border-sky-500/30 space-y-4 shadow-md">
            <h4 className="text-xs font-bold text-[#0a66a0] dark:text-sky-300 uppercase tracking-wider">{isRtl ? 'المقاييس التشغيلية للركيزة' : 'Pillar Operational Metrics'}</h4>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center border-b border-slate-200 dark:border-white/10 pb-2.5">
                <span className="text-slate-700 dark:text-slate-200 font-bold">{isRtl ? 'معايير IMCA / IRATA' : 'IMCA / IRATA Standard'}</span>
                <span className="font-extrabold text-slate-900 dark:text-white bg-slate-200/80 dark:bg-white/10 px-2 py-0.5 rounded text-[11px]">{isRtl ? 'مفحوصة ومُعتمدة' : 'Audited & Certified'}</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-200 dark:border-white/10 pb-2.5">
                <span className="text-slate-700 dark:text-slate-200 font-bold">{isRtl ? 'حالة الجاهزية للتعبئة' : 'Deployment Status'}</span>
                <span className="font-extrabold text-[#2f7c4c] dark:text-emerald-400 bg-[#2f7c4c]/10 dark:bg-[#2f7c4c]/20 px-2 py-0.5 rounded border border-[#2f7c4c]/30 text-[11px]">{isRtl ? 'تعبئة سريعة 24/7' : '24/7 Rapid Mobilization'}</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-200 dark:border-white/10 pb-2.5">
                <span className="text-slate-700 dark:text-slate-200 font-bold">{isRtl ? 'التغطية الجغرافية' : 'Geographic Coverage'}</span>
                <span className="font-extrabold text-slate-900 dark:text-white bg-slate-200/80 dark:bg-white/10 px-2 py-0.5 rounded text-[11px]">{isRtl ? 'حقول طاقة المملكة والخليج' : 'KSA & GCC Offshore Blocks'}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
