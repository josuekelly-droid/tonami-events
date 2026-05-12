import type { Metadata } from "next";
import { ServiceDetail } from "@/components/services/ServiceDetail";

export const metadata: Metadata = {
  title: "Services Numériques | Tonami Events",
  description:
    "Services numériques : création de sites web, community management, gestion des réseaux sociaux, organisation de webinaires et référencement.",
  openGraph: {
    title: "Services Numériques | Tonami Events",
    description:
      "Développez votre présence en ligne et engagez votre communauté.",
    images: ["/services/numerique.jpg"],
  },
};

const contenu = {
  titre: "Services Numériques",
  sousTitre: "Développez votre présence en ligne",
  description:
    "Dans un monde connecté, votre présence numérique est essentielle. Nous vous aidons à bâtir une stratégie digitale complète : site web, réseaux sociaux, community management et bien plus.",
  image: "/services/numerique.jpg",
  prestations: [
    {
      titre: "Conception et développement de sites web",
      description:
        "Sites vitrines, e-commerce, blogs : nous créons des sites modernes, rapides et optimisés pour le référencement.",
    },
    {
      titre: "Community management",
      description:
        "Animation de vos communautés, création de contenu engageant et gestion de votre e-réputation.",
    },
    {
      titre: "Gestion des réseaux sociaux",
      description:
        "Stratégie social media, planning éditorial, création de visuels et suivi des performances.",
    },
    {
      titre: "Organisation de webinaires",
      description:
        "Planification et animation de webinaires professionnels pour former ou présenter vos services.",
    },
    {
      titre: "Intégration annuaires d'affaires",
      description:
        "Référencement de votre entreprise dans les annuaires professionnels pour améliorer votre visibilité locale.",
    },
  ],
  avantages: [
    "Stratégie digitale sur mesure",
    "Contenu optimisé pour le web",
    "Suivi et reporting régulier",
    "Présence en ligne maîtrisée",
  ],
};

export default function NumeriquePage() {
  return <ServiceDetail contenu={contenu} />;
}