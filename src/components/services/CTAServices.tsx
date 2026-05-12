"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CTAServices() {
  return (
    <section className="py-24 bg-gray-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-secondary mb-4">
              Un projet en tête ?
            </h2>
            <p className="text-secondary/80 max-w-xl mx-auto mb-8">
              Chaque projet est unique. Parlons du vôtre et trouvons ensemble
              la meilleure solution pour vos besoins.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-secondary text-primary px-8 py-3.5 rounded-lg font-semibold hover:bg-secondary/90 transition-colors duration-200"
            >
              Contactez-nous dès maintenant
              <span>→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}