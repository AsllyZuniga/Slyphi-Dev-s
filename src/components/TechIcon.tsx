import { Database } from 'lucide-react';
import {
  siAngular, siReact, siTypescript, siJavascript, siNodedotjs, siExpress,
  siDotnet, siPhp, siWordpress, siWoocommerce, siDocker, siGit, siGithub,
  siPostgresql, siMysql, siTailwindcss, siBootstrap,
} from 'simple-icons';

const iconMap: Record<string, { path: string; hex: string } | null> = {
  Angular: siAngular,
  React: siReact,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  'Node.js': siNodedotjs,
  Express: siExpress,
  '.NET': siDotnet,
  PHP: siPhp,
  WordPress: siWordpress,
  WooCommerce: siWoocommerce,
  Docker: siDocker,
  Git: siGit,
  GitHub: siGithub,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  'SQL Server': null,
  'Tailwind CSS': siTailwindcss,
  Bootstrap: siBootstrap,
};

export default function TechIcon({ name, size = 22 }: { name: string; size?: number }) {
  const icon = iconMap[name];

  if (!icon) {
    return <Database size={size} strokeWidth={1.75} className="text-current" />;
  }

  return (
    <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d={icon.path} />
    </svg>
  );
}
