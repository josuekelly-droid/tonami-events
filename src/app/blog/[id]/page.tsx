"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ArticleDetail } from "@/components/blog/ArticleDetail";

interface Article {
  id: number;
  titre: string;
  resume: string;
  contenu: string;
  categorie: string;
  auteur: string;
  image: string;
  tempsLecture: string;
  creeLe: string;
}

export default function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/public/articles`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((a: Article) => a.id === parseInt(id as string));
        setArticle(found || null);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold text-tertiary mb-4">
            Article introuvable
          </h1>
          <p className="text-gray-medium">Cet article n&apos;existe pas ou a été supprimé.</p>
        </div>
      </div>
    );
  }

  return (
    <ArticleDetail
      titre={article.titre}
      categorie={article.categorie}
      auteur={article.auteur}
      date={article.creeLe}
      image={article.image}
      tempsLecture={article.tempsLecture}
    >
      <div className="whitespace-pre-wrap">{article.contenu}</div>
    </ArticleDetail>
  );
}