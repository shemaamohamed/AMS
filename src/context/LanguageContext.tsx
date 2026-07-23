'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations, TranslationKeys } from '@/data/translations';

type Language = 'EN' | 'AR';
type Direction = 'ltr' | 'rtl';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: TranslationKeys) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('EN');

  useEffect(() => {
    const savedLang = localStorage.getItem('ams_language') as Language | null;
    if (savedLang && (savedLang === 'EN' || savedLang === 'AR')) {
      setLanguageState(savedLang);
    }
  }, []);

  const direction: Direction = language === 'AR' ? 'rtl' : 'ltr';

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.dir = direction;
      document.documentElement.lang = language.toLowerCase();
    }
  }, [language, direction]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('ams_language', lang);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'AR' : 'EN');
  };

  const t = (key: TranslationKeys): string => {
    const dict = translations[language] || translations.EN;
    return dict[key] || translations.EN[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        direction,
        setLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
