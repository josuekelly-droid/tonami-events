"use client";

import { motion } from "framer-motion";

export function HeroServices() {
  return (
    <section className="bg-tertiary text-secondary py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-primary font-semibold text-sm uppercase tracking-wider"
        >
          Ce que nous faisons
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl font-bold mt-4 mb-6"
        >
          Nos Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-light max-w-2xl mx-auto text-lg"
        >
          Une gamme complète de services en communication pour valoriser votre
          marque et atteindre vos objectifs.
        </motion.p>
      </div>
    </section>
  );
}