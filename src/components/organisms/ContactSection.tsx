'use client';

import { BARBARO_INFO } from "@/src/lib/constants";
import { SectionHeader } from "@/src/components/molecules/SectionHeader";
import { MapPin, Phone, MessageSquare } from "lucide-react";

import { FacebookIcon, InstagramIcon, TikTokIcon } from '@/src/components/atoms/SocialIcons';

export function ContactSection() {
  const whatsappNumber = BARBARO_INFO.phone.replace(/\D/g, "");
  
  return (
    <section id="contacto" className="relative section-espresso py-12 lg:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        
        {/* Header de Sección Unificado */}
        <div className="mb-12 lg:mb-16">
          <SectionHeader label="UBICACIÓN & CONTACTO" title="VISÍTANOS EN" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Columna Izquierda: Información y Redes */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Dirección */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <MapPin size={20} />
                <span className="font-sans text-xs font-medium uppercase tracking-widest">DIRECCIÓN</span>
              </div>
              <p className="font-serif italic text-xl md:text-2xl text-white/90 leading-tight">
                {BARBARO_INFO.address}
              </p>
              <p className="font-sans text-xs text-white/50 uppercase tracking-wider">
                {BARBARO_INFO.reference}
              </p>
            </div>

            {/* Canales de Contacto */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <Phone size={18} />
                  <span className="font-sans text-[10px] font-medium uppercase tracking-widest">TELÉFONO</span>
                </div>
                <a href={`tel:${whatsappNumber}`} className="block font-sans text-lg text-white/80 hover:text-primary transition-colors">
                  {BARBARO_INFO.phone}
                </a>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <MessageSquare size={18} />
                  <span className="font-sans text-[10px] font-medium uppercase tracking-widest">WHATSAPP</span>
                </div>
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=Hola%20Estilo%20Bárbaro,%20me%20gustaría%20reservar%20un%20ritual.`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block font-sans text-lg text-white/80 hover:text-primary transition-colors"
                >
                  Enviar Mensaje
                </a>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="pt-8 border-t border-white/5">
              <span className="font-sans text-[10px] font-medium uppercase tracking-[0.4em] text-white/30 block mb-6">NUESTRO CLAN DIGITAL</span>
            <div className="flex gap-6">
                <a 
                  href={BARBARO_INFO.social.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
                >
                  <FacebookIcon size={20} className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href={BARBARO_INFO.social.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-foreground/70 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:text-white hover:border-transparent transition-all duration-300 group"
                >
                  <InstagramIcon size={20} />
                </a>
                <a 
                  href={BARBARO_INFO.social.tiktok} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-foreground/70 hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
                >
                  <TikTokIcon size={20} className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Mapa (Street View) */}
          <div className="lg:col-span-7 w-full h-full min-h-[400px] lg:min-h-[500px] relative">
            <div className="absolute inset-0 border border-primary/20 p-2 bg-secondary/5">
              <div className="relative w-full h-full overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-700">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!4v1780363725756!6m8!1m7!1sActrd8lwSh26zoPwyF2Q7A!2m2!1d-12.05617589176119!2d-75.21325286053849!3f86.71837392245725!4f-5.686198214101353!5f0.7820865974627469" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Estilo Bárbaro"
                />
              </div>
            </div>
            {/* Elemento Decorativo */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-primary/30 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
