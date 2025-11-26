import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET /api/figures/:id
export async function GET(request, { params }) {
  const { id } = await params;         // 👈 unwrap params
  const numericId = Number(id);

  if (Number.isNaN(numericId)) {
    return NextResponse.json({ message: "Invalid id" }, { status: 400 });
  }

  const figure = await prisma.figures.findUnique({
    where: { id: numericId },
  });

  if (!figure) {
    return NextResponse.json({ message: "Figure not found" }, { status: 404 });
  }

  return NextResponse.json(figure);
}

// PUT /api/figures/:id
export async function PUT(request, { params }) {
  const { id } = await params;         // 👈 unwrap params
  const numericId = Number(id);

  if (Number.isNaN(numericId)) {
    return NextResponse.json({ message: "Invalid id" }, { status: 400 });
  }

  const body = await request.json();
  const {
    name,
    anime_title,
    brand,
    price,
    stock,
    scale,
    release_date,
    image_url,
  } = body;

  try {
    const numericPrice =
      price != null && !Number.isNaN(parseFloat(price))
        ? parseFloat(price)
        : undefined;

    const numericStock =
      stock != null && !Number.isNaN(parseInt(stock, 10))
        ? parseInt(stock, 10)
        : undefined;

    const updated = await prisma.figures.update({
      where: { id: numericId },
      data: {
        ...(name !== undefined && { name }),
        ...(anime_title !== undefined && { anime_title }),
        ...(brand !== undefined && { brand }),
        ...(numericPrice !== undefined && { price: numericPrice }),
        ...(numericStock !== undefined && { stock: numericStock }),
        ...(scale !== undefined && { scale: scale || null }),
        ...(release_date !== undefined && {
          release_date: release_date ? new Date(release_date) : null,
        }),
        ...(image_url !== undefined && { image_url: image_url || null }),
      },
    });

    return NextResponse.json(updated);
  } catch (err) {
    console.error("PUT /figures/:id error:", err);
    return NextResponse.json(
      { message: "Error updating figure" },
      { status: 500 }
    );
  }
}

// DELETE /api/figures/:id
export async function DELETE(request, { params }) {
  const { id } = await params;         // 👈 unwrap params
  const numericId = Number(id);

  if (Number.isNaN(numericId)) {
    return NextResponse.json({ message: "Invalid id" }, { status: 400 });
  }

  try {
    await prisma.figures.delete({
      where: { id: numericId },
    });

    return NextResponse.json({ message: "Figure deleted" });
  } catch (err) {
    console.error("DELETE /figures/:id error:", err);
    return NextResponse.json(
      { message: "Error deleting figure" },
      { status: 500 }
    );
  }
}
