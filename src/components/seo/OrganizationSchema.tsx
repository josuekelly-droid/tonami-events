export function OrganizationSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Tonami Events",
    description:
      "Agence de communication spécialisée en production audiovisuelle, design graphique, services numériques et conseil en communication digitale.",
    url: "https://tonami-events.vercel.app",
    logo: "https://tonami-events.vercel.app/logo/tonami.png",
    image: "https://tonami-events.vercel.app/logo/tonami.png",
    telephone: "+229 01 66 41 88 95",
    email: "contact@tonami-events.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Immeuble Maison des Entreprises, Derrière Stade de l'Amitié MK",
      addressLocality: "Cotonou",
      addressCountry: "BJ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 6.3456658,
      longitude: 2.4266882,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://web.facebook.com/tonamicommunication",
      "https://instagram.com/tonamicommunication",
      "https://www.linkedin.com/company/tonami-events/",
      "https://www.youtube.com/@agencetonamicommunication",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        name: "Production Audiovisuelle",
      },
      {
        "@type": "Offer",
        name: "Design Graphique",
      },
      {
        "@type": "Offer",
        name: "Services Numériques",
      },
      {
        "@type": "Offer",
        name: "Conseil & Formation",
      },
      {
        "@type": "Offer",
        name: "Location de Matériel Audiovisuel",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}