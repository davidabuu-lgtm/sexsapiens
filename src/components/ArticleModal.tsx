import React from 'react';
import { BlogArticle } from '../types';
import { X, Clock, Calendar, Bookmark, Share2, Sparkles, BookOpen } from 'lucide-react';

interface ArticleModalProps {
  article: BlogArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div
      id="article-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#181C1A]/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
    >
      <div
        id="article-modal-container"
        className="bg-[#FAF7F2] rounded-2xl w-full max-w-3xl shadow-2xl border border-[#E4DACD] overflow-hidden max-h-[92vh] flex flex-col"
      >
        {/* Header Bar */}
        <div className="p-4 sm:p-5 bg-[#F5EFE6] border-b border-[#E8DFC9] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#EFE3D5] text-[#863D2B]">
              Revista: Hablemos de esto
            </span>
            <span className="text-xs text-[#73685F] hidden sm:inline">
              • {article.category}
            </span>
          </div>

          <button
            id="close-article-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-full text-[#6D625A] hover:bg-[#EAE0D1] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Reading Area */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8">
          {/* Article Header */}
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#984732]">
              {article.category}
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#202522] leading-tight">
              {article.title}
            </h1>
            <p className="text-base sm:text-lg text-[#554C46] font-normal leading-relaxed italic">
              {article.subtitle}
            </p>

            {/* Author bar */}
            <div className="pt-4 border-t border-[#EAE0D3] flex items-center justify-between flex-wrap gap-4 text-xs text-[#635951]">
              <div className="flex items-center gap-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#D5C6B5]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <span className="font-bold text-[#232825] block text-sm">
                    {article.author.name}
                  </span>
                  <span className="text-xs text-[#70665D]">
                    {article.author.role}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#786E65]">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden border border-[#E3D9CC]">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 sm:h-80 object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Lead Paragraph */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#F4EDE2] border-l-4 border-[#984732] text-sm sm:text-base text-[#38302A] leading-relaxed font-serif italic">
            {article.intro}
          </div>

          {/* Body Sections */}
          <div className="space-y-6 text-sm sm:text-base text-[#3A322C] leading-relaxed">
            {article.sections.map((section, sIdx) => (
              <div key={sIdx} className="space-y-2">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#202522]">
                  {section.heading}
                </h2>
                <p className="leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>

          {/* Takeaways Box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#E8EFE4] border border-[#CFDFCA] space-y-3">
            <div className="flex items-center gap-2 text-[#355928]">
              <Sparkles className="w-5 h-5" />
              <h3 className="font-serif text-lg font-bold">
                Ideas clave para recordar
              </h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#304B26]">
              {article.takeaways.map((takeaway, tIdx) => (
                <li key={tIdx} className="flex items-start gap-2">
                  <span className="font-bold text-[#456E36] mt-0.5">•</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic References */}
          {article.references && article.references.length > 0 && (
            <div className="pt-6 border-t border-[#EAE0D3] space-y-2 text-xs text-[#736960]">
              <span className="font-bold uppercase tracking-wider block text-[#4A423C]">
                Fuentes científicas y bibliografía recomendada:
              </span>
              <ul className="space-y-1 italic">
                {article.references.map((ref, rIdx) => (
                  <li key={rIdx}>— {ref}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F5EFE6] border-t border-[#E8DFC9] flex items-center justify-between">
          <span className="text-xs text-[#635951]">
            Revista libre de suscripciones y muros de pago.
          </span>
          <button
            id="article-finish-btn"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#984732] text-white text-xs sm:text-sm font-semibold hover:bg-[#7F3827]"
          >
            Volver a la revista
          </button>
        </div>
      </div>
    </div>
  );
};
