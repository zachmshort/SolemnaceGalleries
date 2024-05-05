import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const jsonData = await request.json();

  try {
    await prisma.figurine.createMany({
      data: jsonData,
    });

    return NextResponse.json({ message: "Data inserted successfully" });
  } catch (error) {
    console.error("Error occurred while inserting data:", error);
    return NextResponse.json(
      { error: "An error occurred while inserting data" },
      { status: 500 }
    );
  }
}
