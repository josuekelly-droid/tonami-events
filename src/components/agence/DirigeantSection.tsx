"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function DirigeantSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative"
          >
            <div className="bg-gray-light/20 rounded-3xl aspect-[3/4] overflow-hidden relative">
              <Image
                src="/equipe/desire-agbanzoume.jpg"
                alt="Mr Désiré AGBANZOUME"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Mot du Fondateur
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-tertiary mt-3 mb-6">
              Mr Désiré AGBANZOUME
            </h2>
            <p className="text-primary font-semibold text-sm mb-6">
              Fondateur & Directeur Général
            </p>
            <p className="text-gray-medium leading-relaxed mb-4">
              Passionné par la communication et l&apos;audiovisuel depuis plus de
              8 ans, Désiré AGBANZOUME a fondé Tonami Communication avec une
              vision claire : offrir aux entreprises et aux marques une agence
              capable de raconter leur histoire avec authenticité et impact.
            </p>
            <p className="text-gray-medium leading-relaxed mb-4">
              Diplômé en communication et fort d&apos;une expérience dans la
              production audiovisuelle et le marketing digital, il a su
              rassembler une équipe pluridisciplinaire et passionnée pour
              répondre aux besoins les plus exigeants.
            </p>
            <p className="text-gray-medium leading-relaxed">
              Sa philosophie : mettre la créativité et l&apos;écoute au service
              de chaque projet, du plus modeste au plus ambitieux.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}