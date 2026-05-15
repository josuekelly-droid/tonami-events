"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative bg-tertiary text-secondary py-24 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(228,36,37,0.15),transparent_60%)]" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-sm font-medium px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-secondary/10"
        >
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Qui sommes-nous ?
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight"
        >
          L&apos;Agence{" "}
          <span className="relative inline-block">
            <span className="text-primary">Tonami</span>
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 rounded-full" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-light max-w-3xl mx-auto text-lg lg:text-xl leading-relaxed"
        >
          Tonami Events, autrefois appelé &ldquo;Tonami Communication&rdquo;, est une agence passionnée qui transforme vos idées en réalités visuelles et numériques depuis 2017.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-light/60"
        >
          <span>Créativité</span>
          <span className="w-1 h-1 bg-primary rounded-full" />
          <span>Écoute</span>
          <span className="w-1 h-1 bg-primary rounded-full" />
          <span>Excellence</span>
          <span className="w-1 h-1 bg-primary rounded-full" />
          <span>Innovation</span>
        </motion.div>
      </div>
    </section>
  );
}