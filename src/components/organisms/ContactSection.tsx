'use client';

import { BARBARO_INFO } from "@/src/lib/constants";
import { SectionHeader } from "@/src/components/molecules/SectionHeader";
import { MapPin, Phone, MessageSquare } from "lucide-react";

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

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
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:scale-110 transition-transform">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
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
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:scale-110 transition-transform">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-.99.01-1.49.18-3.33 2.76-6.13 6.01-6.59 1.38-.2 2.81.05 4.04.77V10.3c-.9-.37-1.89-.52-2.85-.35-1.24.14-2.43.79-3.18 1.78-.87 1.07-1.21 2.52-.94 3.89.15 1.01.69 1.97 1.53 2.63.95.77 2.19 1.12 3.41 1.01 1.14-.04 2.22-.53 3.01-1.33.72-.73 1.14-1.74 1.25-2.76.12-2.31.05-4.62.07-6.93.02-4.57.01-9.14.02-13.71z"/>
                  </svg>
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
