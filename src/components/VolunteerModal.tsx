import React, { useState } from 'react';
import {
  X,
  HeartHandshake,
  Sparkles,
  CheckCircle2,
  Users,
  Palette,
  Stethoscope,
  BookOpen,
  Send,
  PartyPopper,
} from 'lucide-react';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VolunteerModal: React.FC<VolunteerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<number>(1);
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    availability: '2 a 4 horas semanales',
    motivation: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const areas = [
    {
      id: 'pedagogia',
      title: 'Educación & Talleres',
      desc: 'Facilitar espacios pedagógicos sobre anatomía, derechos y afecto.',
      icon: BookOpen,
      color: 'from-[#FF5E8E] to-[#F43F5E]',
    },
    {
      id: 'psicologia',
      title: 'Acompañamiento Psicosocial',
      desc: 'Escucha orientadora y apoyo emocional con perspectiva de género.',
      icon: Users,
      color: 'from-[#8B5CF6] to-[#6D28D9]',
    },
    {
      id: 'salud',
      title: 'Salud Sexual & Reproductiva',
      desc: 'Charlas médicas, salud menstrual y prevención en comunidades.',
      icon: Stethoscope,
      color: 'from-[#10B981] to-[#059669]',
    },
    {
      id: 'artes',
      title: 'Artes Eróticas & Diseño',
      desc: 'Creación de material visual, escultura textil (Clítoris 3D) y dinámicas lúdicas.',
      icon: Palette,
      color: 'from-[#F97316] to-[#EA580C]',
    },
  ];

  const toggleArea = (areaId: string) => {
    if (selectedAreas.includes(areaId)) {
      setSelectedAreas(selectedAreas.filter((id) => id !== areaId));
    } else {
      setSelectedAreas([...selectedAreas, areaId]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border-2 border-[#FCE7F3] p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#FFF1F2] hover:bg-[#FCE7F3] text-[#BE185D] flex items-center justify-center transition-colors shadow-2xs z-10"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#ECFDF5] text-[#10B981] flex items-center justify-center mx-auto shadow-md animate-bounce">
              <PartyPopper className="w-8 h-8" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[#18181B]">
              ¡Bienvenidx a la red Sexsapiens! 🎉
            </h3>

            <p className="text-sm sm:text-base text-[#4B5563] max-w-md mx-auto leading-relaxed">
              Gracias, <strong>{formData.name || 'amigx'}</strong>. Hemos recibido tu postulación de voluntariado. Nuestro equipo de coordinación comunitaria te escribirá a <strong>{formData.email}</strong> para invitarte al próximo encuentro de bienvenida.
            </p>

            <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#FCE7F3] text-xs text-[#BE185D] font-bold">
              ¡Tu compromiso hace posible una educación sexual libre, digna y comunitaria!
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 rounded-2xl font-extrabold text-white bg-gradient-to-r from-[#FF5E8E] to-[#E11D48] hover:from-[#F43F5E] hover:to-[#BE185D] shadow-md transition-all active:scale-95"
            >
              CERRAR Y CONTINUAR EXPLORANDO
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF1F2] text-[#BE185D] text-xs font-black uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4" />
                <span>Labor Social & Voluntariado</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#18181B] mt-2">
                ¡Conoce sobre nuestra labor social y vincúlate!
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563] mt-1.5 leading-relaxed">
                Queremos llegar a los diferentes grupos poblacionales, colectivas e individualidades con una educación y una atención integral en sexualidad, que comprendan las necesidades diversas, transicionales y emergentes.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Question 1: Select areas */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-black text-[#18181B] block">
                  1. ¿En qué áreas te gustaría aportar como voluntarix? (Elige una o más)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {areas.map((a) => {
                    const isSelected = selectedAreas.includes(a.id);
                    const IconComp = a.icon;
                    return (
                      <button
                        type="button"
                        key={a.id}
                        onClick={() => toggleArea(a.id)}
                        className={`p-3.5 rounded-2xl border-2 text-left transition-all flex items-start gap-2.5 active:scale-98 ${
                          isSelected
                            ? 'border-[#E11D48] bg-[#FFF1F2] shadow-xs'
                            : 'border-[#FCE7F3] bg-white hover:border-[#F472B6]'
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-[#E11D48] text-white' : 'bg-[#FFF1F2] text-[#BE185D]'
                          }`}
                        >
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-black text-[#18181B] block">
                            {a.title}
                          </span>
                          <span className="text-[11px] text-[#6B7280] leading-tight block mt-0.5">
                            {a.desc}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Question 2: Name and contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#18181B] block">
                    Tu nombre o cómo te llamas *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Sofía, Nico..."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#FCE7F3] bg-[#FFFDF9] text-sm text-[#18181B] focus:outline-none focus:ring-2 focus:ring-[#FF5E8E]/40"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#18181B] block">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="tu@correo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#FCE7F3] bg-[#FFFDF9] text-sm text-[#18181B] focus:outline-none focus:ring-2 focus:ring-[#FF5E8E]/40"
                  />
                </div>
              </div>

              {/* Question 3: City and Availability */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#18181B] block">
                    Ciudad / País donde vives
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. Bogotá, Medellín, CDMX..."
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#FCE7F3] bg-[#FFFDF9] text-sm text-[#18181B] focus:outline-none focus:ring-2 focus:ring-[#FF5E8E]/40"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#18181B] block">
                    Disponibilidad de tiempo
                  </label>
                  <select
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#FCE7F3] bg-[#FFFDF9] text-sm text-[#18181B] focus:outline-none focus:ring-2 focus:ring-[#FF5E8E]/40"
                  >
                    <option value="1 a 2 horas semanales">1 a 2 horas semanales</option>
                    <option value="2 a 4 horas semanales">2 a 4 horas semanales</option>
                    <option value="Fines de semana / Talleres puntuales">Fines de semana / Talleres puntuales</option>
                    <option value="Proyectos específicos de diseño o artes">Proyectos específicos de diseño o artes</option>
                  </select>
                </div>
              </div>

              {/* Motivation message */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#18181B] block">
                  ¿Por qué te gustaría unirte a Sexsapiens? (Opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Cuéntanos brevemente qué te motiva o qué experiencia tienes..."
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#FCE7F3] bg-[#FFFDF9] text-sm text-[#18181B] focus:outline-none focus:ring-2 focus:ring-[#FF5E8E]/40 resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                id="btn-confirm-voluntariado"
                className="w-full py-3.5 rounded-2xl font-black text-white bg-gradient-to-r from-[#FF5E8E] via-[#F43F5E] to-[#E11D48] hover:from-[#F43F5E] hover:to-[#BE185D] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 text-sm sm:text-base"
              >
                <Send className="w-4 h-4" />
                <span>¡ENVIAR MI POSTULACIÓN AL VOLUNTARIADO!</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
