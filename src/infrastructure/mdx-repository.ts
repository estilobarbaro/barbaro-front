import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Service, ServiceCategory } from '@/src/domain/service';
import { Partner } from '@/src/domain/partner';
import { Cut } from '@/src/domain/cut';

const SERVICES_PATH = path.join(process.cwd(), 'src/content/services');
const PARTNERS_PATH = path.join(process.cwd(), 'src/content/partners');
const GALLERY_PATH  = path.join(process.cwd(), 'src/content/gallery');

// ─────────────────────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────────────────────

export const getServicesByCategory = (): ServiceCategory[] => {
  if (!fs.existsSync(SERVICES_PATH)) return [];
  
  const fileNames = fs.readdirSync(SERVICES_PATH);
  const allServices: Service[] = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(SERVICES_PATH, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        price: data.price,
        duration: data.duration,
        category: data.category,
        order: data.order || 0,
        image: data.image,
        imageAlt: data.imageAlt,
        imageFocalPoint: data.imageFocalPoint ?? 'top',
        imageWidth: data.imageWidth,
        imageHeight: data.imageHeight,
        imageOrientation: data.imageOrientation,
        isPremium: data.isPremium ?? false,
        features: data.features || [],
        relatedCuts: data.relatedCuts || [],
        content,
      } as Service;
    });

  const categoriesMap: Record<string, Service[]> = {};
  
  allServices.forEach(service => {
    if (!categoriesMap[service.category]) {
      categoriesMap[service.category] = [];
    }
    categoriesMap[service.category].push(service);
  });

  const categoryDefinitions: Record<string, { title: string; description: string }> = {
    'experiencias': { 
      title: 'EXPERIENCIAS PREMIUM', 
      description: 'El nivel máximo de distinción personal. Rituales completos diseñados para la excelencia.' 
    },
    'cabello': { 
      title: 'RITUALES INDIVIDUALES', 
      description: 'Cortes clásicos, fades de precisión y mantenimiento esencial para el caballero.' 
    },
    'barba': { 
      title: 'EL RITUAL DE LA BARBA', 
      description: 'Cuidado facial tradicional con toallas calientes y técnica de navaja abierta.' 
    },
    'bienestar': { 
      title: 'CUIDADO Y BIENESTAR', 
      description: 'Tratamientos de spa masculino para revitalizar la piel y el espíritu.' 
    },
    'promos': {
      title: 'BENEFICIOS Y PROMOS',
      description: 'Membresías exclusivas y promociones especiales para nuestro clan.'
    }
  };

  return Object.keys(categoriesMap).map(catId => ({
    id: catId,
    title: categoryDefinitions[catId]?.title || catId.toUpperCase(),
    description: categoryDefinitions[catId]?.description || '',
    services: categoriesMap[catId].sort((a, b) => a.order - b.order)
  }));
};

// ─────────────────────────────────────────────────────────────
// GALLERY (cuts)
// ─────────────────────────────────────────────────────────────

export const getGallery = (): Cut[] => {
  if (!fs.existsSync(GALLERY_PATH)) return [];

  const fileNames = fs.readdirSync(GALLERY_PATH);
  const cuts: Cut[] = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(GALLERY_PATH, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        name: data.name,
        category: data.category,
        tags: data.tags || [],
        imageSrc: data.imageSrc,
        imageAlt: data.imageAlt,
        imageFocalPoint: data.imageFocalPoint ?? 'top',
        imageWidth: data.imageWidth ?? 800,
        imageHeight: data.imageHeight ?? 600,
        imageOrientation: data.imageOrientation ?? (data.imageWidth < data.imageHeight ? 'portrait' : 'landscape'),
        featured: data.featured ?? false,
        order: data.order || 0,
        content,
      } as Cut;
    });

  return cuts.sort((a, b) => a.order - b.order);
};

/** Returns only featured cuts, sorted by order */
export const getFeaturedCuts = (): Cut[] =>
  getGallery().filter((c) => c.featured);

// ─────────────────────────────────────────────────────────────
// PARTNERS
// ─────────────────────────────────────────────────────────────

export const getPartners = (): Partner[] => {
  if (!fs.existsSync(PARTNERS_PATH)) return [];

  const fileNames = fs.readdirSync(PARTNERS_PATH);
  const partners: Partner[] = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(PARTNERS_PATH, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        name: data.name,
        logo: data.logo,
        tier: data.tier,
        url: data.url,
        description: data.description,
        benefit: data.benefit,
        brandColor: data.brandColor,
        order: data.order || 0,
        content,
        instagram: data.instagram,
        phone: data.phone,
        address: data.address,
        followers: data.followers,
      } as Partner;
    });

  return partners.sort((a, b) => a.order - b.order);
};

