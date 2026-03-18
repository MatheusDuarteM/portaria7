"use client"; // Necessário para gerenciar estado e cliques no Next.js App Router

import { User } from "lucide-react"; // Importando ícones genéricos
import { useState } from "react";

// Definição do tipo para as informações do filme
interface MovieFeedback {
  title: string;
  category: string;
  views: string;
  imageUrl: string;
  feedback: string;
  feedback2: string;
  feedback3: string;
  rating: number; // Nota de 1 a 10
  videoLink: string;
}

const movies: MovieFeedback[] = [
  {
    title: "Aquele filme de terror que parece comédia",
    category: "Humor",
    views: "Comedia, Terror visualizações",
    imageUrl: "/capa1.jpg",
    feedback:
      "Uma verdadeira pérola do cinema 'B'. A premissa é séria, mas a execução é tão absurdamente galhofa...",
    feedback2:
      "O filme é tão ruim que chega a ser bom, proporcionando risadas involuntárias e momentos de pura diversão.",
    feedback3:
      "Recomendo para quem quer uma experiência cinematográfica única, onde o riso é garantido mesmo nas cenas mais tensas.",
    rating: 8.5,
    videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Por que o Batman nunca usa o interfone?",
    category: "Investigação",
    views: "Humor, Drama visualizações",
    imageUrl: "/capa2.jpg",
    feedback:
      "Uma análise necessária sobre a segurança de condomínios em Gotham.",
    feedback2:
      "O vídeo explora de forma divertida e crítica as possíveis razões por trás dessa escolha do Batman, misturando humor e investigação.",
    feedback3:
      "Indispensável para fãs de super-heróis e entusiastas de teorias conspiratórias sobre a vida cotidiana dos vigilantes urbanos.",
    rating: 9.2,
    videoLink: "https://www.youtube.com/watch?v=exemplo2",
  },
  {
    title: "Por que o Batman nunca usa o interfone?",
    category: "Investigação",
    views: "Humor, Drama visualizações",
    imageUrl: "/capa2.jpg",
    feedback:
      "Uma análise necessária sobre a segurança de condomínios em Gotham.",
    feedback2:
      "O vídeo explora de forma divertida e crítica as possíveis razões por trás dessa escolha do Batman, misturando humor e investigação.",
    feedback3:
      "Indispensável para fãs de super-heróis e entusiastas de teorias conspiratórias sobre a vida cotidiana dos vigilantes urbanos.",
    rating: 9.2,
    videoLink: "https://www.youtube.com/watch?v=exemplo2",
  },

  // Adicione quantos filmes quiser seguindo o mesmo padrão...
];

