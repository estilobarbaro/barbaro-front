// src/domain/cut.ts

import type { ImageFocalPoint } from './image'

export type CutCategory = 'Fade' | 'Clásico' | 'Barba' | 'Moderno' | 'Taper'
export type ImageOrientation = 'portrait' | 'landscape' | 'square'

export interface Cut {
  slug: string
  name: string
  category: CutCategory
  tags: string[]
  imageSrc: string
  imageAlt: string
  imageFocalPoint: ImageFocalPoint
  imageWidth: number
  imageHeight: number
  imageOrientation: ImageOrientation
  featured: boolean
  order: number
  content?: string
}
