export default function ContourBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="animate-gradient absolute inset-0 opacity-60 dark:opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, var(--color-blueprint-light) 0%, transparent 45%), radial-gradient(circle at 80% 30%, var(--color-rust-light) 0%, transparent 40%), radial-gradient(circle at 50% 90%, var(--color-galeras) 0%, transparent 45%)',
          backgroundSize: '180% 180%',
          filter: 'blur(60px)',
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.35] dark:opacity-[0.22]"
        viewBox="0 0 1200 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <path
            key={i}
            d={`M -50 ${560 - i * 46} Q 300 ${420 - i * 52} 600 ${520 - i * 44} T 1250 ${480 - i * 40}`}
            stroke="var(--color-blueprint)"
            strokeWidth="1"
            fill="none"
          />
        ))}
        {[0, 1, 2].map((i) => (
          <circle key={`c${i}`} cx="900" cy="160" r={40 + i * 34} stroke="var(--color-rust)" strokeWidth="1" fill="none" />
        ))}
      </svg>
    </div>
  );
}
