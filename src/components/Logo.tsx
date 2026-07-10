export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
        <circle cx="15" cy="15" r="13" stroke="var(--color-blueprint)" strokeWidth="1.4" strokeDasharray="2 3" />
        <path d="M15 4V8M15 22V26M4 15H8M22 15H26" stroke="var(--color-blueprint)" strokeWidth="1.4" />
        <path d="M10.5 18.5C10.5 20 12 21 15 21C18 21 19.5 19.8 19.5 18.2C19.5 16.5 18 16 15 15.4C12 14.8 10.7 14.2 10.7 12.6C10.7 11.2 12.2 10 15 10C17.8 10 19 11 19.2 12.3"
          stroke="var(--color-rust)" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
      <span className="font-display text-lg font-semibold tracking-tight text-(--fg)">
        Slyphi<span className="text-(--color-rust)">Dev's</span>
      </span>
    </span>
  );
}
