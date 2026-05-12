"use client";

import { motion } from "framer-motion";

const etapes = [
  {
    numero: "01",
    titre: "Découverte",
    description:
      "Écoute de vos besoins, analyse de votre secteur et définition de vos objectifs.",
  },
  {
    numero: "02",
    titre: "Stratégie",
    description:
      "Élaboration d'un plan d'action créatif et adapté à votre budget.",
  },
  {
    numero: "03",
    titre: "Création",
    description:
      "Conception et réalisation de vos supports avec excellence et créativité.",
  },
  {
    numero: "04",
    titre: "Suivi",
    description:
      "Accompagnement continu et mesure des résultats pour assurer votre succès.",
  },
];

export function MethodologieSection() {
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
            Notre Méthodologie
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl font-bold text-tertiary mt-3"
          >
            Comment nous travaillons
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {etapes.map((etape, index) => (
            <motion.div
              key={etape.numero}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <span className="font-heading text-5xl font-bold text-primary/20 block mb-4">
                {etape.numero}
              </span>
              <h3 className="font-heading font-semibold text-lg text-tertiary mb-2">
                {etape.titre}
              </h3>
              <p className="text-gray-medium text-sm leading-relaxed">
                {etape.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}