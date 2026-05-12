import type { Metadata } from "next";
import { ServiceDetail } from "@/components/services/ServiceDetail";

export const metadata: Metadata = {
  title: "Location de Matériel Audiovisuel | Tonami Events",
  description:
    "Location de matériel audiovisuel professionnel : caméras, éclairage, prise de son, studio de post-production et drones.",
  openGraph: {
    title: "Location de Matériel Audiovisuel | Tonami Events",
    description:
      "Accédez à du matériel professionnel pour vos productions.",
    images: ["/services/location.jpg"],
  },
};

const contenu = {
  titre: "Location de Matériel",
  sousTitre: "Équipez-vous comme un pro",
  description:
    "Nous mettons à votre disposition du matériel audiovisuel professionnel pour tous vos projets : tournages, événements, productions. Que vous soyez professionnel ou amateur exigeant, nous avons l'équipement qu'il vous faut.",
  image: "/services/location.jpg",
  prestations: [
    {
      titre: "Caméras professionnelles",
      description:
        "Caméras 4K/6K, reflex hybrides, caméras de cinéma : un parc complet pour tous les besoins.",
    },
    {
      titre: "Éclairage et accessoires",
      description:
        "Panneaux LED, softboxes, réflecteurs : maîtrisez la lumière pour des images parfaites.",
    },
    {
      titre: "Matériel de prise de son",
      description:
        "Micros, enregistreurs, perches : un son cristallin pour accompagner vos images.",
    },
    {
      titre: "Studio de post-production",
      description:
        "Accès à notre studio équipé pour le montage, l'étalonnage et le mixage de vos projets.",
    },
    {
      titre: "Drone et stabilisateurs",
      description:
        "Prises de vue aériennes et plans stabilisés pour des séquences spectaculaires.",
    },
  ],
  avantages: [
    "Matériel récent et entretenu",
    "Conseils personnalisés",
    "Tarifs compétitifs",
    "Disponibilité flexible",
  ],
};

export default function LocationPage() {
  return <ServiceDetail contenu={contenu} />;
}