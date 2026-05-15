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
  lien?: string | null;
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
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-light/5 to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold text-sm px-4 py-2 rounded-full"
          >
            <span className="w-2 h-2 bg-primary rounded-full" />
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-tertiary mt-6 mb-5"
          >
            Nos dernières{" "}
            <span className="text-primary">réalisations</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-medium max-w-xl mx-auto"
          >
            Un aperçu de notre savoir-faire à travers quelques projets récents.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projets.map((projet, index) => (
            <motion.div
              key={projet.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative bg-secondary rounded-3xl overflow-hidden border border-gray-light/20 hover:border-transparent hover:shadow-2xl transition-all duration-500"
            >
              <Link href="/portfolio" className="block">
                <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-light/10">
                  <img
                    src={projet.image}
                    alt={projet.titre}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tertiary/70 via-tertiary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-secondary text-xs font-semibold px-3 py-1.5 rounded-full">
                      {projet.categorie}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-secondary font-heading font-semibold text-lg">
                      {projet.titre}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-2">
                      Découvrir le projet
                      <span>→</span>
                    </span>
                  </div>
                </div>
              </Link>
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
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-secondary transition-all duration-300 group"
          >
            Voir toutes nos réalisations
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}