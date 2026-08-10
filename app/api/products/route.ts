// app/api/products/route.ts
import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";
import { DEFAULT_COLLECTIONS } from "../../../lib/default-catalog";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: { collection: true },
    });
    if (products && products.length > 0) {
      return NextResponse.json(products);
    }
    const allProducts = DEFAULT_COLLECTIONS.flatMap((col) =>
      col.products.map((p) => ({ ...p, collection: col }))
    );
    return NextResponse.json(allProducts);
  } catch (error) {
    const allProducts = DEFAULT_COLLECTIONS.flatMap((col) =>
      col.products.map((p) => ({ ...p, collection: col }))
    );
    return NextResponse.json(allProducts);
  }
}

export async function POST(request: Request) {
  const { title, price, description, images, collectionId, inStock } =
    await request.json();
  const product = await prisma.product.create({
    data: {
      title,
      price,
      description,
      images,
      collectionId,
      inStock: inStock ?? true,
    },
  });
  return NextResponse.json(product, { status: 201 });
}
