import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maintenance | Tonami Events",
  robots: "noindex, nofollow",
};

export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary px-4">
      <div className="text-center max-w-md">
        <span className="text-6xl mb-6 block">🚧</span>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-tertiary mb-4">
          Site en maintenance
        </h1>
        <p className="text-gray-medium leading-relaxed mb-8">
          Nous effectuons actuellement des améliorations. Le site sera de retour
          très bientôt. Merci de votre patience.
        </p>
        <div className="flex items-center justify-center gap-1">
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
        <p className="text-gray-medium text-xs mt-8">
          Tonami Events
        </p>
      </div>
    </div>
  );
}