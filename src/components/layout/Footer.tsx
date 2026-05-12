import Link from "next/link";
import Image from "next/image";

const services = [
  "Production Audiovisuelle",
  "Design Graphique",
  "Services Numériques",
  "Conseil & Formation",
  "Location Matériel",
];

const pages = [
  { href: "/agence", label: "L'Agence" },
  { href: "/services", label: "Nos Services" },
  { href: "/portfolio", label: "Réalisations" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-tertiary text-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <Image
                src="/logo/tonami.png"
                alt="Tonami Events"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="font-heading font-medium text-xl text-secondary">
                Tonami Events
              </span>
            </Link>
            <p className="text-gray-light text-sm leading-relaxed max-w-xs">
              Agence de communication spécialisée en production audiovisuelle,
              design graphique et stratégie digitale.
            </p>
          </div>

          
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-gray-light mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {pages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-sm text-gray-medium hover:text-secondary transition-colors duration-200"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-gray-light mb-4">
              Nos Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-gray-medium hover:text-secondary transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        
        <div className="border-t border-gray-medium/30 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-medium">
            &copy; {new Date().getFullYear()} Tonami Events. Tous droits
            réservés.
          </p>
          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="text-xs text-gray-medium hover:text-secondary transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/confidentialite"
              className="text-xs text-gray-medium hover:text-secondary transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}