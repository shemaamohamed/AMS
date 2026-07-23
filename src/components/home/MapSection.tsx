'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { locationsData } from '@/data/locationsData';
import { MapPin, PhoneCall, Mail, Navigation, ArrowRight, ArrowLeft, Shield } from 'lucide-react';

export function MapSection() {
  const { direction, t } = useLanguage();
  const isRtl = direction === 'rtl';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [selectedHub, setSelectedHub] = useState(locationsData[0]);

  const hubCity = (isRtl && selectedHub.cityAr) ? selectedHub.cityAr : selectedHub.city;
  const hubType = (isRtl && selectedHub.typeAr) ? selectedHub.typeAr : selectedHub.type;
  const hubAddress = (isRtl && selectedHub.addressAr) ? selectedHub.addressAr : selectedHub.address;

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-[#041c2c] text-slate-900 dark:text-white relative border-b border-slate-200 dark:border-[#0a66a0]/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-extrabold text-[#2f7c4c] dark:text-[#3bd879] uppercase tracking-widest bg-[#2f7c4c]/10 dark:bg-[#2f7c4c]/20 px-3 py-1 rounded border border-[#2f7c4c]/30">
            {t('footprintTag')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {t('footprintTitle')}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {t('footprintSub')}
          </p>
        </div>

        {/* Map & Hub Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Interactive Gulf Map Display */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-[#051826] border border-slate-200 dark:border-[#0a66a0]/40 rounded-2xl p-4 sm:p-6 backdrop-blur-md space-y-4 sm:space-y-6 relative overflow-hidden shadow-lg dark:shadow-none">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Navigation className="w-5 h-5 text-[#0a66a0] dark:text-sky-400" />
                <span className="text-sm font-extrabold text-slate-900 dark:text-white">{t('mapTitle')}</span>
              </div>
              <span className="text-xs font-bold text-[#2f7c4c] dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                {isRtl ? 'قواعد تشغيلية نشطة' : 'Active Bases'}
              </span>
            </div>

            {/* Map Graphic Box */}
            <div className="relative w-full h-[250px] sm:h-[320px] lg:h-[380px] rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 group">
              <Image
                src="/assets/map/gulf_map.png"
                alt="Arabian Gulf Operational Map"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-100/50 dark:from-[#051826] via-transparent to-transparent pointer-events-none" />

              {/* Pin Hotspots */}
              {locationsData.map((loc) => {
                const isSelected = selectedHub.id === loc.id;
                const locName = (isRtl && loc.cityAr) ? loc.cityAr : loc.city;

                return (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedHub(loc)}
                    className={`absolute p-2 rounded-full transition-all transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center ${
                      isSelected
                        ? 'bg-[#2f7c4c] dark:bg-[#3bd879] text-white dark:text-slate-950 scale-125 shadow-lg shadow-[#2f7c4c]/50 ring-4 ring-white/50 z-20'
                        : 'bg-[#0a66a0] text-white hover:bg-sky-500 hover:scale-110 z-10'
                    }`}
                    style={{
                      top: loc.id === 'khobar_hq' ? '45%' : loc.id === 'dammam_jubail' ? '40%' : loc.id === 'jeddah_redsea' ? '65%' : loc.id === 'riyadh_office' ? '55%' : loc.id === 'uae_hub' ? '50%' : '35%',
                      left: loc.id === 'khobar_hq' ? '50%' : loc.id === 'dammam_jubail' ? '52%' : loc.id === 'jeddah_redsea' ? '30%' : loc.id === 'riyadh_office' ? '44%' : loc.id === 'uae_hub' ? '68%' : '60%'
                    }}
                    title={locName}
                  >
                    <MapPin className="w-4 h-4" />
                  </button>
                );
              })}
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
              {isRtl ? 'اضغط على النقاط أو القائمة على اليسار/اليمين لاستكشاف تفاصيل المراكز اللوجستية والاتصال.' : 'Click pins or list items to inspect regional contact details and operational capabilities.'}
            </p>
          </div>

          {/* Right Column: Hubs List & Selected Card */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-300 uppercase tracking-wider mb-2">{isRtl ? 'اختر المركز اللوجستي الإقليمي:' : 'Select Regional Hub:'}</h3>
            
            <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
              {locationsData.map((loc) => {
                const isSelected = selectedHub.id === loc.id;
                const locName = (isRtl && loc.cityAr) ? loc.cityAr : loc.city;
                const locBadge = loc.type === 'Headquarters' ? (isRtl ? 'المقر الرئيسي' : 'HQ') : (isRtl ? 'مركز لوجستي' : 'Hub');

                return (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedHub(loc)}
                    className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#0a66a0] border-sky-400 text-white font-bold shadow-md shadow-[#0a66a0]/30'
                        : 'bg-slate-50 dark:bg-[#051826] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <MapPin className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-[#0a66a0] dark:text-sky-400'}`} />
                      <span className="text-xs font-semibold">{locName}</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                      {locBadge}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Hub Detail Card */}
            <div className="bg-slate-50 dark:bg-[#051826] border border-slate-200 dark:border-sky-500/40 rounded-xl p-4 sm:p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3">
                <div>
                  <span className="text-[10px] font-bold text-[#2f7c4c] dark:text-emerald-400 uppercase tracking-widest">{hubType}</span>
                  <h4 className="text-lg font-black text-slate-900 dark:text-white">{hubCity}</h4>
                </div>
                <Shield className="w-6 h-6 text-[#0a66a0] dark:text-sky-400" />
              </div>

              <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#0a66a0] dark:text-sky-400 shrink-0 mt-0.5" />
                  <span>{hubAddress}</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-[#2f7c4c] dark:text-[#3bd879] shrink-0" />
                  <span className="font-bold text-slate-900 dark:text-white">{selectedHub.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#0a66a0] dark:text-sky-400 shrink-0" />
                  <span>{selectedHub.email}</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="w-full bg-[#2f7c4c] hover:bg-[#25643d] text-white py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-md"
                >
                  <span>{t('btnDispatchRequestTo')} {hubCity}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
