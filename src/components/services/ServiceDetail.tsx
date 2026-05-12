"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Prestation {
  titre: string;
  description: string;
}

interface Contenu {
  titre: string;
  sousTitre: string;
  description: string;
  image: string;
  prestations: Prestation[];
  avantages: string[];
}

interface ServiceDetailProps {
  contenu: Contenu;
}

export function ServiceDetail({ contenu }: ServiceDetailProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-tertiary text-secondary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-gray-light text-sm hover:text-secondary transition-colors mb-6"
              >
                <span>←</span> Tous les services
              </Link>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                {contenu.titre}
              </h1>
              <p className="text-primary font-semibold text-lg mb-4">
                {contenu.sousTitre}
              </p>
              <p className="text-gray-light leading-relaxed">
                {contenu.description}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden aspect-video"
            >
              <Image
                src={contenu.image}
                alt={contenu.titre}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prestations */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold text-sm uppercase tracking-wider"
            >
              Nos prestations
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-3xl sm:text-4xl font-bold text-tertiary mt-3"
            >
              Ce que nous proposons
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contenu.prestations.map((presta, index) => (
              <motion.div
                key={presta.titre}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-secondary border border-gray-light/30 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="font-heading font-semibold text-lg text-tertiary mb-3">
                  {presta.titre}
                </h3>
                <p className="text-gray-medium text-sm leading-relaxed">
                  {presta.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages + CTA */}
      <section className="py-24 bg-gray-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Pourquoi nous choisir
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-tertiary mt-3 mb-8">
                Nos atouts
              </h2>
              <ul className="space-y-4">
                {contenu.avantages.map((avantage) => (
                  <li
                    key={avantage}
                    className="flex items-center gap-3 text-tertiary"
                  >
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">
                      ✓
                    </span>
                    {avantage}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-3xl p-10 text-center"
            >
              <h3 className="font-heading text-2xl font-bold text-secondary mb-4">
                Intéressé ?
              </h3>
              <p className="text-secondary/80 mb-8">
                Contactez-nous pour discuter de votre projet et obtenir un devis
                personnalisé.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-secondary text-primary px-8 py-3.5 rounded-lg font-semibold hover:bg-secondary/90 transition-colors duration-200"
              >
                Demander un devis
                <span>→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}