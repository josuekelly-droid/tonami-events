"use client";

import { motion } from "framer-motion";
import Link from "next/link";


const IconAudiovisuel = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
);

const IconDesign = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.586 7.586" />
    <circle cx="11" cy="11" r="2" />
  </svg>
);

const IconNumerique = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const IconFormation = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5" />
  </svg>
);

const IconLocation = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const services = [
  {
    title: "Production Audiovisuelle",
    description:
      "Vidéos publicitaires, documentaires, reportages et spots TV pour valoriser votre marque avec un rendu professionnel.",
    icon: IconAudiovisuel,
    lien: "/services/audiovisuel",
    gradient: "from-red-500/10 to-orange-500/10",
    color: "#E42425",
  },
  {
    title: "Design Graphique",
    description:
      "Logos, chartes graphiques, supports print et magazines d'entreprise qui captent l'attention et marquent les esprits.",
    icon: IconDesign,
    lien: "/services/design",
    gradient: "from-purple-500/10 to-pink-500/10",
    color: "#7C3AED",
  },
  {
    title: "Services Numériques",
    description:
      "Sites web, community management et stratégie digitale pour développer votre présence en ligne et engager votre audience.",
    icon: IconNumerique,
    lien: "/services/numerique",
    gradient: "from-blue-500/10 to-cyan-500/10",
    color: "#3B82F6",
  },
  {
    title: "Conseil & Formation",
    description:
      "Formations en visibilité web, coaching en vente et accompagnement stratégique pour monter en compétence.",
    icon: IconFormation,
    lien: "/services/conseil",
    gradient: "from-green-500/10 to-emerald-500/10",
    color: "#10B981",
  },
  {
    title: "Location Matériel",
    description:
      "Caméras, éclairages, drones et studio de post-production à disposition pour tous vos projets audiovisuels.",
    icon: IconLocation,
    lien: "/services/location",
    gradient: "from-amber-500/10 to-yellow-500/10",
    color: "#F59E0B",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesPreview() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-secondary to-gray-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold text-sm px-4 py-2 rounded-full"
          >
            <span className="w-2 h-2 bg-primary rounded-full" />
            Nos Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-tertiary mt-6 mb-5"
          >
            Une expertise{" "}
            <span className="text-primary">complète</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-medium max-w-2xl mx-auto text-lg"
          >
            De la création visuelle à la stratégie digitale, nous accompagnons
            votre marque à chaque étape.
          </motion.p>
        </div>

        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative bg-secondary rounded-3xl p-8 border border-gray-light/30 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{
                    backgroundColor: `${service.color}15`,
                    color: service.color,
                  }}
                >
                  <service.icon />
                </div>

                
                <h3 className="font-heading font-semibold text-xl text-tertiary mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                
                <p className="text-gray-medium leading-relaxed mb-6">
                  {service.description}
                </p>

                
                <Link
                  href={service.lien}
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                  style={{ color: service.color }}
                >
                  En savoir plus
                  <span>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}