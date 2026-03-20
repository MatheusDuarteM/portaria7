"use client"; // Necessário para gerenciar o clique e o estado do player
import { useState } from "react";

interface SectionHeroProps {
  span: string;
  h1: string;
  p: string;
  videoUrl?: string; // Adicionei essa prop para você passar o link do vídeo
}

const SectionHero = ({ data }: { data: SectionHeroProps }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Função simples para transformar link do YouTube em link de "embed"
  // Função robusta para garantir o formato de embed
  const getEmbedUrl = (url: string) => {
    if (!url) return "";

    // Se já for embed, apenas adiciona o autoplay
    if (url.includes("youtube.com/embed/")) {
      return url.includes("?") ? `${url}&autoplay=1` : `${url}?autoplay=1`;
    }

    // Se for link comum, extrai o ID e monta o embed
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}?autoplay=1`;
    }

    return url;
  };

  // URL padrão caso não venha no data (RickRoll de segurança rs)
  const videoLink =
    data.videoUrl || "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";

  return (
    <section className="text-center mb-16" id="inicio">
      <span className="text-green-500 text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 mb-4">
        <span className="animate-pulse">●</span> {data.span}
      </span>
      <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter italic">
        {data.h1}
      </h1>
      <p className="text-zinc-400 max-w-2xl mx-auto">{data.p}</p>

      <div className="mt-10 relative group border-8 border-zinc-900/80 rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] bg-zinc-950">
        <div className="aspect-video flex items-center justify-center relative">
          {isPlaying ? (
            /* PLAYER REAL */
            <iframe
              src={getEmbedUrl(videoLink)}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          ) : (
            /* CAPA COM BOTÃO DE PLAY */
            <div
              className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer group"
              onClick={() => setIsPlaying(true)}
            >
              {/* Overlay Escuro para dar profundidade */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

              {/* Botão de Play */}
              <div className="relative z-10 w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                <div className="w-0 h-0 border-t-12 border-t-transparent border-l-20 border-l-white border-b-12 border-b-transparent ml-2" />
              </div>

              {/* Texto de aviso (opcional) */}
              <div className="absolute bottom-6 left-6 z-10 text-left">
                <p className="text-white font-bold italic text-xl drop-shadow-lg">
                  Clique para autorizar a entrada
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
