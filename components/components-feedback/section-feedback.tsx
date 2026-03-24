"use client";
import { useState } from "react";
import { movies, MovieFeedback } from "@/lib/valuesPage";
import Image from "next/image";
import { X } from "lucide-react"; // Importe para um ícone de fechar mais elegante

export function SectionFeedback() {
  const [selected, setSelected] = useState<MovieFeedback | null>(null);

  return (
    <section className="mb-20 px-4 md:px-0" id="videos">
      {/* Título com ajuste de responsividade */}
      <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3 text-white italic mb-8 tracking-tight">
        <span className="bg-yellow-600/20 p-2 rounded text-base">🛎️</span>{" "}
        Interfonando para os Vizinhos
      </h2>

      {/* Grid Responsiva: 1 coluna no mobile, 2 no tablet, 3 no desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {movies.map((movie, i) => (
          <div
            key={i}
            className="group cursor-pointer flex flex-col"
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

              {/* Overlay suave para melhorar leitura do hover no mobile */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
            </div>

            <h4 className="font-bold text-zinc-100 group-hover:text-red-500 transition italic text-sm md:text-base leading-tight">
              {movie.title}
            </h4>
            <p className="text-[11px] md:text-xs text-zinc-500 mt-2 font-medium">
              {movie.views}
            </p>
          </div>
        ))}
      </div>

      {/* Modal - Ajustado para ser "Mobile First" */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] flex items-end md:items-center justify-center p-0 md:p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-[#1a0f0a] border-t md:border border-white/10 rounded-t-3xl md:rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl animate-in slide-in-from-bottom duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão Fechar otimizado para toque */}
            <button
              className="absolute top-4 right-4 text-zinc-500 hover:text-white p-2"
              onClick={() => setSelected(null)}
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl md:text-3xl font-black text-white italic mb-6 pr-8 leading-tight tracking-tighter">
              {selected.title}
            </h2>

            {/* Nota de Destaque */}
            <div className="flex items-center gap-4 mb-8 bg-black/40 p-4 rounded-xl border border-white/5">
              <span className="text-4xl md:text-5xl font-black text-yellow-500">
                {selected.rating}
              </span>
              <p className="text-xs md:text-sm text-zinc-400 italic leading-snug">
                Média das avaliações <br className="hidden md:block" /> dos
                porteiros da 7
              </p>
            </div>

            {/* Seção de Feedbacks Individuais */}
            <div className="space-y-6 mb-8">
              {[
                { user: selected.youtuber, fb: selected.feedback },
                { user: selected.youtuber2, fb: selected.feedback2 },
                { user: selected.youtuber3, fb: selected.feedback3 },
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
