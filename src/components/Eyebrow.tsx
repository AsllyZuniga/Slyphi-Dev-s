export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-(--color-rust)">
      <span className="h-px w-6 bg-(--color-rust)" />
      {children}
    </span>
  );
}
