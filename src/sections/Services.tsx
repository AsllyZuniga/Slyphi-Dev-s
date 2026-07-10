import {
  Code2, Building2, ShoppingCart, Plug, Server, LayoutTemplate,
  Cloud, Wrench, Gauge, Lightbulb,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import Section from '../components/Section';
import Eyebrow from '../components/Eyebrow';
import Reveal from '../components/Reveal';

const icons = [Code2, Building2, ShoppingCart, Plug, Server, LayoutTemplate, Cloud, Wrench, Gauge, Lightbulb];

export default function Services() {
  const { t } = useLanguage();

  return (
    <Section id="services" className="bg-(--bg-2)/40">
      <Reveal className="max-w-2xl">
        <Eyebrow>{t.services.eyebrow}</Eyebrow>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-balance text-(--fg) sm:text-4xl lg:text-5xl">
          {t.services.title}
        </h2>
        <p className="mt-4 text-base text-(--fg-muted)">{t.services.subtitle}</p>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.services.items.map((item, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <div className="group h-full rounded-2xl border border-(--border) bg-(--surface) p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-(--color-rust)/40 hover:shadow-xl">
                <div className="inline-flex rounded-xl bg-(--color-blueprint)/10 p-3 text-(--color-blueprint) transition-colors duration-300 group-hover:bg-(--color-rust)/10 group-hover:text-(--color-rust)">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-(--fg)">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-(--fg-muted)">{item.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
