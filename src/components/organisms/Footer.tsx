// src/components/organisms/Footer.tsx
import { ContactInfo } from '@/src/components/molecules/ContactInfo'
import { NavItem } from '@/src/components/molecules/NavItem'
import { BARBARO_INFO } from '@/src/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import { SdlFooter } from './SdlFooter'

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

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
              className="w-9 h-9 rounded-full border border-primary/20 flex items-center justify-center text-foreground/50 hover:text-primary hover:border-primary transition-all duration-300">
              <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href={BARBARO_INFO.social.instagram} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-primary/20 flex items-center justify-center text-foreground/50 hover:text-primary hover:border-primary transition-all duration-300">
              <InstagramIcon size={16} />
            </a>
            <a href={BARBARO_INFO.social.tiktok} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-primary/20 flex items-center justify-center text-foreground/50 hover:text-primary hover:border-primary transition-all duration-300">
              <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-.99.01-1.49.18-3.33 2.76-6.13 6.01-6.59 1.38-.2 2.81.05 4.04.77V10.3c-.9-.37-1.89-.52-2.85-.35-1.24.14-2.43.79-3.18 1.78-.87 1.07-1.21 2.52-.94 3.89.15 1.01.69 1.97 1.53 2.63.95.77 2.19 1.12 3.41 1.01 1.14-.04 2.22-.53 3.01-1.33.72-.73 1.14-1.74 1.25-2.76.12-2.31.05-4.62.07-6.93.02-4.57.01-9.14.02-13.71z"/></svg>
            </a>
          </div>

        </div>
      </footer>
      <SdlFooter tema="dark" />
    </>
  )
}
