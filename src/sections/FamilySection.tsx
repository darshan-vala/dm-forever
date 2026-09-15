import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/wedding';
import { OrnamentalDivider } from '../components/ui/OrnamentalBorder';
import { MandalaMotif } from '../components/ui/MandalaMotif';
import { Heart } from 'lucide-react';

export const FamilySection: React.FC = () => {
  const { family } = weddingConfig;

  return (
    <section id="family" className="relative py-12 sm:py-16 bg-ivory-100 text-charcoal-800 overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            className="flex justify-center mb-3"
          >
            <MandalaMotif size={40} color="#B89758" opacity={0.8} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.02 }}
            className="font-serif text-3xl sm:text-5xl tracking-wide text-burgundy-800 font-medium"
          >
            {family.heading}
          </motion.h2>

          <OrnamentalDivider variant="diamond" className="my-5" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.04 }}
            className="text-sm text-charcoal-600 font-light leading-relaxed max-w-lg mx-auto"
          >
            {family.subheading}
          </motion.p>
        </div>

        {/* Two Elegant Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
          {/* Mansi's Family */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            className="relative bg-ivory-50 rounded-3xl p-8 sm:p-10 border border-gold-300/60 shadow-luxury text-center flex flex-col items-center justify-between"
          >
            <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-gold-400" />
            <span className="absolute top-3 right-3 w-3 h-3 border-t border-r border-gold-400" />
            <span className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-gold-400" />
            <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-gold-400" />

            <div className="w-full">
              <span className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold block mb-2">
                Bride&apos;s Blessings
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-burgundy-800 font-medium tracking-wide mb-6">
                {family.mansiFamilyTitle}
              </h3>
              <div className="h-px w-16 bg-gold-300 mx-auto mb-6" />

              <div className="space-y-3">
                {family.mansiFamilyMembers.map((member, idx) => (
                  <p
                    key={idx}
                    className="font-serif text-base sm:text-lg text-charcoal-700 italic tracking-wide"
                  >
                    {member}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gold-200/60 w-full flex items-center justify-center gap-2 text-xs text-gold-600 uppercase tracking-widest font-medium">
              <Heart className="w-3 h-3 fill-gold-500 text-gold-500" />
              <span>With Love &amp; Gratitude</span>
            </div>
          </motion.div>

          {/* Darshan's Family */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            className="relative bg-ivory-50 rounded-3xl p-8 sm:p-10 border border-gold-300/60 shadow-luxury text-center flex flex-col items-center justify-between"
          >
            <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-gold-400" />
            <span className="absolute top-3 right-3 w-3 h-3 border-t border-r border-gold-400" />
            <span className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-gold-400" />
            <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-gold-400" />

            <div className="w-full">
              <span className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold block mb-2">
                Groom&apos;s Blessings
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-burgundy-800 font-medium tracking-wide mb-6">
                {family.darshanFamilyTitle}
              </h3>
              <div className="h-px w-16 bg-gold-300 mx-auto mb-6" />

              <div className="space-y-3">
                {family.darshanFamilyMembers.map((member, idx) => (
                  <p
                    key={idx}
                    className="font-serif text-base sm:text-lg text-charcoal-700 italic tracking-wide"
                  >
                    {member}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gold-200/60 w-full flex items-center justify-center gap-2 text-xs text-gold-600 uppercase tracking-widest font-medium">
              <Heart className="w-3 h-3 fill-gold-500 text-gold-500" />
              <span>With Love &amp; Gratitude</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
