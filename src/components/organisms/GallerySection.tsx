// src/components/organisms/GallerySection.tsx
// Galería collage — cero gaps gracias a grid-auto-flow: dense.
// · Portrait (col-span-1) y landscape (col-span-2) se mezclan sin huecos.
// · Texto siempre visible en cada card (no requiere hover).
// · Filtros de categoría animados con Framer Motion.
'use client'

import { useState } from 'react'
import { SectionHeader } from '@/src/components/molecules/SectionHeader'
import { CutCard } from '@/src/components/molecules/CutCard'
import { Badge } from '@/src/components/atoms/Badge'
import { motion, AnimatePresence } from 'framer-motion'
import type { Cut, CutCategory } from '@/src/domain/cut'

const ALL_LABEL = 'Todos'

interface GallerySectionProps {
  cuts: Cut[]
}

export function GallerySection({ cuts }: GallerySectionProps) {
  // Categorías únicas derivadas del contenido MDX
  const categories: string[] = [
    ALL_LABEL,
    ...Array.from(new Set(cuts.map((c) => c.category))),
  ]

  const [active, setActive] = useState<string>(ALL_LABEL)

  const filtered = active === ALL_LABEL
    ? cuts
    : cuts.filter((c) => c.category === active)

  return (
    <section id="galeria" className="section-graphite py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-6 flex flex-col gap-6">

        {/* Header + filtros */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <SectionHeader label="Nuestro trabajo" title="Galería de Cortes" />
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Badge key={cat} active={active === cat} onClick={() => setActive(cat)}>
                {cat}
              </Badge>
            ))}
          </div>
        </div>

        {/* 
          COLLAGE GRID
          ─────────────────────────────────────────────────────────────
          · 2 columnas en móvil, 3 en sm, 4 en lg
          · grid-auto-flow: dense → rellena huecos automáticamente
          · portrait = col-span-1, landscape = col-span-2
          · Sin items-start → las rows son uniform (aspect-ratio fijo por card)
          · gap-1.5 da efecto collage ajustado
        */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1.5"
            style={{ gridAutoFlow: 'dense' }}
          >
            {filtered.map((cut, i) => (
              <motion.div
                key={cut.slug}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: i * 0.04 }}
                // La clase col-span la maneja CutCard internamente
                className={cut.imageOrientation === 'landscape' ? 'col-span-2' : 'col-span-1'}
              >
                <CutCard
                  name={cut.name}
                  imageSrc={cut.imageSrc}
                  imageAlt={cut.imageAlt}
                  imageWidth={cut.imageWidth}
                  imageHeight={cut.imageHeight}
                  imageOrientation={cut.imageOrientation}
                  category={cut.category}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="text-center font-sans text-sm text-[var(--color-muted-foreground)] py-12">
            No hay cortes en esta categoría aún.
          </p>
        )}

      </div>
    </section>
  )
}
