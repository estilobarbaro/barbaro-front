// src/domain/service.ts
import type { ImageFocalPoint } from './image'

export type ImageOrientation = 'portrait' | 'landscape' | 'square'

export interface Service {
  slug: string;
  title: string;
  description: string;
  price: string;
  duration?: string;
  category: string;
  order: number;
  image?: string;
  imageAlt?: string;
  imageFocalPoint?: ImageFocalPoint;
  imageWidth?: number;
  imageHeight?: number;
  imageOrientation?: ImageOrientation;
  isPremium?: boolean;
  features?: string[];
  relatedCuts?: string[];
  content?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  services: Service[];
}
