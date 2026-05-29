import type { Metadata } from "next";
import "./globals.css";
import Header from "@/src/components/modules/Header";
import FloatingConnect from "@/src/components/modules/FloatingConnect";
import { BARBARO_INFO } from "@/src/lib/constants";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://barbaro.pe"), // Base URL para resolver rutas de imágenes
  title: {
    default: BARBARO_INFO.name,
    template: `%s | ${BARBARO_INFO.shortName}`
  },
  description: BARBARO_INFO.description,
  keywords: [
    "Barbería premium Huancayo", 
    "Mejor barbería en Huancayo", 
    "Corte de cabello para caballeros Huancayo", 
    "Afeitado tradicional con navaja", 
    "Grooming masculino de lujo", 
    "Barbería clásica El Tambo", 
    "Estilo Bárbaro Huancayo",
    "Donde el estilo alcanza la elegancia",
    "Barberos profesionales Huancayo",
    "Cortes de cabello tendencia 2026 hombre"
  ],
  authors: [{ name: "Bárbaro Clan" }],
  creator: "Jos",
  publisher: "Bárbaro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://barbaro.pe",
    siteName: BARBARO_INFO.shortName,
    title: BARBARO_INFO.name,
    description: BARBARO_INFO.description,
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Bárbaro - Barbería Premium y Santuario de Estilo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: BARBARO_INFO.name,
    description: BARBARO_INFO.description,
    images: ["/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD para Google (SEO Local) y Motores de Respuesta de IA (GEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    "name": BARBARO_INFO.shortName,
    "image": "https://barbaro.pe/og-image.webp",
    "@id": "https://barbaro.pe",
    "url": "https://barbaro.pe",
    "telephone": BARBARO_INFO.phone,
    "email": BARBARO_INFO.email,
    "slogan": "Donde el estilo alcanza la elegancia",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Frente al Parque de los Sombreros",
      "addressLocality": "El Tambo, Huancayo",
      "addressRegion": "Junín",
      "postalCode": "12000",
      "addressCountry": "PE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BARBARO_INFO.coordinates.lat,
      "longitude": BARBARO_INFO.coordinates.lng
    },
    "hasMap": "https://maps.app.goo.gl/g91U1WFGs9PfV83n8",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "20:00"
      }
    ],
    "sameAs": [
      BARBARO_INFO.social.facebook,
      BARBARO_INFO.social.tiktok
    ],
    "priceRange": "$$$",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Atención Personalizada",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Ambiente Clásico de Lujo",
        "value": true
      }
    ]
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <Header />
        {children}
        <FloatingConnect />
        <SpeedInsights />
      </body>
    </html>
  );
}
