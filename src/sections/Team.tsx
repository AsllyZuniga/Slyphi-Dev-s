import { Github } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import Section from '../components/Section';
import Eyebrow from '../components/Eyebrow';
import Reveal from '../components/Reveal';
import felipeImg from '../assets/team/felipe.jpg';
import asllyImg from '../assets/team/aslly.jpg';

const avatars = [felipeImg, asllyImg];
const githubHandles = ['feliperivasdev', 'AsllyZuniga'];

export default function Team() {
  const { t } = useLanguage();

  return (
    <Section id="team">
      <Reveal className="max-w-2xl">
        <Eyebrow>{t.team.eyebrow}</Eyebrow>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-balance text-(--fg) sm:text-4xl lg:text-5xl">
          {t.team.title}
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-8 sm:grid-cols-2">
        {t.team.members.map((member, i) => (
          <Reveal key={member.name} delay={i * 0.1}>
            <div className="group h-full rounded-3xl border border-(--border) bg-(--surface) p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-4">
                <img
                  src={avatars[i]}
                  alt={member.name}
                  width={72}
                  height={72}
                  loading="lazy"
                  className="h-18 w-18 rounded-2xl border border-(--border) object-cover"
                />
                <div>
                  <h3 className="font-display text-xl font-semibold text-(--fg)">{member.name}</h3>
                  <p className="text-sm font-medium text-(--color-rust)">{member.role}</p>
                  <p className="font-mono text-xs text-(--fg-muted)">{member.exp}</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-(--fg-muted)">{member.bio}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-(--border) px-3 py-1 font-mono text-[11px] text-(--fg-muted)"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href={`https://github.com/${githubHandles[i]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-(--fg) transition-colors hover:text-(--color-rust)"
              >
                <Github size={16} />
                @{githubHandles[i]}
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
