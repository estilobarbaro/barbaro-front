'use client';

import { Partner } from "@/src/domain/partner";
import { PartnerLogo } from "@/src/components/atoms/PartnerLogo";
import { SectionHeader } from "@/src/components/molecules/SectionHeader";

interface PartnerCarouselProps {
  partners: Partner[];
}

export function PartnerCarousel({ partners }: PartnerCarouselProps) {
  // Lógica de Tiers: Multiplicar presencia según nivel
  const tierMultipliers = {
    diamond: 8, // Aumentamos frecuencia para la versión principal
    gold: 4,
    silver: 2
  };

  // Crear array expandido basado en tiers
  const expandedPartners = partners.flatMap(partner => {
    const count = tierMultipliers[partner.tier] || 1;
    return Array(count).fill(partner);
  });

  // Duplicar para el efecto infinito sin saltos
  const infinitePartners = [...expandedPartners, ...expandedPartners];

  return (
    <div className="w-full section-graphite border-y border-primary/10 py-10 lg:py-14 overflow-hidden relative group">
      {/* Aurora de fondo sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(223,147,54,0.08),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 lg:px-6 mb-8">
        {/* Header Unificado con grosor medio y 0.2em tracking */}
        <SectionHeader 
          label="NUESTROS ALIADOS ESTRATÉGICOS" 
          title="SOCIOS DEL CLAN" 
          align="center"
        />
      </div>

      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-20 md:gap-32 items-center pause-on-hover">
          {infinitePartners.map((partner, index) => (
            <PartnerLogo 
              key={`${partner.slug}-${index}`} 
              partner={partner} 
              className="inline-block"
              isLarge={true}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 50s linear infinite;
        }
        .pause-on-hover:hover {
          @media (hover: hover) {
            animation-play-state: paused;
          }
        }
      `}</style>
    </div>
  );
}
