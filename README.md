# 🎬 Tonami Events

![Tonami Events](public/logo/tonami.png)

**Agence de communication &amp; production audiovisuelle**

Site web professionnel développé avec [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), [Drizzle ORM](https://drizzle.team) et [Neon PostgreSQL](https://neon.tech).

---

## 🚀 Stack Technique

| Technologie | Usage |
|-------------|-------|
| **Next.js 16** | Framework React (App Router, Turbopack) |
| **TypeScript** | Typage strict |
| **Tailwind CSS v4** | Styles utilitaires |
| **Framer Motion** | Animations légères |
| **NextAuth.js** | Authentification admin |
| **Drizzle ORM** | ORM base de données |
| **Neon PostgreSQL** | Base de données serverless |
| **Resend** | Envoi d'emails (formulaire contact) |
| **UploadThing** | Upload d'images et vidéos |
| **Vercel** | Hébergement et déploiement |

---

## ✨ Fonctionnalités

### 🌐 Site public
- **Page d'accueil** dynamique (Hero, Services, Portfolio, Témoignages, CTA)
- **Agence** : Histoire, dirigeant, équipe, valeurs, méthodologie
- **Services** : 5 services détaillés avec pages individuelles
- **Portfolio** : Projets filtrés par catégorie avec modal
- **Blog** : Articles avec recherche, filtres et newsletter
- **Contact** : Formulaire avec envoi email (Resend) + carte Google Maps
- **Pages légales** : Mentions légales, Politique de confidentialité
- **404** personnalisée
- **Mode maintenance** avec page dédiée
- **Responsive** mobile / tablette / desktop

### 🔐 Dashboard Admin
- Authentification sécurisée (NextAuth.js)
- **Projets** : CRUD complet + upload image/vidéo (UploadThing)
- **Articles** : CRUD + upload image + brouillon/publication
- **Témoignages** : CRUD avec note et publication
- **Contacts** : Lecture des messages, marquer comme traité
- **Newsletter** : Liste des abonnés, export CSV
- **Paramètres** : Profil admin, changement mot de passe, mode maintenance

### 🔒 Sécurité
- **CSP** (Content Security Policy)
- Headers de sécurité (X-Frame-Options, X-Content-Type-Options, etc.)
- Protection contre injections XSS
- Middleware anti-patterns malveillants
- Validation et échappement des entrées utilisateur
- SSL/TLS via Vercel

### 📈 SEO
- Métadonnées Open Graph et Twitter Cards
- **JSON-LD Schema** pour l'agence
- **Sitemap.xml** dynamique
- **Robots.txt**
- URLs propres et canoniques

---

## 📦 Installation

### Prérequis
- **Node.js** ≥ 20
- **npm** ≥ 10
- Compte [Neon](https://neon.tech) (PostgreSQL)
- Compte [Resend](https://resend.com) (emails)
- Compte [UploadThing](https://uploadthing.com) (upload fichiers)

### 1. Cloner le projet

```bash
git clone https://github.com/josuekelly-droid/tonami-events.git
cd tonami-events
npm install

2. Variables d'environnement
Créer un fichier .env :


# Base de données Neon
DATABASE_URL=postgresql://...

# NextAuth
NEXTAUTH_SECRET=votre_secret_genere
NEXTAUTH_URL=http://localhost:3000

# Resend (emails)
RESEND_API_KEY=re_...

# UploadThing
UPLOADTHING_TOKEN=eyJ...

# URL publique
NEXT_PUBLIC_BASE_URL=http://localhost:3000


3. Initialiser la base de données

npx drizzle-kit push

📂 Structure du projet


tonami-events/
├── public/
│   ├── logo/
│   ├── equipe/
│   ├── services/
│   └── histoire/
├── src/
│   ├── app/
│   │   ├── admin/          # Dashboard
│   │   ├── agence/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── portfolio/
│   │   ├── services/
│   │   ├── api/            # Routes API
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── agence/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── home/           # Page d'accueil
│   │   ├── layout/         # Header, Footer
│   │   ├── portfolio/
│   │   ├── services/
│   │   ├── admin/
│   │   ├── providers/
│   │   └── seo/
│   ├── db/                 # Drizzle ORM
│   │   ├── schema.ts
│   │   └── index.ts
│   ├── lib/
│   ├── types/
│   └── middleware.ts
├── scripts/
│   └── create-admin.ts
├── drizzle.config.ts
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json


🛠️ Commandes utiles

npm run dev:	Lancer le serveur de développement
npm run build:	Build de production
npm run start:	Lancer le build de production
npm run lint:	Vérifier le code
npm run db:push:	Pousser le schéma vers la BDD
npm run db:generate:	Générer les migrations Drizzle
npm run db:studio:	Ouvrir Drizzle Studio
npx tsc --noEmit:	Vérifier le typage TypeScript


👨‍💼 Crédits:
Fondateur : Désiré AGBANZOUME

Développement : Kelly AKPLOGAN , Kelly Josué AKPLOGAN

Design : Tonami Events

📄 Licence:
Ce projet est la propriété de Tonami Events. Tous droits réservés.