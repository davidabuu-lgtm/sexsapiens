import React, { useState } from 'react';
import {
  ArrowLeft,
  BookOpen,
  Sparkles,
  Search,
  CheckCircle2,
  Calendar,
  Users,
  ShieldCheck,
  Flame,
  Star,
  MessageCircle,
  HelpCircle,
  Clock,
  Award,
} from 'lucide-react';
import { Course } from '../types';
import { COURSES, COURSE_CATEGORIES } from '../data/coursesData';
import { CourseModal } from '../components/CourseModal';

interface LandingEducacionProps {
  onBackToHome: () => void;
  onNavigateToTerapias: () => void;
  onNavigateToGaleria: () => void;
  onOpenBooking: () => void;
}

export const LandingEducacion: React.FC<LandingEducacionProps> = ({
  onBackToHome,
  onNavigateToTerapias,
  onNavigateToGaleria,
  onOpenBooking,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);

  const filteredCourses = COURSES.filter((course) => {
    const matchesCategory =
      selectedCategory === 'Todos' || course.category === selectedCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            <span className="text-[#BE185D] font-bold">Educación Sexoafectiva</span>
          </div>
        </div>
      </div>

      {/* Landing Page Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#FFF1F2] via-[#FCE7F3]/70 to-[#FFFDF9] border border-[#FCE7F3] p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#F472B6]/40 text-[#BE185D] text-xs font-black uppercase tracking-wider shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#E11D48]" />
              <span>Landing Page • Escuela Sexsapiens</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#18181B] tracking-tight leading-[1.1]">
              Educación{' '}
              <span className="bg-gradient-to-r from-[#FF5E8E] via-[#F43F5E] to-[#E11D48] bg-clip-text text-transparent">
                sexoafectiva, menstrual y reproductiva
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
              Cursos virtuales, talleres vivenciales y recursos pedagógicos sin tabúes ni culpas.
              Aprende a tu propio ritmo con acompañamiento profesional, rigor científico y enfoque de derechos.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              <div className="bg-white/80 backdrop-blur-xs p-3 rounded-2xl border border-[#FCE7F3]">
                <span className="text-2xl font-black text-[#BE185D] block">+12</span>
                <span className="text-xs font-semibold text-[#6B7280]">Cursos disponibles</span>
              </div>
              <div className="bg-white/80 backdrop-blur-xs p-3 rounded-2xl border border-[#FCE7F3]">
                <span className="text-2xl font-black text-[#BE185D] block">100%</span>
                <span className="text-xs font-semibold text-[#6B7280]">Online y flexible</span>
              </div>
              <div className="bg-white/80 backdrop-blur-xs p-3 rounded-2xl border border-[#FCE7F3]">
                <span className="text-2xl font-black text-[#BE185D] block">+5.000</span>
                <span className="text-xs font-semibold text-[#6B7280]">Estudiantes felices</span>
              </div>
              <div className="bg-white/80 backdrop-blur-xs p-3 rounded-2xl border border-[#FCE7F3]">
                <span className="text-2xl font-black text-[#BE185D] block">Certificado</span>
                <span className="text-xs font-semibold text-[#6B7280]">De participación</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 User Pillars of Education */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-[#FCE7F3] shadow-xs hover:border-[#F472B6] transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#FFF1F2] text-[#E11D48] flex items-center justify-center font-black text-sm mb-3">
              01
            </div>
            <h3 className="font-bold text-[#18181B] text-base mb-1">El Placer como Derecho</h3>
            <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
              Desmitificamos el orgasmo y el deseo. Reconocemos la anatomía del placer en todos los cuerpos.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#FCE7F3] shadow-xs hover:border-[#F472B6] transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#FFF1F2] text-[#E11D48] flex items-center justify-center font-black text-sm mb-3">
              02
            </div>
            <h3 className="font-bold text-[#18181B] text-base mb-1">Afecto & Consentimiento</h3>
            <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
              Habilidades de comunicación asertiva, acuerdos en pareja y relaciones libres de violencia.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#FCE7F3] shadow-xs hover:border-[#F472B6] transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#FFF1F2] text-[#E11D48] flex items-center justify-center font-black text-sm mb-3">
              03
            </div>
            <h3 className="font-bold text-[#18181B] text-base mb-1">Salud Integral y Ciclos</h3>
            <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
              Educación menstrual, fertilidad consciente y cuidado psicocorporal sin culpas.
            </p>
          </div>
        </div>
      </div>

      {/* Courses Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-[#FCE7F3] shadow-xs">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {COURSE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#BE185D] text-white shadow-xs'
                    : 'bg-[#F9FAFB] text-[#4B5563] hover:bg-[#F3F4F6]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
            <input
              type="text"
              placeholder="Buscar curso o tema..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#F9FAFB] border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:border-[#BE185D]"
            />
          </div>
        </div>
      </div>

      {/* Course Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl border border-[#FCE7F3] p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Badge and Category */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="bg-[#FFF1F2] text-[#BE185D] text-[11px] font-bold px-2.5 py-1 rounded-full border border-[#FCE7F3]">
                    {course.category}
                  </span>
                  <span className="bg-[#ECFDF5] text-[#059669] text-[11px] font-black px-2.5 py-1 rounded-full">
                    {course.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="font-bold text-[#18181B] text-xl leading-snug group-hover:text-[#BE185D] transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed line-clamp-3">
                    {course.description}
                  </p>
                </div>

                {/* Highlight banner */}
                <div className="p-3 rounded-xl bg-[#FFF5F8] border border-[#FCE7F3] text-xs font-semibold text-[#BE185D]">
                  ✨ {course.highlight}
                </div>
              </div>

              {/* Bottom Meta & CTA */}
              <div className="pt-4 mt-4 border-t border-[#FCE7F3] space-y-3">
                <div className="flex items-center justify-between text-xs text-[#6B7280]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#BE185D]" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-[#BE185D]" />
                    {course.lessonsCount} lecciones
                  </span>
                  <span className="flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-[#10B981]" />
                    {course.level}
                  </span>
                </div>

                <button
                  onClick={() => setActiveCourse(course)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#FFF1F2] hover:bg-[#BE185D] text-[#BE185D] hover:text-white font-black text-xs transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Ver temario e inscribirme</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Student Reviews & Trust */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-[#FFF1F2] via-white to-[#FFF1F2] rounded-3xl p-6 sm:p-10 border border-[#FCE7F3]">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#18181B]">
              Lo que dicen quienes han aprendido con Sexsapiens
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7280]">
              Experiencias reales de personas que han transformado su relación con el placer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-white rounded-2xl border border-[#FCE7F3] shadow-2xs space-y-3">
              <div className="flex text-amber-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[#4B5563] italic leading-relaxed">
                "Hice el taller de anatomía del clítoris y punto G. Fue revelador. Nunca en la escuela me enseñaron la sexualidad desde el goce y el afecto."
              </p>
              <div className="text-xs font-bold text-[#18181B]">Camila R., 28 años • Bogotá</div>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-[#FCE7F3] shadow-2xs space-y-3">
              <div className="flex text-amber-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[#4B5563] italic leading-relaxed">
                "El curso de BDSM y acuerdos seguros nos salvó como pareja. Aprendimos a comunicar deseos sin vergüenza y con cuidado mutuo."
              </p>
              <div className="text-xs font-bold text-[#18181B]">Andrés & Laura • Medellín</div>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-[#FCE7F3] shadow-2xs space-y-3">
              <div className="flex text-amber-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[#4B5563] italic leading-relaxed">
                "La educación menstrual consciente me reconcilió con mi ciclo. Todo explicado con cercanía, ciencia y sin prejuicios."
              </p>
              <div className="text-xs font-bold text-[#18181B]">Valeria M. • Cali</div>
            </div>
          </div>
        </div>
      </div>

      {/* Cross-navigation to Other Landing Pages */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#FCE7F3] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold text-[#BE185D] uppercase tracking-wider">
              ¿Buscas acompañamiento clínico o exploración artística?
            </span>
            <h3 className="text-xl font-black text-[#18181B]">
              Conoce nuestras otras áreas dedicadas
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onNavigateToTerapias}
              className="px-5 py-2.5 rounded-full bg-[#FFF1F2] hover:bg-[#FCE7F3] text-[#BE185D] font-bold text-xs transition-all flex items-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Ver Atención Terapéutica →</span>
            </button>

            <button
              onClick={onNavigateToGaleria}
              className="px-5 py-2.5 rounded-full bg-[#F3E8FF] hover:bg-[#E9D5FF] text-[#7E22CE] font-bold text-xs transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>Ver Galería y Clítoris 3D →</span>
            </button>
          </div>
        </div>
      </div>

      {/* Active Course Modal */}
      {activeCourse && (
        <CourseModal
          course={activeCourse}
          onClose={() => setActiveCourse(null)}
        />
      )}
    </div>
  );
};
