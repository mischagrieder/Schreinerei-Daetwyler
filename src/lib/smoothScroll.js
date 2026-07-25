import Lenis from 'lenis';

let lenis = null;
let rafId = 0;

// Startet den weichen Scroll für die ganze Seite (nicht bei reduzierter Bewegung).
export function initSmoothScroll() {
  if (typeof window === 'undefined') return null;
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return null;
  if (lenis) return lenis;

  lenis = new Lenis({
    duration: 1.1,
    easing: (t) => 1 - Math.pow(1 - t, 3),
    anchors: true,
  });

  const raf = (time) => {
    lenis?.raf(time);
    rafId = requestAnimationFrame(raf);
  };
  rafId = requestAnimationFrame(raf);

  return lenis;
}

export function destroySmoothScroll() {
  cancelAnimationFrame(rafId);
  lenis?.destroy();
  lenis = null;
}

// Erlaubt anderen Komponenten (z. B. ScrollToTop), die aktive Lenis-Instanz zu nutzen,
// damit programmatische Sprünge nicht mit dem eigenen Scroll-Status kollidieren.
export function getLenis() {
  return lenis;
}
