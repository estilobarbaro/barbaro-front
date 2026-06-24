// src/components/molecules/CutCard.tsx
// Layout inteligente basado en la orientación real de la imagen.
// Portrait / Square → card vertical, imagen completa, overlay en hover.
// Landscape → card horizontal col-span-2, imagen izquierda, texto derecha.
// Imagen siempre completa: width+height intrínsecos + style auto.
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

  // ── LANDSCAPE LAYOUT ──────────────────────────────────────────────────────
  if (isLandscape) {
    return (
      <div className="group relative overflow-hidden cursor-pointer col-span-2 flex flex-row bg-black/30 min-w-0">
        {/* Imagen — mitad izquierda */}
        <div className="relative shrink-0 overflow-hidden" style={{ width: '55%' }}>
          <Image
            src={imageSrc}
            alt={imageAlt ?? `Corte ${name} — Estilo Bárbaro`}
            width={imageWidth}
            height={imageHeight}
            style={{ width: '100%', height: 'auto', display: 'block' }}
            sizes="(max-width: 640px) 100vw, 33vw"
            className="transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Contenido — derecha con gradiente */}
        <div className="flex flex-col justify-end p-4 flex-1 min-w-0 bg-gradient-to-l from-black/90 via-black/60 to-transparent">
          {category && (
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)] mb-1 truncate">
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

  // ── PORTRAIT / SQUARE LAYOUT ─────────────────────────────────────────────
  // Imagen completa, overlay aparece en hover. Sin cropping.
  return (
    <div className="group relative overflow-hidden cursor-pointer col-span-1 min-w-0">
      {/* Imagen — define la altura del card */}
      <Image
        src={imageSrc}
        alt={imageAlt ?? `Corte ${name} — Estilo Bárbaro`}
        width={imageWidth}
        height={imageHeight}
        style={{ width: '100%', height: 'auto', display: 'block' }}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="transition-transform duration-500 group-hover:scale-105 object-top"
      />

      {/* Overlay de texto — aparece en hover */}
      <div
        className="
          absolute inset-0 flex flex-col items-start justify-end p-3
          bg-gradient-to-t from-black/85 via-black/20 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        "
      >
        {category && (
          <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[var(--color-primary)] mb-1 truncate w-full">
            {category}
          </span>
        )}
        <span className="font-display uppercase tracking-tighter text-xl text-white leading-none break-words w-full">
          {name}
        </span>
      </div>
    </div>
  )
}
