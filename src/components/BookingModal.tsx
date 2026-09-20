import React, { useState } from 'react';
import { Professional } from '../types';
import { X, Calendar, Clock, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';

interface BookingModalProps {
  professional: Professional | null;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  professional,
  onClose,
}) => {
  if (!professional) return null;

  const [date, setDate] = useState('2026-09-22');
  const [timeSlot, setTimeSlot] = useState('16:00 - 17:00 (Hora local)');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [consultReason, setConsultReason] = useState('');
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(true);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const availableSlots = [
    '10:00 - 11:00 (Hora local)',
    '14:30 - 15:30 (Hora local)',
    '16:00 - 17:00 (Hora local)',
    '18:30 - 19:30 (Hora local)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsConfirmed(true);
  };

  return (
    <div
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#181C1B]/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div
        id="booking-modal-container"
        className="bg-[#FAF7F2] rounded-2xl w-full max-w-lg shadow-2xl border border-[#E4DACD] overflow-hidden"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-[#F5EFE6] border-b border-[#E8DFC9] flex items-start justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#984732] block">
              Agendar Teleconsulta Confidencial
            </span>
            <h3 className="font-serif text-xl font-bold text-[#202623] mt-0.5">
              Con {professional.name}
            </h3>
            <p className="text-xs text-[#635952]">
              Especialidad: {professional.specialty} • Modalidad: {professional.modality}
            </p>
          </div>
          <button
            id="close-booking-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-full text-[#6D625A] hover:bg-[#EAE0D1] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isConfirmed ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#E5ECE0] text-[#3B642C] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-[#232925]">
              ¡Solicitud de consulta recibida!
            </h4>
            <p className="text-xs sm:text-sm text-[#5C534D] leading-relaxed">
              Hemos reservado provisionalmente tu espacio con{' '}
              <strong>{professional.name}</strong> para el <strong>{date}</strong> a las{' '}
              <strong>{timeSlot}</strong>.
            </p>
            <div className="p-4 rounded-xl bg-[#F4EDE2] text-xs text-[#524944] text-left space-y-1.5 border border-[#E5DACE]">
              <p>
                • Te enviamos a <strong>{email}</strong> el enlace seguro y cifrado de teleconsulta.
              </p>
              <p>
                • Recibirás las pautas de preparación y la información de la escala de pago solidaria o subvención del Fondo Savia.
              </p>
            </div>
            <button
              id="booking-confirmed-close-btn"
              onClick={onClose}
              className="mt-2 w-full py-3 rounded-xl bg-[#984732] text-white text-xs sm:text-sm font-semibold hover:bg-[#7E3725]"
            >
              Entendido, volver a la página
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs sm:text-sm">
            {/* Disclaimer pill */}
            <div className="p-3 rounded-xl bg-[#FFF6EE] border border-[#F2D7C2] text-xs text-[#7A3F2A] flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 shrink-0 text-[#984732] mt-0.5" />
              <span>
                Este espacio es estrictamente confidencial. La información compartida
                está protegida bajo el secreto profesional médico y terapéutico.
              </span>
            </div>

            {/* Date and time selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-[#303632] mb-1">
                  Fecha deseada
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#85796E]" />
                  <input
                    id="booking-date-input"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-lg border border-[#D8CCBD] bg-white text-[#2B302C] focus:outline-none focus:ring-1 focus:ring-[#984732]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#303632] mb-1">
                  Horario preferido
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#85796E]" />
                  <select
                    id="booking-timeslot-select"
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-lg border border-[#D8CCBD] bg-white text-[#2B302C] focus:outline-none focus:ring-1 focus:ring-[#984732]"
                  >
                    {availableSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* User contact info */}
            <div>
              <label className="block font-semibold text-[#303632] mb-1">
                Tu nombre o cómo deseas que te llamemos
              </label>
              <input
                id="booking-name-input"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre o seudónimo de preferencia"
                className="w-full px-3 py-2 rounded-lg border border-[#D8CCBD] bg-white text-[#2B302C] focus:outline-none focus:ring-1 focus:ring-[#984732]"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#303632] mb-1">
                Correo electrónico (para enviarte el enlace seguro)
              </label>
              <input
                id="booking-email-input"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ejemplo@correo.com"
                className="w-full px-3 py-2 rounded-lg border border-[#D8CCBD] bg-white text-[#2B302C] focus:outline-none focus:ring-1 focus:ring-[#984732]"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#303632] mb-1">
                ¿Qué te gustaría abordar brevemente? (Opcional)
              </label>
              <textarea
                id="booking-reason-textarea"
                rows={2}
                value={consultReason}
                onChange={(e) => setConsultReason(e.target.value)}
                placeholder="Ejemplo: dificultades de comunicación con mi pareja, dudas sobre dolor, etc."
                className="w-full px-3 py-2 rounded-lg border border-[#D8CCBD] bg-white text-[#2B302C] focus:outline-none focus:ring-1 focus:ring-[#984732]"
              />
            </div>

            {/* Consent and emergency checkbox */}
            <div className="space-y-2 pt-1">
              <label className="flex items-start gap-2 text-xs text-[#524A44] cursor-pointer">
                <input
                  id="booking-privacy-check"
                  type="checkbox"
                  checked={acceptedPrivacy}
                  onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                  className="mt-0.5 rounded text-[#984732] focus:ring-[#984732]"
                />
                <span>
                  Acepto los términos de teleconsulta confidencial y entiendo que este
                  espacio no atiende emergencias médicas de riesgo vital inmediato.
                </span>
              </label>
            </div>

            {/* Submit button */}
            <div className="pt-2">
              <button
                id="submit-booking-btn"
                type="submit"
                disabled={!acceptedPrivacy}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#FF5E8E] via-[#F43F5E] to-[#E11D48] hover:from-[#F43F5E] hover:to-[#BE185D] disabled:opacity-50 text-white font-extrabold shadow-sm transition-all"
              >
                AGENDA TU CITA CON SEXSAPIENS
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
