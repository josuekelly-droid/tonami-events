"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function HistoireSection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-light/5 to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold text-sm px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Notre Histoire
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-tertiary mt-6 mb-8">
              De la passion à{" "}
              <span className="text-primary">l&apos;excellence</span>
            </h2>

            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-1 bg-primary rounded-full flex-shrink-0" />
                <p className="text-gray-medium leading-relaxed">
                  Tonami Events est née en 2017 de la volonté de son fondateur de créer une agence qui allie créativité, technicité et proximité client. D&apos;abord spécialisée en production audiovisuelle, l&apos;agence a rapidement élargi son offre pour devenir un partenaire complet en communication.
                </p>
              </div>

              <div className="flex gap-4">
                <div className="w-1 bg-purple-500 rounded-full flex-shrink-0" />
                <p className="text-gray-medium leading-relaxed">
                  Aujourd&apos;hui, nous couvrons toute la chaîne de valeur : du design graphique au conseil stratégique, en passant par le web et la formation digitale.
                </p>
              </div>

              <div className="flex gap-4">
                <div className="w-1 bg-blue-500 rounded-full flex-shrink-0" />
                <p className="text-tertiary font-medium leading-relaxed">
                  Notre mission : donner vie à vos histoires par des créations percutantes et un accompagnement sur-mesure.
                </p>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-8 text-sm">
              <div className="text-center">
                <p className="font-heading text-3xl font-bold text-primary">2017</p>
                <p className="text-gray-medium text-xs mt-1">Création</p>
              </div>
              <div className="w-px h-10 bg-gray-light/30" />
              <div className="text-center">
                <p className="font-heading text-3xl font-bold text-purple-500">150+</p>
                <p className="text-gray-medium text-xs mt-1">Projets</p>
              </div>
              <div className="w-px h-10 bg-gray-light/30" />
              <div className="text-center">
                <p className="font-heading text-3xl font-bold text-blue-500">50+</p>
                <p className="text-gray-medium text-xs mt-1">Clients</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden w-full max-w-md mx-auto lg:max-w-none" style={{ aspectRatio: "2/3" }}>
              <Image
                src="/histoire/notre-histoire-nos-services.png"
                alt="Notre histoire - Tonami Events"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tertiary/30 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-secondary rounded-2xl p-4 shadow-xl border border-gray-light/20 hidden lg:block">
              <p className="font-heading font-bold text-2xl text-primary">8+</p>
              <p className="text-gray-medium text-xs">années d&apos;expérience</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}