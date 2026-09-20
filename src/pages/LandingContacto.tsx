import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { ContactSection } from '../components/ContactSection';

interface LandingContactoProps {
  onBackToHome: () => void;
}

export const LandingContacto: React.FC<LandingContactoProps> = ({ onBackToHome }) => {
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
            <span className="text-[#BE185D] font-bold">Contacto</span>
          </div>
        </div>
      </div>

      <ContactSection />
    </div>
  );
};
