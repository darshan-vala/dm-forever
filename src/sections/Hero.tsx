import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { weddingConfig } from '../config/wedding';
import { MandalaMotif } from '../components/ui/MandalaMotif';
import { OrnamentalDivider } from '../components/ui/OrnamentalBorder';

export const Hero: React.FC = () => {
  const { couple, wedding } = weddingConfig;

  const handleEnter = () => {
    const target = document.getElementById('countdown');
    if (target) {
      const y = target.getBoundingClientRect().top + window.pageYOffset - 30;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-charcoal-950"
    >
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/main-cover.webp"
          alt="Mansi & Darshan Wedding Celebration"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.7] contrast-[1.05]"
          fetchPriority="high"
          loading="eager"
        />
        {/* Layered luxury editorial gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-charcoal-950/75" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 py-20 flex flex-col items-center justify-center">
        {/* Sacred Traditional Mandala Motif */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-4 sm:mb-6"
        >
          <MandalaMotif size={72} color="#D4AF37" opacity={0.85} />
        </motion.div>

        {/* Small Invitation Topline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-xs sm:text-sm uppercase tracking-[0.35em] text-gold-300/90 font-medium mb-3"
        >
          An Auspicious Union
        </motion.p>

        {/* Main Couple Names */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.12em] uppercase text-ivory-50 font-medium leading-tight drop-shadow-lg"
        >
          <span>{couple.bride}</span>
          <span className="font-script lowercase text-3xl sm:text-5xl md:text-6xl text-gold-400 mx-3 sm:mx-5 select-none inline-block">
            &amp;
          </span>
          <span>{couple.groom}</span>
        </motion.h1>

        {/* Ornamental Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-full"
        >
          <OrnamentalDivider variant="diamond" className="my-5 sm:my-7" />
        </motion.div>

        {/* Dates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mb-6"
        >
          <p className="font-serif tracking-[0.25em] text-base sm:text-xl md:text-2xl text-gold-200 uppercase font-light">
            {wedding.displayDates}
          </p>
          <p className="text-xs sm:text-sm tracking-[0.25em] text-ivory-300/80 uppercase mt-1">
            Surat, Gujarat
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="font-cormorant italic text-xl sm:text-2xl md:text-3xl text-champagne max-w-xl mx-auto mb-4 leading-relaxed font-light"
        >
          {couple.tagline}
        </motion.p>

        {/* Small Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="text-xs sm:text-sm text-ivory-200/80 max-w-md mx-auto leading-relaxed tracking-wide font-light whitespace-pre-line mb-10"
        >
          {couple.heroSubtext}
        </motion.p>

        {/* Elegant CTA: ENTER THE CELEBRATION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
        >
          <button
            onClick={handleEnter}
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-ivory-50/10 hover:bg-gold-500/20 text-ivory-100 hover:text-gold-200 border border-gold-400/50 hover:border-gold-300 transition-all duration-300 backdrop-blur-md shadow-luxury hover:shadow-gold-glow"
          >
            <span className="text-xs sm:text-sm uppercase tracking-[0.25em] font-medium">
              Enter The Celebration
            </span>
            <ChevronDown className="w-4 h-4 text-gold-400 group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Subtle bottom scroll prompt */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none z-20 opacity-60">
        <span className="text-[10px] uppercase tracking-[0.3em] text-ivory-300 font-light flex items-center gap-2">
          <Sparkles className="w-3 h-3 text-gold-400" />
          Scroll to explore
          <Sparkles className="w-3 h-3 text-gold-400" />
        </span>
      </div>
    </section>
  );
};
