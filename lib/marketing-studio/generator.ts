import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import { ProductAndPricingSchema, ProductAndPricing } from "../schemas/product-pricing.schema";

const SYSTEM_PROMPT = `
You are the expert Luxury Copywriter and Pricing Strategist for "Greek Colors Colors", a premier luxury Greek sorority boutique celebrating Sigma Gamma Rho Sorority, Inc., founded by Roslyn Kiser Miller.

Brand Core Identity:
- Luxury jewelry that acts as a "confidence coach in a bottle."
- Every piece is designed to inspire inner confidence, self-worth, and outer elegance.

Copywriting Voice & Tone:
- Empowering, sophisticated, warm, and elevated.
- Focus on inner beauty, personal empowerment, and timeless elegance.
- Speak directly to the wearer's poise and confidence.

Your task:
1. Inspect the provided luxury jewelry image (materials, craftsmanship, style, elegance).
2. Analyze the admin's raw text notes (if provided) for context on materials, inspiration, or target audience.
3. Generate sophisticated, empowering marketing copy and accurate pricing suggestions adhering strictly to the brand voice and the ProductAndPricing schema.
`.trim();

export async function generateMarketingCopy({
  image,
  notes,
}: {
  image?: string;
  notes?: string;
}): Promise<ProductAndPricing> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is missing from environment variables.");
  }

  if (!image) {
    throw new Error("An image URL or base64 data string is required.");
  }

  let formattedImageUrl = image.trim();
  if (
    !formattedImageUrl.startsWith("http://") &&
    !formattedImageUrl.startsWith("https://") &&
    !formattedImageUrl.startsWith("data:")
  ) {
    formattedImageUrl = `data:image/jpeg;base64,${formattedImageUrl}`;
  }

  const openai = new OpenAI({ apiKey });

  const completion = await openai.chat.completions.parse({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: SYSTEM_PROMPT,
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `Admin Raw Notes:\n${notes?.trim() || "No notes provided. Please analyze the jewelry piece in the uploaded image."}`,
          },
          {
            type: "image_url",
            image_url: {
              url: formattedImageUrl,
            },
          },
        ],
      },
    ],
    response_format: zodResponseFormat(
      ProductAndPricingSchema,
      "product_and_pricing"
    ),
    temperature: 0.7,
  });

  const parsedData = completion.choices[0]?.message?.parsed || null;
  if (!parsedData) {
    throw new Error("AI model failed to return structured JSON adhering to the schema.");
  }

  return parsedData;
}
