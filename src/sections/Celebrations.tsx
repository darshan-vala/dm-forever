import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from '../config/wedding';
import { OrnamentalDivider } from '../components/ui/OrnamentalBorder';
import { MandalaMotif } from '../components/ui/MandalaMotif';
import {
  SunMedium,
  Sparkles,
  Music,
  Flame,
  HeartHandshake,
  Calendar,
  Clock,
  User,
} from 'lucide-react';
import type { WeddingEvent } from '../types/wedding';

export const Celebrations: React.FC = () => {
  const { events } = weddingConfig;
  const [activeTab, setActiveTab] = useState<string>(events[0].id);

  // Group events by day
  const day1Events = events.filter((e) => e.dayNumber === 1);
  const day2Events = events.filter((e) => e.dayNumber === 2);

  const getEventIcon = (name: string, className: string = 'w-5 h-5') => {
    switch (name) {
      case 'SunMedium':
        return <SunMedium className={className} />;
      case 'Sparkles':
        return <Sparkles className={className} />;
      case 'Music':
        return <Music className={className} />;
      case 'Flame':
        return <Flame className={className} />;
      case 'HeartHandshake':
      default:
        return <HeartHandshake className={className} />;
    }
  };

  return (
    <section id="celebrations" className="relative pt-16 pb-12 sm:pt-20 sm:pb-14 bg-ivory-100 text-charcoal-800 overflow-hidden">
      {/* Subtle background ambient elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
      <div className="absolute -left-40 top-1/3 w-80 h-80 rounded-full bg-gold-200/20 blur-3xl pointer-events-none" />
      <div className="absolute -right-40 bottom-1/3 w-80 h-80 rounded-full bg-blush/30 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <MandalaMotif size={32} color="#B89758" opacity={0.7} />
            <span className="text-xs uppercase tracking-[0.3em] text-gold-600 font-semibold">
              The Journey of Celebrations
            </span>
            <MandalaMotif size={32} color="#B89758" opacity={0.7} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-wide text-burgundy-800 font-medium"
          >
            The Wedding Celebrations
          </motion.h2>

          <OrnamentalDivider variant="grand" className="my-6" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-charcoal-600 font-light max-w-xl mx-auto leading-relaxed"
          >
            Two days of sacred traditions, vibrant festivities, joyous reunions, and the eternal celebration of love.
          </motion.p>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP EXPERIENCE: Horizontal Journey & Interactive Tab Selector */}
        {/* ======================================================== */}
        <div className="hidden lg:block mb-4">
          {/* Day Progression Indicator Bar */}
          <div className="relative bg-ivory-50 rounded-2xl p-4 border border-gold-300/60 shadow-luxury mb-10">
            <div className="grid grid-cols-5 gap-3">
              {events.map((event) => {
                const isActive = activeTab === event.id;
                return (
                  <button
                    key={event.id}
                    onClick={() => setActiveTab(event.id)}
                    className={`relative text-left p-4 rounded-xl transition-all duration-300 flex flex-col justify-between ${
                      isActive
                        ? 'bg-burgundy-800 text-ivory-50 shadow-gold-glow'
                        : 'bg-ivory-100 hover:bg-gold-100/60 text-charcoal-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-[10px] uppercase tracking-widest font-semibold ${
                          isActive ? 'text-gold-300' : 'text-gold-600'
                        }`}
                      >
                        {event.day} • {event.period}
                      </span>
                      <span className={isActive ? 'text-gold-300' : 'text-charcoal-400'}>
                        {getEventIcon(event.iconName, 'w-4 h-4')}
                      </span>
                    </div>

                    <div>
                      <h4
                        className={`font-serif text-sm tracking-wide font-medium leading-snug line-clamp-1 ${
                          isActive ? 'text-ivory-100' : 'text-burgundy-800'
                        }`}
                      >
                        {event.name}
                      </h4>
                      {event.person && (
                        <p
                          className={`text-[10px] tracking-wider uppercase mt-0.5 ${
                            isActive ? 'text-gold-200' : 'text-charcoal-500'
                          }`}
                        >
                          For {event.person}
                        </p>
                      )}
                    </div>

                    {isActive && (
                      <motion.div
                        layoutId="activeEventGlow"
                        className="absolute -bottom-1 left-4 right-4 h-1 bg-gold-400 rounded-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Event Showcase Card */}
          <AnimatePresence mode="wait">
            {events.map((event) => {
              if (event.id !== activeTab) return null;
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <EventCardDetail event={event} isDesktop={true} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* ======================================================== */}
        {/* MOBILE & TABLET: Editorial Continuous Vertical Journey */}
        {/* ======================================================== */}
        <div className="lg:hidden space-y-8 sm:space-y-12">
          {/* Day 1 Header */}
          <div className="relative text-center py-6 px-4 bg-burgundy-800 rounded-2xl text-ivory-50 border border-gold-400/30 shadow-luxury">
            <span className="text-xs uppercase tracking-[0.3em] text-gold-300 font-semibold block mb-1">
              Day 01
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-ivory-100 tracking-wide">
              25 November 2026
            </h3>
            <p className="text-xs text-champagne-light/80 uppercase tracking-widest mt-1">
              The Celebrations Unfold
            </p>
          </div>

          {/* Day 1 Events */}
          {day1Events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <EventCardDetail event={event} isDesktop={false} />
            </motion.div>
          ))}

          {/* Day 2 Header */}
          <div className="relative text-center py-6 px-4 bg-burgundy-800 rounded-2xl text-ivory-50 border border-gold-400/30 shadow-luxury">
            <span className="text-xs uppercase tracking-[0.3em] text-gold-300 font-semibold block mb-1">
              Day 02
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-ivory-100 tracking-wide">
              26 November 2026
            </h3>
            <p className="text-xs text-champagne-light/80 uppercase tracking-widest mt-1">
              The Sacred Union &amp; Forever
            </p>
          </div>

          {/* Day 2 Events */}
          {day2Events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <EventCardDetail event={event} isDesktop={false} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ========================================================
// SUBCOMPONENT: EventCardDetail with unique aesthetic styling
// ========================================================
interface EventCardDetailProps {
  event: WeddingEvent;
  isDesktop: boolean;
}

const EventCardDetail: React.FC<EventCardDetailProps> = ({ event, isDesktop }) => {
  // Bespoke Theme Styles
  const getThemeContainerClass = () => {
    switch (event.theme) {
      case 'sacred-gold':
        // Mandap Muhurt: peaceful, auspicious, subtle traditional Indian motifs
        return 'bg-gradient-to-br from-ivory-50 via-gold-100/30 to-ivory-100 border-gold-300/80 text-charcoal-800 shadow-luxury';
      case 'vibrant-festive':
        // Celebration of Love: colorful, joyful, music, games, laughter, food, togetherness (NO forbidden words!)
        return 'bg-gradient-to-br from-ivory-50 via-blush/40 to-champagne-light border-gold-400/80 text-charcoal-800 shadow-luxury-lg';
      case 'nocturne-glow':
        // DJ Night: dramatic transition into high-energy nighttime atmosphere, darker background, cinematic lighting, subtle glow
        return 'bg-gradient-to-br from-charcoal-900 via-burgundy-950 to-charcoal-950 border-gold-500/40 text-ivory-50 shadow-2xl';
      case 'serene-blessings':
        // Grah Shanti: peaceful, spiritual, elegant, warm tones, subtle traditional motifs
        return 'bg-gradient-to-br from-ivory-50 via-champagne-light to-gold-100/50 border-gold-300/80 text-charcoal-800 shadow-luxury';
      case 'royal-climax':
      default:
        // The Wedding: emotional climax, visually grander than all previous sections, cinematic imagery, elegant gold accents
        return 'bg-gradient-to-br from-burgundy-900 via-burgundy-800 to-charcoal-950 border-2 border-gold-400/90 text-ivory-50 shadow-2xl';
    }
  };

  const isNightTheme = event.theme === 'nocturne-glow' || event.theme === 'royal-climax';

  return (
    <div
      className={`relative rounded-3xl overflow-hidden border transition-all duration-500 ${getThemeContainerClass()} ${
        isDesktop ? 'p-8 sm:p-12' : 'p-6 sm:p-8'
      }`}
    >
      {/* Corner Frame Accents */}
      <span
        className={`absolute top-4 left-4 w-5 h-5 border-t border-l ${
          isNightTheme ? 'border-gold-400/80' : 'border-gold-500/70'
        } pointer-events-none`}
      />
      <span
        className={`absolute top-4 right-4 w-5 h-5 border-t border-r ${
          isNightTheme ? 'border-gold-400/80' : 'border-gold-500/70'
        } pointer-events-none`}
      />
      <span
        className={`absolute bottom-4 left-4 w-5 h-5 border-b border-l ${
          isNightTheme ? 'border-gold-400/80' : 'border-gold-500/70'
        } pointer-events-none`}
      />
      <span
        className={`absolute bottom-4 right-4 w-5 h-5 border-b border-r ${
          isNightTheme ? 'border-gold-400/80' : 'border-gold-500/70'
        } pointer-events-none`}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Visual Media Column */}
        <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
          <div className="relative aspect-square w-full max-w-[340px] sm:max-w-[380px] rounded-2xl overflow-hidden shadow-2xl border border-gold-300/40 group">
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div
              className={`absolute inset-0 ${
                isNightTheme
                  ? 'bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent'
                  : 'bg-gradient-to-t from-charcoal-900/40 via-transparent to-transparent'
              }`}
            />

            {/* Floating Tag */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-charcoal-950/80 backdrop-blur-md text-gold-300 text-[11px] font-medium tracking-widest uppercase border border-gold-400/40">
                {event.day} • {event.period}
              </span>
            </div>

            {/* Auspicious Person Badge */}
            {event.person && (
              <div className="absolute bottom-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burgundy-900/90 text-ivory-100 text-[10px] tracking-widest uppercase font-medium border border-gold-400/50">
                  <User className="w-3 h-3 text-gold-400" />
                  For {event.person}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Text & Narrative Content Column */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
          {/* Metadata Topline */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span
              className={`inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] sm:tracking-[0.25em] whitespace-nowrap ${
                isNightTheme ? 'text-gold-400' : 'text-gold-600'
              }`}
            >
              <Calendar className="w-3.5 h-3.5 shrink-0" />
              {event.date}
            </span>
            <span className={isNightTheme ? 'text-gold-400/40' : 'text-gold-500/50'}>•</span>
            <span
              className={`inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-medium uppercase tracking-[0.16em] sm:tracking-[0.25em] whitespace-nowrap ${
                isNightTheme ? 'text-champagne-light' : 'text-charcoal-600'
              }`}
            >
              <Clock className="w-3.5 h-3.5 shrink-0" />
              {event.period}
            </span>
          </div>

          {/* Event Title */}
          <div>
            <h3
              className={`font-serif text-3xl sm:text-4xl md:text-5xl tracking-wide font-medium leading-tight ${
                isNightTheme ? 'text-ivory-50' : 'text-burgundy-800'
              }`}
            >
              {event.name}
            </h3>

            {event.subtitle && (
              <p
                className={`text-xs sm:text-sm font-medium uppercase tracking-[0.2em] mt-2 ${
                  isNightTheme ? 'text-gold-300' : 'text-gold-700'
                }`}
              >
                {event.subtitle}
              </p>
            )}
          </div>

          {/* Special thematic treatment for Event 2: Celebration of Love */}
          {event.id === 'celebration-of-love' && (
            <div className="flex flex-wrap gap-2 pt-1">
              {['Joyful Music', 'Interactive Games', 'Laughter', 'Festive Food', 'Togetherness'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-gold-200/50 text-burgundy-800 text-[11px] font-medium tracking-wider border border-gold-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Special thematic treatment for Event 3: DJ Night */}
          {event.id === 'dj-night' && (
            <div className="flex items-center gap-3 p-3 rounded-xl bg-charcoal-900/80 border border-gold-400/20">
              <div className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
              <p className="text-xs text-gold-300 font-light tracking-wide">
                Nocturne beats, glowing ambient lights, and non-stop celebration
              </p>
            </div>
          )}

          {/* Special thematic treatment for Event 5: The Wedding */}
          {event.id === 'the-wedding' && (
            <div className="space-y-3 pt-2">
              <p className="font-cormorant italic text-xl sm:text-2xl text-gold-300 font-normal leading-relaxed">
                &ldquo;And finally, the moment we&apos;ve been waiting for.&rdquo;
              </p>
              <div className="p-4 rounded-xl bg-burgundy-950/60 border border-gold-400/30">
                <p className="font-serif text-sm sm:text-base text-ivory-100 tracking-wider font-light">
                  Two families.
                  <br />
                  Two journeys.
                  <br />
                  <span className="text-gold-300 font-medium">One forever.</span>
                </p>
              </div>
            </div>
          )}

          {/* Description */}
          <p
            className={`text-sm sm:text-base font-light leading-relaxed ${
              isNightTheme ? 'text-ivory-200/90' : 'text-charcoal-600'
            }`}
          >
            {event.description}
          </p>

          {/* Person Note if present */}
          {event.person && (
            <div
              className={`text-xs uppercase tracking-widest font-semibold flex items-center gap-2 pt-2 ${
                isNightTheme ? 'text-gold-300' : 'text-burgundy-700'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              For {event.person}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
