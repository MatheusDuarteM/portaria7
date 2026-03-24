"use client";
import { useState } from "react";
import { User, Menu, X, ChevronDown } from "lucide-react";

interface SectionHeaderProps {
  span: string;
  a: string;
  a2: string;
  a3: string;
  button: string;
}

const SectionHeader = ({ data }: { data: SectionHeaderProps }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/20 backdrop-blur-md sticky top-0 z-50 border-b border-white/5 w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Lado Esquerdo: Logo e Links Desktop */}
        <div className="flex items-center gap-4 md:gap-8">
          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-yellow-500 text-black font-black p-2 rounded-lg text-xl shadow-[0_0_15px_rgba(234,179,8,0.3)]">
              7
            </div>
            <span className="font-bold text-lg md:text-xl tracking-tighter text-white">
              {data.span}
            </span>
          </div>

          {/* Links Navegação - Desktop */}
          <div className="hidden lg:flex gap-6 text-sm font-medium text-gray-400 border-l border-white/10 pl-8">
            <a href="#inicio" className="hover:text-white transition">
              {data.a}
            </a>
            <a href="#videos" className="hover:text-white transition">
              {data.a2}
            </a>
            <a href="#regimento" className="hover:text-white transition">
              {data.a3}
            </a>
          </div>
        </div>

        {/* Centro: Canais - Apenas Desktop */}
        <div className="hidden xl:flex items-center gap-4">
          <span className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest">
            Canais:
          </span>
          <a
            href="https://www.youtube.com/@Duartinh10"
            target="_blank"
            className="group flex items-center gap-2 bg-white/5 hover:bg-red-600/20 p-1.5 pr-3 rounded-full border border-white/10 transition"
          >
            <div className="w-6 h-6 bg-zinc-700 rounded-full flex items-center justify-center overflow-hidden">
              <User size={14} className="text-white" />
            </div>
            <span className="text-xs font-bold text-gray-300">Duartinh10</span>
          </a>
          <a
            href="#"
            target="_blank"
            className="group flex items-center gap-2 bg-white/5 hover:bg-red-600/20 p-1.5 pr-3 rounded-full border border-white/10 transition"
          >
            <div className="w-6 h-6 bg-zinc-700 rounded-full flex items-center justify-center overflow-hidden">
              <User size={14} className="text-white" />
            </div>
            <span className="text-xs font-bold text-gray-300">
              Café com Fritas
            </span>
          </a>
        </div>

        {/* Lado Direito: Botão e Menu Mobile */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.youtube.com/@CanalPortaria07"
            target="_blank"
            className="hidden sm:block"
          >
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold text-sm transition shadow-lg shadow-red-900/20 whitespace-nowrap">
              {data.button}
            </button>
          </a>

          {/* Botão Hambúrguer - Mobile */}
          <button
            className="lg:hidden p-2 text-zinc-400 hover:text-white transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Dropdown Mobile */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#1a0f0a] border-b border-white/10 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="p-6 flex flex-col gap-6">
            <div className="flex flex-col gap-4 text-lg font-bold italic text-zinc-300">
              <a href="#inicio" onClick={() => setIsOpen(false)}>
                {data.a}
              </a>
              <a href="#videos" onClick={() => setIsOpen(false)}>
                {data.a2}
              </a>
              <a href="#regimento" onClick={() => setIsOpen(false)}>
                {data.a3}
              </a>
            </div>

            <div className="h-px bg-white/5 w-full" />

            <div className="space-y-4">
              <p className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest">
                Canais
              </p>
              <div className="grid grid-cols-1 gap-3">
                <a
                  href="https://www.youtube.com/@Duartinh10"
                  target="_blank"
                  className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5"
                >
                  <div className="flex items-center gap-3">
                    <User size={18} className="text-red-500" />
                    <span className="text-white font-medium">Duartinh10</span>
                  </div>
                  <ChevronDown size={14} className="-rotate-90 text-zinc-600" />
                </a>
                <a
                  href="https://www.youtube.com/@CafeComFritas"
                  target="_blank"
                  className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5"
                >
                  <div className="flex items-center gap-3">
                    <User size={18} className="text-red-500" />
                    <span className="text-white font-medium">
                      Café com Fritas
                    </span>
                  </div>
                  <ChevronDown size={14} className="-rotate-90 text-zinc-600" />
                </a>
              </div>
            </div>

            <a
              href="https://www.youtube.com/@CanalPortaria07"
              target="_blank"
              className="sm:hidden"
            >
              <button className="w-full bg-red-600 text-white py-4 rounded-xl font-black uppercase text-sm tracking-tighter">
                {data.button}
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default SectionHeader;
