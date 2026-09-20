import React, { useState } from 'react';
import { DONATION_TIERS, TRANSPARENCY_STATS } from '../data/communityData';
import { DonationModal } from './DonationModal';
import { Heart, Sparkles, CheckCircle2, ShieldCheck, PieChart, FileText, ArrowRight } from 'lucide-react';

export const DonationSection: React.FC = () => {
  const [selectedTierIndex, setSelectedTierIndex] = useState<number>(1);
  const [customValue, setCustomValue] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const currentTier = DONATION_TIERS[selectedTierIndex];
  const activeAmount = customValue ? parseInt(customValue, 10) : currentTier.amount;

  return (
    <section id="donaciones" className="py-20 bg-[#F5EFE7] border-t border-[#E8DFC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#984732] block">
            Solidaridad & Impacto Real
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#202522] mt-2 tracking-tight">
            “Tu aporte puede llevar educación donde todavía no llega.”
          </h2>
          <p className="text-base sm:text-lg text-[#524A44] mt-4 leading-relaxed font-normal">
            No concebimos la donación como una transacción impersonal, sino como un puente
            de empatía. Cada recurso nos permite sostener una plataforma educativa gratuita,
            producir materiales sin sesgos y financiar teleconsultas a quienes no pueden pagarlas.
          </p>
        </div>

        {/* Interactive Donation Builder Card */}
        <div className="mt-12 bg-white rounded-3xl border border-[#E0D5C5] p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left side: Tiers and Custom Selector */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#984732] block">
                  Paso 1: Elige un nivel ilustrativo
                </span>
                <p className="text-xs text-[#6B6158] mt-0.5">
                  Puedes seleccionar uno de los montos sugeridos o ingresar el valor que se adapte a ti.
                </p>
              </div>

              {/* Tiers Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DONATION_TIERS.map((tier, idx) => {
                  const isSelected = !customValue && selectedTierIndex === idx;
                  return (
                    <button
                      key={tier.amount}
                      id={`donation-tier-btn-${tier.amount}`}
                      onClick={() => {
                        setSelectedTierIndex(idx);
                        setCustomValue('');
                      }}
                      className={`p-4 rounded-2xl text-left border transition-all duration-200 ${
                        isSelected
                          ? 'border-[#984732] bg-[#FAF4ED] shadow-xs ring-2 ring-[#984732]/25'
                          : 'border-[#E0D5C6] bg-[#FAF8F5] hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-lg font-bold text-[#212623]">
                          {tier.title}
                        </span>
                        {tier.recommended && (
                          <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-[#E5ECE0] text-[#365A27]">
                            Más común
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#594F48] mt-1.5 leading-snug font-medium">
                        {tier.impactDescription}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Custom amount field */}
              <div className="pt-2">
                <label className="block text-xs font-semibold text-[#443C37] mb-1.5">
                  O escribe otro monto en pesos colombianos (COP) / moneda local:
                </label>
                <div className="relative max-w-xs">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-[#807469]">
                    $
                  </span>
                  <input
                    id="section-custom-amount-input"
                    type="number"
                    placeholder="Monto personalizado"
                    value={customValue}
                    onChange={(e) => setCustomValue(e.target.value)}
                    className="w-full pl-8 pr-14 py-2 rounded-xl border border-[#D5C7B7] bg-white text-sm text-[#272B29] focus:outline-none focus:ring-2 focus:ring-[#984732]/30"
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#807469]">
                    COP
                  </span>
                </div>
              </div>
            </div>

            {/* Right side: Real Impact preview + CTA */}
            <div className="lg:col-span-5 bg-[#FAF6F0] rounded-2xl p-6 sm:p-7 border border-[#E3D7C8] space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#984732]">
                  Impacto Directo de tu aporte
                </span>
                <h4 className="font-serif text-2xl font-bold text-[#212623]">
                  ${activeAmount.toLocaleString()} COP
                </h4>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E5D9CC] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#984732]">
                  <Sparkles className="w-4 h-4" />
                  <span>Lo que este aporte hace posible:</span>
                </div>
                <p className="text-xs sm:text-sm text-[#4E453F] leading-relaxed">
                  {customValue
                    ? `Tu aporte libre de $${activeAmount.toLocaleString()} se suma al fondo solidario para subsidiar consultas y financiar capacitaciones comunitarias en zonas rurales y escolares.`
                    : currentTier.details}
                </p>
              </div>

              <button
                id="btn-quiero-contribuir-main"
                onClick={() => setIsModalOpen(true)}
                className="w-full py-4 rounded-xl bg-[#984732] hover:bg-[#803825] text-white text-base font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-98"
              >
                <Heart className="w-5 h-5 fill-current" />
                <span>QUIERO CONTRIBUIR</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-[#73685E]">
                <ShieldCheck className="w-4 h-4 text-[#759564]" />
                <span>Deducción de impuestos disponible • Transparencia certificada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section: ¿A dónde va mi donación? (Transparency & Accountability) */}
        <div id="donde-va-mi-donacion" className="mt-16 pt-12 border-t border-[#E3D9CC]">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#984732] block">
              Cuentas Claras & Rendición Pública
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#202522] mt-1">
              ¿A dónde va mi donación?
            </h3>
            <p className="text-sm sm:text-base text-[#524A44] mt-2 leading-relaxed">
              Creemos que la confianza comunitaria es nuestro mayor activo. Publicamos
              semestralmente reportes financieros abiertos con el destino exacto de cada aporte recibido.
            </p>
          </div>

          {/* 3 Columns breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRANSPARENCY_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E3D9CC] space-y-3 shadow-xs"
              >
                <div className="font-serif text-4xl font-bold text-[#984732]">
                  {stat.percentage}
                </div>
                <h4 className="font-serif text-base font-bold text-[#242A27]">
                  {stat.category}
                </h4>
                <p className="text-xs sm:text-sm text-[#5C524B] leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Public Transparency Report banner */}
          <div className="mt-8 p-4 rounded-xl bg-[#EDE4D8] border border-[#DDD0C0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#524944]">
            <div className="flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-[#883C2A] shrink-0" />
              <span>
                Reporte de Gestión Financiera y de Impacto Social 2025-2026 disponible para descarga libre.
              </span>
            </div>
            <button
              id="btn-ver-informe-transparencia"
              onClick={() => alert('Descargando informe de transparencia financiera y comités de ética de Savia (PDF de 24 páginas).')}
              className="text-xs font-semibold text-[#883C2A] hover:underline whitespace-nowrap flex items-center gap-1"
            >
              <span>Descargar informe auditado</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Donation Modal */}
      <DonationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialAmount={activeAmount}
      />
    </section>
  );
};
