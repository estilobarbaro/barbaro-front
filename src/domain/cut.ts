// src/domain/cut.ts

import type { ImageFocalPoint } from './image'

export type CutCategory = 'Fade' | 'Clásico' | 'Barba' | 'Moderno' | 'Taper'

export interface Cut {
  slug: string
  name: string
  category: CutCategory
  tags: string[]
  imageSrc: string
  imageAlt: string
  imageFocalPoint: ImageFocalPoint
  featured: boolean
  order: number
  content?: string
}
