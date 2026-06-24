// src/components/organisms/ServicesSection.tsx
// Datos alimentados por MDX via props desde el Server Component padre.
// Elimina la dependencia de lib/services.ts hardcodeado.
'use client'
import { SectionHeader } from '@/src/components/molecules/SectionHeader'
import { ServiceCard } from '@/src/components/molecules/ServiceCard'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/src/lib/motion'
import type { ServiceCategory } from '@/src/domain/service'

interface ServicesSectionProps {
  serviceCategories: ServiceCategory[]
}

export function ServicesSection({ serviceCategories }: ServicesSectionProps) {
  // Split into premium (experiencias) and core (everything else)
  const premiumCategory = serviceCategories.find((c) => c.id === 'experiencias')
  const coreCategories = serviceCategories.filter((c) => c.id !== 'experiencias' && c.id !== 'promos')

  return (
    <section id="servicios" className="section-ivory py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-6 flex flex-col gap-12">
        
        {/* Intro */}
        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <SectionHeader label="Catálogo" title="Nuestros Rituales" align="center" />
          <p className="font-serif italic text-lg md:text-xl text-[var(--color-foreground)] opacity-75 leading-relaxed text-center mt-6 max-w-2xl mx-auto">
            Selecciona la experiencia que define tu estilo. Comparte tus favoritos o reserva directamente.
          </p>
        </motion.div>

        {/* TIER 1: Paquetes Premium */}
        {premiumCategory && premiumCategory.services.length > 0 && (
          <div className="flex flex-col gap-6">
            <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <h3 className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] border-b border-[var(--color-border)] border-[var(--color-border-light)] pb-4">
                Experiencias Premium
              </h3>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {premiumCategory.services.map((service) => (
                <motion.div key={service.slug} variants={fadeUp}>
                  <ServiceCard
                    id={service.slug}
                    name={service.title}
                    description={service.description}
                    price={service.price}
                    imageSrc={service.image ?? '/images/cuts/corte-clasico-degradado.webp'}
                    imageAlt={service.imageAlt}
                    imageFocalPoint={service.imageFocalPoint}
                    imageWidth={service.imageWidth}
                    imageHeight={service.imageHeight}
                    imageOrientation={service.imageOrientation}
                    features={service.features}
                    isPremium={service.isPremium}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* TIER 2: Core Services */}
        {coreCategories.map((category) => (
          <div key={category.id} className="flex flex-col gap-6">
            <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <h3 className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] border-b border-[var(--color-border)] pb-4">
                {category.title}
              </h3>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {category.services.map((service) => (
                <motion.div key={service.slug} variants={fadeUp}>
                  <ServiceCard
                    id={service.slug}
                    name={service.title}
                    description={service.description}
                    price={service.price}
                    imageSrc={service.image ?? '/images/cuts/corte-taper-fade-basico.webp'}
                    imageAlt={service.imageAlt}
                    imageFocalPoint={service.imageFocalPoint}
                    imageWidth={service.imageWidth}
                    imageHeight={service.imageHeight}
                    imageOrientation={service.imageOrientation}
                    features={service.features}
                    isPremium={service.isPremium}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}

      </div>
    </section>
  )
}
