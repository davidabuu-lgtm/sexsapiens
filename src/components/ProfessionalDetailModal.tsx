import React from 'react';
import { Professional } from '../types';
import { X, Calendar, Award, CheckCircle2, ShieldCheck, Globe2 } from 'lucide-react';

interface ProfessionalDetailModalProps {
  professional: Professional | null;
  onClose: () => void;
  onBookNow: (prof: Professional) => void;
}

export const ProfessionalDetailModal: React.FC<ProfessionalDetailModalProps> = ({
  professional,
  onClose,
  onBookNow,
}) => {
  if (!professional) return null;

  return (
    <div
      id="professional-detail-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#171A19]/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div
        id="professional-detail-modal-container"
        className="bg-[#FAF7F2] rounded-2xl w-full max-w-2xl shadow-2xl border border-[#E4DACD] overflow-hidden"
      >
        {/* Header */}
        <div className="p-6 bg-[#F4EDE4] border-b border-[#E5DACE] flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src={professional.photo}
              alt={professional.name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-white shadow-xs"
              referrerPolicy="no-referrer"
            />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#EAE0D4] text-[#863D2B]">
                {professional.specialty}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#232925] mt-1">
                {professional.name}
              </h3>
              <p className="text-xs text-[#5D554E] mt-0.5 font-medium">
                {professional.roleTitle}
              </p>
            </div>
          </div>

          <button
            id="close-prof-detail-btn"
            onClick={onClose}
            className="p-1.5 rounded-full text-[#695F57] hover:bg-[#E7DCD0] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Credentials */}
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F0E8DD] text-xs sm:text-sm text-[#463D37]">
            <Award className="w-5 h-5 text-[#984732] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block text-[#242A27]">
                Formación y Acreditación:
              </span>
              <span>{professional.credentials}</span>
              <span className="block text-xs text-[#6F665E] mt-0.5">
                {professional.experienceYears} años de experiencia clínica y comunitaria
              </span>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <h4 className="font-serif text-lg font-bold text-[#262B28]">
              Enfoque humano y visión terapéutica
            </h4>
            <p className="text-sm text-[#4E4640] leading-relaxed">
              {professional.detailedBio}
            </p>
          </div>

          {/* Focus Areas */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#984732]">
              Áreas principales de acompañamiento
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {professional.focusAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs text-[#403833] p-2.5 rounded-lg bg-white border border-[#E3D7C9]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#739263] shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Approach & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#EAE0D3] text-xs text-[#524A43]">
            <div>
              <span className="font-semibold text-[#242A27] block mb-1">
                Metodología y enfoque:
              </span>
              <p className="leading-relaxed">{professional.approach}</p>
            </div>
            <div>
              <span className="font-semibold text-[#242A27] block mb-1">
                Idiomas de atención:
              </span>
              <div className="flex items-center gap-1.5">
                <Globe2 className="w-4 h-4 text-[#7A7067]" />
                <span>{professional.languages.join(', ')}</span>
              </div>
              <span className="block mt-2 text-[#7A7067]">
                Modalidad: <strong>{professional.modality}</strong>
              </span>
            </div>
          </div>

          {/* Sliding scale fee info */}
          <div className="p-3.5 rounded-xl bg-[#E8F0E4] border border-[#CADBC2] text-xs text-[#2A441E] flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 shrink-0 text-[#4D763B] mt-0.5" />
            <div>
              <span className="font-semibold block">Accesibilidad económica:</span>
              <p className="mt-0.5">{professional.feeInfo}</p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 bg-[#F5EFE6] border-t border-[#E5DACE] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <span className="text-xs text-[#6B6158]">
            {professional.availabilityNote}
          </span>
          <button
            id="btn-agendar-desde-detalle"
            onClick={() => {
              onClose();
              onBookNow(professional);
            }}
            className="px-6 py-2.5 rounded-xl bg-[#984732] hover:bg-[#803825] text-white text-xs sm:text-sm font-semibold shadow-xs flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>AGENDAR CONSULTA</span>
          </button>
        </div>
      </div>
    </div>
  );
};
