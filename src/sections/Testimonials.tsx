import { Quote } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import Section from '../components/Section';
import Eyebrow from '../components/Eyebrow';
import Reveal from '../components/Reveal';

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <Section id="testimonials" className="bg-(--bg-2)/40">
      <Reveal className="max-w-2xl">
        <Eyebrow>{t.testimonials.eyebrow}</Eyebrow>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-balance text-(--fg) sm:text-4xl lg:text-5xl">
          {t.testimonials.title}
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {t.testimonials.items.map((item, i) => (
          <Reveal key={item.name + i} delay={i * 0.08}>
            <div className="flex h-full flex-col rounded-2xl border border-(--border) bg-(--surface) p-7 backdrop-blur-sm">
              <Quote size={22} className="text-(--color-rust)/50" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-(--fg)">&ldquo;{item.quote}&rdquo;</p>
              <div className="mt-6 border-t border-(--border) pt-4">
                <p className="text-sm font-semibold text-(--fg)">{item.name}</p>
                <p className="text-xs text-(--fg-muted)">{item.role}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mt-8 text-center font-mono text-xs text-(--fg-muted)">{t.testimonials.placeholderNote}</p>
    </Section>
  );
}
