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
    linkedin: "https://linkedin.com/in/kelly-akplogan",
    facebook: "https://facebook.com/kelly-akplogan",
  },
  {
    nom: "Jean Luc BIGNON",
    role: "Monteur vidéo",
    description:
      "Description du membre à personnaliser ultérieurement.",
    photo: "/equipe/membre-2.jpg",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
  },
  {
    nom: "Membre 3",
    role: "Rôle à définir",
    description:
      "Description du membre à personnaliser ultérieurement.",
    photo: "/equipe/membre-3.jpg",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
  },
  {
    nom: "Membre 4",
    role: "Rôle à définir",
    description:
      "Description du membre à personnaliser ultérieurement.",
    photo: "/equipe/membre-4.jpg",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
  },
  {
    nom: "Membre 5",
    role: "Rôle à définir",
    description:
      "Description du membre à personnaliser ultérieurement.",
    photo: "/equipe/membre-5.jpg",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
  },
  {
    nom: "Membre 6",
    role: "Rôle à définir",
    description:
      "Description du membre à personnaliser ultérieurement.",
    photo: "/equipe/membre-6.jpg",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
  },
];

// Icônes SVG inline
function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function EquipeSection() {
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
            Notre Équipe
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl font-bold text-tertiary mt-3"
          >
            Des talents au service de vos projets
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipe.map((membre, index) => (
            <motion.div
              key={membre.nom}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-secondary rounded-2xl p-6 text-center border border-gray-light/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-light/30">
                <Image
                  src={membre.photo}
                  alt={membre.nom}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-heading font-semibold text-tertiary">
                {membre.nom}
              </h3>
              <p className="text-primary text-sm font-medium mb-3">
                {membre.role}
              </p>
              <p className="text-gray-medium text-sm leading-relaxed mb-4">
                {membre.description}
              </p>

              {/* Réseaux sociaux */}
              <div className="flex items-center justify-center gap-3">
                <a
                  href={membre.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-medium hover:text-primary transition-colors duration-200"
                  aria-label={`LinkedIn de ${membre.nom}`}
                >
                  <LinkedInIcon />
                </a>
                <a
                  href={membre.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-medium hover:text-primary transition-colors duration-200"
                  aria-label={`Facebook de ${membre.nom}`}
                >
                  <FacebookIcon />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}