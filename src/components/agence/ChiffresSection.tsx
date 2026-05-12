"use client";

import { motion } from "framer-motion";

const chiffres = [
  { valeur: "150+", label: "Projets réalisés" },
  { valeur: "50+", label: "Clients satisfaits" },
  { valeur: "8+", label: "Années d'expérience" },
  { valeur: "5", label: "Services clés" },
];

export function ChiffresSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {chiffres.map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="font-heading text-4xl sm:text-5xl font-bold text-secondary mb-2">
                {item.valeur}
              </p>
              <p className="text-secondary/70 text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}