import React from 'react';
import {
  ShieldCheck,
  Heart,
  Sparkles,
  Users,
  Award,
  BookOpen,
  Palette,
  HeartHandshake,
  ArrowRight,
  Stethoscope,
} from 'lucide-react';

interface AboutSectionProps {
  onMeetProfessionals?: () => void;
  onExploreLaborSocial?: () => void;
  onOpenVolunteer?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onMeetProfessionals,
  onExploreLaborSocial,
  onOpenVolunteer,
}) => {
  return (
    <section id="quienes-somos" className="py-20 bg-[#FFFDF9] border-t border-[#FCE7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Quiénes somos */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE7F3] text-[#BE185D] text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Equipo Multidisciplinar</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#18181B] tracking-tight leading-tight">
            Quiénes somos
          </h2>

          <p className="text-base sm:text-lg text-[#374151] leading-relaxed font-normal">
            <strong>Sexsapiens</strong> es un equipo multidisciplinar que se consolida desde la práctica de la <strong>psicología, la medicina, el trabajo social, las artes y la sexología</strong>.
          </p>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed font-normal">
            Nuestro propósito es poder generar cambios significativos a nivel individual y social, en el marco de la salud, el placer y el bienestar de las personas, a través de la educación sexual integral y la atención terapéutica en sexualidad y género.
          </p>

          {onMeetProfessionals && (
            <div className="pt-2">
              <button
                id="btn-conoce-profesionales-about"
                onClick={onMeetProfessionals}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#FF5E8E] to-[#E11D48] hover:from-[#F43F5E] hover:to-[#BE185D] text-white text-sm font-extrabold shadow-sm hover:shadow-md transition-all active:scale-95"
              >
                <Users className="w-4 h-4" />
                <span>Conoce a nuestrxs profesionales</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Disciplines Bento Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-[#FCE7F3] shadow-2xs text-center space-y-2">
            <div className="w-10 h-10 mx-auto rounded-xl bg-[#FFF1F2] text-[#E11D48] flex items-center justify-center font-black">
              🧠
            </div>
            <h3 className="text-sm font-black text-[#18181B]">Psicología</h3>
            <p className="text-[11px] text-[#6B7280]">Enfoque clínico, relacional y sexológico</p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#FCE7F3] shadow-2xs text-center space-y-2">
            <div className="w-10 h-10 mx-auto rounded-xl bg-[#F0FDF4] text-[#16A34A] flex items-center justify-center font-black">
              🩺
            </div>
            <h3 className="text-sm font-black text-[#18181B]">Medicina</h3>
            <p className="text-[11px] text-[#6B7280]">Salud sexual, reproductiva y menstrual</p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#FCE7F3] shadow-2xs text-center space-y-2">
            <div className="w-10 h-10 mx-auto rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center font-black">
              🤝
            </div>
            <h3 className="text-sm font-black text-[#18181B]">Trabajo Social</h3>
            <p className="text-[11px] text-[#6B7280]">Acompañamiento comunitario y derechos</p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#FCE7F3] shadow-2xs text-center space-y-2">
            <div className="w-10 h-10 mx-auto rounded-xl bg-[#FAF5FF] text-[#9333EA] flex items-center justify-center font-black">
              🎨
            </div>
            <h3 className="text-sm font-black text-[#18181B]">Artes Eróticas</h3>
            <p className="text-[11px] text-[#6B7280]">Pedagogía visual, tacto y exploración</p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#FCE7F3] shadow-2xs text-center space-y-2 col-span-2 sm:col-span-1">
            <div className="w-10 h-10 mx-auto rounded-xl bg-[#FFF7ED] text-[#EA580C] flex items-center justify-center font-black">
              ✨
            </div>
            <h3 className="text-sm font-black text-[#18181B]">Sexología</h3>
            <p className="text-[11px] text-[#6B7280]">Placer consciente y diversidades</p>
          </div>
        </div>

        {/* User's Exact: About Me / Labor Social Card */}
        <div
          id="labor-social-card"
          className="mt-14 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#FFF1F2] via-white to-[#FCE7F3] border-2 border-[#F472B6]/40 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BE185D] text-white text-xs font-black uppercase tracking-wider">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>Labor social</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#18181B] leading-snug">
                ¡Conoce sobre nuestra labor social y vincúlate!
              </h3>

              <p className="text-sm sm:text-base text-[#374151] leading-relaxed font-normal">
                Queremos llegar a los diferentes grupos poblacionales, colectivas e individualidades con una educación y una atención integral en sexualidad, que comprendan las necesidades diversas, transicionales y emergentes.
              </p>

              <p className="text-sm sm:text-base text-[#BE185D] font-bold">
                ¡Entérate de cómo lo hacemos realidad y vincúlate al apoyo voluntario!
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                id="btn-more-about-me"
                onClick={() => {
                  if (onOpenVolunteer) {
                    onOpenVolunteer();
                  } else if (onExploreLaborSocial) {
                    onExploreLaborSocial();
                  }
                }}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#FF5E8E] via-[#F43F5E] to-[#E11D48] hover:from-[#F43F5E] hover:to-[#BE185D] text-white font-black text-sm sm:text-base text-center transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
              >
                <HeartHandshake className="w-5 h-5" />
                <span>MORE ABOUT ME / VINCÚLATE</span>
              </button>
              <p className="text-center text-xs text-[#6B7280]">
                Escríbenos para unirte como voluntarix o coordinar talleres con tu colectiva.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

