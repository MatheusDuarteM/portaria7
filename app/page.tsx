"use client";

import { SectionFeedback } from "@/components/components-feedback/section-feedback";
import { footerData, headerData, heroData } from "@/lib/valuesPage";
import SectionHeader from "@/components/components-header/section-header";
import SectionFooter from "@/components/components-footer/section-footer";
import SectionHero from "@/components/components-abordagem/section-abordagem";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a0f0a] bg-[radial-gradient(circle_at_center,#241510_0%,#1a0f0a_100%)] text-white font-sans selection:bg-red-600">
      <SectionHeader data={headerData} />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <SectionHero data={heroData} />
        <SectionFeedback />

        <SectionFooter data={footerData} />
      </main>
    </div>
  );
}
