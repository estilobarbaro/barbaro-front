"use client";

import { motion } from "framer-motion";
import { ServiceCategory } from "@/src/domain/service";
import { CTASection } from "@/src/components/organisms/CTASection";
import { SectionHeader } from "@/src/components/molecules/SectionHeader";
import { ServiceCard } from "@/src/components/molecules/ServiceCard";
import { PromosSection } from "@/src/components/organisms/PromosSection";

interface ServicesPageProps {
  categories: ServiceCategory[];
}

export default function ServicesPageClient({ categories }: ServicesPageProps) {
  return (
    <main className="bg-background min-h-screen pt-20 pb-12 flex-1">
      {/* Editorial Header Unificado */}
      <section className="max-w-6xl mx-auto px-4 lg:px-6 mb-16">
        <div className="max-w-4xl">
          <SectionHeader 
            label="CATÁLOGO DE SERVICIOS PREMIUM" 
            title="EL ESTILO SIN LÍMITES" 
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-base md:text-lg text-white/70 max-w-2xl border-l border-primary/20 pl-8 mt-8"
          >
            &quot;Explore nuestra selección exhaustiva de servicios diseñados para el caballero contemporáneo que no acepta compromisos en su imagen.&quot;
          </motion.p>
        </div>
      </section>

      {/* Categories & Services Loop */}
      <div className="space-y-20">
        {categories.map((category, catIndex) => (
          <section key={category.id} className="max-w-6xl mx-auto px-4 lg:px-6">
            {/* Category Header Unificado */}
            <div className="relative mb-10 overflow-hidden">
               <span className="absolute -top-4 -left-4 text-[8rem] font-display text-white/[0.01] select-none pointer-events-none uppercase">
                 {category.id}
               </span>
               <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-primary/10 pb-8">
                  <div className="max-w-xl">
                    <SectionHeader 
                      label={`0${catIndex + 1}`} 
                      title={category.title} 
                    />
                  </div>
                  <p className="font-serif italic text-sm md:text-base text-white/40 max-w-md md:text-right mb-1">
                    {category.description}
                  </p>
               </div>
            </div>

            {/* Services Grid con Molécula Estándar */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {category.services.map((service) => (
                <ServiceCard
                  key={service.slug}
                  id={service.slug}
                  name={service.title}
                  description={service.description}
                  price={service.price}
                  imageSrc={service.image || `/service-standard.webp`}
                  imageAlt={service.imageAlt}
                  imageFocalPoint={service.imageFocalPoint}
                  imageWidth={service.imageWidth}
                  imageHeight={service.imageHeight}
                  imageOrientation={service.imageOrientation}
                  features={service.features}
                  isPremium={service.isPremium}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Promociones & Membresías */}
      <div className="mt-20">
        <PromosSection />
      </div>

      {/* Footer CTA */}
      <CTASection />
    </main>
  );
}
