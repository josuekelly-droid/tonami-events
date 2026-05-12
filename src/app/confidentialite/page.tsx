import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Tonami Events",
  description:
    "Politique de confidentialité du site Tonami Events.",
};

export default function Confidentialite() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-tertiary mb-8">
          Politique de Confidentialité
        </h1>

        <div className="space-y-8 text-gray-medium leading-relaxed">
          <div>
            <h2 className="font-heading text-xl font-semibold text-tertiary mb-3">
              1. Collecte des données
            </h2>
            <p>
              Nous collectons les données que vous nous transmettez volontairement
              via nos formulaires de contact et de devis : nom, prénom, adresse
              email, numéro de téléphone et contenu de votre message.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-tertiary mb-3">
              2. Finalité du traitement
            </h2>
            <p>
              Ces données sont collectées dans le seul but de :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Répondre à vos demandes de contact</li>
              <li>Établir des devis personnalisés</li>
              <li>Vous informer sur nos services</li>
              <li>Envoyer notre newsletter si vous y êtes inscrit</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-tertiary mb-3">
              3. Base légale
            </h2>
            <p>
              Le traitement de vos données repose sur votre consentement
              explicite (formulaire de contact) et sur l&apos;intérêt légitime de
              notre entreprise à répondre aux demandes qui lui sont adressées.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-tertiary mb-3">
              4. Conservation des données
            </h2>
            <p>
              Vos données sont conservées pour une durée maximale de 3 ans à
              compter du dernier contact avec vous. Au-delà, elles sont
              supprimées de nos bases.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-tertiary mb-3">
              5. Partage des données
            </h2>
            <p>
              Les données collectées sont strictement réservées à Tonami
              Communication. Elles ne sont jamais vendues, cédées ou partagées
              avec des tiers, sauf obligation légale.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-tertiary mb-3">
              6. Vos droits
            </h2>
            <p>
              Conformément à la réglementation applicable, vous disposez des
              droits suivants :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit d&apos;opposition</li>
              <li>Droit à la portabilité</li>
            </ul>
            <p className="mt-2">
              Pour exercer ces droits, écrivez-nous à{" "}
              <a href="mailto:contact@tonami-events.com" className="text-primary hover:underline">
                contact@tonami-events.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-tertiary mb-3">
              7. Sécurité
            </h2>
            <p>
              Nous mettons en œuvre toutes les mesures techniques et
              organisationnelles appropriées pour protéger vos données contre
              les accès non autorisés, la perte ou l&apos;altération.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-tertiary mb-3">
              8. Cookies
            </h2>
            <p>
              Ce site utilise uniquement des cookies techniques nécessaires à
              son bon fonctionnement. Aucun cookie de suivi publicitaire
              n&apos;est déposé sans votre consentement.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-tertiary mb-3">
              9. Modification de la politique
            </h2>
            <p>
              Cette politique de confidentialité est susceptible d&apos;être mise
              à jour. La dernière version sera toujours disponible sur cette
              page. Dernière mise à jour : 12 mai 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}