"use client";

import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";
import Image from "next/image";

interface UploadProjetMediasProps {
  image: string;
  video: string;
  onImageChange: (url: string) => void;
  onVideoChange: (url: string) => void;
}

export function UploadProjetMedias({
  image,
  video,
  onImageChange,
  onVideoChange,
}: UploadProjetMediasProps) {
  return (
    <div className="space-y-4">
      {/* Image */}
      <div>
        <label className="block text-sm font-medium text-tertiary mb-1.5">
          Image *
        </label>
        {image ? (
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-light/20 mb-2">
            <Image src={image} alt="Aperçu" fill className="object-cover" />
            <button
              type="button"
              onClick={() => onImageChange("")}
              className="absolute top-2 right-2 bg-red-500 text-white w-8 h-8 rounded-full text-sm hover:bg-red-600 flex items-center justify-center"
            >
              ✕
            </button>
          </div>
        ) : (
          <div className="border-2 border-dashed border-gray-light/30 rounded-xl p-4 text-center mb-2">
            <UploadButton<OurFileRouter, "projetImage">
              endpoint="projetImage"
              onClientUploadComplete={(res) => {
                if (res?.[0]) onImageChange(res[0].ufsUrl);
              }}
              onUploadError={(error: Error) => {
                alert(`Erreur image : ${error.message}`);
              }}
              content={{
                button({ ready, isUploading }) {
                  if (isUploading) return "Téléchargement...";
                  if (ready) return "Choisir une image";
                  return "Préparation...";
                },
                allowedContent({ ready, isUploading }) {
                  if (isUploading) return "";
                  if (ready) return "Image (max 4MB)";
                  return "";
                },
              }}
              appearance={{
                button:
                  "bg-primary text-secondary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 w-full sm:w-auto",
                container: "flex flex-col items-center gap-2",
                allowedContent: "text-gray-medium text-xs",
              }}
            />
          </div>
        )}
      </div>

      {/* Vidéo */}
      <div>
        <label className="block text-sm font-medium text-tertiary mb-1.5">
          Vidéo (optionnelle)
        </label>
        {video ? (
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-light/20 mb-2">
            <video src={video} controls className="w-full h-full object-cover" />
            <button
              type="button"
              onClick={() => onVideoChange("")}
              className="absolute top-2 right-2 bg-red-500 text-white w-8 h-8 rounded-full text-sm hover:bg-red-600 flex items-center justify-center"
            >
              ✕
            </button>
          </div>
        ) : (
          <div className="border-2 border-dashed border-gray-light/30 rounded-xl p-4 text-center mb-2">
            <UploadButton<OurFileRouter, "projetVideo">
              endpoint="projetVideo"
              onClientUploadComplete={(res) => {
                if (res?.[0]) onVideoChange(res[0].ufsUrl);
              }}
              onUploadError={(error: Error) => {
                alert(`Erreur vidéo : ${error.message}`);
              }}
              content={{
                button({ ready, isUploading }) {
                  if (isUploading) return "Téléchargement...";
                  if (ready) return "Choisir une vidéo";
                  return "Préparation...";
                },
                allowedContent({ ready, isUploading }) {
                  if (isUploading) return "";
                  if (ready) return "Vidéo (max 64MB)";
                  return "";
                },
              }}
              appearance={{
                button:
                  "bg-tertiary text-secondary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-tertiary/80 w-full sm:w-auto",
                container: "flex flex-col items-center gap-2",
                allowedContent: "text-gray-medium text-xs",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}