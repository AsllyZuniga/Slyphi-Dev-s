import type { ReactNode } from 'react';
import Container from './Container';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function Section({ id, children, className = '', containerClassName = '' }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-24 lg:py-32 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
