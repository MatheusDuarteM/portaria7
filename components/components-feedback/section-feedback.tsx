"use client";
import { useState } from "react";
import { movies, MovieFeedback } from "@/lib/valuesPage";
import Image from "next/image";

export function SectionFeedback() {
  const [selected, setSelected] = useState<MovieFeedback | null>(null);

  return (
    <section className="mb-20" id="videos">
      <h2 className="text-2xl font-bold flex items-center gap-3 text-white italic mb-8">
        <span className="bg-yellow-600/20 p-2 rounded text-base">🛎️</span>{" "}
        Interfonando para os Vizinhos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {movies.map((movie, i) => (
          <div
            key={i}
            className="group cursor-pointer"
            onClick={() => setSelected(movie)}
          >
            <div className="aspect-video bg-zinc-900 rounded-xl mb-4 overflow-hidden relative border border-white/5 shadow-lg group-hover:border-red-600/30 transition-all">
              <div className="absolute top-2 left-2 z-10">
                <span className="bg-red-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                  {movie.category}
                </span>
              </div>
              {/* A IMAGEM: Usando a tag img padrão ou Image do Next.js */}
              <Image
                src={movie.imageUrl}
                alt={movie.title}
                fill // Esta propriedade faz a imagem ocupar todo o espaço do container pai
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <h4 className="font-bold text-zinc-100 group-hover:text-red-500 transition italic">
              {movie.title}
            </h4>
            <p className="text-xs text-zinc-500 mt-1">{movie.views}</p>
          </div>
        ))}
      </div>

      {/* Modal Renderizado Condicionalmente */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-[#1a0f0a] border border-white/10 rounded-2xl max-w-lg w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-zinc-500 hover:text-white"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
            <h2 className="text-3xl font-black text-white italic mb-6">
              {selected.title}
            </h2>
            <div className="flex items-center gap-4 mb-6 bg-black/40 p-4 rounded-xl">
              <span className="text-5xl font-black text-yellow-500">
                {selected.rating}
              </span>
              <p className="text-sm text-zinc-400 italic">
                Nota dada pelo porteiro 7
              </p>
            </div>
            <p>{selected.youtuber}</p>

            <p className="text-zinc-300 italic mb-8 leading-relaxed border-l-2 border-red-600 pl-4">
              {selected.feedback}
            </p>

            <p>{selected.youtuber2}</p>

            <p className="text-zinc-300 italic mb-8 leading-relaxed border-l-2 border-red-600 pl-4">
              {selected.feedback2}
            </p>

            <p>{selected.youtuber3}</p>

            <p className="text-zinc-300 italic mb-8 leading-relaxed border-l-2 border-red-600 pl-4">
              {selected.feedback3}
            </p>
            <a
              href={selected.videoLink}
              target="_blank"
              className="block w-full bg-red-600 text-center py-4 rounded-xl font-bold uppercase"
            >
              Autorizar entrada
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
