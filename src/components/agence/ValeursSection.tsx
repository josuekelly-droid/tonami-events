"use client";

import { motion } from "framer-motion";

const valeurs = [
  {
    titre: "Créativité",
    description:
      "Nous repoussons les limites pour concevoir des solutions uniques.",
    icone: "✨",
  },
  {
    titre: "Écoute",
    description:
      "Votre vision au cœur de notre démarche.",
    icone: "🎯",
  },
  {
    titre: "Excellence",
    description:
      "Rigueur et souci du détail pour un résultat irréprochable.",
    icone: "🏆",
  },
  {
    titre: "Innovation",
    description:
      "Dernières technologies pour des créations modernes et performantes.",
    icone: "💡",
  },
];

export function ValeursSection() {
  return (
    <section className="py-24 bg-gray-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-wider"
          >
            Nos Valeurs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl font-bold text-tertiary mt-3"
          >
            Ce qui nous guide
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {valeurs.map((valeur, index) => (
            <motion.div
              key={valeur.titre}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">{valeur.icone}</div>
              <h3 className="font-heading font-semibold text-lg text-tertiary mb-2">
                {valeur.titre}
              </h3>
              <p className="text-gray-medium text-sm leading-relaxed">
                {valeur.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}