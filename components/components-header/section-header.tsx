import { User } from "lucide-react";

interface SectionHeaderProps {
  span: string;
  a: string;
  a2: string;
  a3: string;
  button: string;
}

const SectionHeader = ({ data }: { data: SectionHeaderProps }) => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-black/20 backdrop-blur-md sticky top-0 z-50 border-b border-white/5">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="bg-yellow-500 text-black font-black p-2 rounded-lg text-xl shadow-[0_0_15px_rgba(234,179,8,0.3)]">
            7
          </div>
          <span className="font-bold text-xl tracking-tighter">
            {data.span}
          </span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-400 border-l border-white/10 pl-8">
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
      <a href="https://www.youtube.com/@CanalPortaria07" target="_blank">
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold text-sm transition shadow-lg shadow-red-900/20">
          {data.button}
        </button>
      </a>
    </nav>
  );
};

export default SectionHeader;
