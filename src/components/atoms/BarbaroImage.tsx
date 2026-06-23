// src/components/atoms/BarbaroImage.tsx
// Smart wrapper around next/image that resolves focal-point, sizes,
// and priority from the central ImageAsset type.

import Image from 'next/image'
import { clsx } from 'clsx'
import type { ImageAsset, ImageUsageContext } from '@/src/domain/image'
import { getFocalPointClass, CONTEXT_SIZES } from '@/src/infrastructure/image-registry'

interface BarbaroImageProps {
  asset: ImageAsset
  context?: ImageUsageContext
  /** Use when the image fills a positioned parent (position: relative + overflow-hidden) */
  fill?: boolean
  /** Override width when not using fill */
  width?: number
  /** Override height when not using fill */
  height?: number
  className?: string
  /** Additional Tailwind classes for the image element itself */
  imgClassName?: string
}

export function BarbaroImage({
  asset,
  context = 'card',
  fill = true,
  width,
  height,
  className,
  imgClassName,
}: BarbaroImageProps) {
  const focalClass = getFocalPointClass(asset.focalPoint)
  const resolvedSizes = asset.sizes ?? CONTEXT_SIZES[context]

  const imageProps = fill
    ? { fill: true as const }
    : { width: width ?? 800, height: height ?? 600 }

  return (
    <div className={clsx('relative overflow-hidden', className)}>
      <Image
        src={asset.src}
        alt={asset.alt}
        {...imageProps}
        sizes={resolvedSizes}
        priority={asset.priority ?? false}
        className={clsx(
          'object-cover transition-transform duration-500',
          focalClass,
          imgClassName
        )}
      />
    </div>
  )
}
