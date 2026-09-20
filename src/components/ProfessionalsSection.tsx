import React, { useState } from 'react';
import { Professional } from '../types';
import { PROFESSIONALS } from '../data/professionalsData';
import { BookingModal } from './BookingModal';
import { ProfessionalDetailModal } from './ProfessionalDetailModal';
import {
  Calendar,
  Sparkles,
  Users,
  Video,
  MapPin,
  Clock,
  ShieldCheck,
  Heart,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';

interface ProfessionalsSectionProps {
  onExploreCourses?: () => void;
  onOpenBookingModal?: () => void;
}

export const ProfessionalsSection: React.FC<ProfessionalsSectionProps> = ({
  onExploreCourses,
  onOpenBookingModal,
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

  const handleGlobalBook = () => {
    if (onOpenBookingModal) {
      onOpenBookingModal();
    } else {
      setBookingProfessional(PROFESSIONALS[0]);
    }
  };

  return (
    <section
      id="terapias"
      className="py-20 bg-gradient-to-b from-[#FFFDF9] via-[#FFF5F7] to-[#FFFDF9] border-t border-[#FCE7F3]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: User's exact title and copy */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE7F3] text-[#BE185D] text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Atención Terapéutica Integral</span>
          </div>

          <h2
            id="terapias-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#18181B] tracking-tight leading-tight"
          >
            Terapia psicosexual y{' '}
            <span className="bg-gradient-to-r from-[#FF5E8E] to-[#E11D48] bg-clip-text text-transparent">
              terapia de pareja
            </span>
          </h2>

          <p className="text-base sm:text-lg font-medium text-[#4B5563] leading-relaxed">
            Teleconsulta, terapia sexual presencial, asesorías sexuales, terapia de pareja,
            atención con enfoque de género.
          </p>

          <p className="text-sm sm:text-base text-[#BE185D] font-bold">
            Salud sexual integral para el placer y bienestar.
          </p>
        </div>

        {/* Highlight Banner with User's Exact Attention Text & Primary Agenda CTA */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#FCE7F3] shadow-md relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#9D174D]">
                <Users className="w-4 h-4 text-[#E11D48]" />
                <span>Atención Terapéutica Especializada</span>
              </div>

              <p className="text-base sm:text-lg text-[#1F2937] leading-relaxed font-normal">
                Inicia proceso terapéutico con nuestrxs profesionales en psicología con enfoque
                sexual; explora y transforma tu desarrollo sexoafectivo y potencia su bienestar.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#FFF1F2] border border-[#FCE7F3]">
                  <CheckCircle2 className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#374151] font-medium leading-snug">
                    Terapia con enfoque sexual, tratamiento en disfunciones sexuales, atención individual y con pareja(s).
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#FFF1F2] border border-[#FCE7F3]">
                  <CheckCircle2 className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#374151] font-medium leading-snug">
                    Terapia con enfoque de género y diversidades.
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#6B7280] font-medium pt-1">
                Agenda tu consulta individualmente o con tu(s) pareja(s), con modalidad (presencial o virtual) y horarios flexibles.
              </p>
            </div>

            {/* Big Action Buttons */}
            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <button
                id="btn-agenda-tu-cita-banner"
                onClick={handleGlobalBook}
                className="w-full py-4 rounded-2xl font-extrabold text-white bg-gradient-to-r from-[#FF5E8E] via-[#F43F5E] to-[#E11D48] hover:from-[#F43F5E] hover:to-[#BE185D] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-base active:scale-95"
              >
                <Calendar className="w-5 h-5" />
                <span>AGENDA TU CITA</span>
              </button>

              {onExploreCourses && (
                <button
                  id="btn-encontrar-mas-cursos"
                  onClick={onExploreCourses}
                  className="w-full py-3 rounded-2xl font-bold text-[#9D174D] bg-[#FFF1F2] hover:bg-[#FCE7F3] border border-[#F472B6]/40 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm active:scale-95"
                >
                  <BookOpen className="w-4 h-4 text-[#E11D48]" />
                  <span>ENCONTRAR MÁS CURSOS</span>
                </button>
              )}

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#6B7280]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                <span>100% Confidencial • Atención ética</span>
              </div>
            </div>
          </div>
        </div>

        {/* Important Healthcare Disclaimer */}
        <div
          id="emergency-medical-warning-box"
          className="mt-6 p-4 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] flex items-start gap-3 shadow-2xs"
        >
          <AlertTriangle className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
          <div className="text-xs text-[#78350F] space-y-0.5">
            <span className="font-bold block">Aviso importante sobre atención en salud:</span>
            <p className="leading-relaxed">
              Esta plataforma de teleconsulta y asesorías no sustituye servicios de emergencias médicas de riesgo vital inmediato. En caso de emergencia médica aguda, acude al centro de urgencias más cercano.
            </p>
          </div>
        </div>

        {/* Specialty Filter Buttons */}
        <div className="mt-10 flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {specialties.map((spec) => {
            const isSelected = selectedSpecialty === spec;
            return (
              <button
                key={spec}
                id={`filter-specialty-${spec.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedSpecialty(spec)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-150 ${
                  isSelected
                    ? 'bg-[#E11D48] text-white shadow-xs'
                    : 'bg-white text-[#4B5563] hover:bg-[#FFF1F2] border border-[#FCE7F3]'
                }`}
              >
                {spec}
              </button>
            );
          })}
        </div>

        {/* Professionals Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfessionals.map((prof) => (
            <div
              key={prof.id}
              id={`professional-card-${prof.id}`}
              className="bg-white rounded-3xl border-2 border-[#FCE7F3] overflow-hidden shadow-xs hover:shadow-lg hover:border-[#F472B6] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo & Badge */}
                <div className="relative h-64 overflow-hidden bg-[#FCE7F3]">
                  <img
                    src={prof.photo}
                    alt={`Fotografía profesional de ${prof.name}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[#BE185D] shadow-xs">
                      {prof.specialty}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#18181B]/90 text-white backdrop-blur-xs flex items-center gap-1 shadow-xs">
                      <Video className="w-3.5 h-3.5 text-[#34D399]" />
                      <span>{prof.modality}</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-xl font-black text-[#18181B] leading-snug">
                      {prof.name}
                    </h3>
                    <p className="text-xs text-[#6B7280] font-semibold mt-0.5">
                      {prof.roleTitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed line-clamp-3">
                    {prof.description}
                  </p>

                  <div className="pt-1 flex flex-wrap gap-1.5">
                    {prof.focusAreas.slice(0, 3).map((area, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-[#FFF1F2] text-[#9D174D] border border-[#FCE7F3]"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 space-y-2 border-t border-[#FFF1F2]">
                <button
                  id={`btn-conocer-${prof.id}`}
                  onClick={() => setActiveProfessionalDetail(prof)}
                  className="w-full py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#374151] bg-[#FFFDF9] hover:bg-[#FFF1F2] border border-[#FCE7F3] transition-all flex items-center justify-center gap-2"
                >
                  <span>CONOCER PROFESIONAL</span>
                </button>

                <button
                  id={`btn-agendar-${prof.id}`}
                  onClick={() => setBookingProfessional(prof)}
                  className="w-full py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#FF5E8E] to-[#E11D48] hover:from-[#F43F5E] hover:to-[#BE185D] transition-all flex items-center justify-center gap-2 shadow-xs active:scale-98"
                >
                  <Calendar className="w-4 h-4" />
                  <span>AGENDA TU CITA</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {activeProfessionalDetail && (
        <ProfessionalDetailModal
          professional={activeProfessionalDetail}
          onClose={() => setActiveProfessionalDetail(null)}
          onBookNow={(prof) => setBookingProfessional(prof)}
        />
      )}

      {/* Booking Modal */}
      {bookingProfessional && (
        <BookingModal
          professional={bookingProfessional}
          onClose={() => setBookingProfessional(null)}
        />
      )}
    </section>
  );
};

