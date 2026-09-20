import React, { useState } from 'react';
import { SexsapiensLogo } from './SexsapiensLogo';
import {
  Sparkles,
  HeartHandshake,
  ShieldCheck,
  Mail,
  CheckCircle2,
  PhoneCall,
  Instagram,
  Heart,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    setNewsletterEmail('');
  };

  const emergencyLines = [
    { country: 'Colombia', name: 'Línea 106 / Línea Púrpura 018000 112137' },
    { country: 'México', name: 'Línea de la Vida 800 911 2000' },
    { country: 'España', name: '024 Atención a la conducta suicida / Teléfono de la Esperanza 717 003 717' },
    { country: 'Argentina', name: 'Línea 135 (CABA) / 0800-345-1435' },
    { country: 'Chile', name: '*4141 Salud Mental / Línea Libre' },
    { country: 'EE.UU. (Español)', name: 'Línea 988 (Presiona 2 para Español)' },
  ];

  return (
    <footer id="main-site-footer" className="bg-[#121214] text-[#E4E4E7] pt-16 pb-12 border-t border-[#27272A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Col 1: Brand and mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <SexsapiensLogo size="md" className="scale-95 origin-left" allowUpload={false} inverted={true} />
            </div>

            <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
              Plataforma multidisciplinar de educación sexual, bienestar, acompañamiento terapéutico y transformación comunitaria. Salud, placer y goce sexual libre de prejuicios.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#F472B6]">
              <ShieldCheck className="w-4 h-4 text-[#F43F5E]" />
              <span>Espacio confidencial, inclusivo y sin tabúes</span>
            </div>

            {/* Social handles */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#27272A] hover:bg-[#E11D48] text-white flex items-center justify-center transition-colors shadow-2xs"
                aria-label="Instagram Sexsapiens"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:contacto@sexsapiens.org"
                className="w-9 h-9 rounded-xl bg-[#27272A] hover:bg-[#E11D48] text-white flex items-center justify-center transition-colors shadow-2xs"
                aria-label="Correo de contacto"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#FF5E8E]">
              Explora Sexsapiens
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#D4D4D8]">
              <li>
                <button
                  onClick={() => onNavigate('inicio')}
                  className="hover:text-[#FF5E8E] transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('educacion')}
                  className="hover:text-[#FF5E8E] transition-colors text-left"
                >
                  Educación: Cursos y talleres
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terapias')}
                  className="hover:text-[#FF5E8E] transition-colors text-left"
                >
                  Atención Terapéutica y de pareja
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('galeria')}
                  className="hover:text-[#FF5E8E] transition-colors text-left"
                >
                  Galería & Clítoris 3D
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('labor-social')}
                  className="hover:text-[#FF5E8E] transition-colors text-left font-bold text-[#FF5E8E]"
                >
                  Labor Social & Voluntariado
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('juego-mitos')}
                  className="hover:text-[#FF5E8E] transition-colors text-left text-amber-300"
                >
                  🎮 Minijuego: ¿Mito o Verdad?
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('quienes-somos')}
                  className="hover:text-[#FF5E8E] transition-colors text-left"
                >
                  Quiénes somos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contacto')}
                  className="hover:text-[#FF5E8E] transition-colors"
                >
                  Contáctanos / Voluntariado
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Cita & Terapias CTA */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#FF5E8E]">
              Atención
            </h4>
            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              Inicia proceso terapéutico presencial o virtual individual o con tu(s) pareja(s).
            </p>
            <button
              onClick={onOpenBooking}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#FF5E8E] to-[#E11D48] hover:from-[#F43F5E] hover:to-[#BE185D] text-white text-xs font-extrabold flex items-center gap-2 transition-all shadow-xs"
            >
              <span>AGENDA TU CITA</span>
            </button>
            <span className="block text-[11px] text-[#71717A]">
              Horarios flexibles y atención con enfoque de género.
            </span>
          </div>

          {/* Col 4: Newsletter */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#FF5E8E]">
              Boletín Sexsapiens
            </h4>
            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              Recibe reflexiones mensuales, guías de anatomía y fechas de nuevos talleres y conversatorios.
            </p>
            {subscribed ? (
              <div className="p-3 rounded-xl bg-[#27272A] border border-[#3F3F46] text-xs text-[#34D399] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>¡Gracias por suscribirte! Revisa tu bandeja de entrada.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#71717A]" />
                  <input
                    id="newsletter-email-input"
                    type="email"
                    required
                    placeholder="tu@correo.com"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#1E1E22] border border-[#2E2E34] text-xs text-white placeholder-[#71717A] focus:outline-none focus:border-[#FF5E8E]"
                  />
                </div>
                <button
                  id="newsletter-subscribe-btn"
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#27272A] hover:bg-[#3F3F46] text-xs font-bold text-white transition-colors"
                >
                  Suscribirme gratis
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Emergency Resources Box (Retained for healthcare ethics) */}
        <div
          id="footer-emergency-lines-box"
          className="p-5 rounded-2xl bg-[#18181B] border border-[#27272A] space-y-3"
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF5E8E]">
            <PhoneCall className="w-4 h-4" />
            <span>Líneas gratuitas de apoyo y crisis en Iberoamérica</span>
          </div>
          <p className="text-xs text-[#A1A1AA] leading-relaxed">
            Sexsapiens promueve la salud integral. En situaciones de violencia de género, crisis emocional severa o riesgo vital, recuerda estas líneas 24/7 gratuitas:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs text-[#D4D4D8]">
            {emergencyLines.map((line, lIdx) => (
              <div key={lIdx} className="p-2 rounded-lg bg-[#121214] border border-[#27272A]">
                <strong className="text-white block">{line.country}:</strong>
                <span className="text-[11px] text-[#A1A1AA]">{line.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <p>
            © {new Date().getFullYear()} Sexsapiens. ¡Salud, placer y goce sexual!
          </p>
          <p className="text-center sm:text-right flex items-center gap-1">
            <span>Diseñado con rigor científico, calidez humana y enfoque de género.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

