import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, FileText } from 'lucide-react';
import { company } from '@/data/company';

export default function MobileCtaBar() {
  const { pathname } = useLocation();
  if (pathname === '/kontakt') return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/10 bg-secondary/95 backdrop-blur-md lg:hidden">
      <a
        href={`tel:${company.phoneIntl}`}
        className="flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-white transition-colors active:bg-white/10"
      >
        <Phone size={16} className="text-accent" aria-hidden="true" />
        Anrufen
      </a>
      <Link
        to="/kontakt"
        className="flex items-center justify-center gap-2 bg-accent py-3.5 text-sm font-bold text-white transition-colors active:bg-accent/80"
      >
        <FileText size={16} aria-hidden="true" />
        Offerte anfragen
      </Link>
    </div>
  );
}
