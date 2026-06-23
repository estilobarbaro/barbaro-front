// src/components/organisms/PromosSection.tsx
'use client'
import { GrainOverlay } from '@/src/components/atoms/GrainOverlay'
import { SectionHeader } from '@/src/components/molecules/SectionHeader'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/src/lib/motion'
import { ArrowRight } from 'lucide-react'
import { BARBARO_INFO } from '@/src/lib/constants'

export function PromosSection() {
  const whatsappNumber = BARBARO_INFO.phone.replace(/\D/g, "")
  const linkMembresia = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola Estilo Bárbaro, me gustaría reclamar mi Tarjeta de Membresía.')}`
  const linkColegios = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola Estilo Bárbaro, quiero aprovechar la promo escolar 3x2 (50% OFF en el tercero).')}`

  return (
    <GrainOverlay className="section-espresso py-12 lg:py-16 border-t border-[var(--color-primary)]/10">
      <div className="max-w-6xl mx-auto px-4 lg:px-6 flex flex-col gap-8">
        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <SectionHeader label="Beneficios Exclusivos" title="Membresía & Promos" align="center" />
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
           {/* Card Membresía (Estilo Visual) */}
           <motion.div variants={fadeUp} className="group relative flex flex-col h-full bg-[var(--color-background)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 transition-all duration-300 overflow-hidden">
              <div className="relative w-full aspect-video overflow-hidden">
                <Image 
                  src="/membership-front.webp" 
                  alt="Membresía Estilo Bárbaro" 
                  fill 
                  className="object-cover object-center grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-[var(--color-background)]/60 to-transparent opacity-90 pointer-events-none" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center mb-4 shadow-lg">
                    <span className="font-display text-2xl text-[var(--color-primary-foreground)]">8</span>
                  </div>
                  <h3 className="font-display text-3xl uppercase tracking-tighter text-[var(--color-foreground)] leading-none">
                    Tarjeta de <br/><span className="text-[var(--color-primary)]">Membresía</span>
                  </h3>
                </div>
              </div>

              <div className="flex flex-col flex-grow p-6 md:p-8 bg-[var(--color-background)]">
                <p className="font-sans text-sm text-[var(--color-muted-foreground)] leading-relaxed flex-grow">
                  La lealtad tiene sus privilegios. Solicita tu tarjeta física en el local. Por cada 8 cortes acumulados, el siguiente es <strong className="text-[var(--color-foreground)]">totalmente GRATIS</strong>.
                </p>
                <a 
                  href={linkMembresia}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center justify-between w-full border-t border-[var(--color-border)] pt-6 group/btn cursor-pointer"
                >
                  <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-foreground)] group-hover/btn:text-[var(--color-primary)] transition-colors">
                    Reclamar Tarjeta
                  </span>
                  <ArrowRight size={18} className="text-[var(--color-primary)] transform group-hover/btn:translate-x-2 transition-transform" />
                </a>
              </div>
           </motion.div>
           
           {/* Card Colegios (Estilo Visual) */}
           <motion.div variants={fadeUp} className="group relative flex flex-col h-full bg-[var(--color-background)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 transition-all duration-300 overflow-hidden">
              <div className="relative w-full aspect-video overflow-hidden">
                <Image 
                  src="https://picsum.photos/seed/school-barber/1920/1080?grayscale" 
                  alt="Barbería Estudiantes" 
                  fill 
                  className="object-cover object-center grayscale contrast-125 brightness-[0.4] group-hover:brightness-50 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-[var(--color-background)]/80 to-transparent opacity-90 pointer-events-none" />
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-end justify-center gap-4 md:gap-8 w-full px-6">
                  {/* Mariscal */}
                  <div className="flex flex-col items-center gap-3 group-hover:-translate-y-2 transition-transform duration-300 delay-0">
                    <div className="relative w-16 h-20 md:w-20 md:h-24 drop-shadow-2xl">
                      <Image src="/logo-mariscal-castilla.webp" alt="Mariscal Castilla" fill className="object-contain" />
                    </div>
                    <span className="font-sans text-[10px] font-bold text-white uppercase tracking-widest text-center leading-tight drop-shadow-md">
                      Mariscal<br/>Castilla
                    </span>
                  </div>
                  {/* Politécnico */}
                  <div className="flex flex-col items-center gap-3 group-hover:-translate-y-2 transition-transform duration-300 delay-75">
                    <div className="relative w-16 h-20 md:w-20 md:h-24 drop-shadow-2xl">
                      <Image src="/logo-politecnico.webp" alt="Politécnico" fill className="object-contain" />
                    </div>
                    <span className="font-sans text-[10px] font-bold text-white uppercase tracking-widest text-center leading-tight drop-shadow-md">
                      Politécnico<br/>Regional
                    </span>
                  </div>
                  {/* Santa Isabel */}
                  <div className="flex flex-col items-center gap-3 group-hover:-translate-y-2 transition-transform duration-300 delay-150">
                    <div className="relative w-16 h-20 md:w-20 md:h-24 drop-shadow-2xl">
                      <Image src="/logo-santa-isabel.webp" alt="Santa Isabel" fill className="object-contain" />
                    </div>
                    <span className="font-sans text-[10px] font-bold text-white uppercase tracking-widest text-center leading-tight drop-shadow-md">
                      Santa<br/>Isabel
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-block bg-[var(--color-primary)] text-[var(--color-primary-foreground)] text-[10px] uppercase font-bold tracking-[0.2em] px-3 py-1 mb-3">
                    3x2 (50% OFF)
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl uppercase tracking-tighter text-[var(--color-foreground)] leading-none">
                    Promos <span className="text-[var(--color-primary)]">Escolares</span>
                  </h3>
                </div>
              </div>

              <div className="flex flex-col flex-grow p-6 md:p-8 bg-[var(--color-background)]">
                <p className="font-sans text-sm text-[var(--color-muted-foreground)] leading-relaxed flex-grow">
                  Exclusivo para alumnos del <strong className="text-[var(--color-foreground)]">Mariscal Castilla, Politécnico y Santa Isabel</strong>. Solo necesitas traer una prenda referencial del colegio o tu DNI (teniendo 17 años o menos). Vengan 3 compañeros y el tercero paga solo la mitad.
                </p>
                <a 
                  href={linkColegios}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center justify-between w-full border-t border-[var(--color-border)] pt-6 group/btn cursor-pointer"
                >
                  <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-foreground)] group-hover/btn:text-[var(--color-primary)] transition-colors">
                    Activar Promo 3x2
                  </span>
                  <ArrowRight size={18} className="text-[var(--color-primary)] transform group-hover/btn:translate-x-2 transition-transform" />
                </a>
              </div>
           </motion.div>

        </motion.div>
      </div>
    </GrainOverlay>
  )
}
