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
  imageAlt?: string
  imageFocalPoint?: 'top' | 'center' | 'bottom' | 'left' | 'right'
  imageWidth?: number
  imageHeight?: number
  imageOrientation?: 'portrait' | 'landscape' | 'square'
  features?: string[]
  isPremium?: boolean
}

// ── Share dropdown (shared between layouts) ─────────────────────────────────
function ShareMenu({
  shareOpen, shareMenuRef, handleNativeShare, shareToWhatsApp, shareToFacebook,
  copyToClipboard, copied, size = 'md',
}: {
  shareOpen: boolean
  shareMenuRef: React.RefObject<HTMLDivElement>
  handleNativeShare: () => void
  shareToWhatsApp: () => void
  shareToFacebook: () => void
  copyToClipboard: () => void
  copied: boolean
  size?: 'sm' | 'md'
}) {
  const btnSize  = size === 'sm' ? 'w-8 h-8' : 'w-10 h-10'
  const iconSize = size === 'sm' ? 14 : 16
  const dropW    = size === 'sm' ? 'w-44' : 'w-48'
  const dropTop  = size === 'sm' ? 'top-10' : 'top-12'

  return (
    <div className="absolute top-3 right-3 z-30" ref={shareMenuRef}>
      <button
        onClick={(e) => { e.preventDefault(); handleNativeShare() }}
        className={`${btnSize} bg-black/50 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-[var(--color-primary)] hover:text-black transition-colors`}
        aria-label="Compartir servicio"
        aria-expanded={shareOpen}
      >
        {shareOpen ? <X size={iconSize} /> : <Share2 size={iconSize} />}
      </button>
      {shareOpen && (
        <div className={`absolute ${dropTop} right-0 ${dropW} bg-[var(--color-background)] border border-[var(--color-border)] shadow-2xl p-2 flex flex-col gap-1 origin-top-right animate-in fade-in zoom-in-95 duration-200`}>
          <button onClick={shareToWhatsApp} className="flex items-center gap-3 w-full p-2 hover:bg-[var(--color-secondary)] text-left text-sm text-[var(--color-foreground)] transition-colors">
            <WhatsAppIcon size={iconSize} /> WhatsApp
          </button>
          <button onClick={shareToFacebook} className="flex items-center gap-3 w-full p-2 hover:bg-[var(--color-secondary)] text-left text-sm text-[var(--color-foreground)] transition-colors">
            <FacebookIcon size={iconSize} /> Facebook
          </button>
          <button onClick={copyToClipboard} className="flex items-center gap-3 w-full p-2 hover:bg-[var(--color-secondary)] text-left text-sm text-[var(--color-foreground)] transition-colors border-t border-[var(--color-border)]/50 mt-1 pt-3">
            {copied ? <Check size={iconSize} className="text-green-500" /> : <LinkIcon size={iconSize} />}
            {copied ? '¡Copiado!' : 'Copiar Enlace'}
          </button>
        </div>
      )}
    </div>
  )
}

