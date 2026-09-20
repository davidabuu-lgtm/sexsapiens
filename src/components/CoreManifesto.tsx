import React from 'react';
import { Heart, Sparkles, Shield, Compass, Smile, Eye, MessageCircle, Anchor, Leaf } from 'lucide-react';

export const CoreManifesto: React.FC = () => {
  const dimensions = [
    { label: 'Cuerpo', icon: Leaf, desc: 'Nuestra biología, límites y sensaciones vivas' },
    { label: 'Placer', icon: Sparkles, desc: 'Disfrute libre de culpa y presiones' },
    { label: 'Salud', icon: Shield, desc: 'Prevención científica y cuidados integrales' },
    { label: 'Afecto', icon: Heart, desc: 'Ternura, calidez y apego humano' },
    { label: 'Identidad', icon: Compass, desc: 'Quiénes somos y cómo nos nombramos' },
    { label: 'Comunicación', icon: MessageCircle, desc: 'Palabras claras para expresar el deseo' },
    { label: 'Consentimiento', icon: Anchor, desc: 'Acuerdos libres, dinámicos y entusiastas' },
    { label: 'Relaciones', icon: Eye, desc: 'Vínculos respetuosos y enriquecedores' },
    { label: 'Bienestar', icon: Smile, desc: 'Vivir en paz y plenitud con uno mismo' },
  ];

  return (
    <section
      id="core-manifesto-section"
      className="py-16 md:py-20 bg-[#29302C] text-[#F3EFE9] relative overflow-hidden"
    >
      {/* Subtle organic background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#A34B34]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#758E68]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header statement */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E0A899] block">
            Nuestro Mensaje Central
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#FAF7F2]">
            La sexualidad no es solamente sexo.
          </h2>

          <p className="text-base sm:text-lg text-[#C7BFB5] font-light leading-relaxed">
            Es una dimensión viva que atraviesa cada aspecto de nuestra humanidad.
            Cuando la comprendemos con rigor y ternura, transformamos la forma en que nos tratamos.
          </p>
        </div>

        {/* 9 Dimensions Pill Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3.5 sm:gap-4 max-w-4xl mx-auto">
          {dimensions.map((dim, idx) => {
            const IconComp = dim.icon;
            return (
              <div
                key={dim.label}
                id={`manifesto-dimension-${idx}`}
                className="p-4 rounded-xl bg-[#353D38]/80 border border-[#48534C] hover:border-[#E0A899]/50 hover:bg-[#3D4741] transition-all duration-200 flex flex-col justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E0A899]/15 text-[#E0A899] flex items-center justify-center shrink-0">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#9FA89F] font-medium block">
                      Es
                    </span>
                    <span className="font-serif text-lg font-bold text-[#F4EFE6] leading-none">
                      {dim.label}.
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[#B5AEA4] mt-2.5 leading-snug">
                  {dim.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Closing narrative thought */}
        <div className="mt-12 max-w-2xl mx-auto text-center pt-8 border-t border-[#3D4741]">
          <p className="font-serif text-lg sm:text-xl text-[#F2ECE4] italic font-light leading-relaxed">
            “Y también puede ser una herramienta para construir comunidades más sanas,
            informadas y cuidadosas.”
          </p>
        </div>
      </div>
    </section>
  );
};
