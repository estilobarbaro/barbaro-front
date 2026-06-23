import type { Metadata } from "next";
import Script from "next/script";
import { Montserrat, Lora, Abril_Fatface } from "next/font/google";
import "./globals.css";
import "./sdl-footer.css";
import { BARBARO_INFO, SITE_URL } from "@/src/lib/constants";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from "@/src/components/organisms/Navbar";
import { Footer } from "@/src/components/organisms/Footer";
import { FloatingConnect } from "@/src/components/organisms/FloatingConnect";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  style: ["normal", "italic"],
});

const abril = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-abril",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL), // Base URL para resolver rutas de imágenes
  title: {
    default: BARBARO_INFO.name,
    template: `%s | ${BARBARO_INFO.shortName}`
  },
  description: "Descubre la barbería premium en Huancayo donde la tradición y la elegancia se encuentran. Cortes de autor, cuidado de barba y rituales clásicos.",
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
    "Cortes de cabello tendencia 2026 hombre",
    "Elegancia",
    "Barbería",
    "Huancayo",
    "Premium",
    "Perú",
    "Junín",
    "Barbershop Huancayo",
    "Corte de pelo hombre",
    "Corte de cabello masculino",
    "Peluquería para hombres",
    "Cortes de hombre modernos",
    "Spa masculino Huancayo"
  ],
  authors: [{ name: "Estilo Bárbaro" }],
  creator: "Jos",
  publisher: "Estilo Bárbaro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: SITE_URL,
    siteName: BARBARO_INFO.shortName,
    title: BARBARO_INFO.name,
    description: "Descubre la barbería premium en Huancayo donde la tradición y la elegancia se encuentran. Cortes de autor y rituales clásicos.",
    images: [
      {
        url: "/logo-hero.webp",
        width: 1200,
        height: 630,
        alt: "Estilo Bárbaro - Barbería Premium y Santuario de Estilo y Elegancia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: BARBARO_INFO.name,
    description: "La barbería donde el estilo alcanza la máxima elegancia. Reserva tu cita.",
    images: ["/logo-hero-new.webp"],
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
    "image": "https://estilobarbaro.com/logo-hero-new.webp",
    "@id": "https://estilobarbaro.com",
    "url": "https://estilobarbaro.com",
    "telephone": BARBARO_INFO.phone,
    "email": BARBARO_INFO.email,
    "slogan": "Donde el estilo alcanza la elegancia",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jr. Sebastián Lorente, Pasaje 03 de Octubre Nº 232",
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
      BARBARO_INFO.social.instagram,
      BARBARO_INFO.social.tiktok,
      BARBARO_INFO.website
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
      <body className={`antialiased flex flex-col min-h-screen ${montserrat.variable} ${lora.variable} ${abril.variable}`}>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NPQH2R8ETN"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-NPQH2R8ETN');
          `}
        </Script>
        <Script src="/sdl-footer.js" strategy="afterInteractive" />
        <Navbar />
        {children}
        <Footer />
        <FloatingConnect />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
