import { Github, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import Section from '../components/Section';
import Eyebrow from '../components/Eyebrow';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import ContourBackdrop from '../components/ContourBackdrop';
import contact from '../data/contact';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <Section id="contact" className="relative overflow-hidden">
      <ContourBackdrop />
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <Reveal>
          <Eyebrow>{t.contact.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-balance text-(--fg) sm:text-4xl lg:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-base text-(--fg-muted)">{t.contact.subtitle}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button href={contact.github.org} target="_blank" variant="secondary" icon={<Github size={16} />}>
              {t.contact.github}
            </Button>
            <Button href={`mailto:${contact.email}`} variant="secondary" icon={<Mail size={16} />}>
              {t.contact.email}
            </Button>
            <Button
              href={`https://wa.me/${contact.whatsapp.felipe}`}
              target="_blank"
              variant="primary"
              icon={<MessageCircle size={16} />}
            >
              {t.contact.whatsapp}
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
