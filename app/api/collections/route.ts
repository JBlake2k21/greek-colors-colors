// app/api/collections/route.ts
import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";
import { DEFAULT_COLLECTIONS } from "../../../lib/default-catalog";

export async function GET() {
  try {
    const collections = await prisma.collection.findMany({
      include: { products: true },
      orderBy: [
        { isFeatured: "desc" },
        { displayOrder: "asc" },
      ],
    });
    if (collections && collections.length > 0) {
      return NextResponse.json(collections);
    }
    // Fallback to static catalog if DB empty
    return NextResponse.json(DEFAULT_COLLECTIONS);
  } catch (error) {
    // If Prisma is unseeded or fails in Netlify serverless read-only container,
    // gracefully return the full luxury catalog of 9 collections and 120 products.
    return NextResponse.json(DEFAULT_COLLECTIONS);
  }
}

export async function POST(request: Request) {
  const { name, description, displayOrder, isFeatured } = await request.json();
  const collection = await prisma.collection.create({
    data: {
      name,
      description,
      displayOrder: displayOrder ?? 0,
      isFeatured: isFeatured ?? false,
    },
  });
  return NextResponse.json(collection, { status: 201 });
}
