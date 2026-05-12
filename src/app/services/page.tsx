import type { Metadata } from "next";
import { HeroServices } from "@/components/services/HeroServices";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { CTAServices } from "@/components/services/CTAServices";

export const metadata: Metadata = {
  title: "Nos Services | Tonami Events",
  description:
    "Production audiovisuelle, design graphique, services numériques, conseil et formation, location de matériel : découvrez tous nos services de communication.",
  openGraph: {
    title: "Nos Services | Tonami Events",
    description:
      "Une gamme complète de services pour répondre à tous vos besoins en communication.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <HeroServices />
      <ServicesGrid />
      <CTAServices />
    </>
  );
}