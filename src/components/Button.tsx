import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: ReactNode;
  className?: string;
  target?: string;
}

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-(--color-rust)';

const variants = {
  primary:
    'bg-(--color-rust) text-white hover:bg-(--color-rust-light) shadow-[0_8px_24px_-8px_rgba(196,98,45,0.6)] hover:shadow-[0_12px_32px_-8px_rgba(196,98,45,0.75)] hover:-translate-y-0.5',
  secondary:
    'border border-(--border) bg-(--surface) backdrop-blur-md text-(--fg) hover:border-(--color-blueprint) hover:-translate-y-0.5',
  ghost: 'text-(--fg) hover:text-(--color-rust)',
};

export default function Button({ children, href, onClick, variant = 'primary', icon, className = '', target }: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <a href={href} onClick={onClick} className={cls} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
        {children}
        {icon}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={cls}>
      {children}
      {icon}
    </button>
  );
}
