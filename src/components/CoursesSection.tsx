import React, { useState } from 'react';
import { Course } from '../types';
import { COURSES, COURSE_CATEGORIES } from '../data/coursesData';
import { CourseModal } from './CourseModal';
import { Search, Clock, BarChart, Sparkles, BookOpen } from 'lucide-react';

export const CoursesSection: React.FC = () => {
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
    <section id="educacion" className="py-20 bg-[#FFFDF9] border-t border-[#FCE7F3] scroll-mt-16">
      {/* Anchor alias for legacy links */}
      <div id="cursos" className="-mt-16 pt-16" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with User's Exact Texts */}
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE7F3] text-[#BE185D] text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Formación Integral & Cursos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#18181B] tracking-tight leading-tight">
            Educación{' '}
            <span className="bg-gradient-to-r from-[#FF5E8E] via-[#F43F5E] to-[#E11D48] bg-clip-text text-transparent">
              sexoafectiva, menstrual y reproductiva
            </span>
          </h2>

          {/* 3 User Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#FFF1F2] to-white border border-[#FCE7F3] shadow-2xs">
              <span className="text-xs font-extrabold text-[#E11D48] block">01. Placer</span>
              <p className="text-xs sm:text-sm font-bold text-[#1F2937] mt-1">
                Formación integral para el placer sexual.
              </p>
            </div>
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#FFF7ED] to-white border border-[#FFEDD5] shadow-2xs">
              <span className="text-xs font-extrabold text-[#EA580C] block">02. Salud</span>
              <p className="text-xs sm:text-sm font-bold text-[#1F2937] mt-1">
                Educación en salud sexual y reproductiva.
              </p>
            </div>
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#FAF5FF] to-white border border-[#F3E8FF] shadow-2xs">
              <span className="text-xs font-extrabold text-[#7C3AED] block">03. Liberación</span>
              <p className="text-xs sm:text-sm font-bold text-[#1F2937] mt-1">
                Formación para la liberación de estereotipos y violencias basadas en género.
              </p>
            </div>
          </div>

          {/* User's Exact Educational Narrative */}
          <div className="p-6 rounded-3xl bg-white border-2 border-[#FCE7F3] shadow-xs space-y-3 mt-4">
            <span className="text-xs font-black uppercase tracking-wider text-[#BE185D]">
              Educación
            </span>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              Durante décadas recibimos una muy basta educación a nivel sexual y reproductivo, que se limitaba exclusivamente a la restricción y la punición en torno a nuestro desarrollo como seres sexuados.
            </p>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              Afortunadamente la realidad se ha ido transformando y cada vez somos más lxs que apostamos por una educación sexual integral para la libertad, la autonomía, el cuidado y el goce sexual de todas y todos, reconociendo y validando las diversidades que convergen, para permitir naturalizar y desmitificar las creencias en torno a la sexualidad que hemos adquirido erróneamente.
            </p>
            <div className="pt-2 border-t border-[#FFF1F2] flex items-center gap-2 text-xs sm:text-sm font-bold text-[#BE185D]">
              <Sparkles className="w-4 h-4 text-[#F43F5E]" />
              <span>Encuentra el tema de tu interés y haz parte de nuestros cursos. ¡Formación integral en sexualidad!</span>
            </div>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="mt-10 space-y-4">
          {/* Search input */}
          <div className="relative max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C8075]" />
            <input
              id="courses-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por tema (placer, anatomía, ITS, pareja...)"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#DCD0C2] bg-white text-sm text-[#242926] placeholder-[#94887D] focus:outline-none focus:ring-2 focus:ring-[#96432E]/30"
            />
          </div>

          {/* Category Pills (Horizontal scrollable) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar">
            {COURSE_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  id={`course-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-150 ${
                    isSelected
                      ? 'bg-[#96432E] text-white shadow-xs'
                      : 'bg-[#EDE4D8] text-[#4F4640] hover:bg-[#E3D8C9]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Courses Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div
                key={course.id}
                id={`course-card-${course.id}`}
                className="bg-white rounded-2xl border border-[#E3D9CC] overflow-hidden shadow-xs hover:shadow-md hover:border-[#96432E]/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="p-6 space-y-4">
                  {/* Badges & Meta */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#EAF2E7] text-[#345927]">
                      {course.badge}
                    </span>
                    <span className="text-xs text-[#736A63] font-medium">
                      {course.category}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="font-serif text-xl font-bold text-[#232825] leading-snug">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#59504A] leading-relaxed">
                    {course.description}
                  </p>

                  {/* Highlight pill */}
                  <div className="p-3 rounded-xl bg-[#F6F0E7] text-[11px] text-[#4F453F] leading-snug flex items-start gap-2 border border-[#EDE3D6]">
                    <Sparkles className="w-3.5 h-3.5 text-[#96432E] shrink-0 mt-0.5" />
                    <span>{course.highlight}</span>
                  </div>

                  {/* Metadata tags */}
                  <div className="pt-2 flex items-center gap-4 text-xs text-[#6F665E]">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#96432E]" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BarChart className="w-3.5 h-3.5 text-[#7A9A68]" />
                      <span>{course.level}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="p-5 pt-0">
                  <button
                    id={`btn-comenzar-curso-${course.id}`}
                    onClick={() => setActiveCourse(course)}
                    className="w-full py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#96432E] hover:bg-[#7D3422] active:scale-98 transition-all flex items-center justify-center gap-2 shadow-xs"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>COMENZAR CURSO</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center bg-[#F3ECE1] rounded-2xl p-8">
              <p className="text-[#59504A] text-sm">
                No encontramos cursos con los términos ingresados.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('Todos');
                  setSearchQuery('');
                }}
                className="mt-3 text-xs font-semibold text-[#96432E] underline"
              >
                Ver todos los cursos
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Course Interactive Viewer Modal */}
      {activeCourse && (
        <CourseModal
          course={activeCourse}
          onClose={() => setActiveCourse(null)}
        />
      )}
    </section>
  );
};
