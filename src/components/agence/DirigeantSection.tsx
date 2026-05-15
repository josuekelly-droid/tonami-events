"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function DirigeantSection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-secondary to-gray-light/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative"
          >
            <div className="relative rounded-3xl aspect-[3/4] overflow-hidden group">
              <Image
                src="/equipe/desire-agbanzoume.jpg"
                alt="Mr Désiré AGBANZOUME"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tertiary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute bottom-6 left-6 right-6 bg-secondary/90 backdrop-blur-sm rounded-2xl p-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <p className="font-heading font-bold text-lg text-tertiary">Désiré AGBANZOUME</p>
                <p className="text-primary text-sm font-semibold">Fondateur & DG</p>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-primary rounded-2xl p-4 shadow-xl hidden lg:block">
              <p className="font-heading font-bold text-2xl text-secondary">8+</p>
              <p className="text-secondary/70 text-xs">années</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold text-sm px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Mot du Fondateur
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-tertiary mt-6 mb-3">
              Mr Désiré{" "}
              <span className="text-primary">AGBANZOUME</span>
            </h2>
            <p className="text-primary font-semibold text-sm mb-8">
              Fondateur & Directeur Général
            </p>

            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-1 bg-primary rounded-full flex-shrink-0" />
                <p className="text-gray-medium leading-relaxed">
                  Passionné par la communication et l&apos;audiovisuel depuis plus de 8 ans, Désiré AGBANZOUME a fondé Tonami Events avec une vision claire : offrir aux entreprises et aux marques une agence capable de raconter leur histoire avec authenticité et impact.
                </p>
              </div>

              <div className="flex gap-4">
                <div className="w-1 bg-purple-500 rounded-full flex-shrink-0" />
                <p className="text-gray-medium leading-relaxed">
                  Diplômé en communication et fort d&apos;une expérience dans la production audiovisuelle et le marketing digital, il a su rassembler une équipe pluridisciplinaire et passionnée pour répondre aux besoins les plus exigeants.
                </p>
              </div>

              <div className="flex gap-4">
                <div className="w-1 bg-blue-500 rounded-full flex-shrink-0" />
                <p className="text-tertiary font-medium leading-relaxed italic">
                  &ldquo;Mettre la créativité et l&apos;écoute au service de chaque projet, du plus modeste au plus ambitieux.&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-secondary flex items-center justify-center">
                  <span className="text-primary text-xs font-bold">DA</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-500/20 border-2 border-secondary flex items-center justify-center">
                  <span className="text-purple-500 text-xs font-bold">KA</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-500/20 border-2 border-secondary flex items-center justify-center">
                  <span className="text-blue-500 text-xs font-bold">JB</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border-2 border-secondary flex items-center justify-center text-gray-medium text-xs">
                  +3
                </div>
              </div>
              <p className="text-gray-medium text-sm">Une équipe de passionnés</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}