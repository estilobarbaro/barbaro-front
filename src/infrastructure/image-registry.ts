// src/infrastructure/image-registry.ts
// Central registry of all image assets in the barbaro-front project.
// Single source of truth for src, alt, focalPoint, sizes, and priority.

import type { ImageAsset, ImageFocalPoint, ImageUsageContext } from '@/src/domain/image'

// ─── REGISTRY ────────────────────────────────────────────────────────────────

export const IMAGE_REGISTRY: Record<string, ImageAsset> = {
  'hero-barberia': {
    src: '/images/hero/fondo-barberia.webp',
    alt: 'Interior de Estilo Bárbaro Barber Suite — Huancayo, Perú',
    focalPoint: 'center',
    aspectRatio: 'landscape',
    priority: true,
    sizes: '100vw',
  },
  'corte-clasico-degradado': {
    src: '/images/cuts/corte-clasico-degradado.webp',
    alt: 'Corte Clásico Degradado con Fade — Estilo Bárbaro',
    focalPoint: 'top',
    aspectRatio: 'portrait',
    sizes: '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw',
  },
  'corte-mid-fake': {
    src: '/images/cuts/corte-mid-fake.webp',
    alt: 'Corte Mid Fade — Estilo Bárbaro',
    focalPoint: 'top',
    aspectRatio: 'portrait',
    sizes: '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw',
  },
  'corte-mid-fake-contextura': {
    src: '/images/cuts/corte-mid-fake-contextura.webp',
    alt: 'Corte Mid Fade — Estilo Bárbaro Barber Suite',
    focalPoint: 'top',
    aspectRatio: 'portrait',
    sizes: '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw',
  },
  'corte-taper-fade-basico': {
    src: '/images/cuts/corte-taper-fade-basico.webp',
    alt: 'Taper Fade Básico — Estilo Bárbaro',
    focalPoint: 'top',
    aspectRatio: 'portrait',
    sizes: '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw',
  },
}

// ─── CONTEXT SIZES ────────────────────────────────────────────────────────────
// Default sizes per usage context. Overridden by registry or per-component.

export const CONTEXT_SIZES: Record<ImageUsageContext, string> = {
  hero:      '100vw',
  gallery:   '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw',
  card:      '(max-width: 768px) 100vw, 50vw',
  service:   '(max-width: 768px) 100vw, 50vw',
  thumbnail: '(max-width: 640px) 33vw, 15vw',
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────

export function getFocalPointClass(point: ImageFocalPoint): string {
  const map: Record<ImageFocalPoint, string> = {
    top:    'object-top',
    center: 'object-center',
    bottom: 'object-bottom',
    left:   'object-left',
    right:  'object-right',
  }
  return map[point]
}

/** Look up an asset from the registry. Returns undefined if not found. */
export function getImageAsset(key: string): ImageAsset | undefined {
  return IMAGE_REGISTRY[key]
}
