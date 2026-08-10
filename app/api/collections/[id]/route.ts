// app/api/collections/[id]/route.ts
import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { name, description, isFeatured, displayOrder } = body;

    const data: any = {};
    if (name !== undefined) data.name = name;
    if (description !== undefined) data.description = description;
    if (isFeatured !== undefined) data.isFeatured = isFeatured;
    if (displayOrder !== undefined) data.displayOrder = displayOrder;

    const updated = await prisma.collection.update({
      where: { id: params.id },
      data,
      include: { products: true },
    });

    return NextResponse.json(updated);
  } catch (error: any) {
    console.error("Failed to update collection prominence/details:", error);
    return NextResponse.json(
      { error: "Failed to update collection." },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.product.deleteMany({
      where: { collectionId: params.id },
    });
    await prisma.collection.delete({
      where: { id: params.id },
    });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Failed to delete collection:", error);
    return NextResponse.json(
      { error: "Failed to delete collection." },
      { status: 500 }
    );
  }
}
