import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from '../config/wedding';
import { OrnamentalDivider } from '../components/ui/OrnamentalBorder';
import { ChevronDown, Navigation, HelpCircle } from 'lucide-react';

export const TravelInfoSection: React.FC = () => {
  const { faq } = weddingConfig;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 sm:py-32 bg-ivory-50 text-charcoal-800 overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-gold-600 font-semibold block mb-2"
          >
            Guest Assistance
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl tracking-wide text-burgundy-800 font-medium"
          >
            {faq.heading}
          </motion.h2>

          <OrnamentalDivider variant="diamond" className="my-5" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm text-charcoal-600 font-light leading-relaxed max-w-md mx-auto"
          >
            {faq.subheading}
          </motion.p>
        </div>

        {/* Elegant Accordion */}
        <div className="space-y-4">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-ivory-100 rounded-2xl border border-gold-300/60 overflow-hidden shadow-luxury transition-colors"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-gold-600 shrink-0" />
                    <span className="font-serif text-base sm:text-lg text-burgundy-900 font-medium tracking-wide">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-gold-600 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-6 pt-1 sm:px-6 sm:pb-6 text-charcoal-600 text-sm sm:text-base font-light leading-relaxed border-t border-gold-200/50">
                        <p>{item.answer}</p>
                        {item.linkUrl && (
                          <div className="mt-4">
                            <a
                              href={item.linkUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-burgundy-800 text-ivory-50 text-xs uppercase tracking-widest font-medium hover:bg-burgundy-700 transition-colors"
                            >
                              <Navigation className="w-3.5 h-3.5 text-gold-300" />
                              <span>{item.linkText || 'Open Link'}</span>
                            </a>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
