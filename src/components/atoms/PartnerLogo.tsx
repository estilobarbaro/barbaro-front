'use client';

import Image from "next/image";
import { Partner } from "@/src/domain/partner";

interface PartnerLogoProps {
  partner: Partner;
  className?: string;
  isLarge?: boolean;
}

export function PartnerLogo({ partner, className, isLarge = false }: PartnerLogoProps) {
  const content = (
    <div className={`relative group/logo transition-all duration-500 ${className ?? ''}`}>
      <div className={`
        relative transition-all duration-700 bg-[var(--color-ivory)] rounded-sm border border-[var(--color-border)]/20 shadow-sm flex items-center justify-center p-3
        ${isLarge ? 'h-20 w-52 md:h-28 md:w-72' : 'h-16 w-40 md:h-20 md:w-56'}
        /* Solo aplicar hover en dispositivos que soporten puntero (no touch) */
        @media (hover: hover) {
          filter grayscale-[0.3] opacity-90
          group-hover/logo:grayscale-0 group-hover/logo:opacity-100 group-hover/logo:scale-[1.02] group-hover/logo:shadow-md group-hover/logo:border-[var(--color-primary)]/40
        }
        /* En móviles/touch, mostrar con un poco más de presencia por defecto */
        @media (hover: none) {
          grayscale-[0.1] opacity-100
        }
      `}>
        <Image
          src={partner.logo}
          alt={partner.name}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );

  if (partner.url) {
    return (
      <a 
        href={partner.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="cursor-pointer block"
      >
        {content}
      </a>
    );
  }

  return content;
}
