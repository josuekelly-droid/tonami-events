import { createUploadthing, type FileRouter } from "uploadthing/next";
import { getServerSession } from "next-auth";

const f = createUploadthing();

export const ourFileRouter = {
  projetImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(async () => {
      const session = await getServerSession();
      if (!session) throw new Error("Non autorisé");
      return {};
    })
    .onUploadComplete(async ({ file }) => {
      return { url: file.ufsUrl };
    }),

  projetVideo: f({ video: { maxFileSize: "64MB", maxFileCount: 1 } })
    .middleware(async () => {
      const session = await getServerSession();
      if (!session) throw new Error("Non autorisé");
      return {};
    })
    .onUploadComplete(async ({ file }) => {
      return { url: file.ufsUrl };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;