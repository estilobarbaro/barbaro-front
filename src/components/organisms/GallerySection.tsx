// src/components/organisms/GallerySection.tsx
'use client'
import { useState } from 'react'
import { SectionHeader } from '@/src/components/molecules/SectionHeader'
import { CutCard } from '@/src/components/molecules/CutCard'
import { Badge } from '@/src/components/atoms/Badge'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/src/lib/motion'

const CATEGORIES = ['Todos', 'Fade', 'Clásico', 'Barba', 'Moderno']

const CUTS = [
  { name: 'Fade', imageSrc: 'https://picsum.photos/seed/cut1/500/500?grayscale', category: 'Fade' },
  { name: 'Classic Taper', imageSrc: 'https://picsum.photos/seed/cut2/500/500?grayscale', category: 'Clásico' },
  { name: 'Pompadour', imageSrc: 'https://picsum.photos/seed/cut3/500/500?grayscale', category: 'Clásico' },
  { name: 'Low Fade', imageSrc: 'https://picsum.photos/seed/cut4/500/500?grayscale', category: 'Fade' },
  { name: 'Beard Trim', imageSrc: 'https://picsum.photos/seed/cut5/500/500?grayscale', category: 'Barba' },
  { name: 'Mullet', imageSrc: 'https://picsum.photos/seed/cut6/500/500?grayscale', category: 'Moderno' },
  { name: 'Buzz Cut', imageSrc: 'https://picsum.photos/seed/cut7/500/500?grayscale', category: 'Moderno' },
  { name: 'Full Beard', imageSrc: 'https://picsum.photos/seed/cut8/500/500?grayscale', category: 'Barba' },
]

export function GallerySection() {
  const [active, setActive] = useState('Todos')
  const filtered = active === 'Todos' ? CUTS : CUTS.filter((c) => c.category === active)

  return (
    <section id="galeria" className="section-graphite py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-6 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <SectionHeader label="Nuestro trabajo" title="Galería de Cortes" />
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
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
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1.5"
        >
          {filtered.map((cut) => (
            <motion.div key={cut.name} variants={fadeUp}>
              <CutCard {...cut} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
