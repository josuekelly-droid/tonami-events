"use client";

import { motion } from "framer-motion";


const IconDecouverte = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>
);

const IconStrategie = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const IconCreation = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
    <line x1="12" y1="22" x2="12" y2="15.5" />
    <polyline points="22 8.5 12 15.5 2 8.5" />
  </svg>
);

const IconSuivi = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const etapes = [
  {
    numero: "01",
    titre: "Découverte",
    description:
      "Écoute de vos besoins, analyse de votre secteur et définition de vos objectifs.",
    icone: IconDecouverte,
    couleur: "#E42425",
  },
  {
    numero: "02",
    titre: "Stratégie",
    description:
      "Élaboration d'un plan d'action créatif et adapté à votre budget.",
    icone: IconStrategie,
    couleur: "#7C3AED",
  },
  {
    numero: "03",
    titre: "Création",
    description:
      "Conception et réalisation de vos supports avec excellence et créativité.",
    icone: IconCreation,
    couleur: "#3B82F6",
  },
  {
    numero: "04",
    titre: "Suivi",
    description:
      "Accompagnement continu et mesure des résultats pour assurer votre succès.",
    icone: IconSuivi,
    couleur: "#10B981",
  },
];

export function MethodologieSection() {
  return (
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
            Notre Méthodologie
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-tertiary mt-6 mb-5"
          >
            Comment <span className="text-primary">nous travaillons</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-medium max-w-xl mx-auto"
          >
            Un processus en 4 étapes pensé pour transformer vos idées en résultats concrets.
          </motion.p>
        </div>

        
        <div className="relative">
          
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gray-light/30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {etapes.map((etape, index) => (
              <motion.div
                key={etape.numero}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative"
              >
                
                <div className="flex justify-center mb-8 relative z-10">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl border-2"
                    style={{
                      backgroundColor: `${etape.couleur}10`,
                      borderColor: etape.couleur,
                      color: etape.couleur,
                    }}
                  >
                    <span className="font-heading text-2xl font-bold">
                      {etape.numero}
                    </span>
                  </div>
                </div>

                
                <div className="bg-secondary rounded-3xl p-8 border border-gray-light/20 group-hover:border-transparent group-hover:shadow-2xl transition-all duration-500 text-center">
                  
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${etape.couleur}12`,
                      color: etape.couleur,
                    }}
                  >
                    <etape.icone />
                  </div>

                  
                  <h3
                    className="font-heading font-semibold text-xl mb-3 transition-colors duration-300"
                    style={{ color: etape.couleur }}
                  >
                    {etape.titre}
                  </h3>

                  
                  <div
                    className="w-8 h-0.5 rounded-full mx-auto mb-4 transition-all duration-300 group-hover:w-12"
                    style={{ backgroundColor: etape.couleur }}
                  />

                  
                  <p className="text-gray-medium leading-relaxed">
                    {etape.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}