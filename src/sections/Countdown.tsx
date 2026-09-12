import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/wedding';
import { OrnamentalDivider } from '../components/ui/OrnamentalBorder';
import { Clock, Sparkles } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

export const Countdown: React.FC = () => {
  const { wedding } = weddingConfig;

  const calculateTimeLeft = (): TimeLeft => {
    // Target: 26 November 2026 in India Standard Time (IST = UTC+5:30)
    const targetDate = new Date(wedding.countdownTarget).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, isComplete: false };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="relative py-20 sm:py-28 bg-burgundy-900 text-ivory-50 overflow-hidden">
      {/* Cinematic subtle background illumination */}
      <div className="absolute inset-0 bg-radial-vignette opacity-80 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-burgundy-700/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-300 text-xs uppercase tracking-[0.25em] mb-4"
        >
          <Clock className="w-3.5 h-3.5" />
          <span>India Standard Time (IST)</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl tracking-wide text-ivory-100 font-medium"
        >
          Counting Down to Forever
        </motion.h2>

        <OrnamentalDivider variant="lotus" color="#DEC9A3" className="my-5" />

        <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-champagne-dark mb-12">
          {wedding.endDate} • Surat, Gujarat
        </p>

        {/* Countdown Display or Graceful "The celebrations have begun." */}
        {timeLeft.isComplete ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 sm:p-12 rounded-2xl bg-burgundy-800/80 border border-gold-400/50 shadow-2xl backdrop-blur-md max-w-lg mx-auto"
          >
            <Sparkles className="w-8 h-8 text-gold-400 mx-auto mb-4 animate-bounce" />
            <h3 className="font-serif text-2xl sm:text-3xl text-gold-300 font-medium mb-3">
              The celebrations have begun.
            </h3>
            <p className="text-sm text-ivory-200/90 font-light leading-relaxed">
              We are overjoyed to welcome you into this celebration of love, tradition, and togetherness.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {timeUnits.map((unit, idx) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative bg-burgundy-800/60 backdrop-blur-md border border-gold-400/30 rounded-2xl p-5 sm:p-8 shadow-luxury group hover:border-gold-400/60 hover:bg-burgundy-800/80 transition-all duration-300"
              >
                {/* Corner accents */}
                <span className="absolute top-2 left-2 w-2 h-2 border-t border-l border-gold-400/60" />
                <span className="absolute top-2 right-2 w-2 h-2 border-t border-r border-gold-400/60" />
                <span className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-gold-400/60" />
                <span className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-gold-400/60" />

                <div className="font-serif text-4xl sm:text-6xl text-gold-300 font-medium tracking-tight mb-2">
                  {String(unit.value).padStart(2, '0')}
                </div>
                <div className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-champagne-light/75 font-medium">
                  {unit.label}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
