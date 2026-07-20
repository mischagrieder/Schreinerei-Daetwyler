import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Seite nicht gefunden" description="Diese Seite existiert nicht — zurück zur Startseite der Dätwyler Küchenbau & Schreinerei AG." />
      <section className="flex min-h-[70svh] items-center bg-secondary pt-32 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <p className="font-display text-8xl font-black text-accent">404</p>
          <h1 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            Diese Seite ist wohl noch in der Werkstatt.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-white/70">
            Die gesuchte Seite gibt es nicht (mehr). Kein Problem — auf der Startseite finden Sie alles Wichtige.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-sm bg-accent px-8 font-bold text-white hover:bg-accent/90">
            <Link to="/">
              <ArrowLeft size={17} className="mr-2" aria-hidden="true" />
              Zur Startseite
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
