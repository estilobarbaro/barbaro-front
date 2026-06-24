import { Hero } from '@/src/components/organisms/Hero'
import { ServicesSection } from '@/src/components/organisms/ServicesSection'
import { PromosSection } from '@/src/components/organisms/PromosSection'
import { BarbersSection } from '@/src/components/organisms/BarbersSection'
import { GallerySection } from '@/src/components/organisms/GallerySection'
import { SocialSection } from '@/src/components/organisms/SocialSection'
import { ContactSection } from '@/src/components/organisms/ContactSection'
import { PartnerCarousel } from '@/src/components/organisms/PartnerCarousel'
import { CTASection } from '@/src/components/organisms/CTASection'
import { getPartners, getGallery, getServicesByCategory } from '@/src/infrastructure/mdx-repository'

// This is a React Server Component — data is fetched at build/request time.
export default function HomePage() {
  const partners = getPartners()
  const cuts = getGallery()
  const serviceCategories = getServicesByCategory()

  return (
    <main className="flex-1">
      <Hero />
      <PartnerCarousel partners={partners} />
      <ServicesSection serviceCategories={serviceCategories} />
      <PromosSection />
      <BarbersSection />
      <GallerySection cuts={cuts} />
      <SocialSection />
      <ContactSection />
      <CTASection />
    </main>
  )
}
