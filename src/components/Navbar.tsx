import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useTheme } from '../hooks/useTheme';
import Logo from './Logo';
import Button from './Button';

const navKeys = ['about', 'services', 'tech', 'team', 'projects', 'process', 'faq'] as const;

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
            scrolled ? 'border border-(--border) bg-(--surface) shadow-lg backdrop-blur-xl' : ''
          }`}
        >
          <a href="#hero" aria-label="Slyphi Dev's">
            <Logo />
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navKeys.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                className="text-sm font-medium text-(--fg-muted) transition-colors hover:text-(--fg)"
              >
                {t.nav[key]}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="rounded-full border border-(--border) px-3 py-1.5 font-mono text-xs font-medium text-(--fg-muted) transition-colors hover:text-(--fg)"
              aria-label="Cambiar idioma"
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
            <button
              onClick={toggleTheme}
              className="rounded-full border border-(--border) p-2 text-(--fg-muted) transition-colors hover:text-(--fg)"
              aria-label="Cambiar tema"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <Button href="#contact" variant="primary" className="!py-2.5 !text-xs">
              {t.nav.cta}
            </Button>
          </div>

          <button
            className="p-2 text-(--fg) lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mx-6 mt-3 rounded-2xl border border-(--border) bg-(--surface) p-6 shadow-xl backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navKeys.map((key) => (
                <a
                  key={key}
                  href={`#${key}`}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-(--fg)"
                >
                  {t.nav[key]}
                </a>
              ))}
            </nav>
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                className="rounded-full border border-(--border) px-3 py-1.5 font-mono text-xs font-medium text-(--fg-muted)"
              >
                {lang === 'es' ? 'EN' : 'ES'}
              </button>
              <button
                onClick={toggleTheme}
                className="rounded-full border border-(--border) p-2 text-(--fg-muted)"
                aria-label="Cambiar tema"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>
            <Button href="#contact" onClick={() => setOpen(false)} variant="primary" className="mt-4 w-full">
              {t.nav.cta}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
