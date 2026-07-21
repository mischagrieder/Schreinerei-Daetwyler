import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, FileText, MessageCircle } from 'lucide-react';
import { company } from '@/data/company';

export default function MobileCtaBar({ onChat, hidden }) {
  const { pathname } = useLocation();
  if (pathname === '/kontakt' || hidden) return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 bg-secondary/90 p-1.5 shadow-2xl shadow-black/40 backdrop-blur-md lg:hidden">
      <a
        href={`tel:${company.phoneIntl}`}
        className="flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold text-white transition-colors active:bg-white/10"
      >
        <Phone size={16} className="text-accent" aria-hidden="true" />
        Anrufen
      </a>
      <button
        type="button"
        onClick={onChat}
        aria-label="Chat öffnen"
        className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors active:bg-white/10"
      >
        <MessageCircle size={18} aria-hidden="true" />
      </button>
      <Link
        to="/kontakt"
        className="flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-bold text-white transition-colors active:bg-accent/80"
      >
        <FileText size={16} aria-hidden="true" />
        Offerte
      </Link>
    </div>
  );
}
