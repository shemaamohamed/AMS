'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/context/LanguageContext';
import { PhoneCall, Mail, MapPin, Shield, ChevronRight, ChevronLeft, Award, ExternalLink } from 'lucide-react';

export function Footer() {
  const { resolvedTheme } = useTheme();
  const { direction, t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';
  const logoSrc = isDark ? '/assets/logo/ams_logo_white.png' : '/assets/logo/ams_logo_dark.png';
  const isRtl = direction === 'rtl';

  const ChevronIcon = isRtl ? ChevronLeft : ChevronRight;

  return (
    <footer className="bg-slate-100 dark:bg-[#03131e] border-t border-slate-300 dark:border-[#0a66a0]/30 text-slate-700 dark:text-slate-300 text-sm transition-colors duration-300">
      {/* Top Footer Callout Banner */}
      <div className="bg-slate-200/80 dark:bg-[#041c2c] border-b border-slate-300 dark:border-white/5 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-[#2f7c4c]/20 border border-[#2f7c4c]/40 text-[#2f7c4c] dark:text-[#3bd879]">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-slate-900 dark:text-white text-lg font-extrabold">{t('footerTitle')}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">{t('footerSub')}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="tel:+966138002470"
              className="w-full sm:w-auto bg-[#2f7c4c] hover:bg-[#25643d] text-white px-6 py-3 rounded-lg font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 animate-bounce" />
              <span>{t('footerCall')}</span>
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-white/80 dark:bg-white/10 hover:bg-white text-slate-800 dark:text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all border border-slate-300 dark:border-white/20 text-center"
            >
              {t('footerSubmitReq')}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
        {/* Col 1: Brand Info */}
        <div className="lg:col-span-2 space-y-4">
          <div className="relative w-48 h-12">
            <Image
              src={logoSrc}
              alt="AMS Marine Logo"
              fill
              className="object-contain filter drop-shadow-[0_2px_8px_rgba(10,102,160,0.3)]"
            />
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pr-4">
            {isRtl ? (
              <>
                <strong>شركة الخدمات البحرية العربية (AMS Marine)</strong> هي مشروع مشترك سيادي بين <strong>الفاع و إم كيو (Alpha OMQ)</strong> و <strong>مجموعة أوشين سابسي مارين (OSC Marine Group)</strong>. تقدم خدمات الهندسة البحرية، مركبات الأعماق (3000م)، الغوص التشبعي (300م)، وسلامة الأنابيب عبر الخليج العربي.
              </>
            ) : (
              <>
                <strong>AMS Marine</strong> (Arabian Marine Services) is a sovereign Joint Venture between <strong>Alpha OMQ</strong> (Saudi Arabia subsea authority) and <strong>OSC Marine Group</strong> (est. 1962). Providing subsea engineering, deepwater ROV (3,000m), saturation diving (300m), and pipeline integrity across the Arabian Gulf.
              </>
            )}
          </p>
          <div className="pt-2 flex items-center gap-2 text-xs text-[#2f7c4c] dark:text-emerald-400 font-semibold">
            <Award className="w-4 h-4 text-[#2f7c4c] dark:text-emerald-400" />
            <span>{t('footerVisionNotice')}</span>
          </div>
        </div>

        {/* Col 2: Services Quick Links */}
        <div>
          <h5 className="text-slate-900 dark:text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-slate-300 dark:border-[#0a66a0]/40 pb-2">
            {t('navServices')}
          </h5>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/services#irm" className="hover:text-[#0a66a0] dark:hover:text-sky-400 transition-colors flex items-center gap-1.5">
                <ChevronIcon className="w-3 h-3 text-[#0a66a0]" />
                <span>{isRtl ? 'الفحص والتصليح والصيانة (IRM)' : 'Inspection, Repair & Maintenance (IRM)'}</span>
              </Link>
            </li>
            <li>
              <Link href="/services#construction" className="hover:text-[#0a66a0] dark:hover:text-sky-400 transition-colors flex items-center gap-1.5">
                <ChevronIcon className="w-3 h-3 text-[#0a66a0]" />
                <span>{isRtl ? 'الانشاءات والربط البحري' : 'Offshore Subsea Construction & Tie-ins'}</span>
              </Link>
            </li>
            <li>
              <Link href="/services#rov" className="hover:text-[#0a66a0] dark:hover:text-sky-400 transition-colors flex items-center gap-1.5">
                <ChevronIcon className="w-3 h-3 text-[#0a66a0]" />
                <span>{isRtl ? 'أنظمة ROV للأعماق (3000m)' : 'Deepwater ROV Systems (3,000m)'}</span>
              </Link>
            </li>
            <li>
              <Link href="/services#diving" className="hover:text-[#0a66a0] dark:hover:text-sky-400 transition-colors flex items-center gap-1.5">
                <ChevronIcon className="w-3 h-3 text-[#0a66a0]" />
                <span>{isRtl ? 'الغوص التشبعي والتجاري (300m)' : 'Saturation & Commercial Diving (300m)'}</span>
              </Link>
            </li>
            <li>
              <Link href="/pipeline-integrity" className="hover:text-[#0a66a0] dark:hover:text-sky-400 transition-colors flex items-center gap-1.5">
                <ChevronIcon className="w-3 h-3 text-[#0a66a0]" />
                <span>{isRtl ? 'سلامة الأنابيب و 24/7 EPRS' : 'Pipeline Integrity & 24/7 EPRS'}</span>
              </Link>
            </li>
            <li>
              <Link href="/services#civils" className="hover:text-[#0a66a0] dark:hover:text-sky-400 transition-colors flex items-center gap-1.5">
                <ChevronIcon className="w-3 h-3 text-[#0a66a0]" />
                <span>{isRtl ? 'الهندسة المدنية البحرية وحماية البيئة' : 'Marine Civils & Croc-Dock Plastics'}</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Technology Partnerships & Compliance */}
        <div>
          <h5 className="text-slate-900 dark:text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-slate-300 dark:border-[#0a66a0]/40 pb-2">
            {isRtl ? 'الشركاء والمعايير' : 'Partners & Standards'}
          </h5>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/pipeline-integrity#pipecare" className="hover:text-[#0a66a0] dark:hover:text-sky-400 transition-colors flex items-center gap-1.5">
                <ExternalLink className="w-3 h-3 text-[#2f7c4c] dark:text-emerald-400" />
                <span>{isRtl ? 'شراكة بايبكير (PIPECARE MFL/UT)' : 'PIPECARE Smart Pigging (MFL/UT)'}</span>
              </Link>
            </li>
            <li>
              <Link href="/pipeline-integrity#css" className="hover:text-[#0a66a0] dark:hover:text-sky-400 transition-colors flex items-center gap-1.5">
                <ExternalLink className="w-3 h-3 text-[#2f7c4c] dark:text-emerald-400" />
                <span>{isRtl ? 'كونيكتور سابسي (CSS Morgrip)' : 'Connector Subsea Solutions (Morgrip)'}</span>
              </Link>
            </li>
            <li>
              <Link href="/accreditations#imca" className="hover:text-[#0a66a0] dark:hover:text-sky-400 transition-colors flex items-center gap-1.5">
                <ChevronIcon className="w-3 h-3 text-[#0a66a0]" />
                <span>{isRtl ? 'عضوية منظمة IMCA الدولية' : 'IMCA Member (Sat, Air, Nitrox, ROV)'}</span>
              </Link>
            </li>
            <li>
              <Link href="/accreditations#irata" className="hover:text-[#0a66a0] dark:hover:text-sky-400 transition-colors flex items-center gap-1.5">
                <ChevronIcon className="w-3 h-3 text-[#0a66a0]" />
                <span>{isRtl ? 'شهادة IRATA للوصول بالحبال' : 'IRATA Rope Access (Reg: 7020/OT)'}</span>
              </Link>
            </li>
            <li>
              <Link href="/accreditations#iso" className="hover:text-[#0a66a0] dark:hover:text-sky-400 transition-colors flex items-center gap-1.5">
                <ChevronIcon className="w-3 h-3 text-[#0a66a0]" />
                <span>ISO 9001 / 14001 / 45001</span>
              </Link>
            </li>
            <li>
              <Link href="/accreditations#class" className="hover:text-[#0a66a0] dark:hover:text-sky-400 transition-colors flex items-center gap-1.5">
                <ChevronIcon className="w-3 h-3 text-[#0a66a0]" />
                <span>{isRtl ? 'اعتمادات هيئات التصنيف البحرية' : 'Class Approvals (DNV GL, ABS, BV, LR)'}</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact HQ Info */}
        <div>
          <h5 className="text-slate-900 dark:text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-slate-300 dark:border-[#0a66a0]/40 pb-2">
            {t('footerHeadquarters')}
          </h5>
          <div className="space-y-3 text-xs">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#0a66a0] dark:text-sky-400 shrink-0 mt-0.5" />
              <span>{isRtl ? 'طريق الملك فهد، برج المشاريع، الطابق ١٤، الخبر ٣١٩٥٢، المملكة العربية السعودية' : 'King Fahd Road, Enterprise Tower, L14, Al Khobar 31952, KSA'}</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-[#2f7c4c] dark:text-[#3bd879] shrink-0" />
              <span>+966 13 800 2470</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#0a66a0] dark:text-sky-400 shrink-0" />
              <span>hq@amsmarine.com.sa</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-200 dark:bg-[#020b12] py-4 sm:py-6 border-t border-slate-300 dark:border-white/5 text-xs text-slate-600 dark:text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} AMS Marine. {isRtl ? 'جميع الحقوق محفوظة. مشروع مشترك بين الفاع و إم كيو ومجموعة أوشين سابسي مارين.' : 'All rights reserved. Strategic Joint Venture between Alpha OMQ & OSC Marine Group.'}
          </div>
          <div className="flex gap-6 text-slate-600 dark:text-slate-400">
            <Link href="/about" className="hover:text-slate-900 dark:hover:text-white">{isRtl ? 'رؤية 2030' : 'Vision 2030'}</Link>
            <Link href="/accreditations" className="hover:text-slate-900 dark:hover:text-white">{isRtl ? 'الامتثال والسلامة' : 'Compliance'}</Link>
            <Link href="/contact" className="hover:text-slate-900 dark:hover:text-white">{isRtl ? 'خط الطوارئ 24/7' : '24/7 Hotline'}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
