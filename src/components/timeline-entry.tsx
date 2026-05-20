"use client";

import { TimelineItem } from "@/data/timeline";

export function TimelineEntry({ item, isLast }: { item: TimelineItem; isLast: boolean }) {
  return (
    <div className="relative flex gap-6 pb-8">
      {/* Timeline line with glow effect */}
      {!isLast && (
        <div className="absolute left-[27px] top-[56px] bottom-0 w-[2px]">
          {/* Base line */}
          <div className="absolute inset-0 bg-zinc-200" />

          {/* Animated glow wave */}
          <div className="timeline-glow absolute inset-0 w-full">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/80 via-blue-400/60 to-transparent blur-sm" />
          </div>
        </div>
      )}

      {/* Logo with pulse effect */}
      <div className="relative flex-shrink-0 w-14 h-14 rounded-full bg-white border-2 border-zinc-200 overflow-hidden flex items-center justify-center logo-pulse">
        {/* Glow ring */}
        <div className="absolute inset-0 rounded-full bg-blue-400/20 animate-ping" style={{ animationDuration: '3s' }} />

        {item.logoUrl ? (
          <img
            src={item.logoUrl}
            alt={item.organization}
            className="w-10 h-10 object-contain relative z-10"
          />
        ) : (
          <div className="w-10 h-10 bg-zinc-100 rounded-full relative z-10" />
        )}
      </div>

      {/* Content */}
      <div className="grid flex-1 grid-cols-1 gap-1 pt-2 sm:grid-cols-[7.5rem_1fr] sm:gap-4">
        <div className="text-xs text-zinc-500 whitespace-nowrap">
          {item.date}
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-serif mb-1">{item.title}</h3>
          <p className="text-sm text-zinc-600 leading-relaxed">
            {item.organization}
          </p>
        </div>
      </div>

      <style jsx>{`
        .timeline-glow {
          animation: wave-up 3s ease-in-out infinite;
        }

        @keyframes wave-up {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }

        .logo-pulse:hover .absolute {
          animation-play-state: running;
        }
      `}</style>
    </div>
  );
}
