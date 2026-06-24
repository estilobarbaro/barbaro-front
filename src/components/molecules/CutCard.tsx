// src/components/molecules/CutCard.tsx
// Galería de cortes — diseño collage sin gaps.
//
// REGLAS DEL LAYOUT:
//  · Todos los cards tienen contenedor de altura fija (aspect-ratio fijo).
//  · Landscape  → col-span-2, aspect-[4/3], imagen con object-cover centrado.
//  · Portrait/Square → col-span-1, aspect-[3/4], imagen con object-cover object-top.
//  · grid-auto-flow: dense en el padre rellena huecos automáticamente → 0 gaps.
//  · Nombre + categoría SIEMPRE visibles (gradient permanente abajo).
//  · Sin hover en la imagen. Hover solo en el borde del card (CSS ring).

import Image from 'next/image'
import type { ImageOrientation } from '@/src/domain/cut'

interface CutCardProps {
  name: string
  imageSrc: string
  imageAlt?: string
  imageWidth: number
  imageHeight: number
  imageOrientation: ImageOrientation
  category?: string
}

export function CutCard({
  name,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  imageOrientation,
  category,
}: CutCardProps) {
  const isLandscape = imageOrientation === 'landscape'

  // ── LANDSCAPE ──────────────────────────────────────────────────────────────
  // col-span-2 · aspect-[4/3] · imagen centrada
  if (isLandscape) {
    return (
      <div className={`
        relative col-span-2 overflow-hidden cursor-pointer
        aspect-[4/3]
        ring-1 ring-transparent hover:ring-[var(--color-primary)]/60
        transition-all duration-300
      `}>
        <Image
          src={imageSrc}
          alt={imageAlt ?? `${name} — Estilo Bárbaro`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 50vw"
          className="object-cover object-center"
        />

        {/* Gradient + texto — siempre visibles */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col">
          {category && (
            <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-[var(--color-primary)] mb-0.5 truncate">
              {category}
            </span>
          )}
          <span className="font-display uppercase tracking-tighter text-xl sm:text-2xl text-white leading-none break-words">
            {name}
          </span>
        </div>
      </div>
    )
  }

  // ── PORTRAIT / SQUARE ─────────────────────────────────────────────────────
  // col-span-1 · aspect-[3/4] · imagen desde arriba (cara/cabello visibles)
  return (
    <div className={`
      relative col-span-1 overflow-hidden cursor-pointer
      aspect-[3/4]
      ring-1 ring-transparent hover:ring-[var(--color-primary)]/60
      transition-all duration-300
    `}>
      <Image
        src={imageSrc}
        alt={imageAlt ?? `${name} — Estilo Bárbaro`}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover object-top"
      />

      {/* Gradient + texto — siempre visibles */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col">
        {category && (
          <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-[var(--color-primary)] mb-0.5 truncate">
            {category}
          </span>
        )}
        <span className="font-display uppercase tracking-tighter text-lg sm:text-xl text-white leading-none break-words">
          {name}
        </span>
      </div>
    </div>
  )
}
