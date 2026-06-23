'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Share2, ArrowRight, Link as LinkIcon, Check, X } from 'lucide-react'
import { BARBARO_INFO, SITE_URL } from '@/src/lib/constants'
import { useTouch } from '@/src/hooks/useTouch'

import { WhatsAppIcon, FacebookIcon } from '@/src/components/atoms/SocialIcons'

interface ServiceCardProps {
  id: string
  name: string
  description: string
  price: string | number
  imageSrc: string
  features?: string[]
  isPremium?: boolean
}

export function ServiceCard({
  id,
  name,
  description,
  price,
  imageSrc,
  features = [],
  isPremium = false,
}: ServiceCardProps) {
  const isTouch = useTouch()
  const [shareOpen, setShareOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const shareMenuRef = useRef<HTMLDivElement>(null)
  
  const whatsappNumber = BARBARO_INFO.phone.replace(/\D/g, "")
  const bookingLink = `https://wa.me/${whatsappNumber}?text=Hola%20Estilo%20Bárbaro,%20me%20gustaría%20reservar%20el%20servicio:%20${encodeURIComponent(name)}.`

  // Cierra el menú si hacen clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (shareMenuRef.current && !shareMenuRef.current.contains(event.target as Node)) {
        setShareOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const getShareUrl = () => {
    return `${SITE_URL}/s/${id}`
  }

  const handleNativeShare = async () => {
    const url = getShareUrl()
    if (navigator.share && /mobile|android|iphone/i.test(navigator.userAgent.toLowerCase())) {
      try {
        await navigator.share({
          title: `${name} en Estilo Bárbaro`,
          text: `Descubre ${name} por S/ ${price}. ${description}`,
          url: url
        })
        setShareOpen(false)
      } catch (err) {
        console.log("Compartir cancelado o no soportado", err)
      }
    } else {
      setShareOpen(!shareOpen)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(getShareUrl())
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
      setShareOpen(false)
    }, 2000)
  }

  const shareToWhatsApp = () => {
    const text = encodeURIComponent(`¡Mira este servicio en Estilo Bárbaro!\n\n*${name}* por S/ ${price}\n${description}\n\nResérvalo aquí: `)
    window.open(`https://api.whatsapp.com/send?text=${text}${getShareUrl()}`, '_blank')
    setShareOpen(false)
  }

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getShareUrl())}`, '_blank')
    setShareOpen(false)
  }

  return (
    <div 
      id={id}
      className={`
        group relative flex flex-col h-full bg-[var(--color-secondary)]/30 border
        transition-all duration-300 overflow-visible
        ${isPremium ? 'border-[var(--color-primary)]/40 shadow-[0_0_30px_rgba(223,147,54,0.05)] hover:border-[var(--color-primary)]' : 'border-[var(--color-border)] hover:border-[var(--color-primary)]/50'}
      `}
    >
      {/* Contenedor de Imagen */}
      <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] overflow-hidden">
        {/* Etiqueta Premium */}
        {isPremium && (
          <div className="absolute top-4 left-4 z-20 bg-[var(--color-primary)] text-[var(--color-primary-foreground)] text-[10px] uppercase font-bold tracking-[0.2em] px-3 py-1">
            Recomendado
          </div>
        )}
        
        {/* Botón y Menú de Compartir */}
        <div className="absolute top-4 right-4 z-30" ref={shareMenuRef}>
          <button 
            onClick={(e) => { e.preventDefault(); handleNativeShare(); }}
            className="bg-black/50 backdrop-blur-sm border border-white/10 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-[var(--color-primary)] hover:text-black transition-colors"
            aria-label="Compartir servicio"
            aria-expanded={shareOpen}
          >
            {shareOpen ? <X size={16} /> : <Share2 size={16} />}
          </button>

          {/* Dropdown Menu */}
          {shareOpen && (
            <div className="absolute top-12 right-0 w-48 bg-[var(--color-background)] border border-[var(--color-border)] shadow-2xl p-2 flex flex-col gap-1 origin-top-right animate-in fade-in zoom-in-95 duration-200">
              <button onClick={shareToWhatsApp} className="flex items-center gap-3 w-full p-2 hover:bg-[var(--color-secondary)] text-left text-sm text-[var(--color-foreground)] transition-colors">
                <WhatsAppIcon size={16} /> WhatsApp
              </button>
              <button onClick={shareToFacebook} className="flex items-center gap-3 w-full p-2 hover:bg-[var(--color-secondary)] text-left text-sm text-[var(--color-foreground)] transition-colors">
                <FacebookIcon size={16} /> Facebook
              </button>
              <button onClick={copyToClipboard} className="flex items-center gap-3 w-full p-2 hover:bg-[var(--color-secondary)] text-left text-sm text-[var(--color-foreground)] transition-colors border-t border-[var(--color-border)]/50 mt-1 pt-3">
                {copied ? <Check size={16} className="text-green-500" /> : <LinkIcon size={16} />}
                {copied ? '¡Copiado!' : 'Copiar Enlace'}
              </button>
            </div>
          )}
        </div>

        <Image
          src={imageSrc}
          alt={`Servicio: ${name}`}
          fill
          className={`
            object-cover object-center transition-all duration-700 ease-out
            ${
              isTouch
                ? "grayscale-[0.5] brightness-90"
                : "grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100"
            }
          `}
        />
        
        {/* Gradiente para que el texto resalte */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)] via-transparent to-transparent opacity-80 pointer-events-none" />
      </div>

      {/* Contenido (Textos y Botón) */}
      <div className="flex flex-col flex-grow p-6 md:p-8 relative z-10">
        <div className="flex justify-between items-start gap-4 mb-4">
          <h3 className="font-display text-2xl md:text-3xl text-[var(--color-foreground)] uppercase tracking-tighter leading-none">
            {name}
          </h3>
          <div className="font-serif text-2xl text-[var(--color-primary)] shrink-0">
            S/ {price}
          </div>
        </div>

        <p className="font-sans text-sm text-[var(--color-muted-foreground)] leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {features.length > 0 && (
          <ul className="flex flex-col gap-2 mb-8">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[var(--color-primary)] shrink-0" />
                <span className="font-sans text-[10px] uppercase tracking-widest text-[var(--color-foreground)]/80">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        )}

        <a 
          href={bookingLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-between w-full border-t border-[var(--color-border)] pt-6 group/btn cursor-pointer"
        >
          <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-foreground)] group-hover/btn:text-[var(--color-primary)] transition-colors">
            Reservar Ritual
          </span>
          <ArrowRight size={18} className="text-[var(--color-primary)] transform group-hover/btn:translate-x-2 transition-transform" />
        </a>
      </div>
    </div>
  )
}
