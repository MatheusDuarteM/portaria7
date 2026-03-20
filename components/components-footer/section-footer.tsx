"use client";

interface SectionFooterProps {
  h2: string;
  p: string;
  li: string;
  li2: string;
  h3: string;
  p2: string;
  a: string;
}

const SectionFooter = ({ data }: { data: SectionFooterProps }) => {
  return (
    <section
      className="grid md:grid-cols-2 gap-12 items-center border-t border-white/10 pt-20"
      id="regimento"
    >
      <div>
        <h2 className="text-4xl font-black italic text-yellow-500 mb-6 uppercase">
          {data.h2}
        </h2>
        <div className="space-y-4 text-gray-300">
          <p>{data.p}</p>
          <ul className="space-y-2">
            <li>🔑 {data.li}</li>
            <li>🔑 {data.li2}</li>
          </ul>
        </div>
      </div>
      <div className="bg-yellow-500 p-1 rounded-2xl rotate-2 shadow-2xl">
        <div className="bg-zinc-900 p-8 rounded-xl -rotate-2 flex flex-col items-center text-center">
          <h3 className="text-xl font-bold mb-2 uppercase italic">{data.h3}</h3>
          <p className="text-gray-400 text-sm mb-6">{data.p2}</p>
          <a
            href="https://www.youtube.com/@CanalPortaria07"
            target="_blank"
            className="w-full bg-red-600 py-3 rounded-lg font-black uppercase text-center hover:bg-red-700"
          >
            {data.a}
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionFooter;
