// src/components/organisms/Hero.tsx
// Rediseñado con fondo-barberia.webp — imagen a color con LEDs dorados.
// El overlay respeta los tonos ambar originales de la barbería.
import { GrainOverlay } from '@/src/components/atoms/GrainOverlay'
import { GoldLine } from '@/src/components/atoms/GoldLine'
import { ButtonCTA } from '@/src/components/atoms/ButtonCTA'
import Image from 'next/image'

export function Hero() {
  return (
    <GrainOverlay className="relative min-h-[85vh] flex items-center">
      {/* Imagen de fondo — fondo-barberia.webp a color */}
      <Image
        src="/images/hero/fondo-barberia.webp"
        alt="Interior de Estilo Bárbaro Barber Suite — Huancayo, Perú"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden="true"
      />

      {/* Overlay dark graduated — preserva los LEDs dorados del fondo */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85"
        aria-hidden="true"
      />

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 lg:px-6 pt-20 pb-10">
        <div className="max-w-5xl flex flex-col gap-6 md:gap-8">

          {/* Label superior — PATRÓN HEREDABLE P02 */}
          <span className="font-sans text-xs md:text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-primary)]">
            Huancayo, Perú — Desde 2018
          </span>

          {/* El Logo como Elemento Visual Principal */}
          <div className="relative mb-6 md:mb-12">
            <div className="relative w-full max-w-[320px] sm:max-w-lg md:max-w-3xl lg:max-w-4xl aspect-[3/1]">
              <Image 
                src="/logo-hero-new.webp"
                alt="Estilo Bárbaro Barbería Premium Logo"
                fill
                className="object-contain object-left md:object-center"
                priority
              />
            </div>
          </div>

          {/* Gold line — PATRÓN HEREDABLE P04 */}
          <GoldLine width="lg" />

          {/* Subtítulo en Lora */}
          <p className="font-serif italic text-xl md:text-3xl text-[var(--color-foreground)] opacity-80 max-w-2xl leading-relaxed">
            Precisión, estilo y carácter. Cada visita es una experiencia.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <ButtonCTA variant="primary" size="lg" href="/contacto">
              Reservar cita
            </ButtonCTA>
            <ButtonCTA variant="outline" size="lg" href="/servicios">
              Ver servicios
            </ButtonCTA>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted-foreground)]">
          Scroll
        </span>
        <div className="h-8 w-px bg-gradient-to-b from-[var(--color-primary)] to-transparent" />
      </div>
    </GrainOverlay>
  )
}
