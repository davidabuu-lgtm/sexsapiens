import React, { useState } from 'react';
import {
  Gamepad2,
  Sparkles,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Trophy,
  Heart,
  ArrowRight,
  Smile,
  Flame,
} from 'lucide-react';

interface InteractiveGameProps {
  onExploreCourses: () => void;
  onExploreTherapies: () => void;
  onExploreArtes: () => void;
  onExploreLaborSocial: () => void;
}

export const InteractiveGameSection: React.FC<InteractiveGameProps> = ({
  onExploreCourses,
  onExploreTherapies,
  onExploreArtes,
  onExploreLaborSocial,
}) => {
  const triviaQuestions = [
    {
      id: 1,
      targetAudience: 'Para todas las edades',
      question: '¿A partir de los 50 o 60 años el deseo sexual y el placer desaparecen?',
      isTruth: false,
      mythTitle: '¡Falso! El placer no tiene fecha de caducidad',
      explanation:
        'La sensualidad, el afecto, la ternura y la capacidad de gozar acompañan toda la vida. Con la edad, muchas personas disfrutan con mayor serenidad, sin prisas y libres de presiones reproductivas.',
      badge: 'Mito popular',
    },
    {
      id: 2,
      targetAudience: 'Anatomía & Curiosidad',
      question: '¿El clítoris es únicamente ese pequeño botón externo que se ve a simple vista?',
      isTruth: false,
      mythTitle: '¡Mito total! Mide entre 8 y 11 centímetros',
      explanation:
        'Lo que vemos externamente (el glande) es solo la punta del iceberg. Hacia el interior de la pelvis se despliegan dos cuerpos cavernosos, bulbos y raíces con más de 10.000 terminaciones nerviosas dedicadas al placer.',
      badge: 'Anatomía viva',
    },
    {
      id: 3,
      targetAudience: 'Relaciones & Pareja',
      question: '¿Hablar abiertamente con tu pareja de lo que te gusta mejora el sexo más que cualquier truco?',
      isTruth: true,
      mythTitle: '¡Verdad absoluta! La comunicación es el mejor afrodisíaco',
      explanation:
        'Saber expresar deseos, ritmos y límites con calidez y sin juicios disuelve la ansiedad de rendimiento y conecta de manera profunda y genuina.',
      badge: 'Bienestar afectivo',
    },
    {
      id: 4,
      targetAudience: 'Salud & Cuidado',
      question: '¿Sentir dolor durante la penetración o el encuentro íntimo es algo "normal" que hay que aguantar?',
      isTruth: false,
      mythTitle: '¡Mito peligroso! El dolor NUNCA debe normalizarse',
      explanation:
        'El dolor es una señal de que algo necesita atención: falta de lubricación, tensión en el suelo pélvico o factores emocionales. En Sexsapiens te acompañamos a disfrutar sin molestias.',
      badge: 'Salud integral',
    },
    {
      id: 5,
      targetAudience: 'Autocuidado',
      question: '¿El autoerotismo y conocer tu propio cuerpo favorece el descanso y reduce el estrés a cualquier edad?',
      isTruth: true,
      mythTitle: '¡Totalmente cierto y saludable!',
      explanation:
        'El placer propio libera dopamina, oxitocina y endorfinas, promueve la relajación muscular, mejora el sueño y fortalece la autoestima corporal.',
      badge: 'Bienestar natural',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [score, setScore] = useState<number>(0);
  const [answeredCount, setAnsweredCount] = useState<number>(0);

  const currentQ = triviaQuestions[currentIndex];
  const isAnswered = selectedAnswer !== null;
  const isCorrect = isAnswered && selectedAnswer === currentQ.isTruth;

  const handleAnswer = (userChoice: boolean) => {
    if (isAnswered) return;
    setSelectedAnswer(userChoice);
    setAnsweredCount((prev) => prev + 1);
    if (userChoice === currentQ.isTruth) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setCurrentIndex((prev) => (prev + 1) % triviaQuestions.length);
  };

  const restartGame = () => {
    setSelectedAnswer(null);
    setCurrentIndex(0);
    setScore(0);
    setAnsweredCount(0);
  };

  return (
    <section id="juego-mitos" className="py-16 bg-gradient-to-b from-[#FFFDF9] via-[#FFF1F2]/60 to-[#FFFDF9] border-t border-[#FCE7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FF5E8E] to-[#E11D48] text-white text-xs font-black uppercase tracking-wider shadow-xs">
            <Gamepad2 className="w-4 h-4" />
            <span>Minijuego Interactivo • Para Jóvenes y Personas Mayores</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#18181B] tracking-tight">
            Ruleta de Sabiduría:{' '}
            <span className="bg-gradient-to-r from-[#FF5E8E] via-[#F43F5E] to-[#E11D48] bg-clip-text text-transparent">
              ¿Mito o Verdad?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] font-medium leading-relaxed">
            Aprender jugando es la forma más fácil y divertida de derribar tabúes. ¡Toca un botón y pon a prueba tus conocimientos sin culpas!
          </p>
        </div>

        {/* Game Box */}
        <div className="mt-10 max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-9 border-3 border-[#FCE7F3] shadow-xl relative overflow-hidden">
            {/* Top Score Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-[#FCE7F3] text-xs font-bold text-[#BE185D]">
              <span className="px-3 py-1 rounded-full bg-[#FFF1F2]">
                Pregunta {currentIndex + 1} de {triviaQuestions.length}
              </span>

              <div className="flex items-center gap-1.5 bg-[#FFF1F2] px-3.5 py-1 rounded-full">
                <Trophy className="w-4 h-4 text-[#F59E0B]" />
                <span>Puntos: {score} / {answeredCount}</span>
              </div>
            </div>

            {/* Target Audience Pill */}
            <div className="mt-5 inline-block">
              <span className="text-[11px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full bg-[#FCE7F3] text-[#9D174D]">
                {currentQ.targetAudience}
              </span>
            </div>

            {/* Question Text */}
            <div className="mt-3 min-h-[90px] flex items-center">
              <h3 className="text-xl sm:text-2xl font-black text-[#18181B] leading-snug">
                “{currentQ.question}”
              </h3>
            </div>

            {/* User Choices: Huge, Easy-to-Tap Buttons */}
            {!isAnswered ? (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  id="btn-game-truth"
                  onClick={() => handleAnswer(true)}
                  className="py-5 px-6 rounded-2xl bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white font-black text-lg sm:text-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 active:scale-95 group"
                >
                  <CheckCircle2 className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span>¡ES VERDAD!</span>
                </button>

                <button
                  id="btn-game-myth"
                  onClick={() => handleAnswer(false)}
                  className="py-5 px-6 rounded-2xl bg-gradient-to-r from-[#EF4444] to-[#DC2626] hover:from-[#DC2626] hover:to-[#B91C1C] text-white font-black text-lg sm:text-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 active:scale-95 group"
                >
                  <XCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span>¡ES UN MITO!</span>
                </button>
              </div>
            ) : (
              /* Answer Feedback Card */
              <div className="mt-6 space-y-4 animate-in zoom-in-95 duration-200">
                <div
                  className={`p-5 rounded-2xl border-2 flex items-start gap-3.5 ${
                    isCorrect
                      ? 'bg-[#ECFDF5] border-[#A7F3D0] text-[#065F46]'
                      : 'bg-[#FEF2F2] border-[#FECACA] text-[#991B1B]'
                  }`}
                >
                  {isCorrect ? (
                    <div className="w-10 h-10 rounded-xl bg-[#10B981] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Sparkles className="w-6 h-6" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-xl bg-[#EF4444] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <HelpCircle className="w-6 h-6" />
                    </div>
                  )}

                  <div className="space-y-1">
                    <h4 className="text-lg font-black">
                      {isCorrect ? '¡Excelente acierto! 🎉' : '¡Muy buen intento! Aprendamos juntos 💡'}
                    </h4>
                    <p className="text-sm font-bold text-[#18181B]">
                      {currentQ.mythTitle}
                    </p>
                    <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed pt-1">
                      {currentQ.explanation}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                  <button
                    onClick={restartGame}
                    className="text-xs font-bold text-[#6B7280] hover:text-[#18181B] flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-[#F3F4F6] transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reiniciar puntaje</span>
                  </button>

                  <button
                    id="btn-game-next"
                    onClick={nextQuestion}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-2xl font-black text-white bg-gradient-to-r from-[#FF5E8E] via-[#F43F5E] to-[#E11D48] hover:from-[#F43F5E] hover:to-[#BE185D] shadow-md flex items-center justify-center gap-2 active:scale-95 transition-all text-sm"
                  >
                    <span>SIGUIENTE PREGUNTA</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Explorers: 4 Big Accessible Portals for Everyone */}
        <div className="mt-14 pt-10 border-t border-[#FCE7F3]">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-xs font-black uppercase tracking-wider text-[#BE185D] block">
              Navegación Fácil y Rápida
            </span>
            <h3 className="text-2xl font-black text-[#18181B] mt-1">
              ¿Qué te gustaría explorar hoy?
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: Educación */}
            <button
              onClick={onExploreCourses}
              className="p-5 rounded-3xl bg-white border-2 border-[#FCE7F3] hover:border-[#FF5E8E] hover:shadow-lg transition-all text-left flex flex-col justify-between group active:scale-98"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FF5E8E] to-[#E11D48] text-white flex items-center justify-center text-xl shadow-xs group-hover:scale-110 transition-transform">
                  📚
                </div>
                <h4 className="text-lg font-black text-[#18181B] group-hover:text-[#BE185D] transition-colors">
                  Educación
                </h4>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Cursos sobre cuerpo, placer, menstruación y afecto a tu propio ritmo.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#FFF1F2] flex items-center justify-between text-xs font-bold text-[#BE185D]">
                <span>Ver cursos</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* Card 2: Terapias */}
            <button
              onClick={onExploreTherapies}
              className="p-5 rounded-3xl bg-white border-2 border-[#FCE7F3] hover:border-[#8B5CF6] hover:shadow-lg transition-all text-left flex flex-col justify-between group active:scale-98"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#8B5CF6] to-[#6D28D9] text-white flex items-center justify-center text-xl shadow-xs group-hover:scale-110 transition-transform">
                  💬
                </div>
                <h4 className="text-lg font-black text-[#18181B] group-hover:text-[#8B5CF6] transition-colors">
                  Terapias
                </h4>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Terapia psicosexual y de pareja, teleconsulta y atención presencial.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#FFF1F2] flex items-center justify-between text-xs font-bold text-[#8B5CF6]">
                <span>Agenda tu cita</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* Card 3: Artes Eróticas */}
            <button
              onClick={onExploreArtes}
              className="p-5 rounded-3xl bg-white border-2 border-[#FCE7F3] hover:border-[#F97316] hover:shadow-lg transition-all text-left flex flex-col justify-between group active:scale-98"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#F97316] to-[#EA580C] text-white flex items-center justify-center text-xl shadow-xs group-hover:scale-110 transition-transform">
                  ✨
                </div>
                <h4 className="text-lg font-black text-[#18181B] group-hover:text-[#F97316] transition-colors">
                  Artes Eróticas
                </h4>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Modelo interactivo Clítoris 3D, talleres pedagógicos y escultura.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#FFF1F2] flex items-center justify-between text-xs font-bold text-[#F97316]">
                <span>Explorar 3D</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* Card 4: Labor Social */}
            <button
              onClick={onExploreLaborSocial}
              className="p-5 rounded-3xl bg-white border-2 border-[#FCE7F3] hover:border-[#10B981] hover:shadow-lg transition-all text-left flex flex-col justify-between group active:scale-98"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#10B981] to-[#059669] text-white flex items-center justify-center text-xl shadow-xs group-hover:scale-110 transition-transform">
                  🤝
                </div>
                <h4 className="text-lg font-black text-[#18181B] group-hover:text-[#10B981] transition-colors">
                  Labor Social
                </h4>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Proyectos comunitarios, voluntariado y atención a grupos vulnerables.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#FFF1F2] flex items-center justify-between text-xs font-bold text-[#10B981]">
                <span>¡Vincúlate hoy!</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
