import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import es from './es';
import en from './en';
import type { Dict } from './types';

export type Lang = 'es' | 'en';

const dictionaries = { es, en };

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dict;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function detectInitialLang(): Lang {
  const stored = localStorage.getItem('slyphi-lang');
  if (stored === 'es' || stored === 'en') return stored;
  return 'es';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem('slyphi-lang', lang);
  }, [lang]);

  const setLang = (next: Lang) => setLangState(next);

  const value = useMemo(() => ({ lang, setLang, t: dictionaries[lang] }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
