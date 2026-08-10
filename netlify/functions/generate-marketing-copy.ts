import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { generateMarketingCopy } from "../../lib/marketing-studio/generator";

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
    const { image, notes } = body as {
      image?: string;
      notes?: string;
    };

    const parsedData = await generateMarketingCopy({ image, notes });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        data: parsedData,
      }),
    };
  } catch (error: any) {
    console.error("Error in generate-marketing-copy serverless function:", error);
    return {
      statusCode: error.message?.includes("required") ? 400 : 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: error.message || "Internal Server Error during marketing copy generation.",
      }),
    };
  }
};
