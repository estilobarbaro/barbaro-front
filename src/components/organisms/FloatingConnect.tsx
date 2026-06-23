'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Share2, X, ArrowUp } from "lucide-react";
import { BARBARO_INFO } from "@/src/lib/constants";

import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from "@/src/components/atoms/SocialIcons";

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
      icon: <WhatsAppIcon size={20} />,
      href: whatsappLink,
      label: "WhatsApp",
      color: "bg-[#25D366]",
      textColor: "text-white"
    },
    {
      id: "facebook",
      icon: <FacebookIcon size={20} className="w-5 h-5" />,
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
      icon: <TikTokIcon size={20} className="w-5 h-5" />,
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
