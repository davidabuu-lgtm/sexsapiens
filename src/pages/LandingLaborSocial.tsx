import React from 'react';
import {
  ArrowLeft,
  HeartHandshake,
  Sparkles,
  Heart,
  Users,
  ShieldCheck,
  Calendar,
  BookOpen,
  ArrowRight,
  Gift,
  CheckCircle2,
} from 'lucide-react';
import { LaborSocialSection } from '../components/LaborSocialSection';

interface LandingLaborSocialProps {
  onBackToHome: () => void;
  onOpenVolunteer: () => void;
  onOpenBooking: () => void;
  onNavigateToEducacion: () => void;
  onNavigateToTerapias: () => void;
}

export const LandingLaborSocial: React.FC<LandingLaborSocialProps> = ({
  onBackToHome,
  onOpenVolunteer,
  onOpenBooking,
  onNavigateToEducacion,
  onNavigateToTerapias,
}) => {
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
            <span className="text-[#BE185D] font-bold">Labor Social</span>
          </div>
        </div>
      </div>

      {/* Labor Social Hero & Complete Content */}
      <LaborSocialSection
        onOpenVolunteer={onOpenVolunteer}
        onOpenBooking={onOpenBooking}
      />

      {/* Cross-navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#FCE7F3] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold text-[#BE185D] uppercase tracking-wider">
              Continúa conociendo Sexsapiens
            </span>
            <h3 className="text-xl font-black text-[#18181B]">
              Educación para todas las edades y acompañamiento clínico
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
              onClick={onNavigateToTerapias}
              className="px-5 py-2.5 rounded-full bg-[#F3E8FF] hover:bg-[#E9D5FF] text-[#7E22CE] font-bold text-xs transition-all flex items-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Ver Atención Terapéutica →</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
