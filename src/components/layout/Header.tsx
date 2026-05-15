"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/agence", label: "L'Agence" },
  { href: "/services", label: "Nos Services" },
  { href: "/portfolio", label: "Réalisations" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-secondary/95 backdrop-blur-md shadow-lg shadow-tertiary/5"
          : "bg-secondary/80 backdrop-blur-sm"
      } border-b border-gray-light/20`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <img
                src="/logo/tonami.png"
                alt="Tonami Events"
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="hidden sm:inline font-heading font-semibold text-lg lg:text-xl text-tertiary group-hover:text-primary transition-colors duration-300">
              Tonami Events
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-primary bg-primary/5"
                      : "text-tertiary hover:text-primary hover:bg-gray-light/10"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            <div className="ml-4">
              <Link
                href="/contact"
                className="relative group bg-primary text-secondary px-5 py-2.5 rounded-xl text-sm font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <span className="relative z-10">Demander un devis</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 p-2"
            aria-label="Menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-tertiary rounded-full origin-center"
            />
            <motion.span
              animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block w-6 h-0.5 bg-tertiary rounded-full"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-tertiary rounded-full origin-center"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-secondary border-t border-gray-light/20 overflow-hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-6">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 text-sm font-medium py-3.5 px-4 rounded-xl transition-all duration-200 ${
                        isActive
                          ? "text-primary bg-primary/5"
                          : "text-tertiary hover:text-primary hover:bg-gray-light/10"
                      }`}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      )}
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-3"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 bg-primary text-secondary px-5 py-3.5 rounded-xl text-sm font-semibold hover:bg-primary/90 transition-all duration-200"
                >
                  Demander un devis
                  <span>→</span>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}