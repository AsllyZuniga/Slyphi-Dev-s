import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  desc: string;
  tech: readonly string[];
  url: string;
  visitLabel: string;
  index: number;
}

const gradients = [
  'from-(--color-blueprint) to-(--color-galeras)',
  'from-(--color-rust) to-(--color-gold)',
  'from-(--color-galeras) to-(--color-blueprint-light)',
  'from-(--color-gold) to-(--color-rust)',
  'from-(--color-blueprint-light) to-(--color-blueprint)',
  'from-(--color-rust-light) to-(--color-rust)',
  'from-(--color-galeras) to-(--color-gold)',
];

export default function ProjectCard({ name, desc, tech, url, visitLabel, index }: ProjectCardProps) {
  const [loaded, setLoaded] = useState(false);
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((w) => w.charAt(0))
    .join('');

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-(--border) bg-(--surface) backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
      <div className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${gradients[index % gradients.length]}`}>
        <div className="absolute left-4 top-4 z-10 flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
        </div>
        <span className="font-display text-6xl font-bold text-white/25 transition-transform duration-500 group-hover:scale-110">
          {initials}
        </span>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden transition-opacity duration-700"
          style={{ opacity: loaded ? 1 : 0 }}
        >
          <iframe
            src={url}
            title={`${name} preview`}
            loading="lazy"
            tabIndex={-1}
            aria-hidden="true"
            onLoad={() => setLoaded(true)}
            className="origin-top-left"
            style={{ width: '400%', height: '400%', transform: 'scale(0.25)', border: 0 }}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-lg font-semibold text-(--fg)">{name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-(--fg-muted)">{desc}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span key={item} className="rounded-full border border-(--border) px-2.5 py-1 font-mono text-[11px] text-(--fg-muted)">
              {item}
            </span>
          ))}
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-(--color-rust)"
        >
          {visitLabel}
          <ArrowUpRight size={15} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
}
