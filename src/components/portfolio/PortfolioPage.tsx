"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Projet {
  id: string;
  titre: string;
  categorie: string;
  description: string;
  image: string;
  video?: string | null;
  lien?: string | null;
}

interface PortfolioPageProps {
  projets: Projet[];
}

const categories = [
  "Tous",
  "Audiovisuel",
  "Design",
  "Numérique",
  "Conseil",
  "Location",
];

const couleursCategories: Record<string, string> = {
  Audiovisuel: "#E42425",
  Design: "#7C3AED",
  Numérique: "#3B82F6",
  Conseil: "#10B981",
  Location: "#F59E0B",
};

export function PortfolioPage({ projets }: PortfolioPageProps) {
  const [filtreActif, setFiltreActif] = useState("Tous");
  const [projetSelectionne, setProjetSelectionne] = useState<Projet | null>(null);

  const projetsFiltres =
    filtreActif === "Tous"
      ? projets
      : projets.filter((p) => p.categorie === filtreActif);

  return (
    <>
      <section className="relative bg-tertiary text-secondary py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(228,36,37,0.1),transparent_60%)]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-sm font-medium px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-secondary/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Portfolio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            Nos{" "}
            <span className="relative inline-block">
              <span className="text-primary">Réalisations</span>
              <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5C65 1.5 135 1.5 199 5.5" stroke="#E42425" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-light max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Découvrez notre savoir-faire à travers une sélection de projets récents. Chaque réalisation est le fruit d&apos;une collaboration étroite avec nos clients.
          </motion.p>
        </div>
      </section>

      <section className="py-10 border-b border-gray-light/20 bg-secondary sticky top-16 lg:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFiltreActif(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  filtreActif === cat
                    ? "bg-primary text-secondary shadow-lg shadow-primary/20"
                    : "bg-gray-light/10 text-tertiary hover:bg-gray-light/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-light/5 to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {projetsFiltres.length === 0 ? (
            <div className="text-center py-20">
              <span className="text-6xl mb-6 block">📂</span>
              <p className="text-gray-medium text-lg">
                Aucun projet dans cette catégorie pour le moment.
              </p>
              <p className="text-gray-medium text-sm mt-2">
                Revenez bientôt ou{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  contactez-nous
                </Link>{" "}
                pour discuter de votre projet.
              </p>
            </div>
          ) : (
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {projetsFiltres.map((projet) => (
                  <motion.div
                    key={projet.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setProjetSelectionne(projet)}
                    className="group relative bg-secondary rounded-3xl overflow-hidden cursor-pointer border border-gray-light/20 hover:border-transparent hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-light/10">
                      <Image
                        src={projet.image}
                        alt={projet.titre}
                        fill
                        className="object-contain group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-tertiary/70 via-tertiary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                        <span className="text-secondary font-semibold text-sm bg-primary px-5 py-2.5 rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          Voir le projet
                        </span>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span
                          className="text-white text-xs font-semibold px-3 py-1.5 rounded-full"
                          style={{
                            backgroundColor: couleursCategories[projet.categorie] || "#E42425",
                          }}
                        >
                          {projet.categorie}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading font-semibold text-lg text-tertiary group-hover:text-primary transition-colors duration-300">
                        {projet.titre}
                      </h3>
                      <p className="text-gray-medium text-sm mt-2 line-clamp-2">
                        {projet.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {projetSelectionne && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setProjetSelectionne(null)}
            className="fixed inset-0 z-50 bg-tertiary/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-secondary rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="relative h-56 sm:h-80 bg-gray-light/10 rounded-t-3xl">
                {projetSelectionne.video ? (
                  <video
                    src={projetSelectionne.video}
                    controls
                    className="w-full h-full object-contain rounded-t-3xl"
                  />
                ) : (
                  <Image
                    src={projetSelectionne.image}
                    alt={projetSelectionne.titre}
                    fill
                    className="object-contain rounded-t-3xl"
                  />
                )}
                <button
                  onClick={() => setProjetSelectionne(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-tertiary/60 text-secondary rounded-full flex items-center justify-center hover:bg-tertiary hover:scale-110 transition-all duration-300 z-10 text-sm"
                >
                  ✕
                </button>
              </div>
              <div className="p-8">
                <span
                  className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 text-white"
                  style={{
                    backgroundColor:
                      couleursCategories[projetSelectionne.categorie] || "#E42425",
                  }}
                >
                  {projetSelectionne.categorie}
                </span>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-tertiary mb-4">
                  {projetSelectionne.titre}
                </h2>
                <p className="text-gray-medium leading-relaxed mb-6">
                  {projetSelectionne.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {projetSelectionne.lien && (
                    <a
                      href={projetSelectionne.lien}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-tertiary text-secondary px-6 py-3 rounded-xl font-semibold hover:bg-tertiary/80 transition-all duration-300 hover:gap-3"
                    >
                      Voir le projet
                      <span>↗</span>
                    </a>
                  )}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-primary text-secondary px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:gap-3"
                  >
                    Un projet similaire ?
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-24 lg:py-32 bg-gradient-to-b from-secondary to-gray-light/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-tertiary mb-4"
          >
            Vous avez un{" "}
            <span className="text-primary">projet</span> ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-medium max-w-xl mx-auto mb-10 text-lg"
          >
            Chaque grand projet commence par une discussion. Parlons du vôtre.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-secondary px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:gap-3 text-lg"
            >
              Démarrer un projet
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}