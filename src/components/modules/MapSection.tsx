"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BARBARO_INFO } from "@/src/lib/constants";

import { FacebookIcon, InstagramIcon, TikTokIcon } from '@/src/components/atoms/SocialIcons';

export default function MapSection() {
  return (
    <section className="relative w-full bg-background py-24 lg:py-32 grain-overlay overflow-hidden border-t border-primary/5">
      
      {/* Marca de agua de fondo arquitectónica */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.015] pointer-events-none select-none">
        <span className="text-[25vw] font-display text-white whitespace-nowrap uppercase">LOCALIZACIÓN</span>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-16 lg:gap-24 items-center">
          
          {/* Bloque de información: Alta Jerarquía */}
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="font-sans text-[10px] uppercase tracking-[0.8em] text-primary/60 block">
                COORDENADAS
              </span>
              <h2 className="text-5xl md:text-7xl font-display text-white leading-none uppercase tracking-tighter">
                NUESTRO <br /> <span className="text-primary italic font-serif lowercase block mt-2">santuario</span>
              </h2>
            </div>
            
            <p className="font-serif italic text-xl md:text-2xl text-white/70 leading-relaxed border-l-4 border-primary/20 pl-8">
              &quot;Ubicados en el corazón de El Tambo, donde la tradición se encuentra con la precisión urbana.&quot;
            </p>

            {/* Redes sociales con jerarquía elevada */}
            <div className="space-y-8 pt-6">
               <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold block border-b border-white/5 pb-4">SÍGUENOS EN EL CLAN</span>
               <div className="flex flex-wrap gap-10">
                  {/* Facebook - Enfoque Premium */}
                  <Link 
                    href={BARBARO_INFO.social.facebook} 
                    target="_blank"
                    className="group flex items-center gap-6"
                  >
                    <div className="p-4 border border-[var(--color-primary)]/20 rounded-full text-[var(--color-primary)]/60 group-hover:text-[var(--color-primary)] group-hover:border-[var(--color-primary)] transition-all duration-500 bg-[var(--color-primary)]/5">
                      <FacebookIcon size={24} className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-sans text-[11px] uppercase tracking-widest text-foreground group-hover:text-primary transition-colors font-bold">Facebook</span>
                      <span className="font-serif italic text-xs text-foreground/40 group-hover:text-foreground/60 transition-colors">/estilo.barbaro</span>
                    </div>
                  </Link>

                  {/* Instagram - Enfoque Premium */}
                  <Link 
                    href={BARBARO_INFO.social.instagram} 
                    target="_blank"
                    className="group flex items-center gap-6"
                  >
                    <div className="p-4 border border-primary/20 rounded-full text-primary/60 group-hover:text-white group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-[#833AB4] group-hover:via-[#FD1D1D] group-hover:to-[#F77737] transition-all duration-500 bg-primary/5">
                      <InstagramIcon size={24} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-sans text-[11px] uppercase tracking-widest text-foreground group-hover:text-primary transition-colors font-bold">Instagram</span>
                      <span className="font-serif italic text-xs text-foreground/40 group-hover:text-foreground/60 transition-colors">@estilo_barbaro</span>
                    </div>
                  </Link>

                  {/* TikTok - Enfoque Premium */}
                  <Link 
                    href={BARBARO_INFO.social.tiktok} 
                    target="_blank"
                    className="group flex items-center gap-6"
                  >
                    <div className="p-4 border border-[var(--color-primary)]/20 rounded-full text-[var(--color-primary)]/60 group-hover:text-[var(--color-primary)] group-hover:border-[var(--color-primary)] transition-all duration-500 bg-[var(--color-primary)]/5">
                      <TikTokIcon size={24} className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-sans text-[11px] uppercase tracking-widest text-foreground group-hover:text-primary transition-colors font-bold">TikTok</span>
                      <span className="font-serif italic text-xs text-foreground/40 group-hover:text-foreground/60 transition-colors">@estilo_barbaro</span>
                    </div>
                  </Link>
               </div>
            </div>

            <div className="pt-8 border-t border-white/5">
               <a 
                href="https://maps.app.goo.gl/g91U1WFGs9PfV83n8" 
                target="_blank" 
                className="inline-block text-[11px] uppercase tracking-[0.4em] text-primary font-bold border-b-2 border-primary/20 pb-2 hover:border-primary transition-all duration-500"
               >
                 Abrir en Google Maps →
               </a>
            </div>
          </div>

          {/* Contenedor del Mapa: Street View dinámico */}
          <div className="relative w-full aspect-square lg:aspect-auto lg:h-[700px] border border-primary/10 bg-secondary/10 group overflow-hidden">
             {/* Esquinas decorativas */}
             <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary/40 z-20 pointer-events-none group-hover:top-6 group-hover:left-6 transition-all duration-700" />
             <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-primary/40 z-20 pointer-events-none group-hover:bottom-6 group-hover:right-6 transition-all duration-700" />
             
             <iframe 
                src="https://www.google.com/maps/embed?pb=!4v1778803654830!6m8!1m7!1sActrd8lwSh26zoPwyF2Q7A!2m2!1d-12.05617589176119!2d-75.21325286053849!3f59.609641315425144!4f5.9075388994039315!5f0.7820865974627469" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.8] contrast-[1.1] brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-105 group-hover:scale-100"
             />

             {/* Overlay dinámico para mezclar con la estética */}
             <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.8)] z-10 group-hover:shadow-[inset_0_0_150px_rgba(0,0,0,0.4)] transition-all duration-1000" />
          </div>

        </div>
      </div>
    </section>
  );
}
