import React, { useState } from 'react';
import {
  ArrowLeft,
  Calendar,
  Sparkles,
  ShieldCheck,
  Heart,
  Video,
  Clock,
  CheckCircle2,
  Users,
  MessageCircle,
  HelpCircle,
  BookOpen,
  MapPin,
  Lock,
} from 'lucide-react';
import { Professional } from '../types';
import { PROFESSIONALS } from '../data/professionalsData';
import { BookingModal } from '../components/BookingModal';
import { ProfessionalDetailModal } from '../components/ProfessionalDetailModal';

interface LandingTerapiasProps {
  onBackToHome: () => void;
  onNavigateToEducacion: () => void;
  onNavigateToGaleria: () => void;
}

export const LandingTerapias: React.FC<LandingTerapiasProps> = ({
  onBackToHome,
  onNavigateToEducacion,
  onNavigateToGaleria,
}) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('Todas');
  const [activeProfessionalDetail, setActiveProfessionalDetail] = useState<Professional | null>(null);
  const [bookingProfessional, setBookingProfessional] = useState<Professional | null>(null);

  const specialties = [
    'Todas',
    'Psicología',
    'Sexología',
    'Terapia de pareja',
    'Salud sexual',
    'Trabajo social',
  ];

  const filteredProfessionals = PROFESSIONALS.filter((prof) => {
    if (selectedSpecialty === 'Todas') return true;
    return prof.specialty === selectedSpecialty;
  });

  return (
    <div className="pt-24 pb-20 bg-[#FFFDF9] min-h-screen">
      {/* Top Breadcrumb & Return to Home */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
        <div className="flex items-center justify-between flex-wrap gap-3 border-b border-[#FCE7F3] pb-4">
          <button
            id="back-to-home-btn"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#BE185D] hover:text-[#9D174D] bg-[#FFF1F2] hover:bg-[#FCE7F3] px-4 py-2 rounded-full transition-colors active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a la página principal</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#6B7280]">
            <span className="cursor-pointer hover:text-[#BE185D]" onClick={onBackToHome}>
              Inicio
            </span>
            <span>/</span>
            <span className="text-[#BE185D] font-bold">Atención Terapéutica</span>
          </div>
        </div>
      </div>

      {/* Landing Page Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#FFF1F2] via-[#FCE7F3]/70 to-[#FFFDF9] border border-[#FCE7F3] p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#F472B6]/40 text-[#BE185D] text-xs font-black uppercase tracking-wider shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E11D48]" />
              <span>Landing Page • Unidad Clínica Sexsapiens</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#18181B] tracking-tight leading-[1.1]">
              Atención{' '}
              <span className="bg-gradient-to-r from-[#FF5E8E] via-[#F43F5E] to-[#E11D48] bg-clip-text text-transparent">
                terapéutica y sexológica
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
              Terapia psicológica, psicosexual y vincular individual o con tu(s) pareja(s).
              Un espacio cálido, libre de juicios y 100% confidencial, enfocado en el bienestar, el placer y la reconciliación con tu cuerpo.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setBookingProfessional(PROFESSIONALS[0])}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#FF5E8E] to-[#E11D48] text-white font-black text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar mi primera consulta</span>
              </button>

              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 border border-[#FCE7F3] text-xs font-semibold text-[#6B7280]">
                <Lock className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Confidencialidad médica y psicológica</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modalities Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-[#18181B]">
            ¿En qué podemos acompañarte?
          </h2>
          <p className="text-xs sm:text-sm text-[#6B7280]">
            Atención clínica adaptada a tus necesidades personales o vinculares.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-3xl border border-[#FCE7F3] shadow-xs hover:border-[#F472B6] transition-colors space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF1F2] text-[#E11D48] flex items-center justify-center font-bold">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#18181B] text-lg">Terapia Individual</h3>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              Bajo deseo, anorgasmia, dolor en relaciones (vaginismo / dispareunia), ansiedad por desempeño, autoimagen corporal y exploración personal.
            </p>
            <ul className="text-xs text-[#6B7280] space-y-1.5 pt-2">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Sesiones de 50 minutos</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Virtual para todo el mundo</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-[#FCE7F3] shadow-xs hover:border-[#F472B6] transition-colors space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF1F2] text-[#E11D48] flex items-center justify-center font-bold">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#18181B] text-lg">Terapia de Pareja(s)</h3>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              Monotonía erótica, acuerdos relacionales (monogamia o no monogamias éticas), comunicación afectiva, desacuerdos en el deseo y reconciliación.
            </p>
            <ul className="text-xs text-[#6B7280] space-y-1.5 pt-2">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Sesiones de 60 a 75 minutos</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Enfoque sistémico y afectivo</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-[#FCE7F3] shadow-xs hover:border-[#F472B6] transition-colors space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF1F2] text-[#E11D48] flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#18181B] text-lg">Diversidad LGBTIQ+</h3>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              Acompañamiento afirmativo a identidades de género, orientaciones sexoafectivas diversas, procesos de salida del armario y desestigmatización.
            </p>
            <ul className="text-xs text-[#6B7280] space-y-1.5 pt-2">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Terapeutas afirmativas</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Cero patologización</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Team of Specialists */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-black text-[#18181B]">
              Nuestras Especialistas
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7280]">
              Profesionales con titulación universitaria, posgrados en sexología clínica y enfoque humanista.
            </p>
          </div>

          {/* Specialty filter */}
          <div className="flex flex-wrap gap-1.5">
            {specialties.map((spec) => (
              <button
                key={spec}
                onClick={() => setSelectedSpecialty(spec)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedSpecialty === spec
                    ? 'bg-[#BE185D] text-white shadow-xs'
                    : 'bg-white text-[#4B5563] border border-gray-200 hover:bg-[#FFF1F2]'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>

        {/* Professionals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfessionals.map((prof) => (
            <div
              key={prof.id}
              className="bg-white rounded-3xl border border-[#FCE7F3] p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src={prof.photo}
                    alt={prof.name}
                    className="w-16 h-16 rounded-2xl object-cover border border-[#FCE7F3] shadow-2xs group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-bold text-[#18181B] text-base group-hover:text-[#BE185D] transition-colors">
                      {prof.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#BE185D]">{prof.roleTitle}</p>
                    <div className="flex items-center gap-1 text-[11px] text-[#6B7280] mt-0.5">
                      <Video className="w-3 h-3 text-[#9CA3AF]" />
                      <span>{prof.modality}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed line-clamp-3">
                  {prof.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {prof.focusAreas?.slice(0, 3).map((area) => (
                    <span
                      key={area}
                      className="px-2.5 py-1 bg-[#FFF1F2] text-[#BE185D] rounded-full text-[10px] font-bold"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#FCE7F3] flex items-center gap-2">
                <button
                  onClick={() => setActiveProfessionalDetail(prof)}
                  className="flex-1 py-2 px-3 rounded-xl bg-gray-50 hover:bg-gray-100 text-[#18181B] font-bold text-xs transition-colors"
                >
                  Ver perfil
                </button>
                <button
                  onClick={() => setBookingProfessional(prof)}
                  className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-[#FF5E8E] to-[#E11D48] hover:from-[#F43F5E] hover:to-[#BE185D] text-white font-bold text-xs shadow-2xs transition-all flex items-center justify-center gap-1"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Agendar cita</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How a Session Works */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-[#FFF1F2] via-white to-[#FFF1F2] rounded-3xl p-6 sm:p-10 border border-[#FCE7F3]">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#18181B]">
              ¿Cómo es el proceso de consulta?
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7280]">
              Diseñado para brindarte tranquilidad, sin evaluaciones morales ni situaciones incómodas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-white rounded-2xl border border-[#FCE7F3] shadow-2xs space-y-2">
              <span className="text-xs font-black text-[#E11D48] px-2.5 py-1 rounded-full bg-[#FFF1F2] inline-block">
                Paso 1
              </span>
              <h3 className="font-bold text-[#18181B] text-base">Agenda tu sesión</h3>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                Eliges la especialista y el horario que mejor se adapte a tu rutina. Recibes confirmación instantánea y enlace seguro si es online.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-[#FCE7F3] shadow-2xs space-y-2">
              <span className="text-xs font-black text-[#E11D48] px-2.5 py-1 rounded-full bg-[#FFF1F2] inline-block">
                Paso 2
              </span>
              <h3 className="font-bold text-[#18181B] text-base">Primera conversación</h3>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                Exploramos qué te preocupa, tus expectativas y objetivos. Hablamos con total naturalidad sobre tu historia y tus deseos.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-[#FCE7F3] shadow-2xs space-y-2">
              <span className="text-xs font-black text-[#E11D48] px-2.5 py-1 rounded-full bg-[#FFF1F2] inline-block">
                Paso 3
              </span>
              <h3 className="font-bold text-[#18181B] text-base">Plan a tu medida</h3>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                Técnicas psicocorporales, ejercicios de autodescubrimiento y herramientas para disfrutar plenamente sin presiones.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cross-navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#FCE7F3] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold text-[#BE185D] uppercase tracking-wider">
              ¿Quieres también aprender a tu ritmo o ver arte?
            </span>
            <h3 className="text-xl font-black text-[#18181B]">
              Explora nuestras otras áreas
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onNavigateToEducacion}
              className="px-5 py-2.5 rounded-full bg-[#FFF1F2] hover:bg-[#FCE7F3] text-[#BE185D] font-bold text-xs transition-all flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4" />
              <span>Ver Cursos de Educación →</span>
            </button>

            <button
              onClick={onNavigateToGaleria}
              className="px-5 py-2.5 rounded-full bg-[#F3E8FF] hover:bg-[#E9D5FF] text-[#7E22CE] font-bold text-xs transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>Ver Galería y Clítoris 3D →</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      {bookingProfessional && (
        <BookingModal
          professional={bookingProfessional}
          onClose={() => setBookingProfessional(null)}
        />
      )}

      {activeProfessionalDetail && (
        <ProfessionalDetailModal
          professional={activeProfessionalDetail}
          onClose={() => setActiveProfessionalDetail(null)}
          onBookNow={(prof) => {
            setActiveProfessionalDetail(null);
            setBookingProfessional(prof);
          }}
        />
      )}
    </div>
  );
};
