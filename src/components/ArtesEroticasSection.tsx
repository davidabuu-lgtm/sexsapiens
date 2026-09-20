import React, { useState } from 'react';
import {
  Palette,
  Sparkles,
  Eye,
  Layers,
  Star,
  MessageCircle,
  Heart,
  BookOpen,
  Users,
  CheckCircle2,
  Smile,
} from 'lucide-react';

export const ArtesEroticasSection: React.FC = () => {
  const [activePart, setActivePart] = useState<string>('glande');

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
      tag: 'Raíces posteriores',
      description:
        'Extensiones de hasta 9-11 cm que se anclan a los huesos de la pelvis e isquion.',
      details:
        'Transmiten vibraciones y contracciones musculares rítmicas hacia toda la zona pélvica durante el clímax.',
      highlight: 'Anclaje pélvico y resonancia muscular',
    },
  };

  const workshops = [
    {
      title: 'Taller de Escultura Textil: Anatomías Libres',
      category: 'Pedagógico & Creativo',
      description:
        'Creación manual de modelos 3D en tela, fieltro y arcilla para entender la vulva sin censuras ni tabúes.',
      tag: '¡Cursos y talleres!',
      color: 'from-[#FF5E8E] to-[#F43F5E]',
    },
    {
      title: 'Conversatorio: Desaprender el Guion Pornográfico',
      category: 'Conversatorios',
      description:
        'Espacio de diálogo para cuestionar la erotomanía hegemónica y reconectar con el deseo genuino, lento y recíproco.',
      tag: 'Actividad pedagógica',
      color: 'from-[#8B5CF6] to-[#6D28D9]',
    },
    {
      title: 'Laboratorio de Cartografía Sensorial y Erotismo',
      category: 'Artes Visuales & Tacto',
      description:
        'Mapeo corporal interactivo explorando zonas erógenas más allá de los genitales: piel, respiración y sonido.',
      tag: 'Desarrollo de proyectos',
      color: 'from-[#F97316] to-[#EA580C]',
    },
  ];

  const studentReviews = [
    {
      name: 'Valentina M. (26 años)',
      city: 'Medellín, Colombia',
      course: 'Placer, Anatomía & Clítoris 3D',
      quote:
        'Siempre creí que el clítoris era solo ese botoncito tímido. Ver el modelo 3D y aprender cómo funciona todo el tejido interno me quitó años de culpa y frustración con mi propio placer.',
      rating: 5,
    },
    {
      name: 'Camilo & Andrea (Pareja)',
      city: 'Bogotá, Colombia',
      course: 'Terapia y Comunicación en Pareja',
      quote:
        'Llegamos a Sexsapiens porque nos costaba hablar de fantasías y juguetes sin sentirnos incómodos. El enfoque cálido, juvenil y sin moralismos nos abrió una etapa de intimidad totalmente nueva.',
      rating: 5,
    },
    {
      name: 'Sam R. (31 años)',
      city: 'Santiago de Chile',
      course: 'Consentimiento & Deseo Compartido',
      quote:
        'Los cursos a mi propio ritmo fueron un bálsamo. Contenido científico súper claro, inclusivo con todas las identidades y con una estética que da gusto leer.',
      rating: 5,
    },
  ];

  return (
    <section id="artes-eroticas" className="py-20 bg-gradient-to-b from-[#FFFDF9] via-[#FFF1F2]/40 to-[#FFFDF9] border-t border-[#FCE7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: User's Exact Texts */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE7F3] text-[#BE185D] text-xs font-black uppercase tracking-wider">
            <Palette className="w-3.5 h-3.5" />
            <span>Cultura & Pedagogía Sensible</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#18181B] tracking-tight leading-tight">
            Divulgación en{' '}
            <span className="bg-gradient-to-r from-[#FF5E8E] via-[#F43F5E] to-[#E11D48] bg-clip-text text-transparent">
              artes eróticas
            </span>
          </h2>

          <p className="text-base sm:text-lg font-bold text-[#BE185D]">
            Desarrollo de proyectos con enfoque artístico y erótico.
          </p>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed font-normal">
            ¡Cursos, talleres, conversatorios y actividades pedagógicas! Acercamos el conocimiento anatómico y relacional a través del arte, el diseño visual y la experiencia táctil.
          </p>
        </div>

        {/* Highlight Feature: Clítoris 3D Interactive Explorer */}
        <div
          id="clitoris-3d-explorer"
          className="mt-12 rounded-3xl bg-white border-2 border-[#FCE7F3] shadow-md p-6 sm:p-8 overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[#FCE7F3]">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-[#FF5E8E] to-[#E11D48] text-white">
                  Modelo Pedagógico
                </span>
                <span className="text-xs font-bold text-[#BE185D]">Sexsapiens Lab</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#18181B] mt-2">
                Clítoris 3D: Anatomía Completa del Goce
              </h3>
            </div>
            <span className="text-xs text-[#6B7280]">
              Haz clic en cada parte para descubrir su función anatómica
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
            {/* Visual Anatomical Diagram (Stylized SVG / 3D Wings Representation) */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-[#FFF5F7] to-[#FCE7F3] border border-[#FBCFE8]">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
                {/* SVG Representation of the full Clitoris organ with interactive targets */}
                <svg
                  viewBox="0 0 320 320"
                  className="w-full h-full drop-shadow-md select-none"
                >
                  {/* Background Aura */}
                  <circle cx="160" cy="160" r="140" fill="#FFF" fillOpacity="0.4" />

                  {/* Pilares / Crura (Lower lateral extensions) */}
                  <path
                    d="M100 130 Q60 210 50 260 Q70 270 110 210 Q140 170 145 135 Z"
                    fill={activePart === 'pilares' ? '#E11D48' : '#FDA4AF'}
                    className="cursor-pointer transition-colors duration-200 hover:fill-[#FB7185]"
                    onClick={() => setActivePart('pilares')}
                  />
                  <path
                    d="M220 130 Q260 210 270 260 Q250 270 210 210 Q180 170 175 135 Z"
                    fill={activePart === 'pilares' ? '#E11D48' : '#FDA4AF'}
                    className="cursor-pointer transition-colors duration-200 hover:fill-[#FB7185]"
                    onClick={() => setActivePart('pilares')}
                  />

                  {/* Bulbos vestibulares (Inner spongy bulb structures) */}
                  <ellipse
                    cx="125"
                    cy="185"
                    rx="24"
                    ry="55"
                    transform="rotate(-15 125 185)"
                    fill={activePart === 'bulbos' ? '#C026D3' : '#F0ABFC'}
                    className="cursor-pointer transition-colors duration-200 hover:fill-[#E879F9]"
                    onClick={() => setActivePart('bulbos')}
                  />
                  <ellipse
                    cx="195"
                    cy="185"
                    rx="24"
                    ry="55"
                    transform="rotate(15 195 185)"
                    fill={activePart === 'bulbos' ? '#C026D3' : '#F0ABFC'}
                    className="cursor-pointer transition-colors duration-200 hover:fill-[#E879F9]"
                    onClick={() => setActivePart('bulbos')}
                  />

                  {/* Cuerpos Cavernosos (Main arching shafts) */}
                  <path
                    d="M160 85 C140 85 110 95 95 135 C115 135 140 115 160 110 C180 115 205 135 225 135 C210 95 180 85 160 85 Z"
                    fill={activePart === 'cuerpos' ? '#9333EA' : '#D8B4FE'}
                    className="cursor-pointer transition-colors duration-200 hover:fill-[#C084FC]"
                    onClick={() => setActivePart('cuerpos')}
                  />

                  {/* Prepucio / Capuchón (Hood) */}
                  <ellipse
                    cx="160"
                    cy="65"
                    rx="22"
                    ry="18"
                    fill={activePart === 'prepucio' ? '#F97316' : '#FED7AA'}
                    className="cursor-pointer transition-colors duration-200 hover:fill-[#FB923C]"
                    onClick={() => setActivePart('prepucio')}
                  />

                  {/* Glande (Glans clitoridis tip) */}
                  <circle
                    cx="160"
                    cy="72"
                    r="15"
                    fill={activePart === 'glande' ? '#E11D48' : '#F43F5E'}
                    stroke="#FFF"
                    strokeWidth="3"
                    className="cursor-pointer transition-colors duration-200 hover:scale-105"
                    onClick={() => setActivePart('glande')}
                  />

                  {/* Pulsing indicator on active part */}
                  <circle cx="160" cy="72" r="22" fill="none" stroke="#E11D48" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" className="animate-spin" />
                </svg>
              </div>

              {/* Selector buttons */}
              <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                {Object.keys(clitorisParts).map((partKey) => (
                  <button
                    key={partKey}
                    onClick={() => setActivePart(partKey)}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                      activePart === partKey
                        ? 'bg-[#BE185D] text-white shadow-xs'
                        : 'bg-white text-[#4B5563] hover:bg-[#FFF1F2] border border-[#FCE7F3]'
                    }`}
                  >
                    {clitorisParts[partKey].name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Part Description & Pedagogical Explanation */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF1F2] text-[#BE185D] text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{clitorisParts[activePart].tag}</span>
              </div>

              <h4 className="text-2xl font-black text-[#18181B]">
                {clitorisParts[activePart].name}
              </h4>

              <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
                {clitorisParts[activePart].description}
              </p>

              <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#FCE7F3] space-y-2">
                <span className="text-xs font-black uppercase tracking-wider text-[#9D174D] block">
                  Dato anatómico clave
                </span>
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
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

        {/* Workshops and Pedagogical Projects Cards */}
        <div className="mt-14 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#BE185D] block">
                Actividades pedagógicas
              </span>
              <h3 className="text-2xl font-black text-[#18181B] mt-0.5">
                ¡Cursos, talleres, conversatorios y actividades pedagógicas!
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workshops.map((w, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border-2 border-[#FCE7F3] hover:border-[#F472B6] hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FFF1F2] text-[#BE185D] inline-block">
                    {w.tag}
                  </span>
                  <h4 className="text-lg font-black text-[#18181B] group-hover:text-[#BE185D] transition-colors leading-snug">
                    {w.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                    {w.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#FFF1F2] flex items-center justify-between text-xs font-bold text-[#BE185D]">
                  <span>{w.category}</span>
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User's Exact: "Comentarios acerca de nuestros cursos" Section */}
        <div id="comentarios-cursos" className="mt-16 pt-12 border-t border-[#FCE7F3] space-y-6">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCE7F3] text-[#BE185D] text-xs font-black uppercase tracking-wider">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Experiencias Reales</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[#18181B]">
              Comentarios acerca de nuestros cursos
            </h3>

            <p className="text-base sm:text-lg font-medium text-[#4B5563]">
              Cursos sobre sexualidad, relaciones, cuerpo, placer, prevención y bienestar.
              Diseñados a tu propio ritmo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {studentReviews.map((rev, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border-2 border-[#FCE7F3] shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  {/* Stars */}
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {[...Array(rev.rating)].map((_, sIdx) => (
                      <Star key={sIdx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-[#374151] leading-relaxed italic">
                    “{rev.quote}”
                  </p>
                </div>

                <div className="pt-3 border-t border-[#FFF1F2]">
                  <span className="text-xs font-black text-[#18181B] block">
                    {rev.name}
                  </span>
                  <div className="flex items-center justify-between text-[11px] text-[#6B7280] mt-0.5">
                    <span>{rev.city}</span>
                    <span className="text-[#BE185D] font-semibold">{rev.course}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
