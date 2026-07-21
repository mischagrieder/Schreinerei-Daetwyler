import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, FileText, MessageCircle } from 'lucide-react';
import { company } from '@/data/company';
import { cn } from '@/lib/utils';

export default function MobileCtaBar({ onChat, hidden }) {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Erst einblenden, wenn die erste Bildschirmhöhe (Hero) weggescrollt ist.
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  if (pathname === '/kontakt' || hidden) return null;

  return (
    <div
      className={cn(
        'fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 bg-secondary/90 p-1.5 shadow-2xl shadow-black/40 backdrop-blur-md transition-all duration-300',
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      )}
    >
      <a
        href={`tel:${company.phoneIntl}`}
        className="flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/10 active:bg-white/10"
      >
        <Phone size={16} className="text-accent" aria-hidden="true" />
        Anrufen
      </a>
      <button
        type="button"
        onClick={onChat}
        aria-label="Chat öffnen"
        className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 active:bg-white/10"
      >
        <MessageCircle size={18} aria-hidden="true" />
      </button>
      <Link
        to="/kontakt"
        className="flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-accent/90 active:bg-accent/80"
      >
        <FileText size={16} aria-hidden="true" />
        Offerte
      </Link>
    </div>
  );
}
