import { z } from "zod";

/**
 * Strict output schema for Greek Colors Colors Marketing Studio.
 * Validates AI-generated luxury jewelry copy and pricing suggestions.
 * Fully compatible with OpenAI Structured Outputs (strict: true).
 */
export const ProductAndPricingSchema = z.object({
  product_title: z
    .string()
    .describe(
      "The sophisticated, empowering title of the luxury jewelry piece or collection."
    ),
  luxury_description: z
    .string()
    .describe(
      "A sophisticated, empowering description embodying the 'confidence coach in a bottle' luxury brand voice. Focuses on inner beauty and outer elegance."
    ),
  materials_list: z
    .array(z.string())
    .describe(
      "List of luxury materials, gemstones, metals, or craftsmanship elements used in the piece or collection."
    ),
  pricing_type: z
    .enum(["individual", "collection"])
    .describe(
      "Whether this pricing is for an individual jewelry piece or a curated collection bundle."
    ),
  suggested_retail_price_usd: z
    .number()
    .describe(
      "The suggested retail price in USD for the individual item or base product."
    ),
  collection_bundle_price_usd: z
    .number()
    .nullable()
    .describe(
      "The suggested collection bundle price in USD if pricing_type is 'collection', or null if 'individual'."
    ),
  suggested_instagram_caption: z
    .string()
    .describe(
      "An empowering, elegant Instagram caption ready for social publishing, aligned with brand voice and including relevant luxury hashtags."
    ),
});

export type ProductAndPricing = z.infer<typeof ProductAndPricingSchema>;