export default function Home() {
  const [videoSelecionado, setVideoSelecionado] =
    useState<MovieFeedback | null>(null);

  return (
    /* Ajuste de Cor: Fundo marrom tabaco profundo com gradiente radial */
    <div className="min-h-screen bg-[#1a0f0a] bg-[radial-gradient(circle_at_center,#241510_0%,#1a0f0a_100%)] text-white font-sans selection:bg-red-600">
      {/* Header / Navbar - Mantendo o fundo escuro transparente para não contrastar demais */}
      <nav className="flex items-center justify-between px-8 py-4 bg-black/20 backdrop-blur-md sticky top-0 z-50 border-b border-white/5">
        {/* Header / Navbar Simulado */}

        <div className="flex items-center gap-8">
          {/* Logo */}

          <div className="flex items-center gap-3">
            <div className="bg-yellow-500 text-black font-black p-2 rounded-lg text-xl shadow-[0_0_15px_rgba(234,179,8,0.3)]">
              7
            </div>

            <span className="font-bold text-xl tracking-tighter">
              Portaria 7
            </span>
          </div>

          {/* Links de Navegação */}

          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-400 border-l border-white/10 pl-8">
            <a href="#inicio" className="hover:text-white transition">
              Início
            </a>

            <a href="#videos" className="hover:text-white transition">
              Vídeos
            </a>

            <a href="#regimento" className="hover:text-white transition">
              Regimento
            </a>
          </div>

          {/* Ícones dos Integrantes */}

          <div className="hidden lg:flex items-center gap-4 ml-4">
            <span className="text-[10px] uppercase text-white font-bold tracking-widest">
              Canais:
            </span>

            {/* Integrante 1 */}

            <a
              href="https://www.youtube.com/@Duartinh10"
              target="_blank"
              className="group flex items-center gap-2 bg-white/5 hover:bg-red-600/20 p-1.5 pr-3 rounded-full border border-white/10 transition"
              title="Canal do Integrante 1"
            >
              <div className="w-6 h-6 bg-zinc-700 rounded-full flex items-center justify-center overflow-hidden">
                {/* Você pode trocar por <Image src="/foto1.jpg" ... /> */}

                <User size={14} className="text-white" />
              </div>

              <span className="text-xs font-bold text-gray-300 group-hover:text-white">
                Duartinh10
              </span>
            </a>

            {/* Integrante 2 */}

            <a
              href="URL_DO_CANAL_2"
              target="_blank"
              className="group flex items-center gap-2 bg-white/5 hover:bg-red-600/20 p-1.5 pr-3 rounded-full border border-white/10 transition"
              title="Canal do Integrante 2"
            >
              <div className="w-6 h-6 bg-zinc-700 rounded-full flex items-center justify-center overflow-hidden">
                <User size={14} className="text-white" />
              </div>

              <span className="text-xs font-bold text-gray-300 group-hover:text-white">
                Café com Fritas
              </span>
            </a>
          </div>
        </div>

        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold text-sm transition shadow-lg shadow-red-900/20">
          Entrar para o Condomínio
        </button>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Seção Destaque (Hero) */}
        <section className="text-center mb-16" id="inicio">
          <span className="text-green-500 text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 mb-4">
            <span className="animate-pulse">●</span> Encomenda Recente
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter italic">
            Última Entrega na Portaria
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Encomendas cinematográficas e fofocas do sétimo andar. O porteiro já
            autorizou sua entrada.
          </p>

          {/* Player de Vídeo - Ajustado para harmonizar com o novo fundo */}
          <div className="mt-10 relative group border-8 border-zinc-900/80 rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]">
            <div className="aspect-video bg-zinc-950 flex items-center justify-center relative">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center cursor-pointer group-hover:scale-110 transition shadow-lg">
                <div className="w-0 h-0 border-t-12 border-t-transparent border-l-20 border-l-white border-b-12 border-b-transparent ml-2" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black text-left">
              <h2 className="text-2xl font-bold italic tracking-tight">
                O Iluminado: Reação de quem não dorme
              </h2>
            </div>
          </div>
        </section>

        {/* Seção Vídeos Anteriores */}
        <section className="mb-20" id="videos">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-3 text-white italic tracking-tight">
              <span className="bg-yellow-600/20 p-2 rounded text-base">🛎️</span>{" "}
              Interfonando para os Vizinhos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {movies.map((movie, i) => (
              <div
                key={i}
                className="group cursor-pointer"
                onClick={() => setVideoSelecionado(movie)}
              >
                {/* Container da Imagem com tom marrom no hover */}
                <div className="aspect-video bg-zinc-900 rounded-xl mb-4 overflow-hidden relative border border-white/5 shadow-lg group-hover:border-red-600/30 transition-all">
                  <div className="absolute top-2 left-2 z-10">
                    <span className="bg-red-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                      {movie.category}
                    </span>
                  </div>
                  {/* Placeholder escuro que combina com o tema */}
                  <div className="w-full h-full bg-linear-to-br from-[#2a1a14] to-[#1a0f0a] group-hover:scale-105 transition duration-500" />
                </div>

                <h4 className="font-bold text-zinc-100 group-hover:text-red-500 transition italic">
                  {movie.title}
                </h4>
                <p className="text-xs text-zinc-500 mt-1">{movie.views}</p>
              </div>
            ))}
          </div>

          {/* O MODAL - Ajustado para o tom marrom escuro */}
          {videoSelecionado && (
            <div
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setVideoSelecionado(null)}
            >
              <div
                className="bg-[#1a0f0a] border border-white/10 rounded-2xl max-w-lg w-full p-8 relative shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* ... conteúdo do modal (mantendo as cores mas usando fundo #1a0f0a) ... */}
                <button
                  className="absolute top-4 right-4 text-zinc-500 hover:text-white"
                  onClick={() => setVideoSelecionado(null)}
                >
                  ✕
                </button>
                <span className="text-red-500 font-bold text-xs uppercase tracking-widest">
                  {videoSelecionado.category}
                </span>
                <h2 className="text-3xl font-black text-white mt-2 mb-6 italic tracking-tighter">
                  {videoSelecionado.title}
                </h2>
                <div className="flex items-center gap-4 mb-6 bg-black/40 p-4 rounded-xl border border-white/5">
                  <span className="text-5xl font-black text-yellow-500">
                    {videoSelecionado.rating}
                  </span>
                  <p className="text-sm text-zinc-400 italic">
                    Nota dada pelo <br />
                    porteiro da 7
                  </p>
                </div>
                <p className="text-zinc-300 italic mb-8 leading-relaxed border-l-2 border-red-600 pl-4">
                  {videoSelecionado.feedback}
                </p>
                <p className="text-zinc-300 italic mb-8 leading-relaxed border-l-2 border-red-600 pl-4">
                  {videoSelecionado.feedback2}
                </p>
                <p className="text-zinc-300 italic mb-8 leading-relaxed border-l-2 border-red-600 pl-4">
                  {videoSelecionado.feedback3}
                </p>
                <a
                  href={videoSelecionado.videoLink}
                  target="_blank"
                  className="block w-full bg-red-600 hover:bg-red-700 text-white text-center py-4 rounded-xl font-bold uppercase transition tracking-tighter"
                >
                  Autorizar entrada (Ver Vídeo)
                </a>
              </div>
            </div>
          )}
        </section>
        {/* Regimento Interno (Rodapé Estilizado) */}
        <section
          className="grid md:grid-cols-2 gap-12 items-center border-t border-white/10 pt-20"
          id="regimento"
        >
          <div>
            <h2 className="text-4xl font-black italic text-yellow-500 mb-6 uppercase tracking-tighter">
              Regimento Interno
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Bem-vindo ao Condomínio Sétima Arte. Aqui na Portaria 7, nossa
                missão é simples: barrar o tédio e autorizar a entrada do riso.
              </p>
              <ul className="space-y-2">
                <li className="flex gap-3">
                  🔑 <span>Reações sinceras aos maiores blockbusters.</span>
                </li>
                <li className="flex gap-3">
                  🔑 <span>Análises técnicas (ou quase isso) da guarita.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-yellow-500 p-1 rounded-2xl rotate-2 shadow-2xl">
            <div className="bg-zinc-900 p-8 rounded-xl -rotate-2 flex flex-col items-center text-center">
              <div className="bg-yellow-500/10 p-4 rounded-full mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-2 uppercase italic">
                Aviso do Síndico
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Inscreva-se para não perder a próxima entrega e evitar multas
                por falta de entretenimento.
              </p>
              <button className="w-full bg-red-600 py-3 rounded-lg font-black uppercase hover:bg-red-700 transition">
                Entrar para o Condomínio
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
