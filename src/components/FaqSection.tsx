import React, { useState } from 'react';
import { FAQ_ITEMS, FAQ_CATEGORIES } from '../data/faqData';
import { Search, ChevronDown, ChevronUp, HelpCircle, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas las dudas');
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_ITEMS[0].id);

  // Anonymous question state
  const [anonymousQuestion, setAnonymousQuestion] = useState('');
  const [questionCategory, setQuestionCategory] = useState('Placer y Deseo');
  const [questionSent, setQuestionSent] = useState(false);

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'Todas las dudas' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const handleSendAnonymousQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!anonymousQuestion.trim()) return;
    setQuestionSent(true);
    setAnonymousQuestion('');
  };

  return (
    <section id="preguntas" className="py-20 bg-[#F4EFEA] border-t border-[#E8DFC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#984732] block">
            Dudas Frecuentes Sin Tabúes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#202522] mt-2 tracking-tight">
            “Preguntar también es cuidarse.”
          </h2>
          <p className="text-base sm:text-lg text-[#554C46] mt-4 leading-relaxed font-normal">
            No existen preguntas tontas, vergonzosas ni prohibidas.
            Aquí recopilamos las dudas más habituales que recibimos en consulta y talleres,
            respondidas con rigor científico, lenguaje directo y respeto absoluto.
          </p>
        </div>

        {/* Search Engine Interface: "¿Qué quieres saber sobre sexualidad?" */}
        <div className="mt-10 max-w-3xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#887B70]" />
            <input
              id="faq-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="¿Qué quieres saber sobre sexualidad? (ej: dolor, orgasmo, ITS, deseo...)"
              className="w-full pl-12 pr-4 py-3.5 sm:py-4 rounded-2xl border border-[#D5C6B5] bg-white text-sm sm:text-base text-[#242926] placeholder-[#908477] shadow-xs focus:outline-none focus:ring-2 focus:ring-[#984732]/30"
            />
          </div>

          {/* Categories */}
          <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {FAQ_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  id={`faq-category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-150 ${
                    isSelected
                      ? 'bg-[#984732] text-white shadow-xs font-semibold'
                      : 'bg-[#EAE0D3] text-[#4E453F] hover:bg-[#DDD2C4]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="mt-8 max-w-3xl space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  id={`faq-accordion-item-${faq.id}`}
                  className="bg-white rounded-2xl border border-[#E2D6C6] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 hover:bg-[#FAF6F0] transition-colors"
                  >
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#984732] block mb-1">
                        {faq.category}
                      </span>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#232825] leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="p-1 rounded-full text-[#7B7066] shrink-0 mt-1">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#984732]" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#4E453F] space-y-3 border-t border-[#F3ECE1]">
                      <p className="leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                      {faq.scientificContext && (
                        <div className="p-3 rounded-xl bg-[#F6F0E6] text-[11px] text-[#5C524A] border border-[#EAE0D2]">
                          <strong className="text-[#2B302C]">
                            Evidencia clínica:
                          </strong>{' '}
                          {faq.scientificContext}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center bg-white rounded-2xl border border-[#E2D6C6]">
              <p className="text-sm text-[#5C524A]">
                No encontramos una respuesta idéntica a tu búsqueda.
              </p>
              <p className="text-xs text-[#7A7067] mt-1">
                Puedes enviarnos tu duda de forma 100% anónima en el formulario debajo.
              </p>
            </div>
          )}
        </div>

        {/* Anonymous Question Submission Box */}
        <div className="mt-14 max-w-3xl bg-white rounded-3xl border border-[#E0D5C5] p-6 sm:p-8 shadow-xs">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[#984732]">
              <HelpCircle className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Buzón Comunitario Anónimo
              </span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#212623]">
              ¿No encontraste lo que buscabas? Haz tu pregunta en anonimato
            </h3>
            <p className="text-xs sm:text-sm text-[#5C524B] leading-relaxed">
              No solicitamos tu nombre, correo ni datos de identificación.
              El equipo de profesionales médicos y terapeutas de Savia responde
              periódicamente las dudas más comunes en nuestra revista y cursos.
            </p>
          </div>

          {questionSent ? (
            <div className="mt-6 p-6 rounded-2xl bg-[#E5ECE0] text-[#345927] flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 shrink-0" />
              <div className="text-xs sm:text-sm">
                <span className="font-bold block">
                  ¡Tu pregunta fue recibida con éxito y en estricto anonimato!
                </span>
                <span>
                  La revisaremos en el próximo comité editorial para integrarla a nuestras guías públicas.
                </span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSendAnonymousQuestion} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#303632] mb-1">
                    Tema aproximado:
                  </label>
                  <select
                    id="anonymous-category-select"
                    value={questionCategory}
                    onChange={(e) => setQuestionCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#D5C6B5] bg-[#FAF8F5] text-xs text-[#2A302C] focus:outline-none focus:ring-1 focus:ring-[#984732]"
                  >
                    <option value="Placer y Deseo">Placer y Deseo</option>
                    <option value="Cuerpo y Anatomía">Cuerpo y Anatomía</option>
                    <option value="Salud e ITS">Salud e ITS</option>
                    <option value="Relaciones y Pareja">Relaciones y Pareja</option>
                    <option value="Consentimiento y Límites">Consentimiento y Límites</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <div className="flex items-center gap-2 text-[11px] text-[#6A6057] pb-2">
                    <ShieldCheck className="w-4 h-4 text-[#759564]" />
                    <span>IP y metadatos no son almacenados</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#303632] mb-1">
                  Escribe tu duda con total confianza:
                </label>
                <textarea
                  id="anonymous-question-textarea"
                  rows={3}
                  required
                  value={anonymousQuestion}
                  onChange={(e) => setAnonymousQuestion(e.target.value)}
                  placeholder="Ej: ¿Es perjudicial usar lubricante todos los días? o ¿Por qué siento dolor al penetrar?..."
                  className="w-full p-3 rounded-xl border border-[#D5C6B5] bg-[#FAF8F5] text-xs sm:text-sm text-[#2A302C] placeholder-[#8F8377] focus:outline-none focus:ring-1 focus:ring-[#984732]"
                />
              </div>

              <button
                id="btn-enviar-pregunta-anonima"
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-[#984732] hover:bg-[#803825] text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Enviar pregunta anónima</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
