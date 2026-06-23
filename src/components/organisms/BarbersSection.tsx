// src/components/organisms/BarbersSection.tsx
'use client'
import { SectionHeader } from '@/src/components/molecules/SectionHeader'
import { BarberCard } from '@/src/components/molecules/BarberCard'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/src/lib/motion'

const BARBERS = [
  {
    name: 'Carlos R.',
    specialty: 'Cortes clásicos & fade',
    bio: 'Maestro del fade limpio y el corte con identidad. 6 años afilando su arte en Huancayo.',
    imageSrc: 'https://picsum.photos/seed/barber1/400/500?grayscale',
    instagram: 'estilo_barbaro'
  },
  {
    name: 'Miguel A.',
    specialty: 'Barba & diseño artesanal',
    bio: 'Especialista en perfilado de barba con navaja tradicional. Precisión de relojero.',
    imageSrc: 'https://picsum.photos/seed/barber2/400/500?grayscale',
    instagram: 'estilo_barbaro'
  },
  {
    name: 'Luis P.',
    specialty: 'Estilos modernos & color',
    bio: 'Explorador de tendencias. Lleva lo último de Lima y CDMX a las sillas del clan.',
    imageSrc: 'https://picsum.photos/seed/barber3/400/500?grayscale',
    instagram: 'estilo_barbaro'
  },
]

export function BarbersSection() {
  return (
    <section
      id="barberos"
      className="section-ivory py-12 lg:py-16"
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-6 flex flex-col gap-8">
        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <SectionHeader label="El equipo" title="Nuestros Barberos" />
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {BARBERS.map((barber) => (
            <motion.div key={barber.name} variants={fadeUp}>
              <BarberCard {...barber} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
