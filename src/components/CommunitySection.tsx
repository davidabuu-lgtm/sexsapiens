import React, { useState } from 'react';
import { COMMUNITY_PROJECTS } from '../data/communityData';
import { Users, ArrowRight, Sparkles, Heart, CheckCircle2, Globe } from 'lucide-react';

interface CommunitySectionProps {
  onOpenDonation: () => void;
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({ onOpenDonation }) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const narrativeSteps = [
    {
      step: '1',
      title: 'Aprender',
      desc: 'Comprendemos nuestro cuerpo y desarmamos la culpa con educación basada en ciencia.',
      badge: 'El individuo',
    },
    {
      step: '2',
      title: 'Acompañar',
      desc: 'Brindamos escucha profesional y terapéutica en momentos de duda o dificultad.',
      badge: 'El vínculo',
    },
    {
      step: '3',
      title: 'Compartir',
      desc: 'Llevamos conversaciones sanas a nuestras familias, parejas y círculos cotidianos.',
      badge: 'El entorno',
    },
    {
      step: '4',
      title: 'Transformar',
      desc: 'Financiamos y llevamos educación y salud sexual a comunidades vulnerables.',
      badge: 'La comunidad',
    },
  ];

  return (
    <section id="comunidad" className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#984732] block">
            Impacto Colectivo & Red Social
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222725] mt-2 tracking-tight">
            “Una sexualidad saludable también construye comunidad.”
          </h2>
          <p className="text-base sm:text-lg text-[#554C46] mt-4 leading-relaxed font-normal">
            No concebimos la educación sexual como un mero trámite individual.
            Creemos que cuando una persona aprende a respetarse y a dialogar sin miedo,
            se vuelve agente de cambio para sus hijas e hijos, sus amistades y su barrio.
            Por eso apoyamos proyectos sociales directos en terreno.
          </p>
        </div>

        {/* Narrative Flow: Aprender → Acompañar → Compartir → Transformar */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#F4EDE4] border border-[#E3D7C8]">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#984732]">
              Nuestra Cadena de Impacto
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#232925] mt-1">
              De la conciencia personal a la transformación colectiva
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {narrativeSteps.map((item, index) => (
              <div
                key={item.title}
                id={`narrative-step-${index}`}
                className="bg-white p-5 rounded-xl border border-[#E1D4C3] relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#D5C6B5] text-[#984732] font-serif font-bold text-sm flex items-center justify-center">
                      {item.step}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-[#EDE4D8] text-[#554C45]">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#252A27]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#59504A] mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {index < narrativeSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <span className="w-6 h-6 rounded-full bg-[#FAF7F2] border border-[#D5C6B5] text-[#984732] flex items-center justify-center shadow-xs">
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Social Projects Grid */}
        <div className="mt-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#984732]">
                Iniciativas Activas
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#222725] mt-1">
                Proyectos que llevamos adelante con tu apoyo
              </h3>
            </div>
            <button
              id="btn-apoyar-proyectos-top"
              onClick={onOpenDonation}
              className="px-5 py-2.5 rounded-xl bg-[#984732] hover:bg-[#803825] text-white text-xs sm:text-sm font-semibold shadow-xs flex items-center gap-2 self-start sm:self-auto"
            >
              <Heart className="w-4 h-4" />
              <span>Apoyar estas iniciativas</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COMMUNITY_PROJECTS.map((project) => {
              const progressPct = Math.min(
                100,
                Math.round((project.raisedAmount / project.goalAmount) * 100)
              );

              return (
                <div
                  key={project.id}
                  id={`community-project-${project.id}`}
                  className="bg-white rounded-2xl border border-[#E3D9CC] p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F4EDE5] text-[#8C3E2B]">
                        {project.category}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#E5ECE0] text-[#365A27]">
                        {project.status}
                      </span>
                    </div>

                    <h4 className="font-serif text-xl font-bold text-[#232825] leading-snug">
                      {project.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#544C46] leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-1.5 text-xs text-[#7A7067]">
                      <Globe className="w-3.5 h-3.5" />
                      <span>{project.location}</span>
                    </div>

                    {/* Impact metrics chips */}
                    <div className="pt-2 grid grid-cols-3 gap-2">
                      {project.impactMetrics.map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="p-2.5 rounded-xl bg-[#F8F4EE] border border-[#EAE0D3] text-center"
                        >
                          <span className="font-serif text-base sm:text-lg font-bold text-[#232825] block">
                            {metric.value}
                          </span>
                          <span className="text-[10px] text-[#6E645D] block leading-tight mt-0.5">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Funding progress */}
                    <div className="pt-2 space-y-1.5">
                      <div className="flex justify-between text-xs text-[#524944]">
                        <span>Alcance financiado</span>
                        <strong className="text-[#984732]">{progressPct}%</strong>
                      </div>
                      <div className="w-full bg-[#EAE0D3] h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-[#984732] h-full rounded-full transition-all duration-500"
                          style={{ width: `${progressPct}%` }}
                        ></div>
                      </div>
                      <span className="text-[11px] text-[#7A7067] block">
                        Beneficiarios directos: <strong>{project.beneficiariesCount}</strong>
                      </span>
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="mt-6 pt-4 border-t border-[#F2ECE3] flex items-center justify-between">
                    <span className="text-xs text-[#6B6158]">
                      Auditoría comunitaria mensual
                    </span>
                    <button
                      id={`btn-contribuir-proyecto-${project.id}`}
                      onClick={onOpenDonation}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-[#984732] bg-[#FAF3EC] hover:bg-[#F3E7DC] border border-[#E4D1C0] transition-colors"
                    >
                      Contribuir a este proyecto
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
