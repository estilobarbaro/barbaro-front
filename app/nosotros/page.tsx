"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CTASection } from "@/src/components/organisms/CTASection";

export default function AboutPage() {
  return (
    <main className="bg-background min-h-screen pt-20 pb-12 overflow-hidden flex-1">
      
      {/* 1. HERO EDITORIAL */}
      <section className="max-w-6xl mx-auto px-4 lg:px-6 mb-16">
        <div className="relative w-full aspect-[21/9] overflow-hidden mb-8 border border-primary/10">
          <Image 
            src="/images/hero/fondo-barberia.webp" 
            alt="Interior de Estilo Bárbaro — Barber Suite El Tambo" 
            fill 
            className="object-cover contrast-110 brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display text-white leading-none uppercase tracking-tighter"
            >
              EL CÓDIGO <br /> <span className="text-primary italic font-serif lowercase">bárbaro</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* 2. MANIFIESTO (TIPOGRAFÍA) */}
      <section className="max-w-6xl mx-auto px-4 lg:px-6 mb-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <span className="font-sans text-[10px] uppercase tracking-[0.8em] text-primary/60">NUESTROS VALORES</span>
          <p className="font-serif italic text-xl md:text-3xl lg:text-4xl text-white/90 leading-tight">
            &quot;Creemos en la elegancia como una forma de respeto, en la tradición como nuestra brújula y en la perfección como nuestra única medida.&quot;
          </p>
          <div className="w-16 h-px bg-primary/30 mx-auto mt-8" />
        </div>
      </section>

      {/* 3. FILOSOFÍA (Doble Columna) */}
      <section className="max-w-6xl mx-auto px-4 lg:px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-square border border-primary/10 p-4 bg-secondary/5">
            <div className="relative w-full h-full overflow-hidden">
              <Image 
                src="/hero-barbaro.webp" 
                alt="El Arte de la Barbería — Estilo Bárbaro" 
                fill 
                className="object-contain hover:scale-105 transition-transform duration-[2s]"
              />
            </div>
            {/* Aesthetic Corner Acent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-primary/30 pointer-events-none" />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-display text-white uppercase tracking-tighter leading-none">EL ARTE DE LA <br /> PACIENCIA</h2>
            <div className="w-12 h-px bg-primary/40" />
            <div className="space-y-4">
              <p className="font-serif italic text-base md:text-lg text-white/70 leading-relaxed max-w-xl">
                En un mundo que corre, nosotros nos detenemos. Cada servicio en Estilo Bárbaro es un recordatorio de que la verdadera excelencia requiere tiempo, atención y una dedicación obsesiva por el detalle.
              </p>
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/50 leading-relaxed max-w-xl">
                Nuestros barberos no son solo técnicos; son artesanos de la imagen que entienden la responsabilidad de llevar una corona.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER CTA */}
      <CTASection />

    </main>
  );
}
