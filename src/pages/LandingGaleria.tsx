import React, { useState } from 'react';
import {
  ArrowLeft,
  Palette,
  Sparkles,
  Eye,
  Layers,
  Heart,
  BookOpen,
  Calendar,
  Share2,
  ZoomIn,
  MessageCircle,
  CheckCircle2,
  ShieldCheck,
  Flame,
} from 'lucide-react';

interface LandingGaleriaProps {
  onBackToHome: () => void;
  onNavigateToEducacion: () => void;
  onNavigateToTerapias: () => void;
}

export const LandingGaleria: React.FC<LandingGaleriaProps> = ({
  onBackToHome,
  onNavigateToEducacion,
  onNavigateToTerapias,
}) => {
  const [activePart, setActivePart] = useState<string>('glande');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [activeArtwork, setActiveArtwork] = useState<any | null>(null);

  const clitorisParts: Record<
    string,
    { name: string; tag: string; description: string; details: string; highlight: string }
  > = {
    glande: {
      name: 'Glande del clítoris',
      tag: 'Parte visible externa',
      description:
        'La única punta visible del clítoris, protegida por el capuchón o prepucio.',
      details:
        'Alberga más de 10.000 terminaciones nerviosas sensoriales de altísima densidad. Su tamaño externo es solo el 10% de toda la estructura.',
      highlight: 'Punto de partida del reflejo orgásmico',
    },
    prepucio: {
      name: 'Capuchón o prepucio',
      tag: 'Protección y deslizamiento',
      description:
        'Pliegue móvil de piel que recubre y resguarda el glande de la sobreestimulación.',
      details:
        'Se retrae naturalmente durante la excitación vascular o al deslizar suavemente los dedos o juguetes lubricados.',
      highlight: 'Protección natural y modulación sensorial',
    },
    cuerpos: {
      name: 'Cuerpos cavernosos',
      tag: 'Estructura eréctil interna',
      description:
        'Dos columnas eréctiles que se bifurcan hacia los lados como alas o una horquilla.',
      details:
        'Durante la excitación se llenan de sangre oxigenada, aumentando su volumen, firmeza y sensibilidad en toda la pelvis.',
      highlight: 'Erección profunda interna',
    },
    bulbos: {
      name: 'Bulbos del vestíbulo',
      tag: 'Almohadillas eréctiles vaginales',
      description:
        'Dos masas de tejido esponjoso situadas a ambos lados del orificio vaginal.',
      details:
        'Al hincharse abrazan internamente el conducto vaginal y potencian la estimulación compartida durante la penetración o uso de vibradores.',
      highlight: 'Conexión entre estimulación clitoridiana y vaginal',
    },
    pilares: {
      name: 'Pilares o crura',
      tag: 'Anclaje óseo pélvico',
      description:
        'Raíces que abrazan las ramas del hueso púbico y descienden hasta 9-11 cm.',
      details:
        'Transmiten las contracciones rítmicas del suelo pélvico durante el clímax a toda la zona coxígea y glútea.',
      highlight: 'Ondas expansivas del orgasmo',
    },
  };

  const artworks = [
    {
      id: 1,
      title: 'Geometría del Deseo',
      artist: 'Elena Morales',
      category: 'Ilustración Corporal',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=800',
      description: 'Una reinterpretación en acuarela y tinta botánica de la ramificación pélvica femenina, honrando el flujo sanguíneo y el goce.',
    },
    {
      id: 2,
      title: 'Abrazo de la Sombra y la Luz',
      artist: 'Mateo & Sofía',
      category: 'Fotografía Sensual',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800',
      description: 'Estudio claroscuro de dos pieles que se rozan con pausa, capturando la anticipación táctil y el consentimiento íntimo.',
    },
    {
      id: 3,
      title: 'Monumento a la Vulva',
      artist: 'Camila Bernal',
      category: 'Escultura & Texturas',
      image: 'https://images.unsplash.com/photo-1578925518470-4def7a0f08bb?auto=format&fit=crop&q=80&w=800',
      description: 'Pieza en cerámica esmaltada que desafía los cánones estéticos industriales, celebrando la diversidad de formas y asimetrías.',
    },
    {
      id: 4,
      title: 'Cartografía del Éxtasis',
      artist: 'Colectivo Afrodita',
      category: 'Ilustración Corporal',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800',
      description: 'Mapa poético de terminaciones nerviosas que conectan la mente, la piel, los pezones y los genitales.',
    },
    {
      id: 5,
      title: 'Resonancia del Agua',
      artist: 'Lucía Santos',
      category: 'Fotografía Sensual',
      image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800',
      description: 'Gotas de lubricación natural y agua termal sobre cuerpos relajados, inspirando una sensualidad libre de afanes.',
    },
    {
      id: 6,
      title: 'Poema en Barro',
      artist: 'Darío Restrepo',
      category: 'Escultura & Texturas',
      image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=800',
      description: 'Masa de gres cocida a alta temperatura con hendiduras suaves que invitan al tacto y a la contemplación táctil.',
    },
  ];

  const categories = ['Todas', 'Ilustración Corporal', 'Fotografía Sensual', 'Escultura & Texturas'];

  const filteredArtworks = artworks.filter(
    (art) => selectedCategory === 'Todas' || art.category === selectedCategory
  );

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
            <span className="text-[#BE185D] font-bold">Galería & Artes Eróticas</span>
          </div>
        </div>
      </div>

      {/* Landing Page Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#FFF1F2] via-[#FCE7F3]/70 to-[#FFFDF9] border border-[#FCE7F3] p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#F472B6]/40 text-[#BE185D] text-xs font-black uppercase tracking-wider shadow-2xs">
              <Palette className="w-3.5 h-3.5 text-[#E11D48]" />
              <span>Landing Page • Galería Sexsapiens</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#18181B] tracking-tight leading-[1.1]">
              Galería de{' '}
              <span className="bg-gradient-to-r from-[#FF5E8E] via-[#F43F5E] to-[#E11D48] bg-clip-text text-transparent">
                artes eróticas y divulgación anatómica
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
              El arte, la ciencia y el erotismo consciente se unen para desmitificar los cuerpos.
              Explora nuestro modelo anatómico tridimensional interactivo del clítoris y descubre obras artísticas que celebran la belleza del goce.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#visor-3d"
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#FF5E8E] to-[#E11D48] text-white font-black text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                <span>Explorar Clítoris 3D</span>
              </a>

              <a
                href="#coleccion-obras"
                className="px-6 py-3 rounded-2xl bg-white border border-[#FCE7F3] text-[#BE185D] font-bold text-sm hover:bg-[#FFF1F2] transition-colors"
              >
                <span>Ver exposición de arte</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Interactive 3D Clitoris Anatomy Viewer */}
      <div id="visor-3d" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 scroll-mt-28">
        <div className="bg-white rounded-3xl border border-[#FCE7F3] p-6 sm:p-10 shadow-xs">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-bold text-[#E11D48] tracking-wider uppercase">
              Tecnología de divulgación interactiva
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#18181B]">
              Modelo Anatómico Interactivo del Clítoris
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7280]">
              Haz clic en cada parte anatómica o en los botones para descubrir la verdadera dimensión de este órgano exclusivamente dedicado al placer humano.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Anatomical Canvas */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#FFF5F8] to-[#FFFDF9] rounded-3xl border border-[#FCE7F3] relative min-h-[380px]">
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full border border-[#FCE7F3] text-[11px] font-bold text-[#BE185D] flex items-center gap-1 shadow-2xs">
                <Sparkles className="w-3 h-3 text-[#E11D48]" />
                <span>Vista tridimensional interactiva</span>
              </div>

              {/* Anatomical SVG rendering */}
              <svg
                viewBox="0 0 400 320"
                className="w-full max-w-[340px] drop-shadow-md select-none"
              >
                {/* Pilares / Crura */}
                <path
                  d="M 200,90 Q 270,120 330,230 Q 300,250 250,170 Z"
                  fill={activePart === 'pilares' ? '#E11D48' : '#FDA4AF'}
                  stroke="#E11D48"
                  strokeWidth="2"
                  className="cursor-pointer transition-colors duration-200"
                  onClick={() => setActivePart('pilares')}
                />
                <path
                  d="M 200,90 Q 130,120 70,230 Q 100,250 150,170 Z"
                  fill={activePart === 'pilares' ? '#E11D48' : '#FDA4AF'}
                  stroke="#E11D48"
                  strokeWidth="2"
                  className="cursor-pointer transition-colors duration-200"
                  onClick={() => setActivePart('pilares')}
                />

                {/* Bulbos del vestíbulo */}
                <ellipse
                  cx="155"
                  cy="195"
                  rx="35"
                  ry="55"
                  transform="rotate(-20 155 195)"
                  fill={activePart === 'bulbos' ? '#9D174D' : '#F472B6'}
                  stroke="#BE185D"
                  strokeWidth="2"
                  className="cursor-pointer transition-colors duration-200"
                  onClick={() => setActivePart('bulbos')}
                />
                <ellipse
                  cx="245"
                  cy="195"
                  rx="35"
                  ry="55"
                  transform="rotate(20 245 195)"
                  fill={activePart === 'bulbos' ? '#9D174D' : '#F472B6'}
                  stroke="#BE185D"
                  strokeWidth="2"
                  className="cursor-pointer transition-colors duration-200"
                  onClick={() => setActivePart('bulbos')}
                />

                {/* Cuerpos cavernosos */}
                <path
                  d="M 200,60 Q 230,80 250,140 Q 225,145 200,105 Q 175,145 150,140 Q 170,80 200,60 Z"
                  fill={activePart === 'cuerpos' ? '#BE185D' : '#FB7185'}
                  stroke="#9F1239"
                  strokeWidth="2"
                  className="cursor-pointer transition-colors duration-200"
                  onClick={() => setActivePart('cuerpos')}
                />

                {/* Prepucio / Capuchón */}
                <ellipse
                  cx="200"
                  cy="45"
                  rx="26"
                  ry="24"
                  fill={activePart === 'prepucio' ? '#F43F5E' : '#FECDD3'}
                  stroke="#E11D48"
                  strokeWidth="2"
                  className="cursor-pointer transition-colors duration-200"
                  onClick={() => setActivePart('prepucio')}
                />

                {/* Glande */}
                <circle
                  cx="200"
                  cy="48"
                  r="14"
                  fill={activePart === 'glande' ? '#9F1239' : '#E11D48'}
                  stroke="#FFFFFF"
                  strokeWidth="2.5"
                  className="cursor-pointer transition-colors duration-200 animate-pulse"
                  onClick={() => setActivePart('glande')}
                />
              </svg>

              {/* Selector buttons */}
              <div className="flex flex-wrap gap-1.5 mt-4 justify-center">
                {Object.keys(clitorisParts).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActivePart(key)}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                      activePart === key
                        ? 'bg-[#BE185D] text-white shadow-xs'
                        : 'bg-white text-[#4B5563] border border-gray-200 hover:border-[#BE185D]'
                    }`}
                  >
                    {clitorisParts[key].name}
                  </button>
                ))}
              </div>
            </div>

            {/* Explanation Detail Card */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF1F2] text-[#E11D48] text-xs font-bold">
                <span>{clitorisParts[activePart].tag}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#18181B]">
                {clitorisParts[activePart].name}
              </h3>

              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                {clitorisParts[activePart].description}
              </p>

              <div className="p-4 rounded-2xl bg-[#FFF5F8] border border-[#FCE7F3] space-y-1.5">
                <span className="text-xs font-bold text-[#BE185D] uppercase tracking-wide block">
                  Función clínica & sensitiva:
                </span>
                <p className="text-xs sm:text-sm text-[#18181B] font-medium leading-relaxed">
                  {clitorisParts[activePart].details}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-[#E11D48]">
                <CheckCircle2 className="w-4 h-4" />
                <span>{clitorisParts[activePart].highlight}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Art Collection Section */}
      <div id="coleccion-obras" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 scroll-mt-28">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#18181B]">
              Colección Permanente de Obras Eróticas
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7280]">
              Obras seleccionadas de artistas visuales que exploran el cuerpo, el afecto y la sensualidad.
            </p>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#BE185D] text-white shadow-xs'
                    : 'bg-white text-[#4B5563] border border-gray-200 hover:bg-[#FFF1F2]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Artwork Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtworks.map((art) => (
            <div
              key={art.id}
              onClick={() => setActiveArtwork(art)}
              className="bg-white rounded-3xl border border-[#FCE7F3] overflow-hidden shadow-xs hover:shadow-md transition-all group cursor-pointer hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#18181B]/80 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {art.category}
                </span>
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-1.5 font-bold text-xs">
                  <ZoomIn className="w-4 h-4" />
                  <span>Ver detalle</span>
                </div>
              </div>

              <div className="p-5 space-y-1.5">
                <h3 className="font-bold text-[#18181B] text-base group-hover:text-[#BE185D] transition-colors">
                  {art.title}
                </h3>
                <p className="text-xs text-[#BE185D] font-medium">Por {art.artist}</p>
                <p className="text-xs text-[#6B7280] line-clamp-2 pt-1">{art.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call for Artists & Workshops */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-[#FFF1F2] via-white to-[#FFF1F2] rounded-3xl p-6 sm:p-10 border border-[#FCE7F3] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-black text-[#E11D48] uppercase tracking-wider">
              Convocatoria abierta
            </span>
            <h3 className="text-2xl font-black text-[#18181B]">
              ¿Creas arte sobre sexualidad, cuerpos o afecto?
            </h3>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              Exhibe tus ilustraciones, fotografías o esculturas en la galería virtual y presencial de Sexsapiens. Apoyamos a artistas emergentes de toda Iberoamérica.
            </p>
          </div>

          <a
            href="mailto:arte@sexsapiens.org?subject=Propuesta%20Artística%20para%20Galería"
            className="px-6 py-3.5 rounded-2xl bg-[#BE185D] hover:bg-[#9D174D] text-white font-black text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 shrink-0 active:scale-95"
          >
            <Share2 className="w-4 h-4" />
            <span>Enviar mi propuesta artística</span>
          </a>
        </div>
      </div>

      {/* Cross-navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#FCE7F3] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold text-[#BE185D] uppercase tracking-wider">
              Continúa tu recorrido en Sexsapiens
            </span>
            <h3 className="text-xl font-black text-[#18181B]">
              Cursos formativos y consulta terapéutica
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

      {/* Artwork Modal */}
      {activeArtwork && (
        <div
          onClick={() => setActiveArtwork(null)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gray-100 animate-in fade-in zoom-in-95 duration-150"
          >
            <div className="relative h-80 sm:h-96 bg-black">
              <img
                src={activeArtwork.image}
                alt={activeArtwork.title}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setActiveArtwork(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center font-bold text-sm hover:bg-black transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#BE185D] uppercase">
                  {activeArtwork.category}
                </span>
                <span className="text-xs text-[#6B7280]">Por {activeArtwork.artist}</span>
              </div>
              <h3 className="text-2xl font-black text-[#18181B]">{activeArtwork.title}</h3>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed pt-1">
                {activeArtwork.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
