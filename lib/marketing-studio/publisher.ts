import Stripe from "stripe";
import { ProductAndPricingSchema, ProductAndPricing } from "../schemas/product-pricing.schema";

export async function publishProductLink(payload: any) {
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeKey) {
    throw new Error("STRIPE_SECRET_KEY is missing from environment variables.");
  }

  const parseResult = ProductAndPricingSchema.safeParse(payload);
  if (!parseResult.success) {
    throw new Error(`Invalid payload: ${JSON.stringify(parseResult.error.format())}`);
  }

  const validatedData: ProductAndPricing = parseResult.data;
  const {
    product_title,
    luxury_description,
    pricing_type,
    suggested_retail_price_usd,
    collection_bundle_price_usd,
    materials_list,
  } = validatedData;

  const targetPriceUsd =
    pricing_type === "collection" && collection_bundle_price_usd !== null
      ? collection_bundle_price_usd
      : suggested_retail_price_usd;

  const priceInCents = Math.round(targetPriceUsd * 100);
  if (priceInCents <= 0) {
    throw new Error("Suggested retail price must be greater than 0.");
  }

  const stripe = new Stripe(stripeKey, {
    apiVersion: "2024-04-10" as any,
  });

  const product = await stripe.products.create({
    name: product_title,
    description: luxury_description,
    metadata: {
      brand: "Ears of Elegance",
      pricing_type: pricing_type,
      materials: materials_list.join(", "),
    },
  });

  const price = await stripe.prices.create({
    product: product.id,
    unit_amount: priceInCents,
    currency: "usd",
  });

  const paymentLink = await stripe.paymentLinks.create({
    line_items: [
      {
        price: price.id,
        quantity: 1,
      },
    ],
    metadata: {
      product_title: product_title,
    },
  });

  return {
    product_id: product.id,
    price_id: price.id,
    payment_link_id: paymentLink.id,
    payment_link_url: paymentLink.url,
    price_cents: priceInCents,
    price_usd: targetPriceUsd,
    validated_copy: validatedData,
  };
}
