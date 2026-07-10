import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import Button from '../components/Button';
import Container from '../components/Container';
import Eyebrow from '../components/Eyebrow';
import ContourBackdrop from '../components/ContourBackdrop';
import AnimatedCounter from '../components/AnimatedCounter';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20">
      <ContourBackdrop />
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Eyebrow>{t.hero.eyebrow}</Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-balance text-(--fg) sm:text-6xl lg:text-7xl"
        >
          {t.hero.title1}
          <br />
          <span className="text-(--color-rust)">{t.hero.title2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-(--fg-muted)"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="#projects" variant="primary" icon={<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}>
            {t.hero.ctaPrimary}
          </Button>
          <Button href="#contact" variant="secondary" icon={<MessageCircle size={16} />}>
            {t.hero.ctaSecondary}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 grid max-w-3xl grid-cols-2 gap-8 border-t border-(--border) pt-10 sm:grid-cols-4"
        >
          <AnimatedCounter value={t.hero.stat1Value} label={t.hero.stat1Label} />
          <AnimatedCounter value={t.hero.stat2Value} label={t.hero.stat2Label} />
          <AnimatedCounter value={t.hero.stat3Value} label={t.hero.stat3Label} />
          <AnimatedCounter value={t.hero.stat4Value} label={t.hero.stat4Label} />
        </motion.div>
      </Container>
    </section>
  );
}
