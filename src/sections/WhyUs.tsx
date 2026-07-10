import {
  Layers, Sparkles, Smartphone, Zap, TrendingUp, HeartHandshake, RefreshCw, ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import Section from '../components/Section';
import Eyebrow from '../components/Eyebrow';
import Reveal from '../components/Reveal';

const icons = [Layers, Sparkles, Smartphone, Zap, TrendingUp, HeartHandshake, RefreshCw, ShieldCheck];

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <Section id="why">
      <Reveal className="max-w-2xl">
        <Eyebrow>{t.why.eyebrow}</Eyebrow>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-balance text-(--fg) sm:text-4xl lg:text-5xl">
          {t.why.title}
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {t.why.items.map((item, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={item.title} delay={(i % 4) * 0.06}>
              <div className="flex flex-col gap-3">
                <Icon size={24} strokeWidth={1.75} className="text-(--color-rust)" />
                <h3 className="font-display text-base font-semibold text-(--fg)">{item.title}</h3>
                <p className="text-sm leading-relaxed text-(--fg-muted)">{item.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
