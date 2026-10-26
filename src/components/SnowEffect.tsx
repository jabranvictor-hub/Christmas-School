import React, { useMemo } from 'react';

interface SnowEffectProps {
  enabled: boolean;
}

export const SnowEffect: React.FC<SnowEffectProps> = ({ enabled }) => {
  const flakes = useMemo(() => {
    return Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      left: `${(i * 3.6 + (i % 5) * 2) % 98}%`,
      animationDuration: `${7 + (i % 6) * 2.2}s`,
      animationDelay: `${(i * 0.45) % 6}s`,
      size: 4 + (i % 4) * 2.5,
      opacity: 0.35 + (i % 5) * 0.12,
    }));
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden"
    >
      {flakes.map((f) => (
        <span
          key={f.id}
          className="absolute top-0 rounded-full bg-white/90 shadow-sm shadow-white/40 animate-snow"
          style={{
            left: f.left,
            width: `${f.size}px`,
            height: `${f.size}px`,
            opacity: f.opacity,
            animationDuration: f.animationDuration,
            animationDelay: f.animationDelay,
          }}
        />
      ))}
    </div>
  );
};
