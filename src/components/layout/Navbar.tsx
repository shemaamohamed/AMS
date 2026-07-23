'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/context/LanguageContext';
import { PhoneCall, Globe, Menu, X, ShieldAlert, ChevronRight, ChevronLeft } from 'lucide-react';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

export function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const { language, toggleLanguage, t, direction } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: t('navHome'), href: '/' },
    { name: t('navServices'), href: '/services' },
    { name: t('navPipeline'), href: '/pipeline-integrity' },
    { name: t('navAbout'), href: '/about' },
    { name: t('navAccreditations'), href: '/accreditations' },
    { name: t('navContact'), href: '/contact' },
  ];

  const isDark = mounted && resolvedTheme === 'dark';
  const logoSrc = isDark ? '/assets/logo/ams_logo_white.png' : '/assets/logo/ams_logo_dark.png';
  const isRtl = direction === 'rtl';

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 dark:bg-[#041c2c]/90 border-b border-slate-200 dark:border-[#0a66a0]/30 transition-colors duration-300 shadow-md">
      {/* Top Banner - Emergency Hotline & Co-Branding Notice */}
      <div className="bg-slate-100 dark:bg-[#041320] border-b border-slate-200 dark:border-[#0a66a0]/20 text-xs py-1.5 px-3 sm:px-4 text-slate-700 dark:text-slate-300 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-1.5 sm:gap-2">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#2f7c4c]/15 text-[#2f7c4c] dark:text-[#3bd879] border border-[#2f7c4c]/30 font-semibold text-[10px] tracking-wide uppercase shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2f7c4c] dark:bg-[#3bd879] animate-pulse"></span>
              {t('sovereignJv')}
            </span>
            <span className="hidden sm:inline text-slate-600 dark:text-slate-400 truncate">
              {t('jvSubtitle')}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <a
              href="tel:+966138002470"
              className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 hover:opacity-80 font-medium transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 animate-bounce shrink-0" />
              <span className="hidden sm:inline">{t('emergencyDispatch')} </span>
              <strong className="font-bold">+966 13 800 2470</strong>
            </a>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors bg-slate-200/70 dark:bg-white/5 px-2 py-0.5 rounded text-xs border border-slate-300 dark:border-slate-700"
              aria-label="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#0a66a0]" />
              <span className="font-bold text-[#0a66a0] dark:text-sky-400">{language}</span>
              <span className="hidden xs:inline text-[10px] text-slate-500 dark:text-slate-400">
                ({language === 'EN' ? 'العربية' : 'English'})
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        {/* Logo Branding */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-32 sm:w-48 h-10 sm:h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <Image
              src={logoSrc}
              alt="AMS Marine Logo"
              fill
              className="object-contain filter drop-shadow-[0_2px_8px_rgba(10,102,160,0.3)]"
              priority
            />
          </div>
          <div className={`hidden lg:flex flex-col border-slate-300 dark:border-white/20 ${isRtl ? 'border-r pr-3' : 'border-l pl-3'}`}>
            <span className="text-xs font-black text-[#041c2c] dark:text-white tracking-widest leading-tight">
              SOVEREIGN SUBSEA
            </span>
            <span className="text-[10px] text-[#2f7c4c] dark:text-[#3bd879] font-bold tracking-tight">
              Alpha OMQ × OSC Marine
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-1 sm:gap-1.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2.5 sm:px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'text-[#0a66a0] dark:text-white bg-sky-100/80 dark:bg-[#0a66a0]/40 border border-[#0a66a0]/40 dark:border-[#0a66a0] font-bold'
                    : 'text-slate-700 dark:text-slate-200 hover:text-[#0a66a0] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Header Right Action & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-2 sm:gap-3 shrink-0">
          <ThemeToggle />

          <Link
            href="/contact"
            className="flex items-center gap-1.5 bg-[#2f7c4c] hover:bg-[#25643d] text-white px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all shadow-md shadow-[#2f7c4c]/30 hover:scale-[1.02] active:scale-95 border border-emerald-400/30"
          >
            <ShieldAlert className="w-4 h-4 text-emerald-200 shrink-0" />
            <span>{t('emergencyCalloutBtn')}</span>
          </Link>
        </div>

        {/* Mobile Toggle & Theme Button */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white p-2 rounded-lg bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white dark:bg-[#041826] border-b border-slate-200 dark:border-[#0a66a0]/40 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-200 shadow-xl">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-[#0a66a0] text-white font-bold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
                }`}
              >
                <span>{link.name}</span>
                {isRtl ? (
                  <ChevronLeft className="w-4 h-4 text-slate-400" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                )}
              </Link>
            );
          })}

          <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-[#2f7c4c] text-white py-3 rounded-lg font-bold text-sm shadow-md"
            >
              {t('emergencyCalloutBtn')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
