import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryImage } from '../../types/wedding';

interface LightboxProps {
  images: GalleryImage[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  initialIndex,
  isOpen,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Prevent background scroll when lightbox open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Touch Swipe for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStart(null);
  };

  if (!isOpen || images.length === 0) return null;

  const currentImg = images[currentIndex];

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-950/95 backdrop-blur-xl"
        onClick={onClose}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top bar with counter & close button */}
        <div
          className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between text-ivory-100 z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="font-serif tracking-widest text-sm text-gold-300">
            {currentIndex + 1} <span className="opacity-40">/</span> {images.length}
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full text-ivory-300 hover:text-ivory-50 hover:bg-charcoal-800 transition-all border border-gold-400/20"
            aria-label="Close image viewer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-4 sm:left-8 z-10 p-3 rounded-full text-ivory-200 hover:text-gold-300 hover:bg-charcoal-800/80 transition-all border border-gold-400/30"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Image Container with Animation */}
        <div
          className="relative max-w-5xl max-h-[85vh] w-full px-4 sm:px-16 flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            key={currentImg.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="relative flex flex-col items-center"
          >
            <img
              src={currentImg.url}
              alt={currentImg.title}
              className="max-h-[75vh] w-auto object-contain rounded-lg shadow-2xl border border-gold-400/30"
            />
            <div className="mt-4 text-center max-w-lg">
              <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-medium">
                {currentImg.category}
              </span>
              <h4 className="font-serif text-lg sm:text-xl text-ivory-100 tracking-wide mt-0.5">
                {currentImg.title}
              </h4>
              {currentImg.caption && (
                <p className="text-xs sm:text-sm text-ivory-300/80 font-light mt-1">
                  {currentImg.caption}
                </p>
              )}
            </div>
          </motion.div>
        </div>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-4 sm:right-8 z-10 p-3 rounded-full text-ivory-200 hover:text-gold-300 hover:bg-charcoal-800/80 transition-all border border-gold-400/30"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </AnimatePresence>
  );
};
