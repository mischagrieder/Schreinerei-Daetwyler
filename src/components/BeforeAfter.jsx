import React, { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Drag-Slider für Vorher/Nachher-Vergleich.
 * Funktioniert mit Maus, Touch und Tastatur.
 */
export default function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt = 'Vorher',
  afterAlt = 'Nachher',
  className = '',
  initial = 55,
}) {
  const wrapRef = useRef(null);
  const [pos, setPos] = useState(initial);
  const [dragging, setDragging] = useState(false);

  const updateFromClientX = useCallback((clientX) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPos((x / rect.width) * 100);
  }, []);

  const onPointerDown = (e) => {
    e.currentTarget.setPointerCapture?.(e.pointerId);
    setDragging(true);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e) => {
    if (!dragging) return;
    updateFromClientX(e.clientX);
  };
  const stop = (e) => {
    setDragging(false);
    e?.currentTarget?.releasePointerCapture?.(e.pointerId);
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 5));
    if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 5));
    if (e.key === 'Home') setPos(0);
    if (e.key === 'End') setPos(100);
  };

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e) => updateFromClientX(e.clientX);
    const onUp = () => setDragging(false);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, [dragging, updateFromClientX]);

  return (
    <div
      ref={wrapRef}
      className={`relative select-none overflow-hidden rounded-sm bg-secondary ${className}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={stop}
      onPointerCancel={stop}
    >
      {/* Nachher-Bild als Basis */}
      <img
        src={afterSrc}
        alt={afterAlt}
        draggable={false}
        className="pointer-events-none block h-full w-full select-none object-cover"
      />

      {/* Vorher-Bild geclippt */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={beforeSrc}
          alt={beforeAlt}
          draggable={false}
          className="block h-full w-full select-none object-cover grayscale"
        />
      </div>

      {/* Labels */}
      <span className="pointer-events-none absolute left-3 top-3 rounded-sm bg-white/95 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-widest text-foreground shadow-sm">
        Vorher
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-sm bg-accent px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-widest text-white shadow-sm">
        Nachher
      </span>

      {/* Divider mit Griff */}
      <div
        className="pointer-events-none absolute inset-y-0 flex w-[2px] items-center justify-center bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
        style={{ left: `calc(${pos}% - 1px)` }}
      >
        <button
          type="button"
          role="slider"
          aria-label="Vorher-Nachher-Vergleich"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={onKeyDown}
          onPointerDown={(e) => e.stopPropagation()}
          className={`pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border-2 border-accent bg-white shadow-xl transition-transform ${
            dragging ? 'scale-110' : 'hover:scale-105'
          }`}
        >
          <span className="flex items-center gap-1 text-accent">
            <svg width="10" height="14" viewBox="0 0 10 14" fill="none" aria-hidden="true">
              <path d="M9 1L2 7l7 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg width="10" height="14" viewBox="0 0 10 14" fill="none" aria-hidden="true">
              <path d="M1 1l7 6-7 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
