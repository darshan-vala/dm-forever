import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/wedding';
import { OrnamentalDivider } from '../components/ui/OrnamentalBorder';
import { Share2, MessageCircle, Copy, Check, Heart } from 'lucide-react';
import { useToast } from '../components/ui/Toast';

export const ShareSection: React.FC = () => {
  const { share } = weddingConfig;
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);

  const getShareUrl = () => {
    return typeof window !== 'undefined' ? window.location.href : share.url;
  };

  const handleShare = async () => {
    const shareUrl = getShareUrl();
    const shareData = {
      title: share.title,
      text: share.text,
      url: shareUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        showToast('Shared successfully!', 'success');
        return;
      } catch (err) {
        // User cancelled or share failed, fallback to WhatsApp
        if ((err as Error).name !== 'AbortError') {
          openWhatsApp(shareUrl);
        }
      }
    } else {
      openWhatsApp(shareUrl);
    }
  };

  const openWhatsApp = (url: string) => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${share.text}\n${url}`)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(getShareUrl());
      setCopied(true);
      showToast('Wedding link copied to clipboard', 'success');
      setTimeout(() => setCopied(false), 3000);
    } catch {
      showToast('Could not copy link automatically', 'info');
    }
  };

  return (
    <section className="relative py-20 sm:py-28 bg-ivory-100 text-charcoal-800 overflow-hidden text-center">
      <div className="relative max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-400 text-gold-600 flex items-center justify-center mx-auto mb-4"
        >
          <Heart className="w-5 h-5 fill-gold-500/50" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="font-serif text-3xl sm:text-4xl text-burgundy-800 font-medium tracking-wide"
        >
          {share.heading}
        </motion.h2>

        <OrnamentalDivider variant="diamond" className="my-4" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.02 }}
          className="text-sm text-charcoal-600 font-light max-w-md mx-auto mb-8 leading-relaxed"
        >
          {share.subheading}
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          {/* Main Share Button */}
          <button
            onClick={handleShare}
            className="w-full sm:w-auto flex-1 py-3.5 px-8 rounded-full bg-burgundy-800 hover:bg-burgundy-700 text-ivory-50 text-xs uppercase tracking-[0.25em] font-medium border border-gold-400/40 shadow-luxury hover:shadow-gold-glow transition-all duration-300 flex items-center justify-center gap-2.5"
          >
            <Share2 className="w-4 h-4 text-gold-300" />
            <span>Share Our Wedding</span>
          </button>

          {/* WhatsApp Direct */}
          <button
            onClick={() => openWhatsApp(getShareUrl())}
            className="w-full sm:w-auto py-3.5 px-5 rounded-full bg-emerald-800 hover:bg-emerald-700 text-ivory-50 text-xs uppercase tracking-widest font-medium border border-emerald-600 transition-all flex items-center justify-center gap-2"
            title="Share via WhatsApp"
            aria-label="Share via WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="sm:hidden">WhatsApp</span>
          </button>

          {/* Copy Link */}
          <button
            onClick={handleCopyLink}
            className="w-full sm:w-auto py-3.5 px-5 rounded-full bg-ivory-50 hover:bg-gold-100 text-charcoal-700 text-xs uppercase tracking-widest font-medium border border-gold-300 transition-all flex items-center justify-center gap-2"
            title="Copy Wedding Link"
            aria-label="Copy Wedding Link"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-gold-600" />
                <span className="sm:hidden">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-gold-600" />
                <span className="sm:hidden">Copy Link</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
