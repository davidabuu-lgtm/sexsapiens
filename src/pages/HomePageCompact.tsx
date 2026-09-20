import React, { useState } from 'react';
import {
  BookOpen,
  Calendar,
  Sparkles,
  Palette,
  HeartHandshake,
  ShieldCheck,
  ArrowRight,
  Eye,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Heart,
  Lock,
  Globe,
  Award,
} from 'lucide-react';
import { SexsapiensLogo } from '../components/SexsapiensLogo';

interface HomePageCompactProps {
  onNavigateToEducacion: () => void;
  onNavigateToTerapias: () => void;
  onNavigateToGaleria: () => void;
  onNavigateToLaborSocial: () => void;
  onNavigateToQuienesSomos: () => void;
  onNavigateToContacto: () => void;
  onOpenBooking: () => void;
  onOpenVolunteer: () => void;
}

export const HomePageCompact: React.FC<HomePageCompactProps> = ({
  onNavigateToEducacion,
  onNavigateToTerapias,
  onNavigateToGaleria,
  onNavigateToLaborSocial,
  onNavigateToQuienesSomos,
  onNavigateToContacto,
  onOpenBooking,
  onOpenVolunteer,
}) => {
  // Mini trivia teaser state
  const [answered, setAnswered] = useState<boolean | null>(null);
  const [currentTriviaIndex, setCurrentTriviaIndex] = useState(0);

  const miniTrivias = [
    {
      question: '¿A partir de los 50 o 60 años el deseo sexual y el placer desaparecen?',
      isTruth: false,
      mythTitle: '¡Falso! El placer no tiene fecha de caducidad',
      explanation:
        'La sensualidad, el afecto y la capacidad de gozar acompañan toda la vida. Con los años se disfruta con mayor serenidad y sin presiones reproductivas.',
    },
    {
      question: '¿El clítoris mide solo un centímetro y es solo la punta visible?',
      isTruth: false,
      mythTitle: '¡Falso! Mide entre 9 y 11 centímetros internamente',
      explanation:
        'Lo que vemos externamente es solo el glande (10%). Por dentro tiene cuerpos cavernosos, bulbos y pilares con más de 10.000 terminaciones nerviosas.',
    },
    {
      question: '¿El consentimiento en una relación debe ser continuo, entusiasta y reversible?',
      isTruth: true,
      mythTitle: '¡Totalmente verdadero!',
      explanation:
        'Decir sí a una práctica no obliga a continuar si cambias de parecer. El consentimiento informado es la base de todo goce ético.',
    },
  ];

  const currentTrivia = miniTrivias[currentTriviaIndex];

  const handleNextTrivia = () => {
    setAnswered(null);
    setCurrentTriviaIndex((prev) => (prev + 1) % miniTrivias.length);
  };

  return (
    <div className="pt-24 pb-16 bg-[#FFFDF9]">
      {/* 1. COMPACT HERO SECTION */}
      <section className="pt-4 pb-12 sm:pt-8 sm:pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-5">
            {/* Safe Space Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FFF1F2] to-[#FCE7F3] border border-[#F472B6]/40 text-[#9D174D] text-xs font-black tracking-wide shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#E11D48]" />
              <span>¡Tu placer sexual importa! • Espacio seguro, confidencial e inclusivo</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#18181B] tracking-tight leading-[1.08]">
              ¡Salud, placer y{' '}
              <span className="bg-gradient-to-r from-[#FF5E8E] via-[#F43F5E] to-[#E11D48] bg-clip-text text-transparent underline decoration-[#F472B6]/40 decoration-wavy">
                goce sexual!
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl font-extrabold text-[#BE185D] leading-snug">
              ¿Cómo (des)aprender para disfrutar? ¡Acá te lo enseñamos!
            </p>

            <p className="text-sm sm:text-base text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
              Unidad de atención integral a la sexualidad desde Colombia para el mundo.
              Cursos formativos, terapia clínica individual y de pareja, labor social y divulgación en artes eróticas.
            </p>

            {/* Direct Quick Landing Buttons */}
            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={onNavigateToEducacion}
                className="px-6 py-3.5 rounded-2xl bg-[#BE185D] hover:bg-[#9D174D] text-white font-black text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95"
              >
                <BookOpen className="w-4 h-4" />
                <span>Página de Educación</span>
              </button>

              <button
                onClick={onNavigateToTerapias}
                className="px-6 py-3.5 rounded-2xl bg-white hover:bg-[#FFF1F2] border-2 border-[#BE185D] text-[#BE185D] font-black text-xs sm:text-sm shadow-xs hover:shadow-md transition-all flex items-center gap-2 active:scale-95"
              >
                <Calendar className="w-4 h-4 text-[#BE185D]" />
                <span>Página de Atención Terapéutica</span>
              </button>

              <button
                onClick={onNavigateToGaleria}
                className="px-6 py-3.5 rounded-2xl bg-[#F3E8FF] hover:bg-[#E9D5FF] border border-[#D8B4FE] text-[#7E22CE] font-black text-xs sm:text-sm shadow-xs hover:shadow-md transition-all flex items-center gap-2 active:scale-95"
              >
                <Palette className="w-4 h-4 text-[#7E22CE]" />
                <span>Página de Galería & 3D</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 3 CORE DEDICATED LANDING PAGES (PORTALES PRINCIPALES) */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-black text-[#E11D48] tracking-widest uppercase">
              Nuestras 3 Áreas Principales
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#18181B] tracking-tight">
              Explora cada área en su propia página dedicada
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7280]">
              Haz clic en cualquiera de las tarjetas para acceder a su landing page con toda la información, herramientas y opciones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* PORTAL 1: EDUCACIÓN */}
            <div
              onClick={onNavigateToEducacion}
              className="bg-white rounded-3xl border-2 border-[#FCE7F3] hover:border-[#BE185D] p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#FFF1F2] rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFF1F2] text-[#BE185D] flex items-center justify-center shadow-2xs group-hover:bg-[#BE185D] group-hover:text-white transition-colors">
                    <BookOpen className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#BE185D] bg-[#FFF1F2] px-3 py-1 rounded-full">
                    Landing Page
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-[#18181B] group-hover:text-[#BE185D] transition-colors leading-tight">
                    Educación Sexoafectiva
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                    Cursos virtuales, talleres de anatomía del placer, juguetes, BDSM consensuado y educación menstrual sin tabúes.
                  </p>
                </div>

                <ul className="text-xs text-[#6B7280] space-y-2 pt-2 border-t border-gray-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>Catálogo completo de +12 cursos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>Acceso 100% online y a tu ritmo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>Certificados y material descargable</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 relative z-10">
                <button
                  type="button"
                  className="w-full py-3 px-4 rounded-xl bg-[#FFF1F2] group-hover:bg-[#BE185D] text-[#BE185D] group-hover:text-white font-black text-xs transition-colors flex items-center justify-center gap-2 shadow-2xs"
                >
                  <span>Ver página de Educación</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* PORTAL 2: ATENCIÓN TERAPÉUTICA */}
            <div
              onClick={onNavigateToTerapias}
              className="bg-white rounded-3xl border-2 border-[#FCE7F3] hover:border-[#E11D48] p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#FFF1F2] rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFF1F2] text-[#E11D48] flex items-center justify-center shadow-2xs group-hover:bg-[#E11D48] group-hover:text-white transition-colors">
                    <Calendar className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#E11D48] bg-[#FFF1F2] px-3 py-1 rounded-full">
                    Landing Page
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-[#18181B] group-hover:text-[#E11D48] transition-colors leading-tight">
                    Atención Terapéutica
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                    Consulta psicológica y sexológica individual o en pareja. Acompañamiento en deseo, disfunciones, dolor y afectividad.
                  </p>
                </div>

                <ul className="text-xs text-[#6B7280] space-y-2 pt-2 border-t border-gray-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>Equipo clínico de especialistas certificadas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>Modalidad virtual o presencial</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>100% Confidencial y seguro</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 relative z-10">
                <button
                  type="button"
                  className="w-full py-3 px-4 rounded-xl bg-[#FFF1F2] group-hover:bg-[#E11D48] text-[#E11D48] group-hover:text-white font-black text-xs transition-colors flex items-center justify-center gap-2 shadow-2xs"
                >
                  <span>Ver página de Terapias</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* PORTAL 3: GALERÍA */}
            <div
              onClick={onNavigateToGaleria}
              className="bg-white rounded-3xl border-2 border-[#FCE7F3] hover:border-[#7E22CE] p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#FAF5FF] rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#F3E8FF] text-[#7E22CE] flex items-center justify-center shadow-2xs group-hover:bg-[#7E22CE] group-hover:text-white transition-colors">
                    <Palette className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#7E22CE] bg-[#F3E8FF] px-3 py-1 rounded-full">
                    Landing Page
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-[#18181B] group-hover:text-[#7E22CE] transition-colors leading-tight">
                    Galería & Clítoris 3D
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                    Visor anatómico interactivo tridimensional, exposiciones de arte erótico, fotografía sensible y convocatoria a artistas.
                  </p>
                </div>

                <ul className="text-xs text-[#6B7280] space-y-2 pt-2 border-t border-gray-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>Visor 3D con puntos anatómicos interactivos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>Colección de ilustración y fotografía erótica</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>Espacio libre de censura moral</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 relative z-10">
                <button
                  type="button"
                  className="w-full py-3 px-4 rounded-xl bg-[#F3E8FF] group-hover:bg-[#7E22CE] text-[#7E22CE] group-hover:text-white font-black text-xs transition-colors flex items-center justify-center gap-2 shadow-2xs"
                >
                  <span>Ver página de Galería</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MINI INTERACTIVE WISDOM TEASER (¿MITO O VERDAD?) */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#FFF5F8] via-white to-[#FFF1F2] rounded-3xl p-6 sm:p-8 border border-[#FCE7F3] shadow-xs">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
              <span className="text-xs font-black text-[#BE185D] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#E11D48]" />
                <span>Trivia Rápida: ¿Mito o Verdad?</span>
              </span>
              <span className="text-xs font-bold text-[#6B7280]">
                Pregunta {currentTriviaIndex + 1} de {miniTrivias.length}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-[#18181B] mb-5">
              "{currentTrivia.question}"
            </h3>

            {answered === null ? (
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setAnswered(true)}
                  className="flex-1 min-w-[120px] py-3 px-6 rounded-2xl bg-white hover:bg-emerald-50 border-2 border-emerald-500 text-emerald-700 font-black text-sm shadow-2xs transition-all active:scale-95"
                >
                  Es Verdad ✅
                </button>
                <button
                  onClick={() => setAnswered(false)}
                  className="flex-1 min-w-[120px] py-3 px-6 rounded-2xl bg-white hover:bg-rose-50 border-2 border-rose-500 text-rose-700 font-black text-sm shadow-2xs transition-all active:scale-95"
                >
                  Es Mito ❌
                </button>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-white border border-[#FCE7F3] space-y-3 animate-in fade-in duration-200">
                <div className="flex items-center gap-2">
                  {answered === currentTrivia.isTruth ? (
                    <div className="flex items-center gap-1.5 text-emerald-600 font-black text-sm">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>¡Acertaste!</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-rose-600 font-black text-sm">
                      <XCircle className="w-5 h-5" />
                      <span>¡No exactamente!</span>
                    </div>
                  )}
                  <span className="text-xs font-bold text-[#18181B]">— {currentTrivia.mythTitle}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  {currentTrivia.explanation}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100 flex-wrap gap-2">
                  <button
                    onClick={handleNextTrivia}
                    className="text-xs font-bold text-[#BE185D] hover:underline flex items-center gap-1"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Siguiente pregunta</span>
                  </button>

                  <button
                    onClick={onNavigateToEducacion}
                    className="text-xs font-bold text-[#E11D48] hover:underline"
                  >
                    Aprende más en nuestros cursos →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. COMPACT LABOR SOCIAL CALLOUT RIBBON */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#18181B] via-[#27272A] to-[#18181B] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E11D48]/30 text-[#FDA4AF] text-xs font-bold">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>Compromiso Social</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black">
                Educación sexual para comunidades con menos recursos
              </h3>
              <p className="text-xs sm:text-sm text-[#D4D4D8] max-w-xl">
                Llevamos talleres gratuitos, kits de higiene menstrual y atención terapéutica comunitaria a zonas vulnerables.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onNavigateToLaborSocial}
                className="px-5 py-2.5 rounded-xl bg-white hover:bg-gray-100 text-[#18181B] font-black text-xs transition-colors"
              >
                Conocer nuestra labor
              </button>

              <button
                onClick={onOpenVolunteer}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF5E8E] to-[#E11D48] hover:from-[#F43F5E] hover:to-[#BE185D] text-white font-black text-xs transition-all shadow-xs"
              >
                ¡Vincúlate como voluntari@!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TRUST PILLARS BAR */}
      <section className="py-8 border-t border-[#FCE7F3] mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-white border border-[#FCE7F3]">
              <Lock className="w-5 h-5 text-[#BE185D] mx-auto mb-1.5" />
              <div className="text-xs font-bold text-[#18181B]">100% Confidencial</div>
              <div className="text-[11px] text-[#6B7280]">Secreto profesional garantizado</div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#FCE7F3]">
              <Award className="w-5 h-5 text-[#BE185D] mx-auto mb-1.5" />
              <div className="text-xs font-bold text-[#18181B]">Rigor Científico</div>
              <div className="text-[11px] text-[#6B7280]">Sexólogas y psicólogas tituladas</div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#FCE7F3]">
              <Globe className="w-5 h-5 text-[#BE185D] mx-auto mb-1.5" />
              <div className="text-xs font-bold text-[#18181B]">Alcance Global</div>
              <div className="text-[11px] text-[#6B7280]">Atención online en cualquier país</div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#FCE7F3]">
              <Heart className="w-5 h-5 text-[#BE185D] mx-auto mb-1.5" />
              <div className="text-xs font-bold text-[#18181B]">Cero Juicios</div>
              <div className="text-[11px] text-[#6B7280]">Enfoque afirmativo y libre de culpas</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
