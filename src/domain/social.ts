// src/domain/social.ts
// Definición del tipo de publicación para el Social Hub (Feed de Redes Sociales)

export type SocialNetwork = 'instagram' | 'tiktok' | 'facebook' | 'google'

export interface SocialPost {
  slug: string
  network: SocialNetwork
  url: string
  username: string
  avatarUrl: string
  imageUrl?: string
  caption: string
  likesCount?: number
  commentsCount?: number
  rating?: number      // Específico de Google Reviews (ej: 5)
  authorName?: string  // Específico de Google Reviews (ej: "Alejandro M.")
  date: string         // Fecha formateada (ej: "Hace 2 horas" o "18 Jun")
  order: number
}
