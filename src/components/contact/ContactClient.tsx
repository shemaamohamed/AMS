'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { locationsData } from '@/data/locationsData';
import { PhoneCall, Mail, MapPin, ShieldAlert, Send, CheckCircle2, Clock, Navigation } from 'lucide-react';

export function ContactClient() {
  const { direction, t } = useLanguage();
  const isRtl = direction === 'rtl';

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    requestType: 'Emergency Incident',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#041c2c] text-slate-900 dark:text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero Header */}
        <div className="bg-gradient-to-r from-slate-100 via-sky-50 to-slate-100 dark:from-[#051826] dark:via-[#0a66a0]/30 dark:to-[#051826] border border-slate-200 dark:border-[#0a66a0]/40 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 text-center space-y-3 sm:space-y-4 shadow-xl dark:shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2f7c4c]/10 dark:bg-[#2f7c4c]/20 text-[#2f7c4c] dark:text-emerald-300 border border-[#2f7c4c]/30 text-xs font-bold uppercase tracking-wider">
            <PhoneCall className="w-3.5 h-3.5 animate-bounce text-[#2f7c4c] dark:text-emerald-300" />
            {isRtl ? 'مصفوفة الاتصال والاستجابة الفورية 24/7' : '24/7 Rapid Incident Callout & B2B Inquiry Matrix'}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
            {isRtl ? 'دعم الطوارئ البحرية ومصفوفة الاتصال' : 'Emergency Subsea Support & Contact Matrix'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {isRtl
              ? 'خطوط أولوية استجابة سريعة للمقر الرئيسي في الخبر، وطوارئ تسربات الأنابيب البحرية، وإنقاذ السفن، ومناقصات المشاريع.'
              : 'Direct priority dispatch lines for Khobar Headquarters, emergency subsea incident callouts, pipeline leak isolation, and EPIC project bidding.'}
          </p>
        </div>

        {/* 24/7 Emergency Dispatch Callout Box */}
        <div className="bg-gradient-to-r from-[#2f7c4c]/20 via-slate-100 to-[#0a66a0]/20 dark:from-[#2f7c4c]/30 dark:via-[#051826] dark:to-[#0a66a0]/30 border-2 border-[#2f7c4c] rounded-2xl p-5 sm:p-8 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-full bg-[#2f7c4c] text-white shrink-0 shadow-lg animate-pulse">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">{isRtl ? 'الخط الساخن لنوازل الحوادث البحرية' : 'High Priority Incident Hotline'}</span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">{isRtl ? 'خط استجابة الحوادث الطارئة 24/7' : '24/7 Subsea Incident Callout Line'}</h2>
              <p className="text-xs text-slate-600 dark:text-slate-300">{isRtl ? 'متاح على مدار ٢٤ ساعة يومياً، ٣٦٥ يوماً في السنة للتعبئة السريعة عبر حقول النفط والغاز بالخليج.' : 'Available 24 hours a day, 365 days a year for immediate mobilization across KSA & GCC oilfield blocks.'}</p>
            </div>
          </div>

          <a
            href="tel:+966138002470"
            className="w-full sm:w-auto bg-[#2f7c4c] hover:bg-[#25643d] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-black text-base transition-all shadow-xl flex items-center justify-center gap-3 border border-emerald-400/40 shrink-0"
          >
            <PhoneCall className="w-5 h-5 text-emerald-200" />
            <span>+966 13 800 2470</span>
          </a>
        </div>

        {/* Contact Form & Location Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: B2B Dispatch & Inquiry Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#051826] border border-slate-200 dark:border-[#0a66a0]/40 rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-md space-y-4 sm:space-y-6 shadow-xl dark:shadow-2xl">
            <div className="border-b border-slate-200 dark:border-white/10 pb-4">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">{isRtl ? 'نموذج إرسال الطلبات والاستفسارات' : 'Dispatch Inquiry Form'}</h2>
              <p className="text-xs text-slate-500 dark:text-slate-300">{isRtl ? 'اختر فئة الطلب للتوجيه المباشر إلى مكتب المهندسين في الخبر.' : 'Select inquiry type to route directly to our engineering team in Al Khobar.'}</p>
            </div>

            {submitted ? (
              <div className="bg-[#2f7c4c]/10 dark:bg-[#2f7c4c]/20 border border-[#2f7c4c] rounded-xl p-8 text-center space-y-4 animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-[#2f7c4c] dark:text-[#3bd879] mx-auto" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{isRtl ? 'تم إرسال الطلب بنجاح!' : 'Request Dispatched Successfully!'}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {isRtl ? (
                    <>شكراً لك <strong>{formData.name}</strong>. تلقى مدير الهندسة المناوب طلبك لفئة <strong>{formData.requestType}</strong> وسيتواصل معك فوراً.</>
                  ) : (
                    <>Thank you, <strong>{formData.name}</strong>. Our subsea engineering duty manager has received your <strong>{formData.requestType}</strong> inquiry and will contact you back immediately.</>
                  )}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#0a66a0] text-white px-6 py-2.5 rounded-lg text-xs font-bold"
                >
                  {isRtl ? 'تقديم طلب آخر' : 'Submit Another Request'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">{isRtl ? 'الاسم الكامل *' : 'Full Name *'}</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={isRtl ? 'مثال: م. خالد المنصور' : 'e.g. Eng. Khalid Al-Mansoor'}
                      className="w-full bg-slate-50 dark:bg-[#041c2c] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#0a66a0] dark:focus:border-sky-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">{isRtl ? 'الشركة / الجهة *' : 'Company / Organization *'}</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={isRtl ? 'مثال: أرامكو / مشغل بحري' : 'e.g. Aramco / Offshore Operator'}
                      className="w-full bg-slate-50 dark:bg-[#041c2c] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#0a66a0] dark:focus:border-sky-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">{isRtl ? 'البريد الإلكتروني للعمل *' : 'Work Email *'}</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="k.almansoor@company.com"
                      className="w-full bg-slate-50 dark:bg-[#041c2c] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#0a66a0] dark:focus:border-sky-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">{isRtl ? 'رقم الهاتف المباشر *' : 'Direct Phone Number *'}</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+966 5X XXX XXXX"
                      className="w-full bg-slate-50 dark:bg-[#041c2c] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#0a66a0] dark:focus:border-sky-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">{isRtl ? 'فئة الطلب *' : 'Request Category *'}</label>
                  <select
                    value={formData.requestType}
                    onChange={(e) => setFormData({ ...formData, requestType: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-[#041c2c] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#0a66a0] dark:focus:border-sky-400"
                  >
                    <option value="Emergency Incident">{isRtl ? '🚨 طوارئ 24/7 (تسرب أو تلف في الأنابيب)' : '🚨 24/7 Emergency Incident Callout (Pipeline Leak / Damage)'}</option>
                    <option value="Subsea IRM Project">{isRtl ? 'مشروع فحص وصيانة المنصات والأعماق (IRM)' : 'Subsea IRM & Platform Inspection'}</option>
                    <option value="Rig / Vessel Husbandry">{isRtl ? 'صيانة السفن والحفارات ومعاينات UWILD' : 'Rig & Vessel Husbandry / UWILD Survey'}</option>
                    <option value="EPIC Bidding">{isRtl ? 'مناقصة مشاريع وتأهيل شركاء' : 'EPIC Bidding / Commercial Tender Request'}</option>
                    <option value="General Inquiry">{isRtl ? 'استفسار عام' : 'General Corporate Inquiry'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">{isRtl ? 'تفاصيل المشروع / الرسالة *' : 'Project Details / Message *'}</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={isRtl ? 'اذكر تفاصيل الأصول البحرية، العمق المطلوب، الموقع، أو طبيعة الحادث الطارئ...' : 'Provide details regarding asset location, depth requirements, water block, or emergency incident nature...'}
                    className="w-full bg-slate-50 dark:bg-[#041c2c] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#0a66a0] dark:focus:border-sky-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0a66a0] hover:bg-[#085282] text-white py-3.5 rounded-xl font-bold text-xs transition-all shadow-lg flex items-center justify-center gap-2 border border-sky-400/30"
                >
                  <Send className="w-4 h-4" />
                  <span>{isRtl ? 'إرسال الطلب إلى المكتب الهندسي' : 'Dispatch Request to Engineering Desk'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Headquarters & Regional Matrix */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* HQ Card */}
            <div className="bg-white dark:bg-[#051826] border border-slate-200 dark:border-[#0a66a0]/40 rounded-2xl p-4 sm:p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3">
                <div>
                  <span className="text-[10px] font-bold text-[#2f7c4c] dark:text-emerald-400 uppercase tracking-widest">{t('footerHeadquarters')}</span>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white">{isRtl ? 'الخبر، المملكة العربية السعودية' : 'Al Khobar, Saudi Arabia'}</h3>
                </div>
                <Navigation className="w-6 h-6 text-[#0a66a0] dark:text-sky-400" />
              </div>

              <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#0a66a0] dark:text-sky-400 shrink-0 mt-0.5" />
                  <span>{isRtl ? 'طريق الملك فهد، برج المشاريع، الطابق ١٤، الخبر ٣١٩٥٢، المملكة العربية السعودية' : 'King Fahd Road, Enterprise Tower, Level 14, Al Khobar 31952, KSA'}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <PhoneCall className="w-4 h-4 text-[#2f7c4c] dark:text-[#3bd879] shrink-0" />
                  <span className="font-bold text-slate-900 dark:text-white">+966 13 800 2470</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#0a66a0] dark:text-sky-400 shrink-0" />
                  <span>hq@amsmarine.com.sa</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span>{isRtl ? 'ساعات المقر: الأحد — الخميس (08:00 — 17:00) | مكتب العمليات 24/7' : 'HQ Hours: Sun — Thu (08:00 — 17:00) | 24/7 Operations Desk'}</span>
                </div>
              </div>
            </div>

            {/* Regional Hubs Summary Cards */}
            <div className="bg-white dark:bg-[#051826] border border-slate-200 dark:border-white/10 rounded-2xl p-6 space-y-4 shadow-md">
              <h3 className="text-xs font-bold text-slate-500 dark:text-slate-300 uppercase tracking-wider border-b border-slate-200 dark:border-white/10 pb-2">
                {isRtl ? 'القواعد التشغيلية عبر المملكة والخليج' : 'Operational Bases Across KSA & GCC'}
              </h3>

              <div className="space-y-3">
                {locationsData.slice(1).map((loc) => (
                  <div key={loc.id} className="bg-slate-50 dark:bg-[#041c2c] p-3.5 rounded-xl border border-slate-200 dark:border-white/5 space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-slate-900 dark:text-white">{isRtl ? loc.cityAr : loc.city}</span>
                      <span className="text-[9px] px-2 py-0.5 rounded bg-slate-200 dark:bg-white/10 text-[#0a66a0] dark:text-sky-300 shrink-0">{isRtl ? loc.countryAr : loc.country}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <PhoneCall className="w-3 h-3 text-[#2f7c4c] dark:text-[#3bd879] shrink-0" />
                      <span dir="ltr" className="inline-block font-mono">{loc.phone}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
