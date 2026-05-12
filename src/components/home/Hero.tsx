"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
        <div className="text-center max-w-3xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-gray-light/20 text-tertiary text-sm font-medium px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Agence de communication
            </span>
          </motion.div>

          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-tertiary mb-6 leading-tight"
          >
            Votre histoire,{" "}
            <span className="text-primary">notre création</span>
          </motion.h1>

          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-medium max-w-2xl mx-auto mb-10"
          >
            Tonami Events donne vie à vos projets audiovisuels,
            graphiques et numériques avec créativité et professionnalisme.
          </motion.p>

          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/portfolio"
              className="bg-primary text-secondary px-8 py-3.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
            >
              Voir nos réalisations
            </Link>
            <Link
              href="/contact"
              className="border border-tertiary text-tertiary px-8 py-3.5 rounded-lg font-semibold hover:bg-tertiary hover:text-secondary transition-colors duration-200"
            >
              Nous contacter
            </Link>
          </motion.div>
        </div>
      </div>

      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-light/10 to-transparent" />
    </section>
  );
}