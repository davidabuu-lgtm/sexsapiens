import React, { useState } from 'react';
import { Course, CourseLesson } from '../types';
import { X, CheckCircle2, Clock, BookOpen, Sparkles, ChevronRight, HelpCircle } from 'lucide-react';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ course, onClose }) => {
  if (!course) return null;

  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>([]);
  const [userReflection, setUserReflection] = useState('');
  const [reflectionSaved, setReflectionSaved] = useState(false);

  const activeLesson: CourseLesson = course.lessons[activeLessonIndex] || course.lessons[0];

  const handleToggleComplete = (lessonId: string) => {
    if (completedLessonIds.includes(lessonId)) {
      setCompletedLessonIds(completedLessonIds.filter((id) => id !== lessonId));
    } else {
      setCompletedLessonIds([...completedLessonIds, lessonId]);
    }
  };

  const handleSaveReflection = () => {
    if (userReflection.trim()) {
      setReflectionSaved(true);
      setTimeout(() => setReflectionSaved(false), 3000);
    }
  };

  const progressPercentage = Math.round(
    (completedLessonIds.length / course.lessons.length) * 100
  );

  return (
    <div
      id="course-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#1A1E1C]/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
    >
      <div
        id="course-modal-container"
        className="bg-[#FAF7F2] rounded-2xl w-full max-w-4xl shadow-2xl border border-[#E3D7C8] overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-[#EBE1D2] bg-[#F5EFE6] flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#E5ECE0] text-[#345827]">
                {course.badge}
              </span>
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#EDE2D5] text-[#7A402D]">
                {course.category}
              </span>
              <span className="text-xs text-[#6F665E] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {course.duration}
              </span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#222725]">
              {course.title}
            </h2>
            <p className="text-xs text-[#625952]">
              Nivel: <strong className="text-[#2C312E]">{course.level}</strong> • {course.lessons.length} lecciones interactivas
            </p>
          </div>

          <button
            id="close-course-modal-btn"
            onClick={onClose}
            className="p-2 rounded-full text-[#6E635C] hover:bg-[#E8DDD0] hover:text-[#212623] transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="bg-[#EBE2D4] h-1.5 w-full">
          <div
            className="bg-[#7A9A68] h-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        {/* Modal Body: Two columns on desktop */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#EAE0D2]">
          {/* Left Column: Lesson Selector list */}
          <div className="lg:col-span-4 p-4 sm:p-5 bg-[#F9F5EE] space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-[#5B524B] pb-2 border-b border-[#E8DDCF]">
              <span>ÍNDICE DE LECCIONES</span>
              <span>{completedLessonIds.length} de {course.lessons.length} listas</span>
            </div>

            <div className="space-y-1.5 pt-2">
              {course.lessons.map((lesson, index) => {
                const isSelected = index === activeLessonIndex;
                const isCompleted = completedLessonIds.includes(lesson.id);

                return (
                  <button
                    key={lesson.id}
                    id={`lesson-tab-${lesson.id}`}
                    onClick={() => setActiveLessonIndex(index)}
                    className={`w-full text-left p-3 rounded-xl text-xs sm:text-sm transition-all duration-150 flex items-start gap-2.5 ${
                      isSelected
                        ? 'bg-[#FFFFFF] text-[#913E29] font-semibold shadow-xs border border-[#E0D2C3]'
                        : 'text-[#48403B] hover:bg-[#F2ECE1] border border-transparent'
                    }`}
                  >
                    <div className="pt-0.5 shrink-0">
                      {isCompleted ? (
                        <CheckCircle2 className="w-4 h-4 text-[#5D854C]" />
                      ) : (
                        <span
                          className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                            isSelected
                              ? 'border-[#913E29] text-[#913E29]'
                              : 'border-[#A3998F] text-[#7A7067]'
                          }`}
                        >
                          {index + 1}
                        </span>
                      )}
                    </div>
                    <div className="flex-1 leading-snug">
                      <p className="line-clamp-2">{lesson.title}</p>
                      <span className="text-[10px] text-[#7E746C] font-normal block mt-0.5">
                        {lesson.duration}
                      </span>
                    </div>
                    {isSelected && (
                      <ChevronRight className="w-4 h-4 text-[#913E29] shrink-0 self-center" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Target note */}
            <div className="mt-4 p-3 rounded-xl bg-[#EDE4D8] border border-[#DDD0C0] text-[11px] text-[#554C46] space-y-1">
              <span className="font-semibold text-[#272B29] block">
                Educación comunitaria libre
              </span>
              <p>
                Puedes volver a este material las veces que desees. No hay exámenes ni penalizaciones de tiempo.
              </p>
            </div>
          </div>

          {/* Right Column: Active Lesson Reader */}
          <div className="lg:col-span-8 p-6 sm:p-8 space-y-6 overflow-y-auto">
            {/* Lesson Title & Summary */}
            <div className="space-y-2 border-b border-[#EAE1D4] pb-4">
              <span className="text-xs font-semibold text-[#913E29] tracking-wide uppercase">
                Lección {activeLessonIndex + 1} de {course.lessons.length}
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#202522] leading-tight">
                {activeLesson.title}
              </h3>
              <p className="text-sm text-[#5F5650] italic">
                {activeLesson.summary}
              </p>
            </div>

            {/* Lesson Body Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#38322E] leading-relaxed">
              {activeLesson.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Takeaway box */}
            <div className="p-4 rounded-xl bg-[#E8F0E4] border border-[#CDE0C4] flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#4E793C] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#355827] block">
                  Idea Clave para Recordar
                </span>
                <p className="text-sm text-[#273E1E] font-medium mt-0.5 leading-snug">
                  {activeLesson.keyTakeaway}
                </p>
              </div>
            </div>

            {/* Interactive Reflection Question */}
            <div className="p-5 rounded-xl bg-[#F4EDE4] border border-[#E0D4C5] space-y-3">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#8B422F]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#8B422F]">
                  Pregunta de Autorreflexión
                </span>
              </div>
              <p className="text-sm font-serif font-medium text-[#292D2B]">
                {activeLesson.reflectionQuestion}
              </p>
              <textarea
                id="lesson-reflection-input"
                rows={3}
                value={userReflection}
                onChange={(e) => setUserReflection(e.target.value)}
                placeholder="Escribe tus reflexiones personales aquí si lo deseas (este ejercicio es privado y solo para tu autoconocimiento)..."
                className="w-full text-xs sm:text-sm p-3 rounded-lg border border-[#D5C7B8] bg-white focus:outline-none focus:ring-1 focus:ring-[#913E29]"
              />
              <div className="flex items-center justify-between">
                <button
                  id="save-reflection-btn"
                  onClick={handleSaveReflection}
                  className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-[#913E29] text-white hover:bg-[#783220] transition-colors"
                >
                  Guardar en mi sesión
                </button>
                {reflectionSaved && (
                  <span className="text-xs text-[#416834] font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Guardado localmente
                  </span>
                )}
              </div>
            </div>

            {/* Bottom Actions: Toggle complete & Next button */}
            <div className="pt-4 border-t border-[#EAE1D4] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <button
                id="toggle-lesson-complete-btn"
                onClick={() => handleToggleComplete(activeLesson.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                  completedLessonIds.includes(activeLesson.id)
                    ? 'bg-[#E5ECE0] text-[#375E2A] border border-[#C6D8BD]'
                    : 'bg-white border border-[#D5C7B8] text-[#443C37] hover:bg-[#F2ECE2]'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  {completedLessonIds.includes(activeLesson.id)
                    ? 'Lección completada ✓'
                    : 'Marcar como leída'}
                </span>
              </button>

              {activeLessonIndex < course.lessons.length - 1 ? (
                <button
                  id="next-lesson-btn"
                  onClick={() => setActiveLessonIndex(activeLessonIndex + 1)}
                  className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#913E29] hover:bg-[#7A3221] shadow-xs flex items-center justify-center gap-2"
                >
                  <span>Siguiente lección</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  id="finish-course-btn"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#446937] hover:bg-[#35542A] shadow-xs flex items-center justify-center gap-2"
                >
                  <span>Finalizar curso</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
