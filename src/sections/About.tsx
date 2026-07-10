import { MapPin, Check } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import Section from '../components/Section';
import Eyebrow from '../components/Eyebrow';
import Reveal from '../components/Reveal';

export default function About() {
  const { t } = useLanguage();

  return (
    <Section id="about">
      <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
        <Reveal>
          <Eyebrow>{t.about.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-balance text-(--fg) sm:text-4xl lg:text-5xl">
            {t.about.title}
          </h2>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface) px-4 py-2 font-mono text-xs text-(--fg-muted)">
            <MapPin size={14} className="text-(--color-rust)" />
            Pasto, Nariño, Colombia
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-5 text-base leading-relaxed text-(--fg-muted)">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {t.about.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-(--fg)">
                <Check size={16} className="mt-0.5 shrink-0 text-(--color-galeras)" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
