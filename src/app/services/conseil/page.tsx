import type { Metadata } from "next";
import { ServiceDetail } from "@/components/services/ServiceDetail";

export const metadata: Metadata = {
  title: "Conseil & Formation | Tonami Events",
  description:
    "Conseil et formation en communication digitale : stratégie digitale, coaching en vente, campagnes publicitaires, accompagnement rédactionnel.",
  openGraph: {
    title: "Conseil & Formation | Tonami Events",
    description:
      "Montez en compétence et définissez une stratégie digitale gagnante.",
    images: ["/services/conseil.jpg"],
  },
};

const contenu = {
  titre: "Conseil & Formation",
  sousTitre: "Montez en compétence",
  description:
    "Nous partageons notre expertise à travers des formations pratiques et des conseils stratégiques adaptés à vos besoins. Que vous soyez entrepreneur, équipe marketing ou dirigeant, nous vous aidons à maîtriser les outils de la communication digitale.",
  image: "/services/conseil.jpg",
  prestations: [
    {
      titre: "Formations en visibilité web",
      description:
        "Apprenez à optimiser votre présence en ligne : SEO, SEA, marketing de contenu et stratégie éditoriale.",
    },
    {
      titre: "Conseils en stratégie digitale",
      description:
        "Audit de votre présence numérique et recommandations personnalisées pour atteindre vos objectifs.",
    },
    {
      titre: "Coaching en vente",
      description:
        "Techniques de vente, relation client et persuasion éthique pour booster vos performances commerciales.",
    },
    {
      titre: "Campagnes publicitaires",
      description:
        "Conception et gestion de campagnes (Google Ads, Facebook Ads) pour maximiser votre retour sur investissement.",
    },
    {
      titre: "Accompagnement rédactionnel",
      description:
        "Aide à la rédaction de vos projets, biographies professionnelles et contenus éditoriaux percutants.",
    },
  ],
  avantages: [
    "Formateurs expérimentés",
    "Programmes personnalisés",
    "Mises en pratique concrètes",
    "Suivi post-formation",
  ],
};

export default function ConseilPage() {
  return <ServiceDetail contenu={contenu} />;
}