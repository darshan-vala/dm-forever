import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/wedding';
import { OrnamentalDivider } from '../components/ui/OrnamentalBorder';
import { Heart } from 'lucide-react';

export const Story: React.FC = () => {
  const { story, couple } = weddingConfig;

  return (
    <section id="story" className="relative py-24 sm:py-32 bg-ivory-50 text-charcoal-800 overflow-hidden">
      {/* Subtle background ornamentation */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
      <div className="absolute -right-24 top-1/4 w-96 h-96 rounded-full bg-blush/30 blur-3xl pointer-events-none" />
      <div className="absolute -left-24 bottom-1/4 w-96 h-96 rounded-full bg-champagne-light/50 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-gold-600 font-semibold block mb-2"
          >
            A Chapter Written in Love
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl tracking-wide text-burgundy-800 font-medium"
          >
            {story.heading}
          </motion.h2>

          <OrnamentalDivider variant="diamond" className="my-5" />

          {/* Exact Copy Required */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 p-6 sm:p-8 bg-ivory-100/80 rounded-2xl border border-gold-300/40 shadow-luxury"
          >
            <p className="font-cormorant italic text-xl sm:text-2xl text-charcoal-800 leading-relaxed font-normal">
              &ldquo;Some stories begin with a moment.
              <br />
              Some grow through countless little moments.
            </p>
            <p className="font-cormorant italic text-xl sm:text-2xl text-burgundy-700 leading-relaxed font-semibold mt-4">
              Ours brought us here — to the beginning of forever.&rdquo;
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-xs tracking-widest text-gold-600 uppercase font-medium">
              <span>{couple.groom}</span>
              <Heart className="w-3 h-3 fill-burgundy-600 text-burgundy-600" />
              <span>{couple.bride}</span>
            </div>
          </motion.div>
        </div>

        {/* Visual Story Chapters (Configurable) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {story.chapters.map((chapter, idx) => (
            <motion.div
              key={chapter.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="group relative bg-ivory-100 rounded-2xl overflow-hidden border border-gold-300/40 hover:border-gold-400/80 transition-all duration-300 hover:shadow-luxury-lg flex flex-col"
            >
              {chapter.image && (
                <div className="relative aspect-[4/3] overflow-hidden bg-champagne-light">
                  <img
                    src={chapter.image}
                    alt={chapter.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 font-serif text-xs tracking-widest uppercase text-ivory-100 font-medium">
                    Chapter 0{idx + 1}
                  </span>
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <span className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold mb-1">
                  {chapter.subtitle}
                </span>
                <h3 className="font-serif text-xl text-burgundy-800 font-medium mb-3">
                  {chapter.title}
                </h3>
                <p className="text-sm text-charcoal-600 font-light leading-relaxed flex-1">
                  {chapter.text}
                </p>
              </div>

              {/* Delicate bottom gold accent line */}
              <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-gold-400 to-burgundy-600 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
