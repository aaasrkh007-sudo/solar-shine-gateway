import { useEffect, useState } from "react";
import { Zap } from "lucide-react";

export function Preloader() {
  const [mounted, setMounted] = useState(true);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setHidden(true), 1500);
    const removeTimer = setTimeout(() => setMounted(false), 2050);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const restore = () => {
      document.body.style.overflow = prevOverflow;
    };
    const restoreTimer = setTimeout(restore, 1500);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      clearTimeout(restoreTimer);
      restore();
    };
  }, []);

  if (!mounted) return null;

  const particles = Array.from({ length: 10 });

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading Professional Energiez"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-500 ease-out ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ backgroundColor: "#071A2F" }}
    >
      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((_, i) => (
          <span
            key={i}
            className="preloader-particle absolute block h-1.5 w-1.5 rounded-full bg-amber-300/70"
            style={{
              left: `${(i * 97) % 100}%`,
              top: `${(i * 53) % 100}%`,
              animationDelay: `${(i % 5) * 0.4}s`,
              animationDuration: `${4 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      {/* Icon with glow */}
      <div className="relative flex items-center justify-center">
        <span className="preloader-glow absolute h-40 w-40 rounded-full bg-amber-400/30 blur-3xl" />
        <span className="preloader-glow-ring absolute h-24 w-24 rounded-full bg-amber-300/20 blur-xl" />
        <Zap
          className="preloader-zap relative h-16 w-16 text-amber-300 drop-shadow-[0_0_18px_rgba(251,191,36,0.85)]"
          strokeWidth={2.25}
          fill="currentColor"
        />
      </div>

      {/* Text */}
      <div className="mt-8 text-center px-6">
        <h2
          className="text-2xl sm:text-3xl font-semibold tracking-tight text-white"
          style={{ fontFamily: '"Space Grotesk", ui-sans-serif, system-ui, sans-serif' }}
        >
          Professional Energiez
        </h2>
        <p className="mt-2 text-sm sm:text-base text-amber-200/80">
          Powering the Future...
        </p>
      </div>

      {/* Loading bar */}
      <div className="mt-8 h-1.5 w-56 sm:w-72 overflow-hidden rounded-full bg-white/10">
        <div
          className="preloader-bar h-full rounded-full"
          style={{
            background:
              "linear-gradient(90deg, #fde047 0%, #fbbf24 50%, #f97316 100%)",
            boxShadow: "0 0 12px rgba(251,191,36,0.7)",
          }}
        />
      </div>

      <style>{`
        @keyframes preloader-pulse {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 12px rgba(251,191,36,0.7)); }
          50% { transform: scale(1.08); filter: drop-shadow(0 0 26px rgba(251,191,36,1)); }
        }
        @keyframes preloader-glow {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        @keyframes preloader-float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(-40px) translateX(10px); opacity: 0; }
        }
        @keyframes preloader-fill {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .preloader-zap { animation: preloader-pulse 1.4s ease-in-out infinite; }
        .preloader-glow { animation: preloader-glow 1.6s ease-in-out infinite; }
        .preloader-glow-ring { animation: preloader-glow 2s ease-in-out infinite; }
        .preloader-particle { animation: preloader-float linear infinite; }
        .preloader-bar { width: 0%; animation: preloader-fill 1.5s ease-out forwards; }
        @media (prefers-reduced-motion: reduce) {
          .preloader-zap, .preloader-glow, .preloader-glow-ring, .preloader-particle { animation: none; }
          .preloader-bar { animation: preloader-fill 0.4s linear forwards; }
        }
      `}</style>
    </div>
  );
}

export default Preloader;
