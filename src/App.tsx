import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePageCompact } from './pages/HomePageCompact';
import { LandingEducacion } from './pages/LandingEducacion';
import { LandingTerapias } from './pages/LandingTerapias';
import { LandingGaleria } from './pages/LandingGaleria';
import { LandingLaborSocial } from './pages/LandingLaborSocial';
import { LandingQuienesSomos } from './pages/LandingQuienesSomos';
import { LandingContacto } from './pages/LandingContacto';
import { BookingModal } from './components/BookingModal';
import { VolunteerModal } from './components/VolunteerModal';
import { PROFESSIONALS } from './data/professionalsData';
import { Type, HeartHandshake } from 'lucide-react';

export default function App() {
  // Read initial page from hash if present
  const getInitialPage = () => {
    const hash = window.location.hash.replace('#', '').trim();
    if (hash === 'artes-eroticas') return 'galeria';
    if (hash === 'cursos') return 'educacion';
    if (['inicio', 'educacion', 'terapias', 'galeria', 'labor-social', 'quienes-somos', 'contacto'].includes(hash)) {
      return hash;
    }
    return 'inicio';
  };

  const [currentPage, setCurrentPage] = useState<string>(getInitialPage);
  const [isGlobalBookingOpen, setIsGlobalBookingOpen] = useState(false);
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [isLargeTextMode, setIsLargeTextMode] = useState(false);

  // Sync hash changes with state
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (hash === 'artes-eroticas') {
        setCurrentPage('galeria');
      } else if (hash === 'cursos') {
        setCurrentPage('educacion');
      } else if (hash && ['inicio', 'educacion', 'terapias', 'galeria', 'labor-social', 'quienes-somos', 'contacto'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPage = (pageId: string) => {
    let target = pageId;
    if (pageId === 'artes-eroticas') target = 'galeria';
    if (pageId === 'cursos') target = 'educacion';
    if (pageId === 'juego-mitos') {
      target = 'inicio';
    }

    setCurrentPage(target);
    window.location.hash = `#${target}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen flex flex-col bg-[#FFFDF9] text-[#18181B] selection:bg-[#FCE7F3] selection:text-[#BE185D] ${
        isLargeTextMode ? 'text-lg leading-relaxed font-medium' : ''
      }`}
    >
      {/* Fixed Navigation Bar */}
      <Navbar
        activeSection={currentPage}
        onNavigate={navigateToPage}
        onOpenBooking={() => setIsGlobalBookingOpen(true)}
        onOpenVolunteer={() => setIsVolunteerModalOpen(true)}
        onOpenDonation={() => setIsVolunteerModalOpen(true)}
      />

      {/* Main Content Area - Page Router */}
      <main className="flex-1">
        {currentPage === 'inicio' && (
          <HomePageCompact
            onNavigateToEducacion={() => navigateToPage('educacion')}
            onNavigateToTerapias={() => navigateToPage('terapias')}
            onNavigateToGaleria={() => navigateToPage('galeria')}
            onNavigateToLaborSocial={() => navigateToPage('labor-social')}
            onNavigateToQuienesSomos={() => navigateToPage('quienes-somos')}
            onNavigateToContacto={() => navigateToPage('contacto')}
            onOpenBooking={() => setIsGlobalBookingOpen(true)}
            onOpenVolunteer={() => setIsVolunteerModalOpen(true)}
          />
        )}

        {currentPage === 'educacion' && (
          <LandingEducacion
            onBackToHome={() => navigateToPage('inicio')}
            onNavigateToTerapias={() => navigateToPage('terapias')}
            onNavigateToGaleria={() => navigateToPage('galeria')}
            onOpenBooking={() => setIsGlobalBookingOpen(true)}
          />
        )}

        {currentPage === 'terapias' && (
          <LandingTerapias
            onBackToHome={() => navigateToPage('inicio')}
            onNavigateToEducacion={() => navigateToPage('educacion')}
            onNavigateToGaleria={() => navigateToPage('galeria')}
          />
        )}

        {(currentPage === 'galeria' || currentPage === 'artes-eroticas') && (
          <LandingGaleria
            onBackToHome={() => navigateToPage('inicio')}
            onNavigateToEducacion={() => navigateToPage('educacion')}
            onNavigateToTerapias={() => navigateToPage('terapias')}
          />
        )}

        {currentPage === 'labor-social' && (
          <LandingLaborSocial
            onBackToHome={() => navigateToPage('inicio')}
            onOpenVolunteer={() => setIsVolunteerModalOpen(true)}
            onOpenBooking={() => setIsGlobalBookingOpen(true)}
            onNavigateToEducacion={() => navigateToPage('educacion')}
            onNavigateToTerapias={() => navigateToPage('terapias')}
          />
        )}

        {currentPage === 'quienes-somos' && (
          <LandingQuienesSomos
            onBackToHome={() => navigateToPage('inicio')}
            onNavigateToTerapias={() => navigateToPage('terapias')}
            onNavigateToLaborSocial={() => navigateToPage('labor-social')}
            onOpenVolunteer={() => setIsVolunteerModalOpen(true)}
          />
        )}

        {currentPage === 'contacto' && (
          <LandingContacto onBackToHome={() => navigateToPage('inicio')} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateToPage}
        onOpenBooking={() => setIsGlobalBookingOpen(true)}
      />

      {/* Floating Accessibility Control: Easy Reading Mode for Seniors and Youth */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2">
        <button
          onClick={() => setIsLargeTextMode(!isLargeTextMode)}
          className={`px-4 py-2.5 rounded-full shadow-lg border text-xs font-black flex items-center gap-2 transition-all backdrop-blur-md active:scale-95 ${
            isLargeTextMode
              ? 'bg-[#BE185D] text-white border-[#BE185D]'
              : 'bg-white/95 text-[#18181B] border-[#FCE7F3] hover:border-[#FF5E8E]'
          }`}
          title="Alternar entre tamaño de texto normal y grande para lectura cómoda"
        >
          <Type className="w-4 h-4 text-[#FF5E8E]" />
          <span>{isLargeTextMode ? 'Texto Grande Activo' : 'Modo Lectura Cómoda'}</span>
        </button>

        <button
          onClick={() => setIsVolunteerModalOpen(true)}
          className="px-4 py-2.5 rounded-full shadow-lg border text-xs font-black flex items-center gap-2 transition-all bg-gradient-to-r from-[#FF5E8E] to-[#E11D48] text-white hover:from-[#F43F5E] hover:to-[#BE185D] active:scale-95"
          title="Vincúlate al apoyo voluntario de Sexsapiens"
        >
          <HeartHandshake className="w-4 h-4" />
          <span>¡Vincúlate al voluntariado!</span>
        </button>
      </div>

      {/* Global Quick Booking Modal */}
      {isGlobalBookingOpen && (
        <BookingModal
          professional={PROFESSIONALS[0]}
          onClose={() => setIsGlobalBookingOpen(false)}
        />
      )}

      {/* Global Volunteer Onboarding Modal */}
      {isVolunteerModalOpen && (
        <VolunteerModal
          isOpen={isVolunteerModalOpen}
          onClose={() => setIsVolunteerModalOpen(false)}
        />
      )}
    </div>
  );
}
