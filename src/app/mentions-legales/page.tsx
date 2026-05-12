import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | Tonami Events",
  description:
    "Mentions légales du site Tonami Events.",
};

export default function MentionsLegales() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-tertiary mb-8">
          Mentions Légales
        </h1>

        <div className="space-y-8 text-gray-medium leading-relaxed">
          <div>
            <h2 className="font-heading text-xl font-semibold text-tertiary mb-3">
              1. Éditeur du site
            </h2>
            <p>
              Le site <strong>tonami-events.com</strong> est édité par :
            </p>
            <p className="mt-2">
              <strong>Tonami Events</strong><br />
              Immeuble Maison des Entreprises<br />
              Derrière Stade de l&apos;Amitié MK<br />
              Cotonou, Bénin<br />
              Téléphone : +229 01 66 41 88 95<br />
              Email : contact@tonami-events.com
            </p>
            <p className="mt-2">
              Directeur de la publication : Mr Désiré AGBANZOUME, Fondateur &
              Directeur Général.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-tertiary mb-3">
              2. Hébergement
            </h2>
            <p>
              Le site est hébergé par :<br />
              <strong>Vercel Inc.</strong><br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789, États-Unis<br />
              Site web : <a href="https://vercel.com" className="text-primary hover:underline">vercel.com</a>
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-tertiary mb-3">
              3. Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos,
              éléments graphiques) est la propriété exclusive de Tonami
              Communication, sauf mention contraire. Toute reproduction,
              modification ou diffusion sans autorisation préalable est
              interdite.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-tertiary mb-3">
              4. Protection des données
            </h2>
            <p>
              Les données collectées via le formulaire de contact sont
              strictement réservées à l&apos;usage de Tonami Communication et ne
              sont en aucun cas cédées à des tiers. Conformément à la
              réglementation en vigueur, vous disposez d&apos;un droit d&apos;accès,
              de rectification et de suppression de vos données. Pour
              l&apos;exercer, contactez-nous à contact@tonami-events.com.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-tertiary mb-3">
              5. Cookies
            </h2>
            <p>
              Ce site peut utiliser des cookies techniques nécessaires à son bon
              fonctionnement. Aucun cookie publicitaire ou de tracking n&apos;est
              utilisé sans votre consentement explicite.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-tertiary mb-3">
              6. Responsabilité
            </h2>
            <p>
              Tonami Communication s&apos;efforce de fournir des informations
              exactes et à jour sur ce site. Toutefois, l&apos;agence ne peut être
              tenue responsable des erreurs, omissions ou indisponibilités
              temporaires du site.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-tertiary mb-3">
              7. Contact
            </h2>
            <p>
              Pour toute question relative à ces mentions légales, vous pouvez
              nous contacter par email à l&apos;adresse suivante :{" "}
              <a href="mailto:contact@tonami-events.com" className="text-primary hover:underline">
                contact@tonami-events.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}