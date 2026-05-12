"use client";

import { useEffect, useState } from "react";
import { PortfolioPage } from "@/components/portfolio/PortfolioPage";

export default function Portfolio() {
  const [projets, setProjets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/public/projets")
      .then((res) => res.json())
      .then((data) => {
        setProjets(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  return <PortfolioPage projets={projets} />;
}