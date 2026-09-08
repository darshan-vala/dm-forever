import React from 'react';
import { ToastProvider } from './components/ui/Toast';
import { FloatingNav } from './components/ui/FloatingNav';
import { FloatingAudio } from './components/ui/FloatingAudio';
import { Hero } from './sections/Hero';
import { Countdown } from './sections/Countdown';
import { Celebrations } from './sections/Celebrations';
import { FamilySection } from './sections/FamilySection';
import { RsvpSection } from './sections/RsvpSection';
import { Venue } from './sections/Venue';
import { ForeverFooter } from './sections/ForeverFooter';

export const App: React.FC = () => {
  return (
    <ToastProvider>
      <div className="relative min-h-screen bg-ivory-100 text-charcoal-800 font-sans selection:bg-burgundy-600 selection:text-ivory-50 overflow-x-hidden">
        {/* Floating Minimal Luxury Navigation */}
        <FloatingNav />

        {/* Floating Music Control */}
        <FloatingAudio />

        {/* Visual Narrative Progression */}
        <main>
          {/* 1. WELCOME */}
          <Hero />

          {/* 2. COUNTDOWN TO FOREVER */}
          <Countdown />

          {/* 3. THE WEDDING CELEBRATIONS (Day 1 & Day 2) */}
          <Celebrations />

          {/* 4. FAMILY BLESSINGS */}
          <FamilySection />

          {/* 5. RSVP */}
          <RsvpSection />

          {/* 6. VENUE */}
          <Venue />
        </main>

        {/* AND SO, OUR FOREVER BEGINS */}
        <ForeverFooter />
      </div>
    </ToastProvider>
  );
};

export default App;
