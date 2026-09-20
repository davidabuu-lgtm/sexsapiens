import React, { useState } from 'react';
import { BLOG_ARTICLES } from '../data/blogData';
import { BlogArticle } from '../types';
import { ArticleModal } from './ArticleModal';
import { Clock, BookOpen, ArrowRight, Sparkles } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<BlogArticle | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('Todos');

  const categories = [
    'Todos',
    'Cultura y Vínculos',
    'Placer y Erotismo',
    'Relaciones y Pareja',
    'Consentimiento',
    'Mitos y Educación',
    'Salud y Emociones',
    'Madurez y Vida',
  ];

  const filteredArticles = BLOG_ARTICLES.filter((article) => {
    if (filterCategory === 'Todos') return true;
    return article.category === filterCategory;
  });

  const featuredArticle = BLOG_ARTICLES[0];
  const regularArticles = filteredArticles.filter(
    (art) => art.id !== (filterCategory === 'Todos' ? featuredArticle.id : null)
  );

  return (
    <section id="blog" className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#984732] block">
            Revista Digital Savia
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#202522] mt-2 tracking-tight">
            “Hablemos de esto”
          </h2>
          <p className="text-base sm:text-lg text-[#554C46] mt-4 leading-relaxed font-normal">
            Una conversación inteligente, empática y sin tabúes entre personas.
            Artículos escritos por especialistas en salud, psicología y sociología
            para pensar la sexualidad con serenidad, evidencia científica y calidez.
          </p>
        </div>

        {/* Category Pills */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = filterCategory === cat;
            return (
              <button
                key={cat}
                id={`blog-category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setFilterCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-150 ${
                  isSelected
                    ? 'bg-[#984732] text-white shadow-xs font-semibold'
                    : 'bg-[#EDE4D8] text-[#4F4640] hover:bg-[#E3D8C9]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Featured Big Article (Shown when "Todos" is selected) */}
        {filterCategory === 'Todos' && (
          <div
            id="featured-article-card"
            onClick={() => setActiveArticle(featuredArticle)}
            className="mt-10 bg-white rounded-3xl border border-[#E3D9CC] overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer grid grid-cols-1 lg:grid-cols-12"
          >
            <div className="lg:col-span-6 h-72 sm:h-96 lg:h-auto overflow-hidden">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover filter saturate-[0.95] hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F4EDE5] text-[#8C3E2B]">
                    Artículo Destacado
                  </span>
                  <span className="text-xs text-[#736A63]">
                    {featuredArticle.category}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#202522] leading-tight">
                  {featuredArticle.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#544C46] leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2ECE3] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={featuredArticle.author.avatar}
                    alt={featuredArticle.author.name}
                    className="w-9 h-9 rounded-full object-cover border border-[#D5C6B5]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-[#242926] block">
                      {featuredArticle.author.name}
                    </span>
                    <span className="text-[11px] text-[#786E66]">
                      {featuredArticle.readTime}
                    </span>
                  </div>
                </div>

                <span className="text-xs font-semibold text-[#984732] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Leer artículo</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularArticles.map((article) => (
            <article
              key={article.id}
              id={`blog-card-${article.id}`}
              onClick={() => setActiveArticle(article)}
              className="bg-white rounded-2xl border border-[#E3D9CC] overflow-hidden shadow-xs hover:shadow-md hover:border-[#984732]/40 transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="h-48 overflow-hidden bg-[#EAE0D3]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover filter saturate-[0.95] hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-6 space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-[#7A7067]">
                    <span className="font-semibold text-[#984732]">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg font-bold text-[#232925] leading-snug">
                    {article.title}
                  </h4>

                  <p className="text-xs text-[#5C534D] leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#F5EFE7] mt-3 flex items-center justify-between">
                <span className="text-xs text-[#6F655D] font-medium">
                  Por {article.author.name}
                </span>
                <span className="text-xs font-semibold text-[#984732] flex items-center gap-1">
                  <span>Leer</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reading View Modal */}
      {activeArticle && (
        <ArticleModal
          article={activeArticle}
          onClose={() => setActiveArticle(null)}
        />
      )}
    </section>
  );
};
