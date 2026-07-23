'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { accreditationsData } from '@/data/accreditationsData';
import { clientsData } from '@/data/clientsData';
import { Award, ShieldCheck } from 'lucide-react';

export function LogoMarquee() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-20 bg-slate-100 dark:bg-[#03131e] text-slate-900 dark:text-white border-y border-slate-200 dark:border-[#0a66a0]/20 overflow-hidden space-y-10 sm:space-y-16 transition-colors duration-300">
      
      {/* Block 1: Accreditations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#0a66a0] dark:text-sky-400 uppercase tracking-widest">
            <Award className="w-4 h-4 text-[#2f7c4c] dark:text-emerald-400" />
            {t('accreditationTag')}
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            {t('accreditationTitle')}
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {accreditationsData.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#051826] border border-slate-200 dark:border-white/10 hover:border-[#0a66a0] rounded-xl p-4 flex flex-col items-center justify-center text-center space-y-3 transition-all hover:scale-105 shadow-sm dark:shadow-none"
            >
              {item.imageSrc ? (
                <div className="relative w-24 h-14">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="object-contain filter dark:grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ) : (
                <ShieldCheck className="w-10 h-10 text-[#0a66a0] dark:text-sky-400" />
              )}
              <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200">{item.title}</div>
              <div className="text-[9px] text-slate-500 dark:text-slate-400">{item.category}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Block 2: Key Clients Marquee */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-1 px-4">
          <span className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
            {t('clientsTag')}
          </span>
        </div>

        {/* Scroll Marquee Container */}
        <div className="relative w-full overflow-hidden flex [mask-image:_linear-gradient(to_right,_transparent_0,_black_128px,_black_calc(100%-128px),_transparent_100%)]">
          <div className="flex gap-8 animate-marquee whitespace-nowrap py-4">
            {clientsData.concat(clientsData).map((client, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-3 bg-white dark:bg-[#051826]/80 border border-slate-200 dark:border-white/10 rounded-xl px-6 py-3 shrink-0 shadow-sm dark:shadow-none"
              >
                <div className="relative w-10 h-10">
                  <Image
                    src={client.logoSrc}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-slate-900 dark:text-white block">{client.name}</span>
                  <span className="text-[9px] text-slate-500 dark:text-slate-400">{client.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
