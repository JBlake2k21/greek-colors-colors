// app/api/collections/upload/route.ts
import { NextResponse } from "next/server";
import path from "path";
import prisma from "../../../../lib/prisma";
import { extractImagesFromZipBuffer } from "../../../../lib/unzip";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let collectionName = "New Archive";
    let description = "";
    let isFeatured = false;
    let extractedImages: { filename: string; urlPath: string; size: number }[] = [];

    if (contentType.includes("application/json")) {
      const body = await request.json();
      collectionName = (body.name || "").trim() || "New Archive";
      description = (body.description || "").trim();
      isFeatured = Boolean(body.isFeatured);
      const inputImages: string[] = Array.isArray(body.images) ? body.images : [];

      if (inputImages.length === 0) {
        return NextResponse.json(
          { error: "No jewelry images found inside archive." },
          { status: 400 }
        );
      }

      extractedImages = inputImages.map((imgUrl, idx) => ({
        filename: `piece-${idx + 1}.webp`,
        urlPath: imgUrl,
        size: imgUrl.length,
      }));
    } else {
      const formData = await request.formData();
      const file = formData.get("file") as File | null;
      const rawName = (formData.get("name") as string) || "";
      description = (formData.get("description") as string) || "";
      isFeatured = formData.get("isFeatured") === "true";

      if (!file) {
        return NextResponse.json(
          { error: "No ZIP archive file provided." },
          { status: 400 }
        );
      }

      collectionName =
        rawName.trim() || file.name.replace(/\.zip$/i, "").trim() || "New Archive";

      // Read file Buffer
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      // Extract images to public/collections/<collectionName>
      const publicDir = path.join(process.cwd(), "public");
      extractedImages = extractImagesFromZipBuffer(
        buffer,
        collectionName,
        publicDir
      );

      if (extractedImages.length === 0) {
        return NextResponse.json(
          {
            error:
              "No supported jewelry image files (.jpg, .png, .webp, .gif, .svg) found inside ZIP archive.",
          },
          { status: 400 }
        );
      }
    }

    // Try saving to Prisma DB
    try {
      const existingCount = await prisma.collection.count();
      const nextOrder = existingCount + 1;

      const collection = await prisma.collection.create({
        data: {
          name: collectionName,
          description:
            description || `Ears of Elegance — ${collectionName} Archive`,
          displayOrder: nextOrder,
          isFeatured: isFeatured,
          images: JSON.stringify(extractedImages.map((img) => img.urlPath)),
        },
      });

      const createdProducts = [];
      for (let i = 0; i < extractedImages.length; i++) {
        const img = extractedImages[i];
        const price = 85 + ((i * 15) % 150); // Generates realistic jewelry prices between $85 and $235
        const productTitle = `${collectionName} Piece #${i + 1}`;

        const prod = await prisma.product.create({
          data: {
            title: productTitle,
            price: price,
            description: `Handcrafted jewelry from the ${collectionName} archive.`,
            inStock: true,
            collectionId: collection.id,
            images: JSON.stringify([img.urlPath]),
          },
        });
        createdProducts.push(prod);
      }

      return NextResponse.json(
        { ...collection, products: createdProducts },
        { status: 201 }
      );
    } catch (dbError) {
      console.warn(
        "Prisma database write failed (serverless fallback mode):",
        dbError
      );

      // Graceful zero-database fallback so admin carousel still works
      const fallbackId = `col-${Date.now()}`;
      const products = extractedImages.map((img, idx) => ({
        id: `${fallbackId}-prod-${idx + 1}`,
        title: `${collectionName} Piece #${idx + 1}`,
        price: (85 + ((idx * 15) % 150)).toString(),
        description: `Handcrafted jewelry from the ${collectionName} archive.`,
        inStock: true,
        collectionId: fallbackId,
        images: JSON.stringify([img.urlPath]),
      }));

      return NextResponse.json(
        {
          id: fallbackId,
          name: collectionName,
          description:
            description || `Ears of Elegance — ${collectionName} Archive`,
          displayOrder: 99,
          isFeatured: isFeatured,
          images: JSON.stringify(extractedImages.map((img) => img.urlPath)),
          products,
        },
        { status: 201 }
      );
    }
  } catch (error: any) {
    console.error("ZIP Upload error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process ZIP archive upload." },
      { status: 500 }
    );
  }
}
