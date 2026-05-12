"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "audiovisuel",
    titre: "Production Audiovisuelle",
    description:
      "Donnez vie à votre message avec des productions vidéo professionnelles et impactantes.",
    details: [
      "Vidéos publicitaires et spots TV",
      "Documentaires et reportages",
      "Captation d'événements",
      "Montage et post-production",
      "Animation 2D/3D",
    ],
    image: "/services/audiovisuel.jpg",
  },
  {
    id: "design",
    titre: "Design Graphique",
    description:
      "Créez une identité visuelle forte et mémorable pour vous démarquer.",
    details: [
      "Création de logos et chartes graphiques",
      "Design web et interfaces numériques",
      "Supports print (plaquettes, flyers, bâches)",
      "Magazines et rapports d'entreprise",
      "Packaging et branding",
    ],
    image: "/services/design.jpg",
  },
  {
    id: "numerique",
    titre: "Services Numériques",
    description:
      "Développez votre présence en ligne et engagez votre communauté.",
    details: [
      "Conception et développement de sites web",
      "Community management",
      "Gestion des réseaux sociaux",
      "Organisation de webinaires",
      "Intégration annuaires d'affaires",
    ],
    image: "/services/numerique.jpg",
  },
  {
    id: "conseil",
    titre: "Conseil & Formation",
    description:
      "Montez en compétence et définissez une stratégie digitale gagnante.",
    details: [
      "Formations en visibilité web",
      "Conseils en stratégie digitale",
      "Coaching en vente",
      "Campagnes publicitaires",
      "Accompagnement rédactionnel",
    ],
    image: "/services/conseil.jpg",
  },
  {
    id: "location",
    titre: "Location de Matériel",
    description:
      "Accédez à du matériel professionnel pour vos productions audiovisuelles.",
    details: [
      "Caméras professionnelles",
      "Éclairage et accessoires",
      "Matériel de prise de son",
      "Studio de post-production",
      "Drone et stabilisateurs",
    ],
    image: "/services/location.jpg",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              id={service.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-secondary border border-gray-light/30 rounded-3xl p-8 lg:p-12 hover:shadow-lg transition-shadow duration-300"
            >
              
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-tertiary mb-4">
                  {service.titre}
                </h2>
                <p className="text-gray-medium leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2 text-sm text-gray-medium"
                    >
                      <span className="text-primary mt-0.5">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>

                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center justify-center gap-2 bg-primary text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 text-sm"
                  >
                    En savoir plus
                    <span>→</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 border border-tertiary text-tertiary px-6 py-3 rounded-lg font-semibold hover:bg-tertiary hover:text-secondary transition-colors duration-200 text-sm"
                  >
                    Demander un devis
                    <span>→</span>
                  </Link>
                </div>
              </div>

              
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-gray-light/20">
                <Image
                  src={service.image}
                  alt={service.titre}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}