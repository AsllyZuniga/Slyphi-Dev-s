import { useLanguage } from '../i18n/LanguageContext';
import Section from '../components/Section';
import Eyebrow from '../components/Eyebrow';
import Reveal from '../components/Reveal';
import TechIcon from '../components/TechIcon';
import technologies from '../data/technologies';

export default function Technologies() {
  const { t } = useLanguage();

  return (
    <Section id="tech" className="bg-(--bg-2)/40">
      <Reveal className="max-w-2xl">
        <Eyebrow>{t.tech.eyebrow}</Eyebrow>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-balance text-(--fg) sm:text-4xl lg:text-5xl">
          {t.tech.title}
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {technologies.map((tech, i) => (
          <Reveal key={tech.name} delay={(i % 6) * 0.04} y={14}>
            <div className="group flex h-24 flex-col items-center justify-center gap-2.5 rounded-xl border border-(--border) bg-(--surface) px-3 text-center transition-all duration-300 hover:-translate-y-1 hover:border-(--color-blueprint)/50 hover:shadow-lg">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-(--color-blueprint)/10 text-(--color-blueprint) transition-colors group-hover:bg-(--color-rust)/10 group-hover:text-(--color-rust)">
                <TechIcon name={tech.name} size={18} />
              </span>
              <span className="font-mono text-[11px] font-medium text-(--fg-muted)">
                {tech.name}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
