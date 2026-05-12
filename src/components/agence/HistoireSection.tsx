"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function HistoireSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Notre Histoire
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-tertiary mt-3 mb-6">
              De la passion à l&apos;excellence
            </h2>
            <p className="text-gray-medium leading-relaxed mb-4">
              Tonami Events est née en 2017 de la volonté de son
              fondateur de créer une agence qui allie créativité, technicité
              et proximité client. D&apos;abord spécialisée en production
              audiovisuelle, l&apos;agence a rapidement élargi son offre pour
              devenir un partenaire complet en communication.
            </p>
            <p className="text-gray-medium leading-relaxed mb-4">
              Aujourd&apos;hui, nous couvrons toute la chaîne de valeur : du
              design graphique au conseil stratégique, en passant par le web
              et la formation digitale.
            </p>
            <p className="text-gray-medium leading-relaxed">
              Notre mission : donner vie à vos histoires par des créations
              percutantes et un accompagnement sur-mesure.
            </p>
          </motion.div>
                    <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative rounded-3xl overflow-hidden w-full max-w-md mx-auto lg:max-w-none"
            style={{ aspectRatio: "2/3" }}
          >
            <Image
              src="/histoire/notre-histoire-nos-services.png"
              alt="Notre histoire - Tonami Events"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}