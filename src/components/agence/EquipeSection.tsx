"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const equipe = [
  {
    nom: "Kelly AKPLOGAN",
    role: "Web Designer",
    description:
      "Créative et passionnée par le design, Kelly conçoit des interfaces élégantes et intuitives qui captivent vos utilisateurs.",
    photo: "/equipe/kelly-akplogan.jpg",
    linkedin: "https://linkedin.com/in/kellyjosueakplogan",
    facebook: "https://facebook.com/kellyjosueakplogan",
    couleur: "#E42425",
    gradient: "from-red-500/5 to-red-500/0",
  },
  {
    nom: "Jean Luc BIGNON",
    role: "Monteur Vidéo & Réalisateur",
    description:
      "Expert en post-production, Jean-Luc donne vie aux images avec un sens aigu du rythme et de la narration visuelle.",
    photo: "/equipe/jean-luc-bignon.jpg",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
    couleur: "#7C3AED",
    gradient: "from-purple-500/5 to-purple-500/0",
  },
  {
    nom: "Aminata TOURE",
    role: "Community Manager",
    description:
      "Stratège des réseaux sociaux, Aminata crée du contenu engageant et anime les communautés en ligne avec authenticité et réactivité.",
    photo: "/equipe/aminata-toure.jpg",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
    couleur: "#3B82F6",
    gradient: "from-blue-500/5 to-blue-500/0",
  },
  {
    nom: "Marc ADJOVI",
    role: "Graphiste & Brand Designer",
    description:
      "Designer passionné, Marc transforme les idées en identités visuelles fortes : logos, chartes graphiques et supports print percutants.",
    photo: "/equipe/marc-adjovi.jpg",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
    couleur: "#10B981",
    gradient: "from-emerald-500/5 to-emerald-500/0",
  },
  {
    nom: "Chantal GBAGUIDI",
    role: "Responsable Clientèle & Projets",
    description:
      "Véritable trait d'union entre l'agence et ses clients, Chantal assure le suivi des projets et garantit une satisfaction irréprochable.",
    photo: "/equipe/chantal-gbaguidi.jpg",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
    couleur: "#F59E0B",
    gradient: "from-amber-500/5 to-amber-500/0",
  },
];

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function EquipeSection() {
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
            Notre Équipe
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-tertiary mt-6 mb-5"
          >
            Des talents au service de{" "}
            <span className="text-primary">vos projets</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-medium max-w-xl mx-auto"
          >
            Une équipe passionnée et complémentaire pour donner vie à vos ambitions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {equipe.map((membre, index) => (
            <motion.div
              key={membre.nom}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-secondary rounded-3xl p-8 border border-gray-light/20 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${membre.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10 text-center">
                <div className="relative w-28 h-28 mx-auto mb-6">
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                    style={{ backgroundColor: `${membre.couleur}30` }}
                  />
                  <div className="relative w-28 h-28 rounded-full overflow-hidden ring-4 ring-gray-light/20 group-hover:ring-2 transition-all duration-500" style={{ borderColor: `${membre.couleur}40` }}>
                    <Image
                      src={membre.photo}
                      alt={membre.nom}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>

                <h3 className="font-heading font-semibold text-xl text-tertiary mb-1 group-hover:text-primary transition-colors duration-300">
                  {membre.nom}
                </h3>
                <p
                  className="text-sm font-semibold mb-4 transition-colors duration-300"
                  style={{ color: membre.couleur }}
                >
                  {membre.role}
                </p>

                <div
                  className="w-10 h-0.5 rounded-full mx-auto mb-4 transition-all duration-300 group-hover:w-16"
                  style={{ backgroundColor: membre.couleur }}
                />

                <p className="text-gray-medium text-sm leading-relaxed mb-6">
                  {membre.description}
                </p>

                <div className="flex items-center justify-center gap-4">
                  <a
                    href={membre.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-light/10 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{ color: membre.couleur }}
                    aria-label={`LinkedIn de ${membre.nom}`}
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href={membre.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-light/10 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{ color: membre.couleur }}
                    aria-label={`Facebook de ${membre.nom}`}
                  >
                    <FacebookIcon />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}