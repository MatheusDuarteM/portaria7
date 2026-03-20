interface SectionHeroProps {
  span: string;
  h1: string;
  p: string;
}

const SectionHero = ({ data }: { data: SectionHeroProps }) => {
  return (
    <section className="text-center mb-16" id="inicio">
      <span className="text-green-500 text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 mb-4">
        <span className="animate-pulse">●</span> {data.span}
      </span>
      <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter italic">
        {data.h1}
      </h1>
      <p className="text-zinc-400 max-w-2xl mx-auto">{data.p}</p>
      <div className="mt-10 relative group border-8 border-zinc-900/80 rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]">
        <div className="aspect-video bg-zinc-950 flex items-center justify-center relative">
          <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center cursor-pointer group-hover:scale-110 transition shadow-lg">
            <div className="w-0 h-0 border-t-12 border-t-transparent border-l-20 border-l-white border-b-12 border-b-transparent ml-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
