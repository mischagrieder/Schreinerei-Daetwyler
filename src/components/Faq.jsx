import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { faq } from '@/data/faq';
import { company } from '@/data/company';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function Faq() {
  return (
    <section className="bg-muted py-24 lg:py-32" aria-labelledby="faq-heading">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.9fr,1.1fr]">
        <div>
          <SectionHeading
            kicker="Häufige Fragen"
            title="Gut zu wissen"
            text="Die häufigsten Fragen rund um Offerte, Ablauf und Zusammenarbeit — kurz beantwortet. Ihre Frage ist nicht dabei? Rufen Sie uns an."
          />
          <Reveal delay={0.1} className="mt-8 hidden rounded-sm bg-secondary p-6 text-white lg:block">
            <p className="font-display text-lg font-extrabold">Lieber direkt fragen?</p>
            <p className="mt-2 text-sm text-white/70">
              Wir nehmen uns gerne Zeit für Ihr Anliegen — persönlich und unkompliziert.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-sm bg-accent font-bold text-white hover:bg-accent/90">
                <a href={`tel:${company.phoneIntl}`}>
                  <Phone size={15} className="mr-2" aria-hidden="true" />
                  {company.phone}
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-sm border-white/40 bg-transparent font-bold text-white hover:bg-white hover:text-secondary">
                <Link to="/kontakt">Offerte anfragen</Link>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="rounded-sm border border-border bg-white px-6">
            {faq.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border last:border-b-0">
                <AccordionTrigger className="py-5 font-display text-base font-bold text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
