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
      <section className="relative bg-tertiary text-secondary py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(228,36,37,0.1),transparent_60%)]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-gray-light/60 text-sm hover:text-secondary transition-colors mb-6 group"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Tous les services
              </Link>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                {contenu.titre}
              </h1>
              <p className="text-primary font-semibold text-lg mb-6">
                {contenu.sousTitre}
              </p>
              <div className="w-12 h-0.5 bg-primary/40 rounded-full mb-6" />
              <p className="text-gray-light/80 leading-relaxed text-lg">
                {contenu.description}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden aspect-video group"
            >
              <Image
                src={contenu.image}
                alt={contenu.titre}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tertiary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-gradient-to-b from-secondary to-gray-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold text-sm px-4 py-2 rounded-full"
            >
              <span className="w-2 h-2 bg-primary rounded-full" />
              Nos prestations
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-tertiary mt-6 mb-5"
            >
              Ce que nous{" "}
              <span className="text-primary">proposons</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {contenu.prestations.map((presta, index) => (
              <motion.div
                key={presta.titre}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-secondary rounded-3xl p-8 border border-gray-light/20 hover:border-transparent hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-secondary transition-all duration-300">
                  <span className="text-primary font-bold text-sm group-hover:text-secondary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-xl text-tertiary mb-3 group-hover:text-primary transition-colors duration-300">
                  {presta.titre}
                </h3>
                <p className="text-gray-medium leading-relaxed">
                  {presta.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-light/5 to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold text-sm px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Pourquoi nous choisir
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-tertiary mt-6 mb-10">
                Nos{" "}
                <span className="text-primary">atouts</span>
              </h2>
              <ul className="space-y-5">
                {contenu.avantages.map((avantage) => (
                  <li
                    key={avantage}
                    className="flex items-center gap-4 text-tertiary group"
                  >
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm group-hover:bg-primary group-hover:text-secondary transition-all duration-300 flex-shrink-0">
                      ✓
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {avantage}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-primary rounded-3xl p-10 lg:p-12 text-center overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />

              <div className="relative z-10">
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-secondary mb-4">
                  Intéressé ?
                </h3>
                <p className="text-secondary/80 mb-8 leading-relaxed">
                  Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-secondary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-secondary/90 transition-all duration-300 group/link"
                >
                  Demander un devis
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}