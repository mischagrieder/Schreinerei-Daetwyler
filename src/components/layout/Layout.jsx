import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CtaBand from '@/components/CtaBand';
import MobileCtaBar from '@/components/MobileCtaBar';
import ChatWidget from '@/components/ChatWidget';

export default function Layout() {
  const [chatOpen, setChatOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <a
        href="#inhalt"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Zum Inhalt springen
      </a>
      <Header />
      <main id="inhalt" className="flex-1">
        <Outlet />
      </main>
      <CtaBand />
      <Footer />
      <MobileCtaBar onChat={() => setChatOpen(true)} hidden={chatOpen} />
      <ChatWidget open={chatOpen} setOpen={setChatOpen} />
      <div className="h-24 lg:hidden" aria-hidden="true" />
    </div>
  );
}
