'use client';

import { motion } from "framer-motion";
import { Partner } from "@/src/domain/partner";
import { SectionHeader } from "@/src/components/molecules/SectionHeader";
import { PartnerLogo } from "@/src/components/atoms/PartnerLogo";
import { CTASection } from "@/src/components/organisms/CTASection";
import { ArrowRight, ExternalLink, Award, ShieldCheck, Zap } from "lucide-react";
import { BARBARO_INFO } from "@/src/lib/constants";

interface PartnersPageClientProps {
  partners: Partner[];
}

export function PartnersPageClient({ partners }: PartnersPageClientProps) {
  const diamondPartners = partners.filter(p => p.tier === 'diamond');
  const goldPartners = partners.filter(p => p.tier === 'gold');
  const silverPartners = partners.filter(p => p.tier === 'silver');

  const whatsappNumber = BARBARO_INFO.phone.replace(/\D/g, "");
  const becomePartnerUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola Estilo Bárbaro, me gustaría recibir información para convertir mi marca en socio estratégico.")}`;

  return (
    <main className="section-espresso flex flex-col min-h-screen pt-20 pb-12">
      
      {/* 1. Header Editorial */}
      <section className="max-w-6xl mx-auto px-4 lg:px-6 mb-16 lg:mb-24">
        <div className="max-w-4xl">
          <SectionHeader 
            label="ALIANZAS ESTRATÉGICAS" 
            title="NUESTROS SOCIOS" 
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-lg md:text-xl text-[var(--color-muted-foreground)] max-w-2xl border-l border-[var(--color-primary)]/20 pl-8 mt-8"
          >
            &quot;Colaboramos con marcas y empresas que comparten nuestra obsesión por la excelencia, la precisión y el estilo de vida premium.&quot;
          </motion.p>
        </div>
      </section>

      {/* 2. Grid de Socios */}
      <div className="space-y-20 lg:space-y-32 mb-24">
        
        {/* Diamond Tier */}
        {diamondPartners.length > 0 && (
          <section className="max-w-6xl mx-auto px-4 lg:px-6">
            <div className="mb-12">
               <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-[var(--color-primary)]/60 mb-4 block">SOCIOS DIAMANTE</span>
               <div className="h-px w-full bg-gradient-to-r from-[var(--color-primary)]/30 to-transparent" />
            </div>
            
            <div className="grid grid-cols-1 gap-12">
              {diamondPartners.map((partner) => (
                <motion.div 
                  key={partner.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[var(--color-secondary)]/30 border border-[var(--color-primary)]/5 p-8 md:p-12 hover:border-[var(--color-primary)]/40 transition-all duration-500 overflow-hidden"
                >
                  {/* Brand Background Color Accent */}
                  {partner.brandColor && (
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none"
                      style={{ backgroundColor: partner.brandColor }}
                    />
                  )}

                  <div className="md:col-span-4 flex flex-col items-center gap-6">
                    <PartnerLogo partner={partner} isLarge={true} />
                    {partner.benefit && (
                      <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full">
                        <Award size={14} className="text-primary" />
                        <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-primary">Beneficio Exclusivo</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="md:col-span-8 space-y-6 relative z-10">
                    <h3 className="text-3xl md:text-4xl font-display uppercase tracking-tighter text-[var(--color-foreground)]">{partner.name}</h3>
                    <p className="font-serif italic text-lg text-[var(--color-foreground)]/60 leading-relaxed">
                      {partner.description}
                    </p>
                    
                    {partner.benefit && (
                      <div className="bg-[var(--color-foreground)]/[0.03] border-l-2 border-[var(--color-primary)] p-6 space-y-2">
                        <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">Tu ventaja como Bárbaro:</span>
                        <p className="font-sans text-sm text-[var(--color-foreground)]/80 italic">{partner.benefit}</p>
                      </div>
                    )}

                    {partner.url && (
                      <a 
                        href={partner.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-primary)] hover:text-[var(--color-foreground)] transition-colors group/link"
                      >
                        Visitar sitio web <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Gold & Silver Tier Grid */}
        {(goldPartners.length > 0 || silverPartners.length > 0) && (
          <section className="max-w-6xl mx-auto px-4 lg:px-6">
            <div className="mb-12">
               <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-[var(--color-foreground)]/30 mb-4 block">ALIADOS DEL CLAN</span>
               <div className="h-px w-full bg-gradient-to-r from-[var(--color-foreground)]/10 to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...goldPartners, ...silverPartners].map((partner) => (
                <motion.div 
                  key={partner.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group bg-[var(--color-secondary)]/10 border border-[var(--color-border)] p-8 hover:border-[var(--color-primary)]/30 transition-all duration-500 flex flex-col items-center text-center space-y-6"
                >
                  <PartnerLogo partner={partner} />
                  <div className="space-y-2">
                    <h4 className="text-xl font-display text-[var(--color-foreground)] uppercase tracking-tight">{partner.name}</h4>
                    {partner.benefit && (
                      <span className="inline-block text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest bg-[var(--color-primary)]/5 px-2 py-0.5 rounded border border-[var(--color-primary)]/10">
                        Beneficio Exclusivo
                      </span>
                    )}
                  </div>
                  <p className="font-sans text-xs text-[var(--color-muted-foreground)] leading-relaxed line-clamp-3">
                    {partner.description}
                  </p>
                  {partner.url && (
                    <a 
                      href={partner.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[10px] uppercase tracking-widest text-[var(--color-primary)]/80 font-bold hover:text-[var(--color-foreground)] transition-colors flex items-center gap-2"
                    >
                      <ExternalLink size={12} /> Ver Alianza
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* 3. Sección "Cómo ser Socio" */}
        <section className="max-w-6xl mx-auto px-4 lg:px-6">
          <div className="section-graphite border border-[var(--color-border)] p-12 lg:p-20 text-center relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <ShieldCheck size={120} className="text-[var(--color-primary)]" />
            </div>
            
            <div className="max-w-2xl mx-auto space-y-8 relative z-10">
              <span className="font-sans text-[10px] uppercase tracking-[0.6em] text-[var(--color-primary)]/60">GROW WITH THE CLAN</span>
              <h2 className="text-4xl md:text-5xl font-display text-[var(--color-foreground)] uppercase tracking-tighter leading-none">
                ¿TIENES UNA MARCA <br/> <span className="text-[var(--color-primary)] italic font-serif lowercase">extraordinaria?</span>
              </h2>
              <p className="font-serif italic text-lg text-[var(--color-muted-foreground)]">
                Buscamos aliados que compartan nuestros valores de calidad y servicio. Ofrece tus beneficios a nuestra comunidad y escala tu visibilidad.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
                <div className="space-y-3">
                  <Zap size={24} className="text-[var(--color-primary)] mx-auto" />
                  <h4 className="font-sans text-[10px] font-bold uppercase tracking-widest text-[var(--color-foreground)]">Visibilidad</h4>
                  <p className="text-[10px] text-[var(--color-foreground)]/40 uppercase tracking-wider">Tráfico cualificado</p>
                </div>
                <div className="space-y-3">
                  <ShieldCheck size={24} className="text-[var(--color-primary)] mx-auto" />
                  <h4 className="font-sans text-[10px] font-bold uppercase tracking-widest text-[var(--color-foreground)]">Prestigio</h4>
                  <p className="text-[10px] text-[var(--color-foreground)]/40 uppercase tracking-wider">Asociación de marca</p>
                </div>
                <div className="space-y-3">
                  <Award size={24} className="text-[var(--color-primary)] mx-auto" />
                  <h4 className="font-sans text-[10px] font-bold uppercase tracking-widest text-[var(--color-foreground)]">Lealtad</h4>
                  <p className="text-[10px] text-[var(--color-foreground)]/40 uppercase tracking-wider">Clientes exclusivos</p>
                </div>
              </div>

              <div className="pt-4">
                <a 
                  href={becomePartnerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[var(--color-primary)] text-[var(--color-primary-foreground)] font-sans font-bold uppercase tracking-[0.4em] text-[11px] py-6 px-12 transition-all hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] hover:tracking-[0.5em] active:scale-95"
                >
                  SOLICITAR INFORMACIÓN
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>

      <CTASection />
    </main>
  );
}
