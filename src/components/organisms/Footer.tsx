// src/components/organisms/Footer.tsx
import { ContactInfo } from '@/src/components/molecules/ContactInfo'
import { NavItem } from '@/src/components/molecules/NavItem'
import { BARBARO_INFO } from '@/src/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import { SdlFooter } from './SdlFooter'

import { InstagramIcon, FacebookIcon, TikTokIcon } from '@/src/components/atoms/SocialIcons'

export function Footer() {
  const whatsappNumber = BARBARO_INFO.phone.replace(/\D/g, "");

  return (
    <>
      <footer className="section-espresso border-t border-[var(--color-primary)] pt-16 pb-12 mb-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col gap-16">
          
          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Columna 1: Logo + Desc */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <Link href="/" className="relative h-10 w-40">
                <Image
                  src="/logo-hero-new.webp"
                  alt="Estilo Bárbaro Logo"
                  fill
                  className="object-contain object-left"
                />
              </Link>
              <p className="font-sans text-sm text-[var(--color-muted-foreground)] leading-relaxed max-w-sm">
                {BARBARO_INFO.description}
              </p>
            </div>

            {/* Columna 2: Links */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-[var(--color-foreground)]">Navegación</h4>
              <ul className="flex flex-col gap-4">
                <NavItem href="/servicios" label="Servicios" />
                <NavItem href="/nosotros" label="Nosotros" />
                <NavItem href="/contacto" label="Contacto" />
              </ul>
            </div>

            {/* Columna 3: Contacto */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-[var(--color-foreground)]">Visítanos</h4>
              <div className="flex flex-col gap-4">
                <ContactInfo 
                  icon={<MapPin size={16} />} 
                  label="Ubicación" 
                  value={BARBARO_INFO.address.split(",").slice(0, 2).join(",")} 
                />
                <ContactInfo 
                  icon={<Phone size={16} />} 
                  label="Teléfono" 
                  value={BARBARO_INFO.phone} 
                  href={`tel:${whatsappNumber}`}
                />
                <ContactInfo 
                  icon={<Mail size={16} />} 
                  label="Correo" 
                  value={BARBARO_INFO.email} 
                  href={`mailto:${BARBARO_INFO.email}`}
                />
              </div>
            </div>

          </div>
          {/* Redes Sociales */}
          <div className="flex items-center gap-4 pt-2">
            <a href={BARBARO_INFO.social.facebook} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-foreground)]/50 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all duration-300">
              <FacebookIcon size={16} />
            </a>
            <a href={BARBARO_INFO.social.instagram} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-foreground)]/50 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all duration-300">
              <InstagramIcon size={16} />
            </a>
            <a href={BARBARO_INFO.social.tiktok} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-foreground)]/50 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all duration-300">
              <TikTokIcon size={16} />
            </a>
          </div>

        </div>
      </footer>
      <SdlFooter tema="dark" />
    </>
  )
}
