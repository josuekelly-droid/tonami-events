"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="bg-tertiary text-secondary py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-primary font-semibold text-sm uppercase tracking-wider"
        >
          Qui sommes-nous ?
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl font-bold mt-4 mb-6"
        >
          L&apos;Agence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-light max-w-2xl mx-auto text-lg"
        >
          Tonami Events autrefois appelé "Tonami Communication" est une agence passionnée qui transforme vos
          idées en réalités visuelles et numériques depuis 2017.
        </motion.p>
      </div>
    </section>
  );
}