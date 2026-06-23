"use client";

import { motion } from "framer-motion";
import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, MessageSquare, Share2 } from "lucide-react";
import { FacebookIcon, TikTokIcon } from "@/src/components/atoms/SocialIcons";

export default function ContactSection() {
  const WHATSAPP_NUMBER = "51960659183"; 
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Estilo%20Bárbaro,%20me%20gustaría%20reservar%20un%20ritual.`;

  return (
    <footer id="contacto" className="relative bg-background pt-32 pb-12 overflow-hidden grain-overlay border-t border-primary/10">
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* 1. CONTACT MAIN BLOCK */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-40">
          
          {/* Left: The Invitation */}
          <div className="space-y-12">
            <div>
              <span className="font-sans text-[10px] uppercase tracking-[0.8em] text-primary/60 mb-6 block">
                EL PRÓXIMO PASO
              </span>
              <h2 className="text-5xl md:text-7xl font-display leading-[0.85] text-white uppercase tracking-tighter">
                TU LUGAR <br /> 
                <span className="text-primary italic font-serif lowercase block mt-2">en la silla</span>
              </h2>
            </div>
            
            <p className="font-serif italic text-lg md:text-xl text-white/60 max-w-lg leading-relaxed border-l border-primary/20 pl-8">
              &quot;La distinción no es un acto, es un hábito. Reserva tu ritual y permítenos elevar tu estándar.&quot;
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              {/* WhatsApp CTA */}
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                className="group relative px-10 py-5 bg-[#25D366] text-white font-sans font-bold uppercase tracking-[0.4em] text-[10px] transition-all hover:bg-white hover:text-black hover:tracking-[0.5em] active:scale-95 shadow-2xl flex items-center justify-center gap-3"
              >
                <MessageSquare size={16} />
                RESERVAR WHATSAPP
                <div className="absolute -inset-2 border border-[#25D366]/20 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
              </a>

              {/* Standard Reserve Button */}
              <button className="group relative px-10 py-5 bg-primary text-primary-foreground font-sans font-bold uppercase tracking-[0.4em] text-[10px] transition-all hover:bg-white hover:text-black hover:tracking-[0.5em] active:scale-95 shadow-2xl">
                RESERVAR RITUAL
                <div className="absolute -inset-2 border border-primary/10 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
              </button>
            </div>
          </div>

          {/* Right: Technical Info (The Coordinate) */}
          <div className="flex flex-col justify-end">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-white/10 pt-12">
              
              {/* Info Item */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary/40">
                  <MapPin size={12} />
                  <span className="font-sans text-[9px] uppercase tracking-widest font-bold">Ubicación</span>
                </div>
                <p className="font-sans text-xs text-white/70 leading-relaxed uppercase tracking-wider">
                  Frente al Parque de los Sombreros<br />
                  El Tambo - Huancayo<br />
                  Perú
                </p>
              </div>

              {/* Info Item */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary/40">
                  <Clock size={12} />
                  <span className="font-sans text-[9px] uppercase tracking-widest font-bold">Horarios</span>
                </div>
                <div className="font-sans text-[11px] text-white/70 space-y-1 uppercase tracking-wider">
                  <p className="flex justify-between border-b border-white/5 pb-1"><span>L - V:</span> <span className="text-white">09:00 - 21:00</span></p>
                  <p className="flex justify-between border-b border-white/5 pb-1"><span>S:</span> <span className="text-white">10:00 - 20:00</span></p>
                  <p className="flex justify-between text-white/30 italic"><span>D:</span> <span>Cerrado</span></p>
                </div>
              </div>

              {/* Info Item */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary/40">
                  <Phone size={12} />
                  <span className="font-sans text-[9px] uppercase tracking-widest font-bold">Teléfono</span>
                </div>
                <p className="font-display text-lg text-white tracking-[0.2em]">
                   +51 960 659 183
                </p>
              </div>

              {/* Info Item */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary/40">
                  <Mail size={12} />
                  <span className="font-sans text-[9px] uppercase tracking-widest font-bold">Digital</span>
                </div>
                <div className="flex flex-col gap-2">
                  <Link href="mailto:estilobarbarosuite@gmail.com" className="font-sans text-xs text-white/70 hover:text-primary transition-colors uppercase tracking-wider">
                    estilobarbarosuite@gmail.com
                  </Link>
                  <div className="flex gap-4 pt-2">
                    <Link 
                      href="https://www.facebook.com/share/1DmsBSDKTW/?mibextid=wwXIfr" 
                      target="_blank"
                      className="p-2 border border-primary/10 text-white/40 hover:text-primary hover:border-primary transition-all duration-300"
                    >
                      <FacebookIcon size={14} className="w-3.5 h-3.5" />
                    </Link>
                    <Link 
                      href="https://www.tiktok.com/@estilo_barbaro?_r=1&_t=ZS-96MmpWIARs5" 
                      target="_blank"
                      className="p-2 border border-primary/10 text-white/40 hover:text-primary hover:border-primary transition-all duration-300 group/tt"
                    >
                      <TikTokIcon size={14} className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 2. ARCHITECTURAL FOOTER */}
        <div className="relative pt-24 border-t border-primary/5">
          {/* Massive Watermark Label */}
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[15vw] font-display text-white/[0.015] select-none pointer-events-none uppercase tracking-tighter whitespace-nowrap">
            BÁRBARO
          </span>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
            <div className="flex gap-8">
              {["Inicio", "Servicios", "Nosotros", "Contacto"].map((item) => (
                <Link key={item} href="#" className="font-sans text-[8px] uppercase tracking-[0.5em] text-white/30 hover:text-primary transition-colors font-bold">
                  {item}
                </Link>
              ))}
            </div>
            
            <p className="font-sans text-[8px] uppercase tracking-[0.3em] text-white/20 text-center md:text-right font-medium">
              © 2026 Estilo Bárbaro. El estilo que define al hombre. <br className="md:hidden" /> 
              Desarrollado con rigor por Jos.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
