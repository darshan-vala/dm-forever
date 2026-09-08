import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from '../config/wedding';
import { OrnamentalDivider } from '../components/ui/OrnamentalBorder';
import { Lightbox } from '../components/common/Lightbox';
import { Maximize2 } from 'lucide-react';

export const Gallery: React.FC = () => {
  const { gallery } = weddingConfig;
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') return gallery.images;
    return gallery.images.filter((img) => img.category === activeCategory);
  }, [activeCategory, gallery.images]);

  const handleOpenLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="relative py-24 sm:py-36 bg-ivory-50 text-charcoal-800 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-gold-600 font-semibold block mb-2"
          >
            Memories in Motion
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl tracking-wide text-burgundy-800 font-medium"
          >
            {gallery.heading}
          </motion.h2>

          <OrnamentalDivider variant="diamond" className="my-5" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm text-charcoal-600 font-light leading-relaxed max-w-md mx-auto"
          >
            A curated collection of quiet smiles, radiant joy, and timeless moments leading to our big day.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {gallery.categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-4 sm:px-6 py-2 rounded-full text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 ${
                  isActive
                    ? 'bg-burgundy-800 text-ivory-50 shadow-luxury'
                    : 'bg-ivory-100 hover:bg-gold-100/60 text-charcoal-600 border border-gold-300/40'
                }`}
              >
                {category}
                {isActive && (
                  <motion.span
                    layoutId="activeGalleryPill"
                    className="absolute inset-0 rounded-full border border-gold-400"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Editorial Masonry Columns */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, idx) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative break-inside-avoid rounded-2xl overflow-hidden bg-champagne-light shadow-luxury border border-gold-300/40 cursor-pointer"
                onClick={() => handleOpenLightbox(idx)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                  loading="lazy"
                />

                {/* Elegant Editorial Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-charcoal-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-ivory-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-semibold block mb-1">
                        {image.category}
                      </span>
                      <h4 className="font-serif text-lg text-ivory-100 font-medium">
                        {image.title}
                      </h4>
                      {image.caption && (
                        <p className="text-xs text-ivory-300/80 font-light mt-0.5 line-clamp-1">
                          {image.caption}
                        </p>
                      )}
                    </div>
                    <div className="p-2.5 rounded-full bg-gold-500/20 backdrop-blur-md border border-gold-400/40 text-gold-300">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Corner gold indicator */}
                <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-gold-400/80 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        images={filteredImages}
        initialIndex={selectedPhotoIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
};
