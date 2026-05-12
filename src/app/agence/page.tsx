import type { Metadata } from "next";
import { EquipeSection } from "@/components/agence/EquipeSection";
import { HistoireSection } from "@/components/agence/HistoireSection";
import { ChiffresSection } from "@/components/agence/ChiffresSection";
import { MethodologieSection } from "@/components/agence/MethodologieSection";
import { ValeursSection } from "@/components/agence/ValeursSection";
import { HeroSection } from "@/components/agence/HeroSection";
import { DirigeantSection } from "@/components/agence/DirigeantSection";

export const metadata: Metadata = {
  title: "L'Agence | Tonami Events",
  description:
    "Découvrez Tonami Events : une agence passionnée dirigée par Désiré AGBANZOUME, spécialisée en production audiovisuelle, design graphique et stratégie digitale au Bénin.",
  openGraph: {
    title: "L'Agence | Tonami Events",
    description:
      "Une équipe créative et passionnée au service de votre communication.",
    images: ["/equipe/desire-agbanzoume.jpg"],
  },
};

export default function AgencePage() {
  return (
    <>
      <HeroSection />
      <DirigeantSection />
      <ChiffresSection />
      <HistoireSection />
      <EquipeSection />
      <MethodologieSection />
      <ValeursSection />
    </>
  );
}