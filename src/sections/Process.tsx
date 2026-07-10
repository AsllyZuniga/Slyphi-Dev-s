import { Search, PenTool, Code, FlaskConical, Rocket, LifeBuoy } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import Section from '../components/Section';
import Eyebrow from '../components/Eyebrow';
import Reveal from '../components/Reveal';

const icons = [Search, PenTool, Code, FlaskConical, Rocket, LifeBuoy];

export default function Process() {
  const { t } = useLanguage();

  return (
    <Section id="process">
      <Reveal className="max-w-2xl">
        <Eyebrow>{t.process.eyebrow}</Eyebrow>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-balance text-(--fg) sm:text-4xl lg:text-5xl">
          {t.process.title}
        </h2>
      </Reveal>

      <div className="relative mt-16">
        <div className="absolute left-6 top-2 hidden h-[calc(100%-1rem)] w-px bg-(--border) lg:block" />
        <div className="grid gap-x-6 gap-y-12 lg:grid-cols-3">
          {t.process.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={step.title} delay={(i % 3) * 0.08}>
                <div className="relative flex gap-5 lg:pl-16">
                  <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full border border-(--border) bg-(--bg) font-mono text-xs text-(--fg-muted) lg:flex">
                    0{i + 1}
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-(--color-blueprint)/10 text-(--color-blueprint) lg:hidden">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-(--color-rust) lg:hidden">0{i + 1}</span>
                    <h3 className="font-display text-lg font-semibold text-(--fg)">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-(--fg-muted)">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
