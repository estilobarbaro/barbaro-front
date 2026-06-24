// src/components/organisms/GallerySection.tsx
// GallerySection: datos alimentados por MDX via props (Server Component → Client).
// No más datos hardcodeados ni picsum.photos.
'use client'

import { useState } from 'react'
import { SectionHeader } from '@/src/components/molecules/SectionHeader'
import { CutCard } from '@/src/components/molecules/CutCard'
import { Badge } from '@/src/components/atoms/Badge'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/src/lib/motion'
import type { Cut, CutCategory } from '@/src/domain/cut'

const ALL_CATEGORIES_LABEL = 'Todos'

interface GallerySectionProps {
  cuts: Cut[]
}

export function GallerySection({ cuts }: GallerySectionProps) {
  // Derive categories dynamically from MDX data
  const categories: (typeof ALL_CATEGORIES_LABEL | CutCategory)[] = [
    ALL_CATEGORIES_LABEL,
    ...Array.from(new Set(cuts.map((c) => c.category))),
  ]

  const [active, setActive] = useState<string>(ALL_CATEGORIES_LABEL)

  const filtered =
    active === ALL_CATEGORIES_LABEL
      ? cuts
      : cuts.filter((c) => c.category === active)

  return (
    <section id="galeria" className="section-graphite py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-6 flex flex-col gap-6">
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

        <motion.div
          key={active}
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1.5 items-start"
        >
          {filtered.map((cut) => (
            <motion.div key={cut.slug} variants={fadeUp}>
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

        {filtered.length === 0 && (
          <p className="text-center font-sans text-sm text-[var(--color-muted-foreground)] py-12">
            No hay cortes en esta categoría aún.
          </p>
        )}
      </div>
    </section>
  )
}