export function ServiceCard({
  id, name, description, price, imageSrc, imageAlt,
  imageWidth = 800, imageHeight = 600,
  imageOrientation = 'landscape',
  features = [], isPremium = false,
}: ServiceCardProps) {
  const isTouch   = useTouch()
  const isPortrait = imageOrientation === 'portrait' || imageOrientation === 'square'

  const [shareOpen, setShareOpen] = useState(false)
  const [copied,    setCopied]    = useState(false)
  const shareMenuRef = useRef<HTMLDivElement>(null!)

  const whatsappNumber = BARBARO_INFO.phone.replace(/\D/g, '')
  const bookingLink    = `https://wa.me/${whatsappNumber}?text=Hola%20Estilo%20B%C3%A1rbaro%2C%20me%20gustar%C3%ADa%20reservar%20el%20servicio%3A%20${encodeURIComponent(name)}.`

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (shareMenuRef.current && !shareMenuRef.current.contains(e.target as Node)) {
        setShareOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const getShareUrl     = () => `${SITE_URL}/s/${id}`
  const copyToClipboard = () => {
    navigator.clipboard.writeText(getShareUrl())
    setCopied(true)
    setTimeout(() => { setCopied(false); setShareOpen(false) }, 2000)
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
  const handleNativeShare = async () => {
    const url = getShareUrl()
    if (navigator.share && /mobile|android|iphone/i.test(navigator.userAgent.toLowerCase())) {
      try {
        await navigator.share({ title: `${name} en Estilo Bárbaro`, text: `Descubre ${name} por S/ ${price}. ${description}`, url })
        setShareOpen(false)
      } catch { /* cancelled */ }
    } else {
      setShareOpen(s => !s)
    }
  }

  // ── Clases de imagen ────────────────────────────────────────────────────────
  const imgFilter = isTouch
    ? 'grayscale-[0.5] brightness-90'
    : 'grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100'

  // ── Borde del card ──────────────────────────────────────────────────────────
  const borderCls = isPremium
    ? 'border-[var(--color-primary)]/40 shadow-[0_0_30px_rgba(223,147,54,0.05)] hover:border-[var(--color-primary)]'
    : 'border-[var(--color-border)] hover:border-[var(--color-primary)]/50'

  // ════════════════════════════════════════════════════════════════════════════
  // PORTRAIT / SQUARE — layout: imagen izquierda 40% | contenido derecha 60%
  // ════════════════════════════════════════════════════════════════════════════
  if (isPortrait) {
    return (
      <div
        id={id}
        className={`group relative flex flex-row items-stretch min-h-0 bg-[var(--color-secondary)]/30 border transition-all duration-300 overflow-hidden ${borderCls}`}
      >
        {/* ── Imagen izquierda ── */}
        <div className="relative shrink-0 overflow-hidden" style={{ width: '38%' }}>
          {isPremium && (
            <div className="absolute top-2 left-2 z-20 bg-[var(--color-primary)] text-[var(--color-primary-foreground)] text-[9px] uppercase font-bold tracking-[0.15em] px-2 py-0.5 leading-none">
              Top
            </div>
          )}
          <ShareMenu {...{ shareOpen, shareMenuRef, handleNativeShare, shareToWhatsApp, shareToFacebook, copyToClipboard, copied, size: 'sm' }} />
          <Image
            src={imageSrc}
            alt={imageAlt ?? `Servicio: ${name} — Estilo Bárbaro`}
            width={imageWidth}
            height={imageHeight}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
            sizes="(max-width: 768px) 40vw, 20vw"
            className={`transition-all duration-700 ease-out ${imgFilter}`}
          />
        </div>

        {/* ── Contenido derecha ── */}
        <div className="flex flex-col flex-1 min-w-0 p-4 overflow-hidden">
          {/* Nombre + precio en la misma línea, precio nunca se cae */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-display text-lg uppercase tracking-tighter leading-tight text-[var(--color-foreground)] min-w-0 break-words">
              {name}
            </h3>
            <span className="font-serif text-base text-[var(--color-primary)] shrink-0 whitespace-nowrap leading-tight pt-0.5">
              S/&nbsp;{price}
            </span>
          </div>

          {/* Descripción con clamp */}
          <p className="font-sans text-xs text-[var(--color-muted-foreground)] leading-relaxed line-clamp-3 mb-3 flex-grow">
            {description}
          </p>

          {/* Features resumidas */}
          {features.length > 0 && (
            <ul className="flex flex-col gap-1 mb-3">
              {features.slice(0, 3).map((f, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[var(--color-primary)] shrink-0" />
                  <span className="font-sans text-[9px] uppercase tracking-widest text-[var(--color-foreground)]/75 truncate">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* CTA al fondo */}
          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto flex items-center justify-between border-t border-[var(--color-border)] pt-3 group/btn"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.15em] font-bold text-[var(--color-foreground)] group-hover/btn:text-[var(--color-primary)] transition-colors">
              Reservar
            </span>
            <ArrowRight size={14} className="text-[var(--color-primary)] transform group-hover/btn:translate-x-1 transition-transform shrink-0" />
          </a>
        </div>
      </div>
    )
  }

  // ════════════════════════════════════════════════════════════════════════════
  // LANDSCAPE — layout: imagen arriba completa | contenido debajo
  // ════════════════════════════════════════════════════════════════════════════
  return (
    <div
      id={id}
      className={`group relative flex flex-col h-full bg-[var(--color-secondary)]/30 border transition-all duration-300 overflow-hidden ${borderCls}`}
    >
      {/* ── Imagen arriba ── */}
      <div className="relative w-full overflow-hidden shrink-0">
        {isPremium && (
          <div className="absolute top-4 left-4 z-20 bg-[var(--color-primary)] text-[var(--color-primary-foreground)] text-[10px] uppercase font-bold tracking-[0.2em] px-3 py-1">
            Recomendado
          </div>
        )}
        {/* Share — z-index alto para que el dropdown salga sobre la imagen */}
        <div className="absolute top-3 right-3 z-30" ref={shareMenuRef}>
          <button
            onClick={(e) => { e.preventDefault(); handleNativeShare() }}
            className="w-10 h-10 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-[var(--color-primary)] hover:text-black transition-colors"
            aria-label="Compartir servicio"
            aria-expanded={shareOpen}
          >
            {shareOpen ? <X size={16} /> : <Share2 size={16} />}
          </button>
          {shareOpen && (
            <div className="absolute top-12 right-0 w-48 bg-[var(--color-background)] border border-[var(--color-border)] shadow-2xl p-2 flex flex-col gap-1 origin-top-right animate-in fade-in zoom-in-95 duration-200 z-50">
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
          alt={imageAlt ?? `Servicio: ${name} — Estilo Bárbaro`}
          width={imageWidth}
          height={imageHeight}
          style={{ width: '100%', height: 'auto', display: 'block' }}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`transition-all duration-700 ease-out ${imgFilter}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)] via-transparent to-transparent opacity-80 pointer-events-none" />
      </div>

      {/* ── Contenido abajo ── */}
      <div className="flex flex-col flex-grow p-5 md:p-6 min-w-0 overflow-hidden">
        {/* Nombre + precio — no se salen nunca */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-display text-xl md:text-2xl text-[var(--color-foreground)] uppercase tracking-tighter leading-tight min-w-0 break-words">
            {name}
          </h3>
          <div className="font-serif text-xl text-[var(--color-primary)] shrink-0 whitespace-nowrap leading-tight pt-0.5">
            S/&nbsp;{price}
          </div>
        </div>

        <p className="font-sans text-sm text-[var(--color-muted-foreground)] leading-relaxed mb-5 flex-grow line-clamp-4">
          {description}
        </p>

        {features.length > 0 && (
          <ul className="flex flex-col gap-2 mb-6">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 min-w-0">
                <span className="w-1 h-1 rounded-full bg-[var(--color-primary)] shrink-0" />
                <span className="font-sans text-[10px] uppercase tracking-widest text-[var(--color-foreground)]/80 truncate">
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
          className="mt-auto flex items-center justify-between w-full border-t border-[var(--color-border)] pt-5 group/btn"
        >
          <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-foreground)] group-hover/btn:text-[var(--color-primary)] transition-colors">
            Reservar Ritual
          </span>
          <ArrowRight size={18} className="text-[var(--color-primary)] transform group-hover/btn:translate-x-2 transition-transform shrink-0" />
        </a>
      </div>
    </div>
  )
}
