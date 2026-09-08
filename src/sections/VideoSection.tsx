import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { weddingConfig } from '../config/wedding';
import { OrnamentalDivider } from '../components/ui/OrnamentalBorder';
import { VideoModal } from '../components/common/VideoModal';

export const VideoSection: React.FC = () => {
  const { cinematicVideo } = weddingConfig;
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative py-24 sm:py-32 bg-charcoal-950 text-ivory-50 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold block mb-2"
          >
            Cinematic Highlights
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl tracking-wide text-ivory-100 font-medium"
          >
            {cinematicVideo.heading}
          </motion.h2>

          <OrnamentalDivider variant="lotus" color="#B89758" className="my-5" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm text-ivory-300 font-light leading-relaxed max-w-md mx-auto"
          >
            {cinematicVideo.subheading}
          </motion.p>
        </div>

        {/* Cinematic Video Showcase Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden border-2 border-gold-400/40 shadow-2xl group cursor-pointer aspect-video bg-charcoal-900"
          onClick={() => setIsVideoOpen(true)}
        >
          {/* Poster Image */}
          <img
            src={cinematicVideo.posterImage}
            alt="Darshan & Mansi Wedding Film"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-75 contrast-105"
            loading="lazy"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent" />

          {/* Central Play Button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gold-500/20 backdrop-blur-md border border-gold-400/80 flex items-center justify-center text-gold-300 shadow-gold-glow mb-4 group-hover:bg-gold-500/30 transition-all"
            >
              <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-gold-400 text-gold-400 translate-x-1" />
            </motion.div>

            <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-ivory-100 font-medium">
              Watch The Film Teaser
            </span>
            <span className="text-[11px] text-gold-300/80 tracking-widest mt-1">
              Surat, Gujarat
            </span>
          </div>

          {/* Corner linework frames */}
          <span className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gold-400" />
          <span className="absolute top-4 right-4 w-4 h-4 border-t border-r border-gold-400" />
          <span className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-gold-400" />
          <span className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gold-400" />
        </motion.div>
      </div>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl={cinematicVideo.videoUrl}
        title={cinematicVideo.heading}
      />
    </section>
  );
};
