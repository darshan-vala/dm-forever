import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Info, X } from 'lucide-react';

interface ToastContextType {
  showToast: (message: string, type?: 'success' | 'info') => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info'; id: number } | null>(null);

  const showToast = useCallback((message: string, type: 'success' | 'info' = 'success') => {
    const id = Date.now();
    setToast({ message, type, id });
    setTimeout(() => {
      setToast((current) => (current?.id === id ? null : current));
    }, 4000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-50 pointer-events-none max-w-sm w-[calc(100%-3rem)]">
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="pointer-events-auto bg-charcoal-900/95 backdrop-blur-md text-ivory-50 px-5 py-4 rounded-xl border border-gold-400/40 shadow-2xl flex items-center gap-3.5"
            >
              {toast.type === 'success' ? (
                <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
              ) : (
                <Info className="w-5 h-5 text-champagne shrink-0" />
              )}
              <p className="text-sm font-medium tracking-wide text-ivory-100 flex-1">{toast.message}</p>
              <button
                onClick={() => setToast(null)}
                className="text-ivory-300 hover:text-ivory-50 transition-colors p-1"
                aria-label="Dismiss notification"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
