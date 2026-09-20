import React, { useState, useEffect } from 'react';
import { Menu, X, HeartHandshake, ShieldCheck, Calendar, Sparkles } from 'lucide-react';
import { SexsapiensLogo } from './SexsapiensLogo';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
  onOpenVolunteer?: () => void;
  onOpenDonation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenBooking,
  onOpenVolunteer,
  onOpenDonation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items for dedicated landing pages
  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'educacion', label: 'Educación' },
    { id: 'terapias', label: 'Atención Terapéutica' },
    { id: 'galeria', label: 'Galería' },
    { id: 'labor-social', label: 'Labor Social' },
    { id: 'quienes-somos', label: 'Quiénes Somos' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const handleDiscreetExit = () => {
    window.location.replace('https://www.google.com');
  };

  return (
    <header
      id="main-navbar-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#FCE7F3]'
          : 'bg-[#FFFDF9]/90 backdrop-blur-xs border-b border-[#F5EBE6]'
      }`}
    >
      {/* Top reassurance & quick exit bar */}
      <div
        id="reassurance-bar"
        className="bg-gradient-to-r from-[#18181B] via-[#27272A] to-[#18181B] text-[#F4F4F5] text-xs py-1.5 px-4 font-normal"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            <span className="tracking-wide text-[11px] sm:text-xs">
              ✨ ¡Salud, placer y goce sexual! Espacio seguro, confidencial e inclusivo
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              id="discreet-exit-btn"
              onClick={handleDiscreetExit}
              title="Cierra esta ventana inmediatamente hacia un buscador neutro"
              className="text-[#E4E4E7] hover:text-[#FFFFFF] text-[11px] sm:text-xs underline underline-offset-2 flex items-center gap-1 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#F43F5E]" />
              <span>Salida rápida discreta</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo matching uploaded user image */}
        <div
          id="brand-logo-container"
          className="flex items-center text-left"
        >
          <SexsapiensLogo
            size="md"
            showSubtitle={false}
            onClick={() => handleNavClick('inicio')}
          />
        </div>

        {/* Desktop Nav Items */}
        <nav
          id="desktop-nav-links"
          className="hidden lg:flex items-center gap-1 xl:gap-2"
          aria-label="Navegación principal"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? 'text-[#BE185D] bg-[#FCE7F3] shadow-2xs'
                    : 'text-[#4B5563] hover:text-[#BE185D] hover:bg-[#FFF1F2]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Buttons: Agenda tu cita & Labor Social */}
        <div className="hidden md:flex items-center gap-2.5">
          <button
            id="navbar-booking-cta"
            onClick={onOpenBooking}
            className="px-4 py-2 rounded-full text-xs sm:text-sm font-black text-white bg-gradient-to-r from-[#FF5E8E] to-[#E11D48] hover:from-[#F43F5E] hover:to-[#BE185D] shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-1.5 active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>AGENDA TU CITA</span>
          </button>

          <button
            id="navbar-volunteer-cta"
            onClick={() => {
              if (onOpenVolunteer) {
                onOpenVolunteer();
              } else {
                handleNavClick('labor-social');
              }
            }}
            className="px-3.5 py-2 rounded-full text-xs font-bold text-[#831843] bg-[#FCE7F3] hover:bg-[#FBCFE8] border border-[#F472B6]/40 transition-all flex items-center gap-1.5 active:scale-95"
          >
            <HeartHandshake className="w-4 h-4 text-[#E11D48]" />
            <span>Labor Social</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            id="mobile-agenda-cta"
            onClick={onOpenBooking}
            className="px-3 py-1.5 text-xs font-bold rounded-full text-white bg-gradient-to-r from-[#FF5E8E] to-[#E11D48]"
          >
            Agendar
          </button>
          <button
            id="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#374151] hover:bg-[#FEE2E2] focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#BE185D]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer / dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden bg-[#FFFDF9] border-b border-[#FCE7F3] px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200"
        >
          <div className="flex items-center justify-between pb-2 border-b border-[#FEE2E2]">
            <span className="text-xs font-bold text-[#9D174D] uppercase tracking-wider">
              ¡Tu placer sexual importa!
            </span>
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-[#0284C7]"></span>
              <span className="w-2 h-2 rounded-full bg-[#F97316]"></span>
              <span className="w-2 h-2 rounded-full bg-[#9333EA]"></span>
              <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
            </div>
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`mobile-link-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                activeSection === item.id
                  ? 'bg-[#FCE7F3] text-[#BE185D]'
                  : 'text-[#374151] hover:bg-[#FFF1F2]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#FF5E8E] to-[#E11D48] text-center"
            >
              AGENDA TU CITA (Teleconsulta o Presencial)
            </button>
            <button
              onClick={() => {
                if (onOpenVolunteer) {
                  onOpenVolunteer();
                } else {
                  handleNavClick('labor-social');
                }
                setMobileMenuOpen(false);
              }}
              className="w-full py-2 rounded-xl text-xs font-semibold text-[#9D174D] bg-[#FCE7F3] text-center"
            >
              Conoce nuestra labor social y vincúlate
            </button>
          </div>
          <div className="pt-3 border-t border-[#FEE2E2] flex justify-between items-center text-xs text-[#6B7280]">
            <span>¿Necesitas privacidad?</span>
            <button
              id="mobile-discreet-exit-btn"
              onClick={handleDiscreetExit}
              className="underline text-[#E11D48] font-medium"
            >
              Salida rápida discreta
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

