import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { Providers } from "@/components/providers/Providers";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#E42425",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://tonami-events.vercel.app"
  ),
  title: {
    default: "Agence de Communication Audiovisuelle à Cotonou | Tonami Events",
    template: "%s | Tonami Events",
  },
  description:
    "Agence de communication au Bénin spécialisée en production audiovisuelle, design graphique, services numériques, conseil et formation digitale. Devis gratuit.",
  keywords: [
    "agence communication",
    "production audiovisuelle",
    "design graphique",
    "services numériques",
    "conseil communication",
    "formation digitale",
    "location matériel audiovisuel",
    "Bénin",
    "Cotonou",
  ],
  authors: [{ name: "Tonami Events", url: "https://tonami-events.vercel.app" }],
  icons: {
    icon: "/logo/tonami.png",
    shortcut: "/logo/tonami.png",
    apple: "/logo/tonami.png",
  },
  creator: "Tonami Events",
  publisher: "Tonami Events",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://tonami-events.vercel.app",
    siteName: "Tonami Events",
    title: "Tonami Events | Agence de Communication",
    description:
      "Agence de communication spécialisée en production audiovisuelle, design graphique, services numériques et conseil en communication digitale.",
    images: [
      {
        url: "/logo/tonami.png",
        width: 500,
        height: 500,
        alt: "Tonami Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tonami Events",
    description:
      "Agence de communication spécialisée en production audiovisuelle, design graphique, services numériques et conseil.",
    images: ["/logo/tonami.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://tonami-events.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <OrganizationSchema />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans bg-secondary text-tertiary antialiased selection:bg-primary/20 selection:text-primary`}
      >
        <Providers>
          <Header />
          <main className="min-h-screen pt-16 lg:pt-20">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}