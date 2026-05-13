"use client";

import { useState, useRef } from "react";
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
  const [uploading, setUploading] = useState(false);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (file: File, type: "image" | "video") => {
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", type);

    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (res.ok) {
        if (type === "image") onImageChange(data.url);
        else onVideoChange(data.url);
      } else {
        alert("Erreur : " + (data.error || "Inconnue"));
      }
    } catch {
      alert("Erreur réseau lors de l'upload.");
    }
    setUploading(false);
  };

  return (
    <div className="space-y-4">
      
      <div>
        <label className="block text-sm font-medium text-tertiary mb-1.5">Image *</label>
        {image ? (
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-light/20 mb-2">
            <Image src={image} alt="Aperçu" fill className="object-cover" />
            <button type="button" onClick={() => onImageChange("")} className="absolute top-2 right-2 bg-red-500 text-white w-8 h-8 rounded-full text-sm hover:bg-red-600 flex items-center justify-center">✕</button>
          </div>
        ) : (
          <div>
            <input
              ref={imageInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleUpload(file, "image");
              }}
            />
            <button
              type="button"
              onClick={() => imageInputRef.current?.click()}
              disabled={uploading}
              className="bg-primary text-secondary px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 disabled:opacity-50 w-full sm:w-auto"
            >
              {uploading ? "Téléchargement..." : "Choisir une image"}
            </button>
            <p className="text-gray-medium text-xs mt-1">Image (max 4MB)</p>
          </div>
        )}
        <input
          type="text"
          placeholder="Ou collez une URL d'image"
          value={image}
          onChange={(e) => onImageChange(e.target.value)}
          className="w-full mt-2 bg-gray-light/10 border border-gray-light/30 rounded-xl px-4 py-2 text-sm text-tertiary placeholder:text-gray-medium focus:outline-none focus:border-primary"
        />
      </div>

      
      <div>
        <label className="block text-sm font-medium text-tertiary mb-1.5">Vidéo (optionnelle)</label>
        {video ? (
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-light/20 mb-2">
            <video src={video} controls className="w-full h-full object-cover" />
            <button type="button" onClick={() => onVideoChange("")} className="absolute top-2 right-2 bg-red-500 text-white w-8 h-8 rounded-full text-sm hover:bg-red-600 flex items-center justify-center">✕</button>
          </div>
        ) : (
          <div>
            <input
              ref={videoInputRef}
              type="file"
              accept="video/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleUpload(file, "video");
              }}
            />
            <button
              type="button"
              onClick={() => videoInputRef.current?.click()}
              disabled={uploading}
              className="bg-tertiary text-secondary px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-tertiary/80 disabled:opacity-50 w-full sm:w-auto"
            >
              {uploading ? "Téléchargement..." : "Choisir une vidéo"}
            </button>
            <p className="text-gray-medium text-xs mt-1">Vidéo (max 64MB)</p>
          </div>
        )}
        <input
          type="text"
          placeholder="Ou collez une URL de vidéo"
          value={video}
          onChange={(e) => onVideoChange(e.target.value)}
          className="w-full mt-2 bg-gray-light/10 border border-gray-light/30 rounded-xl px-4 py-2 text-sm text-tertiary placeholder:text-gray-medium focus:outline-none focus:border-primary"
        />
      </div>
    </div>
  );
}