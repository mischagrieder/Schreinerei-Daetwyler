import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Instagram, Clock, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { company } from '@/data/company';
import { leistungen } from '@/data/leistungen';
import { cn } from '@/lib/utils';
import logo from '@/assets/daetwyler-logo.png';

const navItems = [
  { label: 'Leistungen', to: '/leistungen', children: leistungen.map((l) => ({ label: l.title, to: `/leistungen/${l.slug}` })) },
  { label: 'Projekte', to: '/projekte' },
  { label: 'Über uns', to: '/ueber-uns' },
  { label: 'Jobs & Lehre', to: '/jobs' },
  { label: 'Kontakt', to: '/kontakt' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* Topbar */}
      <div className="hidden bg-secondary text-white/80 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs">
          <p className="flex items-center gap-2">
            <Clock size={13} className="text-accent" aria-hidden="true" />
            Mo–Do 07:00–12:00 / 13:30–17:00 · Fr bis 16:00
          </p>
          <div className="flex items-center gap-6">
            <a href={`mailto:${company.email}`} className="transition-colors hover:text-white">
              {company.email}
            </a>
            <a
              href={company.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Instagram size={13} /> Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          'border-b transition-all duration-300',
          scrolled ? 'border-border bg-white/95 shadow-sm backdrop-blur-md' : 'border-transparent bg-white'
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3.5">
          <Link to="/" aria-label="Zur Startseite" className="shrink-0">
            <img src={logo} alt="Dätwyler Küchenbau & Schreinerei AG" className="h-11 w-auto" width="225" height="100" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.to} className="group relative">
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      cn(
                        'flex items-center gap-1 rounded-sm px-4 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-accent',
                        isActive && 'text-accent'
                      )
                    }
                  >
                    {item.label}
                    <ChevronDown size={14} className="transition-transform group-hover:rotate-180" aria-hidden="true" />
                  </NavLink>
                  <div className="invisible absolute left-0 top-full z-50 w-56 translate-y-2 rounded-sm border border-border bg-white opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="p-2">
                      {item.children.map((c) => (
                        <NavLink
                          key={c.to}
                          to={c.to}
                          className={({ isActive }) =>
                            cn(
                              'block rounded-sm px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-accent',
                              isActive && 'text-accent'
                            )
                          }
                        >
                          {c.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'rounded-sm px-4 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-accent',
                      isActive && 'text-accent'
                    )
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${company.phoneIntl}`}
              className="flex items-center gap-2 text-sm font-bold text-foreground transition-colors hover:text-accent"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-accent">
                <Phone size={15} aria-hidden="true" />
              </span>
              {company.phone}
            </a>
            <Button asChild className="rounded-sm bg-accent px-5 font-bold text-white hover:bg-accent/90">
              <Link to="/kontakt">Offerte anfragen</Link>
            </Button>
          </div>

          <button
            className="rounded-sm p-2 text-foreground lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Menü schliessen' : 'Menü öffnen'}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-b border-border bg-white shadow-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4" aria-label="Mobile Navigation">
            <Link to="/" className="border-b border-border py-3 text-sm font-semibold text-foreground/80">
              Startseite
            </Link>
            {navItems.map((item) => (
              <React.Fragment key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    cn('border-b border-border py-3 text-sm font-semibold text-foreground/80', isActive && 'text-accent')
                  }
                >
                  {item.label}
                </NavLink>
                {item.children && (
                  <div className="grid grid-cols-2 gap-x-4 border-b border-border py-2 pl-4">
                    {item.children.map((c) => (
                      <NavLink key={c.to} to={c.to} className="py-1.5 text-sm text-muted-foreground hover:text-accent">
                        {c.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <Button asChild variant="outline" className="w-full rounded-sm border-foreground/20 font-bold">
                <a href={`tel:${company.phoneIntl}`}>
                  <Phone size={15} className="mr-2" /> {company.phone}
                </a>
              </Button>
              <Button asChild className="w-full rounded-sm bg-accent font-bold text-white hover:bg-accent/90">
                <Link to="/kontakt">Offerte anfragen</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
