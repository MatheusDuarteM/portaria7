"use client";
import { useState, useMemo } from "react";
import { movies, MovieFeedback } from "@/lib/valuesPage";
import Image from "next/image";
import { X, Search } from "lucide-react";

export function SectionFeedback() {
  const [selected, setSelected] = useState<MovieFeedback | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  // 1. Extrair categorias únicas automaticamente
  const categories = useMemo(() => {
    const cats = movies.map((m) => m.category);
    return ["Todos", ...Array.from(new Set(cats))];
  }, []);

  // 2. Filtrar a lista de filmes baseada nos estados
  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesSearch = movie.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        activeCategory === "Todos" || movie.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <section className="mb-20 px-4 md:px-0" id="videos">
      <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3 text-white mb-8 tracking-tight italic">
        <span className="bg-yellow-600/20 p-2 rounded text-base">🛎️</span>
        Interfonando para os Vizinhos
      </h2>

      {/* --- ÁREA DE FILTROS --- */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        {/* Busca por Nome */}
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
            size={18}
          />
          <input
            type="text"
            placeholder="Procurar Video..."
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-600/50 transition"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filtro por Categorias */}
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest border transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-red-600 border-red-600 text-white shadow-lg shadow-red-900/20"
                  : "bg-white/5 border-white/10 text-zinc-500 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- GRID DE VÍDEOS FILTRADOS --- */}
      {filteredMovies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {filteredMovies.map((movie, i) => (
            <div
              key={i}
              className="group cursor-pointer flex flex-col animate-in fade-in zoom-in duration-300"
              onClick={() => setSelected(movie)}
            >
              <div className="aspect-video bg-zinc-900 rounded-xl mb-4 overflow-hidden relative border border-white/5 shadow-lg group-hover:border-red-600/30 transition-all">
                <div className="absolute top-2 left-2 z-20">
                  <span className="bg-red-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                    {movie.category}
                  </span>
                </div>
                <Image
                  src={movie.imageUrl}
                  alt={movie.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-500 z-10"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
              </div>
              <h4 className="font-bold text-zinc-100 group-hover:text-red-500 transition italic text-sm md:text-base leading-tight">
                {movie.title}
              </h4>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
          <p className="text-zinc-500 italic">
            Nenhum vizinho encontrado com esses critérios... 🛎️
          </p>
        </div>
      )}

      {/* --- MODAL (Mantido igual ao seu, apenas ajustando z-index) --- */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-110 flex items-end md:items-center justify-center p-0 md:p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-[#1a0f0a] border-t md:border border-white/10 rounded-t-3xl md:rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl animate-in slide-in-from-bottom duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-zinc-500 hover:text-white p-2"
              onClick={() => setSelected(null)}
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl md:text-3xl font-black text-white italic mb-6 pr-8 leading-tight tracking-tighter">
              {selected.title}
            </h2>

            <div className="flex items-center gap-4 mb-8 bg-black/40 p-4 rounded-xl border border-white/5">
              <p className="text-xs md:text-sm text-zinc-400 leading-snug">
                Média das avaliações <br className="hidden md:block" />
              </p>
              <span className="text-4xl md:text-5xl font-black text-yellow-500">
                {selected.rating}
              </span>
            </div>

            <div className="space-y-6 mb-8">
              {[
                {
                  user: selected.youtuber,
                  fb: selected.feedback,
                  nota: selected.nota1,
                },
                {
                  user: selected.youtuber2,
                  fb: selected.feedback2,
                  nota: selected.nota2,
                },
                {
                  user: selected.youtuber3,
                  fb: selected.feedback3,
                  nota: selected.nota3,
                },
              ].map(
                (item, idx) =>
                  item.user && (
                    <div key={idx} className="group/item">
                      <p className="text-[10px] uppercase font-bold text-red-500 tracking-widest mb-1">
                        {item.user}
                      </p>
                      <p className="text-zinc-300 italic text-sm md:text-base leading-relaxed border-l-2 border-zinc-700 group-hover/item:border-red-600 transition-colors pl-4">
                        {item.fb}
                      </p>
                      <p className="text-yellow-500 font-bold text-lg md:text-xl mt-2">
                        Nota: {item.nota}
                      </p>
                    </div>
                  ),
              )}
            </div>

            <a
              href={selected.videoLink}
              target="_blank"
              className="block w-full bg-red-600 hover:bg-red-700 text-white text-center py-4 rounded-xl font-black uppercase text-sm tracking-tighter transition-transform active:scale-95"
            >
              Autorizar entrada (Ver Vídeo)
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
