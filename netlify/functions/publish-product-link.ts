import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { publishProductLink } from "../../lib/marketing-studio/publisher";

export const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers,
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({
        success: false,
        error: "Method Not Allowed. Exactly POST requests are supported.",
      }),
    };
  }

  try {
    const body = event.body ? JSON.parse(event.body) : {};
    const result = await publishProductLink(body.productData || body);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        data: result,
      }),
    };
  } catch (error: any) {
    console.error("Error in publish-product-link serverless function:", error);
    return {
      statusCode: error.message?.includes("Invalid payload") ? 400 : 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: error.message || "Internal Server Error during Stripe link generation.",
      }),
    };
  }
};
