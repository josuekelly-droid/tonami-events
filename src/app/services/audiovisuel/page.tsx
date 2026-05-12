import type { Metadata } from "next";
import { ServiceDetail } from "@/components/services/ServiceDetail";

export const metadata: Metadata = {
  title: "Production Audiovisuelle | Tonami Events",
  description:
    "Production audiovisuelle professionnelle : vidéos publicitaires, documentaires, reportages, captation d'événements, montage et animation 2D/3D.",
  openGraph: {
    title: "Production Audiovisuelle | Tonami Events",
    description:
      "Des productions vidéo impactantes pour valoriser votre message.",
    images: ["/services/audiovisuel.jpg"],
  },
};

const contenu = {
  titre: "Production Audiovisuelle",
  sousTitre: "Donnez vie à votre message",
  description:
    "Notre équipe de réalisateurs, cadreurs et monteurs met son expertise au service de vos projets audiovisuels. De la conception à la diffusion, nous vous accompagnons à chaque étape pour des productions professionnelles et impactantes.",
  image: "/services/audiovisuel.jpg",
  prestations: [
    {
      titre: "Vidéos publicitaires et spots TV",
      description:
        "Des publicités percutantes conçues pour capter l'attention et marquer les esprits. Diffusion TV et web.",
    },
    {
      titre: "Documentaires et reportages",
      description:
        "Racontez votre histoire avec authenticité grâce à des documentaires et reportages sur mesure.",
    },
    {
      titre: "Captation d'événements",
      description:
        "Immortalisez vos événements (conférences, concerts, cérémonies) avec un rendu cinématographique.",
    },
    {
      titre: "Montage et post-production",
      description:
        "Étalonnage, mixage son, effets visuels : nous sublimons vos images en post-production.",
    },
    {
      titre: "Animation 2D/3D",
      description:
        "Motion design, animation de logos, vidéos explicatives animées pour rendre vos messages plus dynamiques.",
    },
  ],
  avantages: [
    "Matériel professionnel haute définition",
    "Équipe expérimentée et créative",
    "Respect des délais et du budget",
    "Accompagnement de A à Z",
  ],
};

export default function AudiovisuelPage() {
  return <ServiceDetail contenu={contenu} />;
}