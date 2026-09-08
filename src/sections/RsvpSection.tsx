import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/wedding';
import { OrnamentalDivider } from '../components/ui/OrnamentalBorder';
import { ExternalLink, Heart } from 'lucide-react';

export const RsvpSection: React.FC = () => {
  const { rsvp } = weddingConfig;

  return (
    <section id="rsvp" className="relative py-24 sm:py-36 bg-ivory-50 text-charcoal-800 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-gold-600 font-semibold block mb-2"
        >
          Join the Celebration
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl tracking-wide text-burgundy-800 font-medium"
        >
          {rsvp.heading}
        </motion.h2>

        <OrnamentalDivider variant="diamond" className="my-5" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base text-charcoal-600 font-light leading-relaxed max-w-lg mx-auto"
        >
          &ldquo;{rsvp.subheading}&rdquo;
        </motion.p>

        {/* RSVP Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mt-12 bg-ivory-100 rounded-3xl p-10 sm:p-14 border border-gold-300/80 shadow-luxury max-w-lg mx-auto"
        >
          {/* Corner Accents */}
          <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-gold-400" />
          <span className="absolute top-3 right-3 w-3 h-3 border-t border-r border-gold-400" />
          <span className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-gold-400" />
          <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-gold-400" />

          <Heart className="w-8 h-8 text-gold-500 mx-auto mb-5 opacity-80" />

          <p className="font-serif text-lg sm:text-xl text-burgundy-800 font-medium mb-2 leading-snug">
            We would love to have you with us.
          </p>
          <p className="text-sm text-charcoal-500 font-light mb-8 leading-relaxed">
            Kindly fill in the RSVP form so we can celebrate together.
          </p>

          <a
            href={rsvp.googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-full bg-burgundy-800 hover:bg-burgundy-700 text-ivory-50 font-medium uppercase tracking-[0.25em] text-xs sm:text-sm border border-gold-400/50 shadow-luxury hover:shadow-gold-glow transition-all duration-300 group"
          >
            <span>RSVP Now</span>
            <ExternalLink className="w-3.5 h-3.5 text-gold-300 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <p className="text-xs text-charcoal-400 mt-4 font-light">
            Opens in a new tab &bull; Takes less than a minute
          </p>
        </motion.div>
      </div>
    </section>
  );
};
