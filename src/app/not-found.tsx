import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center px-4">
        <span className="font-heading text-8xl font-bold text-primary/20">
          404
        </span>
        <h1 className="font-heading text-2xl sm:text-3xl font-bold text-tertiary mt-4 mb-4">
          Page introuvable
        </h1>
        <p className="text-gray-medium max-w-md mx-auto mb-8">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          Retour à l&apos;accueil
          <span>→</span>
        </Link>
      </div>
    </section>
  );
}