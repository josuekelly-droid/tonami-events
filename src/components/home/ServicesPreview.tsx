"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Production Audiovisuelle",
    description:
      "Vidéos publicitaires, documentaires, reportages et spots pour valoriser votre marque.",
    icon: "🎬",
  },
  {
    title: "Design Graphique",
    description:
      "Logos, chartes graphiques, supports print et magazines d'entreprise percutants.",
    icon: "🎨",
  },
  {
    title: "Services Numériques",
    description:
      "Sites web, community management et stratégie digitale pour votre présence en ligne.",
    icon: "💻",
  },
  {
    title: "Conseil & Formation",
    description:
      "Formations en visibilité web, coaching en vente et accompagnement stratégique.",
    icon: "📈",
  },
  {
    title: "Location Matériel",
    description:
      "Matériel audiovisuel professionnel et studio de post-production à disposition.",
    icon: "🎥",
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
    <section className="bg-gray-light/10 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-wider"
          >
            Nos Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl font-bold text-tertiary mt-3 mb-4"
          >
            Ce que nous faisons
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-medium max-w-2xl mx-auto"
          >
            Une gamme complète de services pour répondre à tous vos besoins en
            communication.
          </motion.p>
        </div>

        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="bg-secondary rounded-2xl p-8 border border-gray-light/30 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-heading font-semibold text-lg text-tertiary mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-medium text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}