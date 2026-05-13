"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Projet {
  id: number;
  titre: string;
  categorie: string;
  image: string;
  video?: string | null;
  misEnAvant: boolean;
}

export default function PortfolioPreview() {
  const [projets, setProjets] = useState<Projet[]>([]);

  useEffect(() => {
    fetch("/api/public/projets")
      .then((res) => res.json())
      .then((data) => {
        const enAvant = data.filter((p: Projet) => p.misEnAvant);
        setProjets(enAvant.length > 0 ? enAvant.slice(0, 3) : data.slice(0, 3));
      });
  }, []);

  if (projets.length === 0) return null;

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-wider"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl font-bold text-tertiary mt-3 mb-4"
          >
            Nos dernières réalisations
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projets.map((projet, index) => (
            <motion.div
  key={projet.id}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.1, duration: 0.5 }}
  className="group relative bg-gray-light/10 rounded-2xl overflow-hidden h-56 sm:h-64 cursor-pointer"
>
  <Link href="/portfolio" className="absolute inset-0 z-10">
    <span className="sr-only">Voir le projet {projet.titre}</span>
  </Link>
  <img
    src={projet.image}
    alt={projet.titre}
    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
  />
  <div className="absolute inset-0 bg-tertiary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 pointer-events-none">
    <div>
      <span className="text-primary text-xs font-semibold uppercase tracking-wider">
        {projet.categorie}
      </span>
      <h3 className="text-secondary font-heading font-semibold text-lg mt-1">
        {projet.titre}
      </h3>
    </div>
  </div>
</motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
          >
            Voir toutes nos réalisations
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}