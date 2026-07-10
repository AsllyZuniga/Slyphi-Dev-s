import { useLanguage } from '../i18n/LanguageContext';
import Container from './Container';
import Logo from './Logo';
import contact from '../data/contact';

const navKeys = ['about', 'services', 'tech', 'team', 'projects', 'process', 'faq'] as const;

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-(--border) py-14">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm text-(--fg-muted)">{t.footer.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-16">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-(--fg-muted)">{t.footer.nav}</h4>
              <ul className="mt-4 space-y-2.5">
                {navKeys.map((key) => (
                  <li key={key}>
                    <a href={`#${key}`} className="text-sm text-(--fg-muted) transition-colors hover:text-(--fg)">
                      {t.nav[key]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-(--fg-muted)">{t.contact.eyebrow}</h4>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a href={`mailto:${contact.email}`} className="text-sm text-(--fg-muted) transition-colors hover:text-(--fg)">
                    {contact.email}
                  </a>
                </li>
                <li>
                  <a href={contact.github.org} target="_blank" rel="noopener noreferrer" className="text-sm text-(--fg-muted) transition-colors hover:text-(--fg)">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-(--border) pt-8 text-xs text-(--fg-muted) sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Slyphi Dev's. {t.footer.rights}
          </p>
          <p className="font-mono">{t.footer.madeWith}</p>
        </div>
      </Container>
    </footer>
  );
}
