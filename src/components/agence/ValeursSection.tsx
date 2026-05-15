"use client";

import { motion } from "framer-motion";


const IconCreativite = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.586 7.586" />
    <circle cx="11" cy="11" r="2" />
  </svg>
);

const IconEcoute = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <path d="M9 9h6" />
    <path d="M9 13h4" />
  </svg>
);

const IconExcellence = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const IconInnovation = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const valeurs = [
  {
    titre: "Créativité",
    description:
      "Nous repoussons les limites pour concevoir des solutions uniques et mémorables.",
    icone: IconCreativite,
    couleur: "#E42425",
    gradient: "from-red-500/5 to-red-500/0",
  },
  {
    titre: "Écoute",
    description:
      "Votre vision est au cœur de notre démarche. Nous construisons ensemble.",
    icone: IconEcoute,
    couleur: "#7C3AED",
    gradient: "from-purple-500/5 to-purple-500/0",
  },
  {
    titre: "Excellence",
    description:
      "Rigueur et souci du détail pour un résultat qui dépasse vos attentes.",
    icone: IconExcellence,
    couleur: "#3B82F6",
    gradient: "from-blue-500/5 to-blue-500/0",
  },
  {
    titre: "Innovation",
    description:
      "Nous intégrons les dernières technologies pour des créations modernes.",
    icone: IconInnovation,
    couleur: "#10B981",
    gradient: "from-emerald-500/5 to-emerald-500/0",
  },
];

export function ValeursSection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-light/10 to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold text-sm px-4 py-2 rounded-full"
          >
            <span className="w-2 h-2 bg-primary rounded-full" />
            Nos Valeurs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-tertiary mt-6 mb-5"
          >
            Ce qui <span className="text-primary">nous guide</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-medium max-w-xl mx-auto"
          >
            Quatre piliers qui façonnent chacune de nos réalisations.
          </motion.p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {valeurs.map((valeur, index) => (
            <motion.div
              key={valeur.titre}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-secondary rounded-3xl p-8 border border-gray-light/20 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              
              <div
                className={`absolute inset-0 bg-gradient-to-br ${valeur.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              
              <span className="absolute top-4 right-6 font-heading text-6xl font-bold text-tertiary/3 select-none pointer-events-none">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10">
                
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{
                    backgroundColor: `${valeur.couleur}12`,
                    color: valeur.couleur,
                  }}
                >
                  <valeur.icone />
                </div>

                
                <h3
                  className="font-heading font-semibold text-xl text-tertiary mb-3 transition-colors duration-300"
                  style={{ color: valeur.couleur }}
                >
                  {valeur.titre}
                </h3>

                
                <div
                  className="w-8 h-0.5 rounded-full mb-4 transition-all duration-300 group-hover:w-12"
                  style={{ backgroundColor: valeur.couleur }}
                />

                
                <p className="text-gray-medium leading-relaxed">
                  {valeur.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}