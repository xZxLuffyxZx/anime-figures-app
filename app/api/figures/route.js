import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const figures = await prisma.figures.findMany({
      orderBy: { id: "desc" },
    });
    return NextResponse.json(figures);
  } catch (err) {
    console.error("GET /figures error:", err);
    return NextResponse.json(
      { message: "Error fetching figures" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
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

    if (!name || !anime_title || !brand || price == null) {
      return NextResponse.json(
        { message: "name, anime_title, brand, price are required." },
        { status: 400 }
      );
    }

    const numericPrice = parseFloat(price);
    if (Number.isNaN(numericPrice)) {
      return NextResponse.json(
        { message: "price must be a number." },
        { status: 400 }
      );
    }

    const numericStock = stock != null ? parseInt(stock, 10) : 0;

    const newFigure = await prisma.figures.create({
      data: {
        name,
        anime_title,
        brand,
        price: numericPrice,
        stock: numericStock,
        scale: scale || null,
        release_date: release_date ? new Date(release_date) : null, // yyyy-mm-dd
        image_url: image_url || null,
      },
    });

    return NextResponse.json(newFigure, { status: 201 });
  } catch (err) {
    console.error("POST /figures error:", err);
    return NextResponse.json(
      { message: "Error creating figure" },
      { status: 500 }
    );
  }
}
