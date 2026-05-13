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

export function PortfolioPage({ projets }: PortfolioPageProps) {
  const [filtreActif, setFiltreActif] = useState("Tous");
  const [projetSelectionne, setProjetSelectionne] = useState<Projet | null>(
    null
  );

  const projetsFiltres =
    filtreActif === "Tous"
      ? projets
      : projets.filter((p) => p.categorie === filtreActif);

  return (
    <>
      
      <section className="bg-tertiary text-secondary py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-semibold text-sm uppercase tracking-wider"
          >
            Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl font-bold mt-4 mb-6"
          >
            Nos Réalisations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-light max-w-2xl mx-auto text-lg"
          >
            Découvrez notre savoir-faire à travers une sélection de projets
            récents. Chaque réalisation est le fruit d&apos;une collaboration
            étroite avec nos clients.
          </motion.p>
        </div>
      </section>

      
      <section className="py-12 border-b border-gray-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFiltreActif(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  filtreActif === cat
                    ? "bg-primary text-secondary"
                    : "bg-gray-light/10 text-tertiary hover:bg-gray-light/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille des projets */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {projetsFiltres.length === 0 ? (
            <div className="text-center py-20">
              <span className="text-6xl mb-4 block">📂</span>
              <p className="text-gray-medium text-lg">
                Aucun projet dans cette catégorie pour le moment.
              </p>
              <p className="text-gray-medium text-sm mt-2">
                Revenez bientôt ou{" "}
                <Link
                  href="/contact"
                  className="text-primary hover:underline"
                >
                  contactez-nous
                </Link>{" "}
                pour discuter de votre projet.
              </p>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
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
                    className="group relative bg-secondary border border-gray-light/30 rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-56 sm:h-64 overflow-hidden bg-gray-light/10">
  <Image
    src={projet.image}
    alt={projet.titre}
    fill
    className="object-contain group-hover:scale-105 transition-transform duration-500"
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  />
                      <div className="absolute inset-0 bg-tertiary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-secondary font-semibold text-sm bg-primary px-4 py-2 rounded-lg">
                          Voir le projet
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                        {projet.categorie}
                      </span>
                      <h3 className="font-heading font-semibold text-lg text-tertiary mt-1">
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
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-secondary rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative h-56 sm:h-80 bg-gray-light/10 rounded-t-3xl">
  <Image
    src={projetSelectionne.image}
    alt={projetSelectionne.titre}
    fill
    className="object-contain rounded-t-3xl"
  />
                <button
                  onClick={() => setProjetSelectionne(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-tertiary/60 text-secondary rounded-full flex items-center justify-center hover:bg-tertiary transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="p-8">
                <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                  {projetSelectionne.categorie}
                </span>
                <h2 className="font-heading text-2xl font-bold text-tertiary mt-2 mb-4">
                  {projetSelectionne.titre}
                </h2>
                <p className="text-gray-medium leading-relaxed">
  {projetSelectionne.description}
</p>
<div className="flex flex-wrap gap-3 mt-6">
  {projetSelectionne.lien && (
    <a
      href={projetSelectionne.lien}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-tertiary text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-tertiary/80 transition-colors"
    >
      Voir le projet
      <span>↗</span>
    </a>
  )}
  <Link
    href="/contact"
    className="inline-flex items-center gap-2 bg-primary text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
  >
    Un projet similaire ?
    <span>↗</span>
  </Link>
</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      
      <section className="py-24 bg-gray-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl sm:text-4xl font-bold text-tertiary mb-4"
          >
            Vous avez un projet ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-medium max-w-xl mx-auto mb-8"
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
              className="inline-flex items-center gap-2 bg-primary text-secondary px-8 py-3.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
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