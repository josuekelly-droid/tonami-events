import type { Metadata } from "next";
import { ServiceDetail } from "@/components/services/ServiceDetail";

export const metadata: Metadata = {
  title: "Design Graphique | Tonami Events",
  description:
    "Design graphique professionnel : création de logos, chartes graphiques, supports print, magazines d'entreprise, packaging et branding.",
  openGraph: {
    title: "Design Graphique | Tonami Events",
    description:
      "Une identité visuelle forte et mémorable pour vous démarquer.",
    images: ["/services/design.jpg"],
  },
};

const contenu = {
  titre: "Design Graphique",
  sousTitre: "Créez une identité visuelle mémorable",
  description:
    "Notre équipe de designers graphiques donne vie à votre marque à travers des créations visuelles uniques et percutantes. Chaque projet est pensé pour refléter vos valeurs et toucher votre cible.",
  image: "/services/design.jpg",
  prestations: [
    {
      titre: "Création de logos et chartes graphiques",
      description:
        "Un logo unique et une charte graphique cohérente pour asseoir votre identité de marque sur tous les supports.",
    },
    {
      titre: "Design web et interfaces numériques",
      description:
        "Des interfaces modernes, intuitives et esthétiques pour vos sites web et applications.",
    },
    {
      titre: "Supports print",
      description:
        "Plaquettes commerciales, flyers, affiches, bâches : des impressions de qualité pour votre communication papier.",
    },
    {
      titre: "Magazines et rapports d'entreprise",
      description:
        "Mise en page professionnelle de vos publications : rapports annuels, magazines internes, catalogues.",
    },
    {
      titre: "Packaging et branding",
      description:
        "Un packaging attractif qui valorise vos produits et renforce votre image de marque.",
    },
  ],
  avantages: [
    "Designs originaux et personnalisés",
    "Respect de votre identité de marque",
    "Formats adaptés à tous les supports",
    "Réactivité et écoute",
  ],
};

export default function DesignPage() {
  return <ServiceDetail contenu={contenu} />;
}