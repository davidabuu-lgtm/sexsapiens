import React from 'react';
import {
  BookOpen,
  Calendar,
  Sparkles,
  Heart,
  ShieldCheck,
  Flame,
  Smile,
  ArrowRight,
  Eye,
  CheckCircle2,
  HeartHandshake,
} from 'lucide-react';

interface HeroProps {
  onExploreCourses: () => void;
  onExploreTherapies: () => void;
  onExploreLaborSocial: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCourses,
  onExploreTherapies,
  onExploreLaborSocial,
}) => {
  const highlights = [
    { title: 'Vulvas & Punto G', emoji: '✨', color: 'from-[#FF5E8E] to-[#F43F5E]' },
    { title: 'BDSM & Consentimiento', emoji: '🔗', color: 'from-[#8B5CF6] to-[#6D28D9]' },
    { title: 'Juguetes & Balas', emoji: '⚡', color: 'from-[#F97316] to-[#EA580C]' },
    { title: 'Educación Menstrual', emoji: '🩸', color: 'from-[#E11D48] to-[#9F1239]' },
    { title: 'Terapia con Pareja(s)', emoji: '🫂', color: 'from-[#0284C7] to-[#0369A1]' },
    { title: 'Artes Eróticas', emoji: '🎨', color: 'from-[#10B981] to-[#047857]' },
  ];

  return (
    <section
      id="hero-section"
      className="pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FFF1F2]/50 to-[#FFFDF9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-column Hero content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Playful Brand Stickers & Safe space badge */}
            <div className="flex flex-wrap items-center gap-2">
              <div
                id="hero-pleasure-badge"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#FF5E8E] to-[#E11D48] text-white text-xs font-black tracking-wide shadow-sm transform -rotate-1 hover:rotate-0 transition-transform"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>¡Tu placer sexual importa!</span>
              </div>

              <div
                id="hero-safe-badge"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FCE7F3] border border-[#F472B6]/40 text-[#9D174D] text-xs font-semibold"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#E11D48]" />
                <span>Espacio seguro, inclusivo & sin tabúes</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-main-title"
              className="font-sans text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#18181B] leading-[1.08]"
            >
              ¡Salud, placer y{' '}
              <span className="bg-gradient-to-r from-[#FF5E8E] via-[#F43F5E] to-[#E11D48] bg-clip-text text-transparent underline decoration-[#F472B6]/50 decoration-wavy">
                goce sexual!
              </span>
            </h1>

            {/* Subtitle: ¿Cómo (des)aprender para disfrutar? ¡Acá te lo enseñamos! */}
            <div className="space-y-3">
              <p
                id="hero-question"
                className="text-xl sm:text-2xl font-bold text-[#BE185D] leading-snug"
              >
                ¿Cómo (des)aprender para disfrutar? ¡Acá te lo enseñamos!
              </p>

              <p
                id="hero-subtitle"
                className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl font-normal"
              >
                Haz parte de nuestros cursos educativos en sexualidad y/o inicia proceso
                terapéutico individual o con tu(s) pareja(s). Desde Colombia para el mundo,
                con enfoque de género, diversidad y afecto.
              </p>
            </div>

            {/* User's Exact Primary Buttons: TERAPIAS and EDUCACIÓN */}
            <div
              id="hero-cta-buttons-group"
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
            >
              <button
                id="hero-btn-terapias"
                onClick={onExploreTherapies}
                className="px-8 py-4 rounded-2xl text-base font-black text-white bg-gradient-to-r from-[#FF5E8E] via-[#F43F5E] to-[#E11D48] hover:from-[#F43F5E] hover:to-[#BE185D] shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2.5 active:scale-95 group"
              >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="tracking-wide">TERAPIAS</span>
              </button>

              <button
                id="hero-btn-cursos"
                onClick={onExploreCourses}
                className="px-8 py-4 rounded-2xl text-base font-black text-[#9D174D] bg-[#FFFFFF] hover:bg-[#FFF1F2] border-2 border-[#F472B6] shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 group"
              >
                <BookOpen className="w-5 h-5 text-[#E11D48] group-hover:scale-110 transition-transform" />
                <span className="tracking-wide">EDUCACIÓN</span>
              </button>
            </div>

            {/* Quick Interactive Game & Labor Social Direct Action */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                id="hero-btn-labor-social"
                onClick={onExploreLaborSocial}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFF1F2] hover:bg-[#FCE7F3] border border-[#FCE7F3] text-xs font-bold text-[#BE185D] transition-all shadow-2xs hover:scale-102 active:scale-95"
              >
                <HeartHandshake className="w-3.5 h-3.5 text-[#E11D48]" />
                <span>¡Conoce nuestra labor social y vincúlate!</span>
              </button>

              <a
                href="#juego-mitos"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#FFF7ED] to-[#FEF3C7] border border-[#FED7AA] text-xs font-bold text-[#B45309] hover:shadow-xs transition-all hover:scale-102 active:scale-95"
              >
                <span>🎮 Jugar Ruleta ¿Mito o Verdad?</span>
              </a>
            </div>

            {/* Reassurance pills */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4B5563]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Teleconsulta & Presencial</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Atención con enfoque de género</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Horarios flexibles</span>
              </div>
            </div>
          </div>

          {/* Right Column: Youthful Visual Composition with Real Authentic Warmth */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Vibrant playful backdrop cards */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#FCE7F3] via-[#FED7AA] to-[#E0E7FF] transform rotate-2 opacity-80"></div>

              {/* Main Visual Card */}
              <div
                id="hero-visual-card"
                className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-white bg-white"
              >
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80"
                    alt="Jóvenes celebrando afecto, autenticidad y bienestar en comunidad"
                    className="w-full h-84 sm:h-92 object-cover object-center"
                    referrerPolicy="no-referrer"
                  />

                  {/* Floating fun sticker 1 */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-[#FCE7F3] shadow-md flex items-center gap-1.5 text-xs font-bold text-[#BE185D] transform -rotate-3 hover:rotate-0 transition-transform">
                    <Flame className="w-4 h-4 text-[#F97316]" />
                    <span>Sin vergüenzas • Con goce</span>
                  </div>

                  {/* Floating fun sticker 2: 3D Clitoris model mention */}
                  <div className="absolute bottom-16 right-4 bg-[#18181B]/90 backdrop-blur-xs text-white px-3 py-1 rounded-xl shadow-lg text-[11px] font-semibold flex items-center gap-1.5 transform rotate-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping"></span>
                    <span>Modelo 3D del Clítoris & Artes</span>
                  </div>
                </div>

                {/* Friendly banner at base of photo */}
                <div className="p-4.5 bg-gradient-to-r from-[#FFF1F2] to-[#FFFDF9] border-t border-[#FCE7F3] flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#18181B] block">
                      sexsapiens • comunidad viva
                    </span>
                    <span className="text-[11px] text-[#6B7280]">
                      Psicología, medicina, trabajo social y artes eróticas
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0284C7]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F97316]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#9333EA]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Highlights (Stories / Themes from Instagram feed) */}
        <div id="hero-stories-highlights" className="mt-12 pt-8 border-t border-[#FCE7F3]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#9D174D]">
              Temas que abordamos sin rodeos
            </span>
            <span className="text-xs text-[#6B7280]">
              Explora nuestras líneas de aprendizaje y atención
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {highlights.map((item, idx) => (
              <button
                key={idx}
                id={`highlight-btn-${idx}`}
                onClick={onExploreCourses}
                className="p-3 rounded-2xl bg-white border border-[#FCE7F3] hover:border-[#F472B6] hover:shadow-md transition-all duration-200 flex flex-col items-center text-center gap-2 group active:scale-95"
              >
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-tr ${item.color} text-white flex items-center justify-center text-xl shadow-xs group-hover:scale-110 transition-transform`}
                >
                  <span>{item.emoji}</span>
                </div>
                <span className="text-xs font-bold text-[#1F2937] leading-snug group-hover:text-[#BE185D] transition-colors">
                  {item.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

