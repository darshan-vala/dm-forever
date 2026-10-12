import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/wedding';
import { MandalaMotif } from '../components/ui/MandalaMotif';
import { OrnamentalDivider } from '../components/ui/OrnamentalBorder';
import { Heart, ArrowUp, ExternalLink } from 'lucide-react';
import { InstagramIcon } from '../components/ui/InstagramIcon';

export const ForeverFooter: React.FC = () => {
  const { couple, wedding, venue, social } = weddingConfig;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-24 sm:py-36 bg-gradient-to-b from-charcoal-950 via-burgundy-950 to-charcoal-950 text-ivory-50 text-center overflow-hidden">
      {/* Background vignette & ambient lighting */}
      <div className="absolute inset-0 bg-radial-vignette opacity-80 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-burgundy-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 flex flex-col items-center">
        {/* Subtle Animated Sacred Mandala Motif */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
          className="mb-8"
        >
          <MandalaMotif size={84} color="#D4AF37" opacity={0.8} />
        </motion.div>

        {/* Emotion Climax Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="font-serif text-sm sm:text-base md:text-lg uppercase tracking-[0.35em] text-gold-300/90 font-light mb-4"
        >
          AND SO, OUR FOREVER BEGINS.
        </motion.p>

        {/* Main Couple Names */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.02 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-[0.15em] uppercase text-ivory-50 font-medium my-2"
        >
          <span>{couple.bride}</span>
          <span className="font-script lowercase text-2xl sm:text-4xl md:text-5xl text-gold-400 mx-3 sm:mx-4 select-none inline-block">
            &amp;
          </span>
          <span>{couple.groom}</span>
        </motion.h2>

        {/* Wedding Display Dates */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.04 }}
          className="font-serif text-sm sm:text-lg tracking-[0.3em] uppercase text-gold-200 mt-2 font-light"
        >
          {wedding.displayDates}
        </motion.p>

        {/* Venue Location Line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.05 }}
          className="text-xs uppercase tracking-[0.25em] text-ivory-400 mt-2 font-light"
        >
          {venue.name} • Surat, Gujarat
        </motion.p>

        {/* Latest Updates on Instagram */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.055 }}
          className="mt-8 mb-2"
        >
          <a
            href={social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3.5 px-6 py-3 rounded-full bg-gradient-to-r from-charcoal-900/90 via-burgundy-950/80 to-charcoal-900/90 hover:from-burgundy-900/90 hover:to-charcoal-900 border border-gold-400/40 hover:border-gold-300 shadow-luxury hover:shadow-gold-glow transition-all duration-300"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <InstagramIcon className="w-4 h-4 text-white" />
            </div>
            <div className="text-left">
              <span className="block text-[10px] uppercase tracking-[0.22em] text-gold-300/90 font-medium">
                Get latest updates on
              </span>
              <span className="font-serif text-sm tracking-wider text-ivory-100 group-hover:text-gold-200 transition-colors font-medium">
                {social.instagram.handle}
              </span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-gold-400/80 group-hover:text-gold-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ml-1" />
          </a>
        </motion.div>

        {/* Subtle Animated Ornamental Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.06 }}
          className="w-full max-w-xs my-8"
        >
          <OrnamentalDivider variant="grand" color="#DEC9A3" />
        </motion.div>

        {/* Back to Top button */}
        <button
          onClick={scrollToTop}
          className="group p-3 rounded-full bg-ivory-50/10 hover:bg-gold-500/20 text-ivory-200 hover:text-gold-200 border border-gold-400/30 transition-all duration-300 flex items-center gap-2 mb-10"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          <span className="text-[10px] uppercase tracking-widest font-medium pr-1">Back to Top</span>
        </button>

        {/* Bottom Credits / Note */}
        <div className="pt-8 border-t border-gold-400/20 text-center text-xs text-ivory-400 font-light tracking-widest uppercase flex items-center justify-center gap-1.5">
          <span>Made with</span>
          <Heart className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
          <span>for Mansi &amp; Darshan</span>
        </div>
      </div>
    </footer>
  );
};
