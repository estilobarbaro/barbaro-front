// app/s/[id]/page.tsx
// Página de servicio compartible — OG dinámico para WhatsApp, Facebook, Telegram, IG
import { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import { ALL_SERVICES } from '@/src/lib/services'
import { BARBARO_INFO, SITE_URL } from '@/src/lib/constants'

interface Props {
  params: Promise<{ id: string }>
}

// ── Genera metadata OG dinámica por servicio ──────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const service = ALL_SERVICES.find((s) => s.id === id)

  if (!service) return { title: 'Servicio no encontrado — Estilo Bárbaro' }

  const title       = `${service.name} — S/ ${service.price} | Estilo Bárbaro`
  const description = `${service.description} Disponible en ${BARBARO_INFO.address}. ✂️ La barbería premium de Huancayo.`
  const url         = `${SITE_URL}/s/${service.id}`
  const image       = service.imageSrc

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Estilo Bárbaro',
      images: [{ url: image, width: 1200, height: 630, alt: `${service.name} en Estilo Bárbaro` }],
      type: 'website',
      locale: 'es_PE',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: { canonical: url },
  }
}

// ── Pre-genera rutas en build time ────────────────────────────────────────────
export async function generateStaticParams() {
  return ALL_SERVICES.map((s) => ({ id: s.id }))
}

// ── La página — bots ven OG, usuarios son redirigidos ─────────────────────────
export default async function ServiceSharePage({ params }: Props) {
  const { id } = await params
  const service = ALL_SERVICES.find((s) => s.id === id)
  if (!service) notFound()
  redirect(`/#${service.id}`)
}
