'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Mail, Share2, X, ArrowUp } from "lucide-react";
import { BARBARO_INFO } from "@/src/lib/constants";

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export function FloatingConnect() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll to show/hide "Back to Top" arrow
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappNumber = BARBARO_INFO.phone.replace(/\D/g, "");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola%20Estilo%20Bárbaro,%20me%20gustaría%20reservar%20un%20ritual.`;

  const actions = [
    {
      id: "whatsapp",
      icon: <MessageSquare size={20} />,
      href: whatsappLink,
      label: "WhatsApp",
      color: "bg-[#25D366]",
      textColor: "text-white"
    },
    {
      id: "facebook",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      href: BARBARO_INFO.social.facebook,
      label: "Facebook",
      color: "bg-[#1877F2]",
      textColor: "text-white"
    },
    {
      id: "instagram",
      icon: <InstagramIcon size={20} />,
      href: BARBARO_INFO.social.instagram,
      label: "Instagram",
      color: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]",
      textColor: "text-white"
    },
    {
      id: "tiktok",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-.99.01-1.49.18-3.33 2.76-6.13 6.01-6.59 1.38-.2 2.81.05 4.04.77V10.3c-.9-.37-1.89-.52-2.85-.35-1.24.14-2.43.79-3.18 1.78-.87 1.07-1.21 2.52-.94 3.89.15 1.01.69 1.97 1.53 2.63.95.77 2.19 1.12 3.41 1.01 1.14-.04 2.22-.53 3.01-1.33.72-.73 1.14-1.74 1.25-2.76.12-2.31.05-4.62.07-6.93.02-4.57.01-9.14.02-13.71z"/>
        </svg>
      ),
      href: BARBARO_INFO.social.tiktok,
      label: "TikTok",
      color: "bg-white",
      textColor: "text-black"
    },
    {
      id: "email",
      icon: <Mail size={20} />,
      href: `mailto:${BARBARO_INFO.email}`,
      label: "Email",
      color: "bg-[var(--color-primary)]",
      textColor: "text-[var(--color-primary-foreground)]"
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">

      {/* 1. Scroll Top Arrow */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-secondary/80 backdrop-blur-md border border-primary/20 text-primary flex items-center justify-center shadow-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 mb-2 group cursor-pointer"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 2. Expanded Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20, transition: { delay: 0.1 } }}
            className="flex flex-col items-end gap-3 mb-2"
          >
            {actions.map((action, index) => (
              <motion.div
                key={action.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: (actions.length - index) * 0.05 }}
                className="flex items-center gap-4 group"
              >
                <span className="bg-secondary/90 text-white font-sans text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-lg backdrop-blur-md border border-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-2xl">
                  {action.label}
                </span>

                <a
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 border border-white/10",
                    action.color,
                    action.textColor
                  )}
                >
                  {action.icon}
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(223,147,54,0.3)] transition-all duration-500 hover:scale-105 active:scale-95 group relative overflow-hidden border-2 cursor-pointer",
          isOpen ? "bg-white border-white text-black rotate-0" : "bg-primary border-primary text-primary-foreground"
        )}
      >
        {!isOpen && (
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
        )}

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        >
          {isOpen ? <X size={28} /> : <Share2 size={28} />}
        </motion.div>

        <div className="absolute inset-[-4px] border-2 border-[var(--color-primary)]/20 rounded-full animate-ping opacity-20 pointer-events-none" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[-1] bg-black/5"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

function cn(...inputs: unknown[]) {
  return inputs.filter(Boolean).join(" ");
}
