'use client';

import { Partner } from "@/src/domain/partner";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/src/lib/motion";

interface PartnerCarouselProps {
  partners: Partner[];
}

const TIER_LABELS: Record<string, string> = {
  diamond: 'Socio Diamante',
  gold:    'Socio Oro',
  silver:  'Socio Plata',
};

const TIER_COLORS: Record<string, string> = {
  diamond: 'text-[var(--color-primary)] border-[var(--color-primary)]/40',
  gold:    'text-[var(--color-accent)]  border-[var(--color-accent)]/40',
  silver:  'text-[var(--color-ash)]     border-[var(--color-ash)]/30',
};

export function PartnerCarousel({ partners }: PartnerCarouselProps) {
  // Ordenar por tier: diamond primero
  const tierOrder = { diamond: 0, gold: 1, silver: 2 };
  const sorted = [...partners].sort((a, b) =>
    (tierOrder[a.tier] ?? 3) - (tierOrder[b.tier] ?? 3)
  );

  return (
    <section className="section-graphite relative overflow-hidden">
      {/* Separador superior — línea dorada de 1px */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/40 to-transparent" />

      {/* Aurora radial sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(223,147,54,0.06),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 lg:px-6 py-16 lg:py-20">

        {/* Header de sección */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col items-center gap-3 mb-14"
        >
          <span className="font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Comunidad Bárbara
          </span>
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tighter text-[var(--color-foreground)] leading-none text-center">
            Nuestros Aliados
          </h2>
          {/* Gold line */}
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent mt-1" />
          <p className="font-serif italic text-sm text-[var(--color-foreground)]/50 text-center max-w-lg mt-2">
            Marcas y socios que comparten nuestra filosofía de excelencia artesanal.
          </p>
        </motion.div>

        {/* Grid de partner cards */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {sorted.map((partner) => (
            <motion.div
              key={partner.slug}
              variants={fadeUp}
              className={`
                group relative flex flex-col items-center justify-center gap-4
                bg-[var(--color-background)]/40 backdrop-blur-sm
                border ${TIER_COLORS[partner.tier] ?? 'border-[var(--color-border)]'}
                p-6 md:p-8
                hover:bg-[var(--color-background)]/70
                hover:border-[var(--color-primary)]/60
                transition-all duration-500 cursor-default
              `}
            >
              {/* Tier badge — esquina superior derecha */}
              <span className={`
                absolute top-3 right-3
                font-sans text-[9px] uppercase tracking-[0.2em] font-bold
                border px-2 py-0.5
                ${TIER_COLORS[partner.tier] ?? ''}
                opacity-60 group-hover:opacity-100 transition-opacity
              `}>
                {TIER_LABELS[partner.tier] ?? partner.tier}
              </span>

              {/* Logo */}
              <div className="relative w-24 h-16 md:w-32 md:h-20 transition-all duration-500 group-hover:scale-[1.02] bg-[var(--color-ivory)] p-3 rounded-sm shadow-sm flex items-center justify-center border border-[var(--color-border)]/10">
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    fill
                    className="object-contain filter grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>

              {/* Nombre */}
              <div className="flex flex-col items-center gap-1">
                <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[var(--color-foreground)]/60 group-hover:text-[var(--color-foreground)] transition-colors text-center leading-tight">
                  {partner.name}
                </span>
                {/* Micro línea dorada que aparece en hover */}
                <div className="h-px w-0 group-hover:w-8 bg-[var(--color-primary)] transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pie de sección */}
        <motion.p
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center font-sans text-[10px] uppercase tracking-[0.3em] text-[var(--color-foreground)]/25 mt-12"
        >
          ¿Quieres ser parte del clan? Escríbenos.
        </motion.p>
      </div>

      {/* Separador inferior */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/20 to-transparent" />
    </section>
  );
}
