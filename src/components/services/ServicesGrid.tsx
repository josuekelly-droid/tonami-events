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
    couleur: "#E42425",
    gradient: "from-red-500/5 to-red-500/0",
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
    couleur: "#7C3AED",
    gradient: "from-purple-500/5 to-purple-500/0",
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
    couleur: "#3B82F6",
    gradient: "from-blue-500/5 to-blue-500/0",
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
    couleur: "#10B981",
    gradient: "from-emerald-500/5 to-emerald-500/0",
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
    couleur: "#F59E0B",
    gradient: "from-amber-500/5 to-amber-500/0",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-light/5 to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              id={service.id}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center bg-secondary border border-gray-light/20 hover:border-transparent rounded-3xl p-8 lg:p-12 hover:shadow-2xl transition-all duration-500 overflow-hidden relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <span
                  className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4"
                  style={{
                    backgroundColor: `${service.couleur}15`,
                    color: service.couleur,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-tertiary mb-4">
                  {service.titre}
                </h2>
                <p className="text-gray-medium leading-relaxed mb-6 text-lg">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-3 text-sm text-gray-medium"
                    >
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{
                          backgroundColor: `${service.couleur}15`,
                          color: service.couleur,
                        }}
                      >
                        ✓
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:gap-3"
                    style={{
                      backgroundColor: service.couleur,
                      color: "#FFFFFF",
                    }}
                  >
                    En savoir plus
                    <span>→</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 border-2 border-tertiary/20 text-tertiary px-6 py-3.5 rounded-xl font-semibold text-sm hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    Demander un devis
                    <span>→</span>
                  </Link>
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-light/10 group/img">
                <Image
                  src={service.image}
                  alt={service.titre}
                  fill
                  className="object-cover group-hover/img:scale-110 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tertiary/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}