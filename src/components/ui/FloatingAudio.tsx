import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { weddingAudio } from '../../services/audioService';
import { weddingConfig } from '../../config/wedding';
import { useToast } from './Toast';

export const FloatingAudio: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    const unsubscribe = weddingAudio.subscribe((playing) => {
      setIsPlaying(playing);
    });
    return unsubscribe;
  }, []);

  const handleToggle = async () => {
    const nowPlaying = await weddingAudio.toggle(weddingConfig.audio.audioUrl);
    if (nowPlaying) {
      showToast('Ambient Wedding Music Playing', 'info');
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <button
        onClick={handleToggle}
        className={`group relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-full backdrop-blur-md shadow-luxury-lg border transition-all duration-200 ${
          isPlaying
            ? 'bg-burgundy-800/90 text-gold-300 border-gold-400/50 shadow-gold-glow'
            : 'bg-charcoal-900/80 text-ivory-200 border-gold-400/30 hover:border-gold-400/70 hover:text-gold-400'
        }`}
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
        title={isPlaying ? 'Pause background music' : 'Play ambient wedding music'}
      >
        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-gold-400 animate-pulse" />
        ) : (
          <VolumeX className="w-4 h-4 text-ivory-300 group-hover:text-gold-400" />
        )}

        {/* Dynamic Soundwave Bars */}
        <div className="flex items-center gap-0.5 h-3.5 px-0.5">
          <span
            className={`w-0.5 bg-current rounded-full transition-all duration-200 ${
              isPlaying ? 'h-3.5 animate-[bounce_0.8s_infinite]' : 'h-1 opacity-50'
            }`}
          />
          <span
            className={`w-0.5 bg-current rounded-full transition-all duration-200 ${
              isPlaying ? 'h-2.5 animate-[bounce_1.1s_infinite_0.2s]' : 'h-1 opacity-50'
            }`}
          />
          <span
            className={`w-0.5 bg-current rounded-full transition-all duration-200 ${
              isPlaying ? 'h-3 animate-[bounce_0.9s_infinite_0.4s]' : 'h-1 opacity-50'
            }`}
          />
        </div>

        <span className="text-[11px] font-medium tracking-widest uppercase pr-1 hidden sm:inline">
          {isPlaying ? 'Music On' : 'Music'}
        </span>
      </button>
    </div>
  );
};
