'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { accreditationsData } from '@/data/accreditationsData';
import { Award, FileCheck, HeartPulse, ShieldCheck, CheckCircle2, Lock, Building2 } from 'lucide-react';

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
              ? 'تلتزم شركة أربيان مارين سيرفيسز إيه.إم.إس باعتماد أرامكو السعودية كمورد مسجّل (رقم تسجيل المورّد 10121703)، وعضوية منظمة IMCA الدولية الكاملة، وشهادات IRATA للوصول بالحبال، واعتمادات ISO 9001/14001/45001، وموافقات هيئات التصنيف البحرية العالمية.'
              : 'Arabian Marine Services AMS Company holds official Saudi Aramco Approved Vendor status (Supplier Registration No. 10121703), full IMCA contractor membership, IRATA certification, ISO 9001/14001/45001 accreditations, and Marine Class approvals across all major global classification societies.'}
          </p>
        </div>

        {/* Saudi Aramco Approved Vendor & CCC Compliance Spotlight Banner */}
        <div className="relative overflow-hidden bg-gradient-to-br from-white via-emerald-50/40 to-slate-50 dark:from-[#051f2f] dark:via-[#042435] dark:to-[#031521] border-2 border-emerald-500/50 dark:border-emerald-500/40 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl shadow-emerald-950/10 backdrop-blur-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0a66a0]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            {/* Header row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-6">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-white dark:bg-white/10 rounded-2xl p-2.5 border border-slate-200 dark:border-white/15 flex items-center justify-center shrink-0 shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/clients/aramco_logo.png"
                    alt="Saudi Aramco Logo"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-[#2f7c4c] dark:text-emerald-400 border border-emerald-500/30 text-[11px] font-black uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{isRtl ? 'اعتماد أرامكو السعودية' : 'Saudi Aramco Approval'}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                    {isRtl ? 'مورّد معتمد لدى أرامكو السعودية' : 'Saudi Aramco Approved Vendor'}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {isRtl
                      ? 'مؤهلة لتقديم خدمات الهندسة البحرية، الغوص التجاري، سلامة الأنابيب ومركبات ROV'
                      : 'Qualified for Offshore Energy Operations, Subsea Engineering & Marine Services'}
                  </p>
                </div>
              </div>

              {/* Vendor ID Chip */}
              <div className="self-start md:self-auto bg-white/90 dark:bg-white/10 border-2 border-emerald-500/40 rounded-2xl p-4 text-center min-w-[200px] shadow-sm">
                <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 block tracking-wider">
                  {isRtl ? 'رقم المورّد المعتمد (Vendor ID)' : 'Aramco Vendor ID'}
                </span>
                <span className="text-2xl sm:text-3xl font-mono font-black text-[#2f7c4c] dark:text-emerald-400 block tracking-wider">
                  10121703
                </span>
                <span className="text-[10px] text-slate-600 dark:text-slate-300 font-semibold block mt-0.5">
                  {isRtl ? 'ساري ومعتمد في نظام أرامكو' : 'Active & Verified In System'}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
              {isRtl
                ? 'شركة أربيان مارين سيرفيسز إيه.إم.إس مورّد مسجّل ومعتمد رسمياً لدى أرامكو السعودية برقم تسجيل المورّد (SAP Vendor No.) 10121703. معتمدة لتقديم خدمات الطاقة البحرية، الهندسة تحت الماء، الغوص التجاري، والخدمات البحرية في مرافق وأصول أرامكو السعودية البحرية.'
                : 'Arabian Marine Services AMS Company is an officially registered and approved vendor with Saudi Aramco under SAP Vendor No. 10121703. Qualified and approved for offshore energy operations, subsea engineering, commercial diving, and marine services across Saudi Aramco facilities and offshore assets.'}
            </p>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-2">
              <div className="bg-white/80 dark:bg-[#031926] p-4 rounded-xl border border-slate-200/80 dark:border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#2f7c4c] dark:text-emerald-400">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>{isRtl ? 'حالة المورّد' : 'Vendor Status'}</span>
                </div>
                <div className="text-sm font-black text-slate-900 dark:text-white">
                  {isRtl ? 'مورّد معتمد رسمياً' : 'Officially Approved'}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                  SAP Vendor No. 10121703
                </div>
              </div>

              <div className="bg-white/80 dark:bg-[#031926] p-4 rounded-xl border border-slate-200/80 dark:border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0a66a0] dark:text-sky-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{isRtl ? 'نوع التسجيل' : 'Registration Type'}</span>
                </div>
                <div className="text-sm font-black text-slate-900 dark:text-white">
                  {isRtl ? 'مورّد أرامكو مسجّل' : 'Aramco Registered Supplier'}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  {isRtl ? 'نظام SAP لتسجيل الموردين' : 'SAP Supplier Registration System'}
                </div>
              </div>

              <div className="bg-white/80 dark:bg-[#031926] p-4 rounded-xl border border-slate-200/80 dark:border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400">
                  <Building2 className="w-4 h-4 shrink-0" />
                  <span>{isRtl ? 'جهة الإصدار' : 'Issuing Authority'}</span>
                </div>
                <div className="text-sm font-black text-slate-900 dark:text-white">
                  Saudi Aramco
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  {isRtl ? 'أرامكو السعودية — تسجيل الموردين' : 'Supplier Registration Dept.'}
                </div>
              </div>

              <div className="bg-white/80 dark:bg-[#031926] p-4 rounded-xl border border-slate-200/80 dark:border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#2f7c4c] dark:text-emerald-400">
                  <Award className="w-4 h-4 shrink-0" />
                  <span>{isRtl ? 'نطاق الخدمات المعتمدة' : 'Approved Scope'}</span>
                </div>
                <div className="text-sm font-black text-slate-900 dark:text-white">
                  {isRtl ? 'طاقة وهندسة بحرية' : 'Offshore Energy & Marine'}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  {isRtl ? 'غوص تجاري — ROV — سلامة أنابيب' : 'Diving · ROV · Pipeline IRM'}
                </div>
              </div>
            </div>
          </div>
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
        <div id="certifications" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {isRtl ? 'الشهادات الرسمية وشارات اعتمادات الفئات' : 'Official Certifications & Class Approval Badges'}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {isRtl ? 'معاينة نطاق الاعتماد وتفاصيل الترخيص لكل هيئة معتمدة.' : 'Review certification scope, standard qualifications, and official licensing authorities.'}
            </p>
          </div>

          {/* Aramco Featured Card — full width */}
          {(() => {
            const aramcoItem = accreditationsData.find(i => i.id === 'aramco_vendor');
            if (!aramcoItem) return null;
            const accTitle = (isRtl && aramcoItem.titleAr) ? aramcoItem.titleAr : aramcoItem.title;
            const accIssuer = (isRtl && aramcoItem.issuerAr) ? aramcoItem.issuerAr : aramcoItem.issuer;
            const accScope = (isRtl && aramcoItem.scopeAr) ? aramcoItem.scopeAr : aramcoItem.scope;
            return (
              <div
                id={aramcoItem.id}
                className="relative overflow-hidden rounded-3xl border-2 border-emerald-500/60 dark:border-emerald-400/50 shadow-2xl shadow-emerald-500/10 dark:shadow-emerald-900/30 group"
                style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 40%, #ecfdf5 60%, #f0fdf4 100%)' }}
              >
                {/* Dark mode bg override */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#031f12] via-[#04291a] to-[#031521] opacity-0 dark:opacity-100 pointer-events-none" />

                {/* Animated glow border */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{ boxShadow: '0 0 0 2px rgba(52,211,153,0.3), 0 0 40px rgba(52,211,153,0.08) inset' }} />

                {/* Background decorative blobs */}
                <div className="absolute -top-16 -right-16 w-64 h-64 bg-emerald-400/10 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#0a66a0]/10 dark:bg-[#0a66a0]/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-emerald-300/5 dark:bg-emerald-400/5 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 p-6 sm:p-8 md:p-10">
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">

                    {/* Left: Logo + Badges */}
                    <div className="flex flex-col items-center gap-5 shrink-0">
                      {/* Logo showcase */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-emerald-400/20 dark:bg-emerald-400/15 rounded-2xl blur-xl scale-110" />
                        <div className="relative w-48 h-28 bg-white dark:bg-white/95 rounded-2xl border border-emerald-200/80 dark:border-emerald-400/30 flex items-center justify-center p-4 shadow-xl shadow-emerald-500/10">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={aramcoItem.imageSrc!}
                            alt="Saudi Aramco"
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      </div>

                      {/* Approved Vendor Badge */}
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 text-white text-xs font-black shadow-lg shadow-emerald-500/30">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>{isRtl ? 'مورّد معتمد' : 'Approved Supplier'}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#2f7c4c] dark:text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                          {isRtl ? 'رقم تسجيل المورّد: 10121703' : 'Supplier Reg No: 10121703'}
                        </div>
                      </div>
                    </div>

                    {/* Right: Details */}
                    <div className="flex-1 space-y-4">
                      {/* Header */}
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-black px-3 py-1 rounded-full bg-emerald-500/15 text-[#2f7c4c] dark:text-emerald-300 border border-emerald-500/30 uppercase tracking-widest">
                            {isRtl ? 'مورّد معتمد رسمياً' : 'Official Approved Vendor'}
                          </span>
                          <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-[#0a66a0]/10 text-[#0a66a0] dark:text-sky-300 border border-[#0a66a0]/30 uppercase tracking-widest">
                            {isRtl ? 'نظام SAP لتسجيل الموردين' : 'SAP Supplier Registration'}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
                          {accTitle}
                        </h3>
                      </div>

                      {/* Issuing authority */}
                      <div className="flex items-start gap-2 text-xs">
                        <span className="text-slate-400 dark:text-slate-500 font-semibold shrink-0 mt-0.5">{isRtl ? 'جهة الإصدار:' : 'Issuing Authority:'}</span>
                        <span className="text-slate-700 dark:text-slate-200 font-semibold">{accIssuer}</span>
                      </div>

                      {/* Scope */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-l-2 border-emerald-500/50 pl-3">
                        {accScope}
                      </p>

                      {/* Meta chips */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {[
                          isRtl ? 'طاقة بحرية' : 'Offshore Energy',
                          isRtl ? 'هندسة تحت الماء' : 'Subsea Engineering',
                          isRtl ? 'غوص تجاري' : 'Commercial Diving',
                          isRtl ? 'خدمات بحرية' : 'Marine Services',
                        ].map((chip) => (
                          <span key={chip} className="text-[10px] px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/8 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-white/10 font-semibold">
                            {chip}
                          </span>
                        ))}
                      </div>

                      {/* Ref number */}
                      {aramcoItem.referenceNo && (
                        <div className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                          {isRtl ? 'رقم المرجع:' : 'Ref No:'} {aramcoItem.referenceNo}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Remaining accreditation cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {accreditationsData.filter(i => i.id !== 'aramco_vendor').map((item) => {
              const accTitle = (isRtl && item.titleAr) ? item.titleAr : item.title;
              const accIssuer = (isRtl && item.issuerAr) ? item.issuerAr : item.issuer;
              const accScope = (isRtl && item.scopeAr) ? item.scopeAr : item.scope;

              return (
                <div
                  key={item.id}
                  id={item.id}
                  className="bg-white/75 dark:bg-[#051826] backdrop-blur-md border border-slate-200/80 dark:border-white/10 hover:border-[#0a66a0] rounded-2xl p-6 transition-all flex flex-col justify-between space-y-4 shadow-md shadow-slate-200/30 dark:shadow-none group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-[#0a66a0]/10 dark:bg-[#0a66a0]/20 text-[#0a66a0] dark:text-sky-300 border border-[#0a66a0]/30">
                        {item.category}
                      </span>
                      <FileCheck className="w-5 h-5 text-[#2f7c4c] dark:text-emerald-400" />
                    </div>

                    {item.imageSrc ? (
                      <div className="w-full h-20 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 p-2 flex items-center justify-center overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.imageSrc}
                          alt={item.title}
                          className="max-h-14 max-w-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-20 bg-[#0a66a0]/10 dark:bg-[#0a66a0]/20 rounded-xl border border-[#0a66a0]/30 flex items-center justify-center">
                        <span className="text-sm font-black text-[#0a66a0] dark:text-sky-300 tracking-widest">{item.category}</span>
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
              ? 'تمتلك شركة أربيان مارين سيرفيسز إيه.إم.إس شهادات اعتراف من جميع هيئات التصنيف البحرية الدولية لإجراء الفحوصات تحت الماء بدلاً من الأحواض الجافة (UWILD)، وفحوصات NDT للهياكل.'
              : 'Arabian Marine Services AMS Company holds official class approval certificates from all major international classification societies to conduct certified underwater in-lieu of drydocking (UWILD) surveys, NDT hull flaw detection, thruster recoveries, and cofferdam repairs:'}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              { name: 'DNV', logo: '/assets/accreditation/dnv_logo.webp' },
              { name: 'ABS', logo: '/assets/accreditation/abs_logo.png' },
              { name: 'Bureau Veritas (BV)', logo: '/assets/accreditation/bv_logo.png' },
              { name: "Lloyd's Register (LR)", logo: '/assets/accreditation/lr_logo.png' },
              { name: 'RINA', logo: '/assets/accreditation/rina_logo.png' },
              { name: 'ClassNK', logo: null },
              { name: 'CCS', logo: '/assets/accreditation/ccs_logo.png' },
            ].map((cls, i) => (
              <div key={i} className="bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-center h-16 px-3 overflow-hidden">
                {cls.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={cls.logo}
                    alt={cls.name}
                    className="max-h-10 max-w-full object-contain"
                  />
                ) : (
                  <span className="text-sm font-black text-[#0a66a0] dark:text-sky-300 tracking-widest">ClassNK</span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
