// src/domain/service.ts
import type { ImageFocalPoint } from './image'

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
