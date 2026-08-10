import { NextResponse } from "next/server";
import { generateMarketingCopy } from "../../../../lib/marketing-studio/generator";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { image, notes } = body;

    const data = await generateMarketingCopy({ image, notes });

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error: any) {
    console.error("API Route Error (/api/marketing-studio/generate):", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to generate marketing copy",
      },
      { status: error.message?.includes("required") ? 400 : 500 }
    );
  }
}
