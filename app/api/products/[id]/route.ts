// app/api/products/[id]/route.ts
import prisma from "../../../../lib/prisma";
import { NextResponse } from "next/server";
import { DEFAULT_COLLECTIONS } from "../../../../lib/default-catalog";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const product = await prisma.product.findUnique({
      where: { id: params.id },
      include: { collection: true },
    });
    if (product) return NextResponse.json(product);
  } catch (error) {
    // Ignore DB error on serverless fallback
  }

  for (const col of DEFAULT_COLLECTIONS) {
    const found = col.products.find((p) => p.id === params.id);
    if (found) {
      return NextResponse.json({ ...found, collection: col });
    }
  }

  return new NextResponse("Not Found", { status: 404 });
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const data = await request.json();
  const updated = await prisma.product.update({
    where: { id: params.id },
    data: {
      title: data.title,
      price: data.price,
      description: data.description,
      images: data.images,
      collectionId: data.collectionId,
      inStock: data.inStock,
    },
  });
  return NextResponse.json(updated);
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  await prisma.product.delete({ where: { id: params.id } });
  return new NextResponse(null, { status: 204 });
}
