import React, { useState } from 'react';
import {
  Mail,
  Send,
  Sparkles,
  HeartHandshake,
  CheckCircle2,
  MessageSquare,
  Instagram,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'informacion',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 bg-[#FFFDF9] border-t border-[#FCE7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Information & User Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE7F3] text-[#BE185D] text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hablemos sin rodeos</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#18181B] tracking-tight leading-tight">
              Contáctanos
            </h2>

            <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
              Escríbenos para solicitar información sobre nuestros servicios o si deseas vincularte como voluntarix.
            </p>

            {/* Reassurance Cards */}
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-2xl bg-white border-2 border-[#FCE7F3] flex items-start gap-3 shadow-2xs">
                <HeartHandshake className="w-5 h-5 text-[#E11D48] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-[#18181B] block">
                    Voluntariado y Labor Social
                  </span>
                  <p className="text-xs text-[#6B7280] mt-0.5">
                    Súmate a nuestra red comunitaria en pedagogía, psicología, medicina y artes eróticas.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border-2 border-[#FCE7F3] flex items-start gap-3 shadow-2xs">
                <MessageSquare className="w-5 h-5 text-[#9333EA] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-[#18181B] block">
                    Atención y Dudas Confidenciales
                  </span>
                  <p className="text-xs text-[#6B7280] mt-0.5">
                    Te respondemos con absoluta reserva, respeto y calidez humana.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Social Channels */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#FCE7F3] hover:border-[#F472B6] text-xs font-bold text-[#BE185D] shadow-2xs hover:shadow-xs transition-all"
              >
                <Instagram className="w-4 h-4 text-[#E11D48]" />
                <span>@sexsapiens</span>
              </a>

              <a
                href="mailto:contacto@sexsapiens.org"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#FCE7F3] hover:border-[#F472B6] text-xs font-bold text-[#4B5563] shadow-2xs hover:shadow-xs transition-all"
              >
                <Mail className="w-4 h-4 text-[#E11D48]" />
                <span>contacto@sexsapiens.org</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#FCE7F3] shadow-md">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#ECFDF5] text-[#10B981] flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-[#18181B]">
                    ¡Mensaje recibido con éxito!
                  </h3>
                  <p className="text-sm text-[#4B5563] max-w-md mx-auto leading-relaxed">
                    Gracias por escribir a <strong>Sexsapiens</strong>. Nuestro equipo revisará tu mensaje y se pondrá en contacto contigo en un plazo de 24 a 48 horas laborables.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'informacion', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-[#BE185D] bg-[#FFF1F2] hover:bg-[#FCE7F3] transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-bold text-[#18181B] block">
                        Tu nombre o cómo deseas que te llamemos *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Ej. Camila, Alex..."
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#FCE7F3] bg-[#FFFDF9] text-sm text-[#18181B] focus:outline-none focus:ring-2 focus:ring-[#FF5E8E]/40"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-bold text-[#18181B] block">
                        Correo electrónico de contacto *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="tu@correo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#FCE7F3] bg-[#FFFDF9] text-sm text-[#18181B] focus:outline-none focus:ring-2 focus:ring-[#FF5E8E]/40"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-bold text-[#18181B] block">
                      Motivo de tu mensaje
                    </label>
                    <select
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#FCE7F3] bg-[#FFFDF9] text-sm text-[#18181B] focus:outline-none focus:ring-2 focus:ring-[#FF5E8E]/40"
                    >
                      <option value="informacion">
                        Solicitar información sobre terapias o asesorías sexuales
                      </option>
                      <option value="voluntariado">
                        Vincularme como voluntarix / apoyo a la labor social
                      </option>
                      <option value="talleres">
                        Proponer taller, conversatorio o actividad pedagógica
                      </option>
                      <option value="artes">
                        Proyectos de artes eróticas y modelo Clítoris 3D
                      </option>
                      <option value="otro">Otro motivo</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-bold text-[#18181B] block">
                      Cuéntanos tu mensaje o consulta *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      placeholder="Escribe aquí con total libertad y tranquilidad..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#FCE7F3] bg-[#FFFDF9] text-sm text-[#18181B] focus:outline-none focus:ring-2 focus:ring-[#FF5E8E]/40 resize-none"
                    ></textarea>
                  </div>

                  <button
                    id="btn-submit-contact"
                    type="submit"
                    className="w-full py-4 rounded-2xl font-extrabold text-white bg-gradient-to-r from-[#FF5E8E] via-[#F43F5E] to-[#E11D48] hover:from-[#F43F5E] hover:to-[#BE185D] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-98 text-sm sm:text-base"
                  >
                    <Send className="w-4 h-4" />
                    <span>ENVIAR MENSAJE A SEXSAPIENS</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
