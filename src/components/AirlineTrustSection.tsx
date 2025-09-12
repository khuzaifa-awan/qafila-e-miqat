// src/components/AirlineTrustSection.tsx
'use client';

import React, { useEffect, useRef } from 'react';

export default function AirlineTrustSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // refs to keep state without re-renders
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);

  const SPEED_PX_PER_SEC = 60; // change this to adjust auto-scroll speed

  const airlines = [
    { src: '/images/airline-logo/pia.svg', alt: 'PIA' },
    { src: '/images/airline-logo/qatar.svg', alt: 'Qatar Airways' },
    { src: '/images/airline-logo/emirates.svg', alt: 'Fly Emirates' },
    { src: '/images/airline-logo/flyjinnah.svg', alt: 'Fly Jinnah' },
    { src: '/images/airline-logo/Saudi.svg', alt: 'Saudia' },
    { src: '/images/airline-logo/air-blue.svg', alt: 'Air Blue' },
    { src: '/images/airline-logo/etihad.svg', alt: 'Etihad Airways' },
    { src: '/images/airline-logo/airsial.svg', alt: 'Air Sial' },
    { src: '/images/airline-logo/serene.svg', alt: 'Serene' },
  ];

  // ----- Auto-scroll loop using RAF -----
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const step = (ts: number) => {
      if (lastTsRef.current === null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000; // seconds
      lastTsRef.current = ts;

      if (!isDraggingRef.current) {
        // move forward
        container.scrollLeft += SPEED_PX_PER_SEC * dt;

        // seamless loop: when we've scrolled the first half (original list),
        // jump back by half the scrollWidth to create a continuous loop
        const half = container.scrollWidth / 2;
        if (container.scrollLeft >= half) {
          container.scrollLeft -= half;
        }
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTsRef.current = null;
    };
  }, []);

  // ----- Pointer (mouse/touch) handlers -----
  const onPointerDown = (e: React.PointerEvent) => {
    const container = scrollRef.current;
    if (!container) return;

    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    startScrollLeftRef.current = container.scrollLeft;
    try {
      // capture pointer so move/up events fire on container
      container.setPointerCapture?.(e.pointerId);
    } catch {
      // ignore if not supported
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const container = scrollRef.current;
    if (!container) return;
    e.preventDefault();
    const x = e.clientX;
    const walk = (x - startXRef.current) * 1.5; // sensitivity
    container.scrollLeft = startScrollLeftRef.current - walk;
  };

  const endDrag = (e?: React.PointerEvent) => {
    const container = scrollRef.current;
    if (!container) return;
    isDraggingRef.current = false;
    lastTsRef.current = null; // reset time delta so auto-scroll doesn't jump
    try {
      container.releasePointerCapture?.((e as any)?.pointerId);
    } catch {
      // ignore
    }
  };

  return (
    <section className="py-12 bg-[#FCF6EC] overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#444]">
        Fly With Airlines You Trust
      </h2>

      <div
        ref={scrollRef}
        className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
        role="list"
        aria-label="Trusted airline logos carousel"
      >
        {/* Duplicate the array once for seamless looping */}
        <div className="flex items-center gap-12 select-none">
          {airlines.concat(airlines).map((airline, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 py-4"
              style={{ minWidth: 'auto' }}
              role="listitem"
            >
              <img
                src={airline.src}
                alt={airline.alt}
                className="h-16 w-auto"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Optional: style to hide scrollbar if/when shown by browser */}
      <style jsx>{`
        /* hide scrollbar (webkit) */
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
