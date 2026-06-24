// src/components/organisms/SocialSection.tsx
'use client'

import { motion } from 'framer-motion'
import { Star, ExternalLink, Play } from 'lucide-react'
import { SectionHeader } from '@/src/components/molecules/SectionHeader'
import { BARBARO_INFO } from '@/src/lib/constants'
import Image from 'next/image'

// Componente para simular una ventana de aplicación interactiva y limpia (Mac OS Style)
interface WindowMockupProps {
  title: string
  urlText: string
  colorTheme: 'instagram' | 'tiktok' | 'facebook' | 'google'
  actionUrl: string
  actionLabel: string
  children: React.ReactNode
}

function WindowMockup({ title, urlText, colorTheme, actionUrl, actionLabel, children }: WindowMockupProps) {
  const getGlowColor = () => {
    switch (colorTheme) {
      case 'instagram': return 'hover:shadow-pink-500/5 hover:border-pink-500/30'
      case 'tiktok': return 'hover:shadow-cyan-400/5 hover:border-cyan-400/30'
      case 'facebook': return 'hover:shadow-blue-600/5 hover:border-blue-600/30'
      case 'google': return 'hover:shadow-amber-400/5 hover:border-amber-400/30'
    }
  }

  return (
    <div className={`
      flex flex-col w-full h-[470px] rounded-xl overflow-hidden
      bg-white border border-[var(--color-border-light)]/70 shadow-sm
      transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${getGlowColor()}
    `}>
      {/* Barra de cabecera de la Ventana (macOS Style) */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-100/90 border-b border-neutral-200/80 backdrop-blur-xs select-none">
        {/* Botones de control */}
        <div className="flex items-center gap-1.5 w-16">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        
        {/* Barra de dirección URL */}
        <div className="flex-1 max-w-[190px] md:max-w-[220px] px-3 py-0.5 rounded-md bg-white border border-neutral-200 text-center font-mono text-[9px] text-neutral-400 truncate">
          {urlText}
        </div>
        
        {/* Botón directo de redirección en la barra */}
        <a 
          href={actionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[9px] font-bold text-neutral-500 hover:text-[var(--color-primary)] transition-colors uppercase tracking-widest"
        >
          <span>Ir</span>
          <ExternalLink className="w-2.5 h-2.5" />
        </a>
      </div>

      {/* Contenido principal */}
      <div className="flex-1 relative w-full bg-neutral-50 overflow-hidden flex flex-col">
        <div className="flex-1 relative overflow-hidden">
          {children}
        </div>

        {/* Barra de acción inferior clara e intuitiva para ir a la red social */}
        <a 
          href={actionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center justify-center gap-2 w-full py-3 border-t border-neutral-200/80
            bg-neutral-50 hover:bg-neutral-100 transition-colors text-center
            font-sans text-xs font-bold uppercase tracking-wider text-neutral-700 hover:text-black
          "
        >
          <span>{actionLabel}</span>
          <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black transition-colors" />
        </a>
      </div>
    </div>
  )
}

export function SocialSection() {
  const { facebook, instagram, tiktok } = BARBARO_INFO.social
  const googleMapUrl = "https://maps.app.goo.gl/rPCEbnaioBMgzfZL7"

  // Selección de imágenes de cortes reales para la cuadrícula simulada de Instagram
  const igImages = [
    { src: "/images/cuts/corte-clasico-degradado.webp", alt: "Degradado clásico" },
    { src: "/images/cuts/corte-mid-fake.webp", alt: "Corte Mid Fade" },
    { src: "/images/cuts/corte-taper-fade-basico.webp", alt: "Corte Taper" },
    { src: "/images/cuts/masaje-lavado.webp", alt: "Ritual de Lavado" }
  ]

  return (
    <section id="comunidad" className="section-ivory py-16 lg:py-20 border-t border-[var(--color-border-light)]/60">
      <div className="max-w-6xl mx-auto px-4 lg:px-6 flex flex-col gap-10">
        
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeader
            label="Comunidad Bárbaro"
            title="Únete a nuestro clan en redes"
            light={true}
          />
          <p className="font-sans text-sm text-[var(--color-muted-foreground)] max-w-sm leading-relaxed">
            Conéctate con nuestros canales oficiales en Huancayo. Mira videos de transformaciones, entérate de beneficios y lee opiniones de clientes reales.
          </p>
        </div>

        {/* Bento Grid de Ventanas Interactivas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* VENTANA 1: Facebook Live Feed (Page Plugin Oficial) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <WindowMockup 
              title="Facebook" 
              urlText="facebook.com/estilo.barbaro" 
              colorTheme="facebook"
              actionUrl={facebook}
              actionLabel="Ver página de Facebook"
            >
              <iframe
                src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(facebook)}&tabs=timeline&width=340&height=370&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false`}
                width="100%"
                height="100%"
                style={{ border: 'none', overflow: 'hidden' }}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Feed en vivo de Facebook de Estilo Bárbaro"
              />
            </WindowMockup>
          </motion.div>

          {/* VENTANA 2: TikTok Video Player (Último video real interactivo) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <WindowMockup 
              title="TikTok" 
              urlText="tiktok.com/@estilo_barbaro" 
              colorTheme="tiktok"
              actionUrl={tiktok}
              actionLabel="Seguir en TikTok"
            >
              <iframe
                src="https://www.tiktok.com/embed/v2/7624749830887247112"
                width="100%"
                height="100%"
                style={{ border: 'none', overflow: 'hidden' }}
                allow="autoplay; encrypted-media; picture-in-picture"
                title="Último video de TikTok de Estilo Bárbaro"
              />
            </WindowMockup>
          </motion.div>

          {/* VENTANA 3: Instagram Feed Mockup (Cuadrícula real minimalista de cortes reales) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <WindowMockup 
              title="Instagram" 
              urlText="instagram.com/estilo_barbaro" 
              colorTheme="instagram"
              actionUrl={instagram}
              actionLabel="Seguir en Instagram"
            >
              <div className="flex flex-col h-full bg-white p-4 justify-between font-sans select-none">
                {/* Cabecera del perfil */}
                <div className="flex items-center gap-3 border-b border-neutral-100 pb-3">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden border border-neutral-200">
                    <Image
                      src="/logo-hero.webp"
                      alt="Estilo Bárbaro"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-neutral-800 leading-tight">@estilo_barbaro</span>
                    <span className="text-[9px] text-neutral-400">Barbería Premium en Huancayo</span>
                  </div>
                </div>

                {/* Cuadrícula de 2x2 de fotos reales de cortes (Sutil y sin datos simulados falsos) */}
                <div className="grid grid-cols-2 gap-2 flex-1 my-3 bg-neutral-50 p-1 rounded-lg">
                  {igImages.map((img, i) => (
                    <a
                      key={i}
                      href={instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-full h-full rounded-md overflow-hidden bg-neutral-900 shadow-2xs group"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                    </a>
                  ))}
                </div>

                <div className="text-[10px] text-neutral-400 text-center leading-normal">
                  Cortes clásicos, degradados y rituales exclusivos.
                </div>
              </div>
            </WindowMockup>
          </motion.div>

        </div>

        {/* SECCIÓN MOCKUP 4: Ficha de Google Business Reviews (Sutil y limpia) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="w-full rounded-xl overflow-hidden bg-white border border-[var(--color-border-light)]/70 shadow-sm transition-all duration-300 hover:shadow-md hover:border-amber-400/30"
        >
          {/* macOS Title Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-100/90 border-b border-neutral-200/80 select-none">
            <div className="flex items-center gap-1.5 w-16">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 max-w-[340px] px-3 py-0.5 rounded-md bg-white border border-neutral-200 text-center font-mono text-[9px] text-neutral-400 truncate">
              google.com/maps/place/Estilo+Bárbaro
            </div>
            <a 
              href={googleMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[9px] font-bold text-neutral-500 hover:text-[var(--color-primary)] transition-colors uppercase tracking-widest"
            >
              <span>Ver</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>

          {/* Ficha Google Business (Sin reseñas de texto ficticias, sutil y elegante) */}
          <div className="flex flex-col md:flex-row p-6 md:p-8 gap-6 md:gap-8 items-center bg-white font-sans">
            {/* Calificación General Promedio */}
            <div className="flex flex-col items-center text-center p-5 bg-amber-50/50 border border-amber-200/50 rounded-xl min-w-[180px] select-none">
              <span className="text-4xl font-bold text-neutral-800 font-serif leading-none">4.9</span>
              <div className="flex items-center gap-0.5 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider">Estilo Bárbaro</span>
              <span className="text-[9px] text-neutral-400 mt-0.5">Opinión en Google Maps</span>
            </div>

            {/* Texto y Llamado a la acción sutil y honesto */}
            <div className="flex-1 flex flex-col justify-between gap-4 text-center md:text-left">
              <div className="space-y-2">
                <h4 className="font-display uppercase text-lg text-neutral-800 tracking-tight">
                  La opinión de nuestro clan es lo primero
                </h4>
                <p className="text-xs text-neutral-500 leading-relaxed max-w-2xl">
                  Nos esforzamos por brindar una experiencia de corte y grooming masculino inigualable en El Tambo, Huancayo. Valoramos y respetamos las opiniones reales de cada cliente que confía en el talento de nuestros barberos.
                </p>
              </div>

              {/* Botón de redirección directa a Google Maps */}
              <a
                href={googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  self-center md:self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                  bg-amber-500 hover:bg-amber-400 text-black font-sans text-xs font-bold uppercase tracking-wider
                  transition-colors shadow-2xs hover:shadow-xs
                "
              >
                <span>Escribir o ver opiniones reales</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
