import { NextResponse } from "next/server";
import { publishProductLink } from "../../../../lib/marketing-studio/publisher";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = await publishProductLink(body.productData || body);

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error: any) {
    console.error("API Route Error (/api/marketing-studio/publish):", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to publish Stripe product link",
      },
      { status: error.message?.includes("Invalid payload") ? 400 : 500 }
    );
  }
}
