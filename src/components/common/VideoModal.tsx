import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  title: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl,
  title,
}) => {
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

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-950/95 backdrop-blur-xl p-4 sm:p-8"
        onClick={onClose}
      >
        <div
          className="relative max-w-4xl w-full bg-charcoal-900 rounded-2xl overflow-hidden border border-gold-400/40 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-5 border-b border-gold-400/20 text-ivory-100">
            <h4 className="font-serif tracking-widest text-base sm:text-lg text-gold-300">
              {title}
            </h4>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-ivory-300 hover:text-ivory-50 hover:bg-charcoal-800 transition-colors"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video Player */}
          <div className="relative aspect-video bg-black flex items-center justify-center">
            {videoUrl ? (
              <video
                src={videoUrl}
                controls
                autoPlay
                className="w-full h-full object-cover"
              >
                Your browser does not support HTML video.
              </video>
            ) : (
              <div className="text-center p-8 text-ivory-300">
                <p className="font-serif text-lg text-gold-300 mb-2">Cinematic Video Coming Soon</p>
                <p className="text-xs uppercase tracking-widest text-ivory-400">
                  Our wedding film teaser will be unveiled shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};
