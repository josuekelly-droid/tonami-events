import {
  pgTable,
  text,
  timestamp,
  boolean,
  serial,
  pgEnum,
} from "drizzle-orm/pg-core";


export const categorieProjetEnum = pgEnum("categorie_projet", [
  "Audiovisuel",
  "Design",
  "Numérique",
  "Conseil",
  "Location",
]);

export const categorieArticleEnum = pgEnum("categorie_article", [
  "Audiovisuel",
  "Design",
  "Numérique",
  "Conseil",
  "Location",
]);

export const serviceEnum = pgEnum("service", [
  "Production Audiovisuelle",
  "Design Graphique",
  "Services Numériques",
  "Conseil & Formation",
  "Location de Matériel",
  "Autre",
]);


export const utilisateurs = pgTable("utilisateurs", {
  id: serial("id").primaryKey(),
  nom: text("nom").notNull(),
  email: text("email").notNull().unique(),
  motDePasse: text("mot_de_passe").notNull(),
  role: text("role").default("admin").notNull(),
  creeLe: timestamp("cree_le").defaultNow().notNull(),
});


export const projets = pgTable("projets", {
  id: serial("id").primaryKey(),
  titre: text("titre").notNull(),
  description: text("description").notNull(),
  categorie: categorieProjetEnum("categorie").notNull(),
  image: text("image").notNull(),
  video: text("video"),
  lien: text("lien"),
  client: text("client"),
  dateRealisation: text("date_realisation"),
  misEnAvant: boolean("mis_en_avant").default(false).notNull(),
  creeLe: timestamp("cree_le").defaultNow().notNull(),
  modifieLe: timestamp("modifie_le").defaultNow().notNull(),
});


export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  titre: text("titre").notNull(),
  resume: text("resume").notNull(),
  contenu: text("contenu").notNull(),
  categorie: categorieArticleEnum("categorie").notNull(),
  auteur: text("auteur").notNull(),
  image: text("image").notNull(),
  tempsLecture: text("temps_lecture").default("5 min").notNull(),
  publie: boolean("publie").default(false).notNull(),
  creeLe: timestamp("cree_le").defaultNow().notNull(),
  modifieLe: timestamp("modifie_le").defaultNow().notNull(),
});


export const temoignages = pgTable("temoignages", {
  id: serial("id").primaryKey(),
  nom: text("nom").notNull(),
  role: text("role").notNull(),
  entreprise: text("entreprise"),
  contenu: text("contenu").notNull(),
  note: serial("note"),
  publie: boolean("publie").default(true).notNull(),
  creeLe: timestamp("cree_le").defaultNow().notNull(),
});


export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  nom: text("nom").notNull(),
  email: text("email").notNull(),
  telephone: text("telephone"),
  service: serviceEnum("service").notNull(),
  message: text("message").notNull(),
  traite: boolean("traite").default(false).notNull(),
  creeLe: timestamp("cree_le").defaultNow().notNull(),
});


export const newsletter = pgTable("newsletter", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  inscritLe: timestamp("inscrit_le").defaultNow().notNull(),
});


export const parametres = pgTable("parametres", {
  id: serial("id").primaryKey(),
  cle: text("cle").notNull().unique(),
  valeur: text("valeur").notNull(),
  modifieLe: timestamp("modifie_le").defaultNow().notNull(),
});