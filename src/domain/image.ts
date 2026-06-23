// src/domain/image.ts

export type ImageFocalPoint = 'top' | 'center' | 'bottom' | 'left' | 'right'
export type ImageAspectRatio = 'portrait' | 'landscape' | 'square' | 'wide'
export type ImageUsageContext = 'card' | 'hero' | 'thumbnail' | 'gallery' | 'service'

export interface ImageAsset {
  src: string
  alt: string
  focalPoint: ImageFocalPoint
  aspectRatio: ImageAspectRatio
  sizes?: string
  priority?: boolean
  blurDataURL?: string
}
