import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';
import { weddingConfig } from '../../config/wedding';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'Celebrations', href: '#celebrations' },
  { name: 'RSVP', href: '#rsvp' },
  { name: 'Venue', href: '#venue' },
];

export const FloatingNav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 120);

      // Track active section for indicator
      const sections = ['home', 'celebrations', 'rsvp', 'venue'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -40;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 pointer-events-none px-4 sm:px-6 py-4 sm:py-5 flex justify-center`}
      >
        <div
          className={`pointer-events-auto flex items-center justify-between gap-6 sm:gap-10 px-5 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-500 ${
            scrolled
              ? 'bg-ivory-50/90 backdrop-blur-md shadow-luxury-lg border border-gold-300/60 text-charcoal-900'
              : 'bg-charcoal-950/40 backdrop-blur-sm border border-gold-200/20 text-ivory-100'
          }`}
        >
          {/* Subtle Couple Monogram */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span
              className={`font-serif tracking-widest text-sm sm:text-base font-medium transition-colors ${
                scrolled ? 'text-burgundy-700 group-hover:text-gold-600' : 'text-ivory-100 group-hover:text-gold-300'
              }`}
            >
              {weddingConfig.couple.groom} &amp; {weddingConfig.couple.bride}
            </span>
            <Heart className="w-3 h-3 text-gold-500 fill-gold-500/50 group-hover:scale-125 transition-transform" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-medium uppercase tracking-[0.2em]">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative py-1 transition-all hover:text-gold-500 ${
                    isActive
                      ? scrolled
                        ? 'text-burgundy-700 font-semibold'
                        : 'text-gold-300 font-semibold'
                      : scrolled
                      ? 'text-charcoal-600'
                      : 'text-ivory-200/80'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className={`absolute bottom-0 left-0 right-0 h-[1.5px] rounded-full ${
                        scrolled ? 'bg-burgundy-600' : 'bg-gold-400'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Hamburger Trigger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-1.5 rounded-full transition-colors ${
              scrolled ? 'text-charcoal-800 hover:bg-gold-100/50' : 'text-ivory-100 hover:bg-charcoal-800/50'
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Animated Luxury Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-charcoal-950/80 backdrop-blur-xl flex flex-col justify-between p-8"
          >
            <div className="flex items-center justify-between border-b border-gold-400/20 pb-6">
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg tracking-widest text-gold-300 font-medium">
                  {weddingConfig.couple.groom} &amp; {weddingConfig.couple.bride}
                </span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-full text-ivory-100 hover:text-gold-300 transition-colors border border-gold-400/30"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col items-center gap-6 my-auto">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  className="font-serif text-2xl tracking-[0.2em] text-ivory-100 hover:text-gold-400 transition-colors uppercase"
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            <div className="text-center pt-6 border-t border-gold-400/20">
              <p className="text-xs uppercase tracking-[0.25em] text-gold-400/80 mb-2">
                {weddingConfig.wedding.displayDates}
              </p>
              <p className="text-xs text-ivory-300/70 font-light">
                {weddingConfig.venue.name}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
