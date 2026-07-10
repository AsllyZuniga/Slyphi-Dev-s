import { useLanguage } from '../i18n/LanguageContext';
import Section from '../components/Section';
import Eyebrow from '../components/Eyebrow';
import Reveal from '../components/Reveal';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const { t } = useLanguage();

  return (
    <Section id="projects" className="bg-(--bg-2)/40">
      <Reveal className="max-w-2xl">
        <Eyebrow>{t.projects.eyebrow}</Eyebrow>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-balance text-(--fg) sm:text-4xl lg:text-5xl">
          {t.projects.title}
        </h2>
        <p className="mt-4 text-base text-(--fg-muted)">{t.projects.subtitle}</p>
      </Reveal>

      <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {t.projects.items.map((project, i) => (
          <Reveal key={project.name} delay={(i % 3) * 0.08}>
            <ProjectCard
              name={project.name}
              desc={project.desc}
              tech={project.tech}
              url={project.url}
              visitLabel={t.projects.visit}
              index={i}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
