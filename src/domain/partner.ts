export type PartnerTier = 'diamond' | 'gold' | 'silver';

export interface Partner {
  slug: string;
  name: string;
  logo: string;
  tier: PartnerTier;
  url?: string;
  description: string;
  benefit?: string;
  brandColor?: string;
  order: number;
  content?: string;
  // Optional social/contact metadata
  instagram?: string;
  phone?: string;
  address?: string;
  followers?: number;
}
