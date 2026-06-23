'use client'

import { PhotoFrame } from '@/src/components/atoms/PhotoFrame'
import { InstagramIcon } from '@/src/components/atoms/SocialIcons'
import { useTouch } from '@/src/hooks/useTouch'

interface BarberCardProps {
  name: string
  specialty: string
  bio?: string
  imageSrc: string
  instagram?: string
}

export function BarberCard({ name, specialty, bio, imageSrc, instagram }: BarberCardProps) {
  const isTouch = useTouch();

  return (
    <div className="group flex flex-col gap-0 overflow-hidden">

      {/* Foto */}
      <div className="relative overflow-hidden">
        <PhotoFrame
          src={imageSrc}
          alt={`${name} — barbero de Estilo Bárbaro`}
          aspectRatio="portrait"
          grayscaleHover
        />

        {/* Overlay Instagram — aparece en hover (SOLO EN PC) */}
        {instagram && !isTouch && (
          <a
            href={`https://instagram.com/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              absolute inset-0 flex flex-col items-start justify-end p-5
              bg-gradient-to-t from-black/80 via-black/20 to-transparent
              opacity-0 group-hover:opacity-100
              transition-all duration-400
            "
            aria-label={`Ver Instagram de ${name}`}
          >
            {/* Badge IG con gradiente real */}
            <div className="
              flex items-center gap-2 px-3 py-2 rounded-full
              bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]
              transform translate-y-3 group-hover:translate-y-0
              transition-transform duration-400
            ">
              <InstagramIcon size={13} />
              <span className="font-sans text-[11px] font-bold text-white uppercase tracking-wider">
                @{instagram}
              </span>
            </div>
          </a>
        )}
      </div>

      {/* Info — en Ivory el texto es dark automáticamente por CSS cascade */}
      <div className="flex flex-col gap-2 pt-4">
        {/* Línea dorada que crece en hover */}
        <div className="h-px w-8 bg-[var(--color-primary)] group-hover:w-full transition-all duration-500 ease-out" />

        <h3 className="font-display uppercase tracking-tighter text-2xl text-[var(--color-foreground)] leading-none mt-1">
          {name}
        </h3>

        <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-[var(--color-primary)] font-medium">
          {specialty}
        </p>

        {bio && (
          <p className="font-serif italic text-sm text-[var(--color-foreground)] opacity-60 leading-relaxed mt-1">
            {bio}
          </p>
        )}

        {/* Pie: IG handle - Adaptado para táctil */}
        {instagram && (
          <a
            href={`https://instagram.com/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className={
              isTouch 
              ? "mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br from-[#833AB4]/10 via-[#FD1D1D]/10 to-[#F77737]/10 border border-[#FD1D1D]/20 text-[var(--color-foreground)] transition-colors self-start"
              : "inline-flex items-center gap-1.5 mt-1 font-sans text-[10px] text-[var(--color-foreground)] opacity-40 hover:opacity-80 hover:text-[var(--color-primary)] transition-all duration-200"
            }
          >
            <div className={isTouch ? "text-[#FD1D1D]" : ""}>
              <InstagramIcon size={isTouch ? 14 : 11} />
            </div>
            <span className={isTouch ? "font-sans text-[11px] font-bold" : ""}>@{instagram}</span>
          </a>
        )}
      </div>
    </div>
  )
}
