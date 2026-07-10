export interface Tech {
  name: string;
  category: string;
}

const technologies: Tech[] = [
  { name: 'Angular', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'lang' },
  { name: 'JavaScript', category: 'lang' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Express', category: 'backend' },
  { name: '.NET', category: 'backend' },
  { name: 'PHP', category: 'backend' },
  { name: 'WordPress', category: 'cms' },
  { name: 'WooCommerce', category: 'cms' },
  { name: 'Docker', category: 'infra' },
  { name: 'Git', category: 'infra' },
  { name: 'GitHub', category: 'infra' },
  { name: 'PostgreSQL', category: 'db' },
  { name: 'MySQL', category: 'db' },
  { name: 'SQL Server', category: 'db' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Bootstrap', category: 'frontend' },
];

export default technologies;
