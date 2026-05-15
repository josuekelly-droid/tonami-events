"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary via-secondary to-gray-light/10 py-24 lg:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(228,36,37,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(124,58,237,0.04),transparent_50%)]" />
      <div className="absolute top-40 right-20 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 bg-primary/5 text-primary border border-primary/10 text-sm font-medium px-5 py-2.5 rounded-full backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              Agence de communication & production audiovisuelle
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold text-tertiary mb-8 leading-tight tracking-tight"
          >
            Votre histoire,{" "}
            <span className="relative inline-block">
              <span className="text-primary">notre création</span>
              <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5C65 1.5 135 1.5 199 5.5" stroke="#E42425" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-gray-medium max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Tonami Events donne vie à vos projets audiovisuels, graphiques et numériques avec créativité et professionnalisme.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/portfolio"
              className="group relative bg-primary text-secondary px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Voir nos réalisations
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="/contact"
              className="group border-2 border-tertiary/20 text-tertiary px-8 py-4 rounded-xl font-semibold hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center gap-2"
            >
              Nous contacter
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-medium/60"
          >
            <div className="flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary/30 rounded-full" />
              <span>Production Audiovisuelle</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-0.5 bg-purple-500/30 rounded-full" />
              <span>Design Graphique</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-0.5 bg-blue-500/30 rounded-full" />
              <span>Services Numériques</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}