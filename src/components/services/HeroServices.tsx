"use client";

import { motion } from "framer-motion";

export function HeroServices() {
  return (
    <section className="relative bg-tertiary text-secondary py-24 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(228,36,37,0.12),transparent_60%)]" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-sm font-medium px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-secondary/10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Ce que nous faisons
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight"
        >
          Nos{" "}
          <span className="relative inline-block">
            <span className="text-primary">Services</span>
            <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5.5C65 1.5 135 1.5 199 5.5" stroke="#E42425" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
            </svg>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-light max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed"
        >
          Une gamme complète de services en communication pour valoriser votre marque et atteindre vos objectifs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 flex items-center justify-center gap-10 text-sm text-gray-light/50"
        >
          <span>🎬 Audiovisuel</span>
          <span className="w-1 h-1 bg-primary rounded-full" />
          <span>🎨 Design</span>
          <span className="w-1 h-1 bg-primary rounded-full" />
          <span>💻 Numérique</span>
          <span className="w-1 h-1 bg-primary rounded-full" />
          <span>📈 Conseil</span>
          <span className="w-1 h-1 bg-primary rounded-full" />
          <span>🎥 Location</span>
        </motion.div>
      </div>
    </section>
  );
}