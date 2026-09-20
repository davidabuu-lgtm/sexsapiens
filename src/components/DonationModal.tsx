import React, { useState } from 'react';
import { X, Heart, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { DONATION_TIERS } from '../data/communityData';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAmount?: number;
}

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  initialAmount = 30000,
}) => {
  if (!isOpen) return null;

  const [selectedAmount, setSelectedAmount] = useState<number>(initialAmount);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('monthly');
  const [currency, setCurrency] = useState<'COP' | 'USD'>('COP');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const effectiveAmount = isCustom
    ? parseInt(customAmount || '0', 10)
    : selectedAmount;

  const handleSelectTier = (amount: number) => {
    setSelectedAmount(amount);
    setIsCustom(false);
  };

  const handleCustomChange = (val: string) => {
    setCustomAmount(val);
    setIsCustom(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (effectiveAmount <= 0) return;
    setIsSuccess(true);
  };

  return (
    <div
      id="donation-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#171A19]/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div
        id="donation-modal-container"
        className="bg-[#FAF7F2] rounded-2xl w-full max-w-xl shadow-2xl border border-[#E3D9CC] overflow-hidden"
      >
        {/* Header */}
        <div className="p-6 bg-[#F4EDE4] border-b border-[#E6DBCE] flex items-start justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#984732] block">
              Aporte Solidario & Transformación
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#232925] mt-1">
              Tu aporte transforma vidas
            </h3>
            <p className="text-xs text-[#5E554F] mt-0.5">
              Garantizamos que el 100% de los fondos se destina a educación comunitaria y salud.
            </p>
          </div>
          <button
            id="close-donation-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-full text-[#6C6159] hover:bg-[#EAE0D3] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#E5ECE0] text-[#345927] flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8 fill-current" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-[#202522]">
              ¡Gracias de todo corazón por creer en Savia!
            </h4>
            <p className="text-sm text-[#504842] leading-relaxed">
              Tu contribución de{' '}
              <strong>
                ${effectiveAmount.toLocaleString()} {currency}{' '}
                {frequency === 'monthly' ? '(Mensual)' : '(Única)'}
              </strong>{' '}
              ha sido registrada. Enviaremos el comprobante e informe de transparencia a{' '}
              <strong>{donorEmail || 'tu correo'}</strong>.
            </p>
            <div className="p-4 rounded-xl bg-[#F5EEE4] text-xs text-[#574F49] text-left space-y-1 border border-[#E7DDCE]">
              <span className="font-bold text-[#2B312E] block">Impacto inmediato:</span>
              <p>
                Los recursos se transfieren directamente al Fondo de Salud Sexual y Talleres Escolares. Recibirás en tu correo los reportes semestrales de impacto auditado.
              </p>
            </div>
            <button
              id="donation-success-close-btn"
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-[#984732] text-white text-xs sm:text-sm font-semibold hover:bg-[#7D3422]"
            >
              Cerrar y continuar navegando
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-5 text-xs sm:text-sm">
            {/* Frequency & Currency selectors */}
            <div className="flex items-center justify-between gap-4 p-1.5 bg-[#EFE7DC] rounded-xl">
              <div className="flex items-center gap-1 w-full">
                <button
                  type="button"
                  id="freq-monthly-btn"
                  onClick={() => setFrequency('monthly')}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    frequency === 'monthly'
                      ? 'bg-white text-[#984732] shadow-xs'
                      : 'text-[#5C534D]'
                  }`}
                >
                  Mensual (Sostenible)
                </button>
                <button
                  type="button"
                  id="freq-once-btn"
                  onClick={() => setFrequency('once')}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    frequency === 'once'
                      ? 'bg-white text-[#984732] shadow-xs'
                      : 'text-[#5C534D]'
                  }`}
                >
                  Aporte único
                </button>
              </div>

              <div className="flex items-center gap-1 px-1">
                {(['COP', 'USD'] as const).map((curr) => (
                  <button
                    key={curr}
                    type="button"
                    onClick={() => setCurrency(curr)}
                    className={`px-2.5 py-1 text-[11px] font-bold rounded-md ${
                      currency === curr
                        ? 'bg-[#984732] text-white'
                        : 'text-[#5D554F] hover:bg-[#E2D6C6]'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

            {/* Predefined Tiers */}
            <div className="space-y-2">
              <label className="block font-semibold text-[#2D332F]">
                Selecciona tu nivel de aporte:
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {DONATION_TIERS.map((tier) => {
                  const isSelected = !isCustom && selectedAmount === tier.amount;
                  return (
                    <button
                      key={tier.amount}
                      type="button"
                      id={`modal-tier-${tier.amount}`}
                      onClick={() => handleSelectTier(tier.amount)}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        isSelected
                          ? 'border-[#984732] bg-white shadow-xs ring-2 ring-[#984732]/20'
                          : 'border-[#DECFC0] bg-[#FAF6F0] hover:bg-white'
                      }`}
                    >
                      <span className="font-serif text-base font-bold text-[#232825] block">
                        ${tier.amount.toLocaleString()} {currency}
                      </span>
                      <span className="text-[11px] text-[#5F564F] block leading-tight mt-0.5">
                        {tier.impactDescription}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Amount input */}
            <div>
              <label className="block font-semibold text-[#2D332F] mb-1">
                O ingresa un monto personalizado:
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#7D7166] font-bold">
                  $
                </span>
                <input
                  id="modal-custom-amount-input"
                  type="number"
                  placeholder="Ej: 75000"
                  value={customAmount}
                  onChange={(e) => handleCustomChange(e.target.value)}
                  className="w-full pl-8 pr-16 py-2.5 rounded-xl border border-[#D8CBBC] bg-white text-sm text-[#272B29] focus:outline-none focus:ring-2 focus:ring-[#984732]/30"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#73685E]">
                  {currency}
                </span>
              </div>
            </div>

            {/* Donor info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-medium text-[#2F3531] mb-1">
                  Tu nombre (o anónimo)
                </label>
                <input
                  id="donor-name-input"
                  type="text"
                  placeholder="Nombre completo"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#D8CBBC] bg-white text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="block font-medium text-[#2F3531] mb-1">
                  Correo electrónico para comprobante
                </label>
                <input
                  id="donor-email-input"
                  type="email"
                  required
                  placeholder="tu@correo.com"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#D8CBBC] bg-white text-xs sm:text-sm"
                />
              </div>
            </div>

            {/* Security pledge */}
            <div className="flex items-center gap-2 text-xs text-[#5D544E]">
              <ShieldCheck className="w-4 h-4 text-[#759564] shrink-0" />
              <span>Transacción segura y encriptada • Información 100% privada</span>
            </div>

            {/* Submit */}
            <button
              id="submit-donation-modal-btn"
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#984732] hover:bg-[#803825] text-white font-semibold shadow-md transition-all flex items-center justify-center gap-2 text-sm"
            >
              <Heart className="w-4 h-4" />
              <span>
                QUIERO CONTRIBUIR (${effectiveAmount.toLocaleString()} {currency})
              </span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
