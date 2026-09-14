import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/wedding';
import { OrnamentalDivider } from '../components/ui/OrnamentalBorder';
import { MapPin, Navigation, Copy, Check, ExternalLink, Compass } from 'lucide-react';
import { useToast } from '../components/ui/Toast';

export const Venue: React.FC = () => {
  const { venue } = weddingConfig;
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(venue.fullAddress);
      setCopied(true);
      showToast('Address copied to clipboard', 'success');
      setTimeout(() => setCopied(false), 3000);
    } catch {
      showToast('Could not copy address automatically', 'info');
    }
  };

  const handleGetDirections = () => {
    window.open(venue.googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="venue" className="relative py-14 sm:py-18 bg-ivory-100 text-charcoal-800 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-gold-600 font-semibold block mb-2"
          >
            The Destination
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl tracking-wide text-burgundy-800 font-medium"
          >
            Where We Celebrate
          </motion.h2>

          <OrnamentalDivider variant="diamond" className="my-5" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm text-charcoal-600 font-light leading-relaxed max-w-md mx-auto"
          >
            Join us in the serene coastal air of Dumas, Surat, as we celebrate love, family, and lifelong promises.
          </motion.p>
        </div>

        {/* Venue Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 bg-ivory-50 rounded-3xl p-8 sm:p-10 border border-gold-300/80 shadow-luxury flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 text-gold-700 text-xs uppercase tracking-widest font-semibold mb-6 border border-gold-300">
                <Compass className="w-3.5 h-3.5 text-gold-600" />
                <span>Ceremony Venue</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-burgundy-800 font-medium tracking-wide mb-3">
                {venue.name}
              </h3>

              <div className="flex items-start gap-3 mt-4 text-charcoal-600">
                <MapPin className="w-5 h-5 text-gold-600 shrink-0 mt-1" />
                <p className="text-sm sm:text-base font-light leading-relaxed">
                  {venue.fullAddress}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gold-200/60 space-y-3 text-xs text-charcoal-500 font-light">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-charcoal-700">Nearest Airport:</span>
                  <span>STV Airport ~8 km</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-charcoal-700">Railway Station:</span>
                  <span>Surat Junction ~20 km</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-charcoal-700">Landmark:</span>
                  <span>Karimbag, Dumas Road</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-gold-200/60 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleGetDirections}
                className="flex-1 py-3.5 px-5 rounded-full bg-burgundy-800 hover:bg-burgundy-700 text-ivory-50 text-xs uppercase tracking-[0.2em] font-medium border border-gold-400/40 shadow-sm hover:shadow-gold-glow transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-gold-300" />
                <span>Get Directions</span>
              </button>

              <button
                onClick={handleCopyAddress}
                className="py-3.5 px-5 rounded-full bg-ivory-100 hover:bg-gold-100 text-charcoal-700 text-xs uppercase tracking-[0.2em] font-medium border border-gold-300 transition-all flex items-center justify-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-gold-600" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-gold-600" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Interactive Map Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-charcoal-900 rounded-3xl overflow-hidden border border-gold-300/80 shadow-luxury relative min-h-[380px] flex flex-col"
          >
            {/* Embedded Google Map */}
            <div className="relative w-full h-full min-h-[360px] flex-1">
              <iframe
                title="Bai Dayakor Hindu Aarogya Bhavan Location Map"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  venue.name + ' ' + venue.fullAddress
                )}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full border-0 filter contrast-[1.05] brightness-95"
                loading="lazy"
                allowFullScreen
              />
            </div>

            {/* Bottom Bar with quick link */}
            <div className="p-4 bg-charcoal-950/90 backdrop-blur-md border-t border-gold-400/30 flex items-center justify-between text-ivory-100 px-6">
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
                <span className="text-gold-300 font-medium">Dumas, Surat, Gujarat</span>
              </div>
              <a
                href={venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest text-ivory-300 hover:text-gold-300 transition-colors flex items-center gap-1.5"
              >
                <span>View Full Map</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
