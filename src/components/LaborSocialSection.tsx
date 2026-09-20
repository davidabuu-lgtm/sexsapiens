import React from 'react';
import {
  HeartHandshake,
  Users,
  Sparkles,
  ArrowRight,
  Globe,
  CheckCircle2,
  Heart,
  BookOpen,
  Smile,
} from 'lucide-react';

interface LaborSocialProps {
  onOpenVolunteer: () => void;
  onOpenBooking: () => void;
}

export const LaborSocialSection: React.FC<LaborSocialProps> = ({
  onOpenVolunteer,
  onOpenBooking,
}) => {
  const initiatives = [
    {
      title: 'Educación Sexual para Personas Mayores',
      population: 'Adultos mayores y residencias',
      tag: 'Tercera Edad & Placer',
      description:
        'Espacios de diálogo y bienestar sobre cambios corporales, afecto, menopausia, andropausia y sensualidad sin prisas.',
      impact: 'Más de 350 personas mayores acompañadas sin tabúes',
      color: 'from-[#FF5E8E] to-[#E11D48]',
    },
    {
      title: 'Fondo Solidario de Teleconsulta',
      population: 'Personas en situación vulnerable',
      tag: 'Salud Psicosocial',
      description:
        'Sesiones de terapia psicosexual y de pareja 100% gratuitas o de aporte voluntario para quienes no pueden costear una atención privada.',
      impact: '120+ horas de atención terapéutica financiada',
      color: 'from-[#8B5CF6] to-[#6D28D9]',
    },
    {
      title: 'Talleres en Colectivas Juveniles y Comunitarias',
      population: 'Juventudes y diversidad LGBTIQ+',
      tag: 'Pedagogía Barrial',
      description:
        'Llegamos a barrios populares con el modelo Clítoris 3D, dinámicas de consentimiento, gestión menstrual y prevención amorosa.',
      impact: '24 colectivas y colegios alcanzados',
      color: 'from-[#10B981] to-[#059669]',
    },
    {
      title: 'Laboratorio de Artes Eróticas Comunitarias',
      population: 'Artistas, gestores y activistas',
      tag: 'Cultura & Transformación',
      description:
        'Desarrollo de proyectos con enfoque artístico y erótico para desmitificar la anatomía y el placer en espacios públicos.',
      impact: 'Exposiciones pedagógicas y talleres textiles',
      color: 'from-[#F97316] to-[#EA580C]',
    },
  ];

  return (
    <section id="labor-social" className="py-20 bg-[#FFFDF9] border-t border-[#FCE7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header with Exact User Copy */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF1F2] text-[#BE185D] text-xs font-black uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Labor Social & Transformación Colectiva</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#18181B] tracking-tight leading-tight">
            ¡Conoce sobre nuestra{' '}
            <span className="bg-gradient-to-r from-[#FF5E8E] via-[#F43F5E] to-[#E11D48] bg-clip-text text-transparent">
              labor social
            </span>{' '}
            y vincúlate!
          </h2>

          <p className="text-base sm:text-lg text-[#374151] leading-relaxed font-normal">
            Queremos llegar a los diferentes grupos poblacionales, colectivas e individualidades con una educación y una atención integral en sexualidad, que comprendan las necesidades diversas, transicionales y emergentes.
          </p>

          <p className="text-sm sm:text-base font-bold text-[#BE185D]">
            ¡Entérate de cómo lo hacemos realidad y vincúlate al apoyo voluntario!
          </p>
        </div>

        {/* Big Action Banner: Clickable & Leads to Volunteer Modal */}
        <div className="mt-10 rounded-3xl bg-gradient-to-r from-[#FFF1F2] via-[#FCE7F3] to-[#FFF5F7] border-2 border-[#F472B6] p-6 sm:p-10 shadow-md">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-xs font-black uppercase tracking-wider text-[#9D174D] block">
                ¡Tu voz, profesión o entusiasmo suman!
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#18181B]">
                ¿Quieres formar parte del equipo voluntario de Sexsapiens?
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563] max-w-xl leading-relaxed">
                Buscamos personas en psicología, medicina, trabajo social, pedagogía, diseño, artes eróticas y facilitación comunitaria. Puedes participar de forma virtual o presencial.
              </p>
            </div>

            <button
              id="btn-vincularse-voluntariado-main"
              onClick={onOpenVolunteer}
              className="px-8 py-4 rounded-2xl font-black text-white bg-gradient-to-r from-[#FF5E8E] via-[#F43F5E] to-[#E11D48] hover:from-[#F43F5E] hover:to-[#BE185D] shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2.5 active:scale-95 shrink-0 text-sm sm:text-base"
            >
              <HeartHandshake className="w-5 h-5" />
              <span>¡VINCÚLATE COMO VOLUNTARIX!</span>
            </button>
          </div>
        </div>

        {/* Initiatives Grid */}
        <div className="mt-14 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#BE185D] block">
                Nuestras Líneas de Acción
              </span>
              <h3 className="text-2xl font-black text-[#18181B] mt-0.5">
                Cómo materializamos el impacto social
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {initiatives.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#FCE7F3] hover:border-[#F472B6] hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#FFF1F2] text-[#BE185D]">
                      {item.tag}
                    </span>
                    <span className="text-[11px] font-bold text-[#6B7280]">
                      {item.population}
                    </span>
                  </div>

                  <h4 className="text-xl font-black text-[#18181B] group-hover:text-[#BE185D] transition-colors leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#FFF1F2] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#059669]">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{item.impact}</span>
                  </div>

                  <button
                    onClick={onOpenVolunteer}
                    className="text-xs font-black text-[#BE185D] hover:underline flex items-center gap-1"
                  >
                    <span>Apoyar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative Chain of Impact */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#FCE7F3] shadow-xs">
          <div className="max-w-2xl mx-auto text-center space-y-2 mb-8">
            <span className="text-xs font-black uppercase tracking-wider text-[#BE185D]">
              De la Persona a la Colectividad
            </span>
            <h3 className="text-2xl font-black text-[#18181B]">
              Nuestra Cadena de Impacto Social
            </h3>
            <p className="text-xs sm:text-sm text-[#4B5563]">
              Cuando una persona aprende a disfrutar sin culpas ni miedos, se transforma su entorno.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#FCE7F3] text-center space-y-1.5">
              <span className="text-2xl">🌱</span>
              <h5 className="text-sm font-black text-[#18181B]">1. (Des)Aprender</h5>
              <p className="text-xs text-[#6B7280]">
                Desarmamos mitos con ciencia, arte y cercanía humana.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#FCE7F3] text-center space-y-1.5">
              <span className="text-2xl">💬</span>
              <h5 className="text-sm font-black text-[#18181B]">2. Acompañar</h5>
              <p className="text-xs text-[#6B7280]">
                Escucha terapéutica accesible para personas y parejas.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#FCE7F3] text-center space-y-1.5">
              <span className="text-2xl">✨</span>
              <h5 className="text-sm font-black text-[#18181B]">3. Compartir</h5>
              <p className="text-xs text-[#6B7280]">
                Conversaciones libres en familias, amistades y relaciones.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#FCE7F3] text-center space-y-1.5">
              <span className="text-2xl">🤝</span>
              <h5 className="text-sm font-black text-[#18181B]">4. Transformar</h5>
              <p className="text-xs text-[#6B7280]">
                Voluntariado e intervenciones en comunidades diversas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
