import { handler } from "../netlify/functions/generate-marketing-copy";
import fs from "fs";
import path from "path";

// Load OPENAI_API_KEY from .env
const envPath = path.resolve(__dirname, "../.env");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  for (const line of envContent.split("\n")) {
    if (line.startsWith("OPENAI_API_KEY=")) {
      process.env.OPENAI_API_KEY = line.replace("OPENAI_API_KEY=", "").replace(/"/g, "").trim();
    }
  }
}

async function runTest() {
  console.log("=== Testing Ears of Elegance Marketing Studio AI Copy & Pricing Generator ===");
  console.log("Using API Key:", process.env.OPENAI_API_KEY ? "Loaded (sk-proj-...)" : "MISSING");

  const mockEvent: any = {
    httpMethod: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
      notes: "18k gold pendant with emerald and diamonds. Part of the Royal Confidence collection. Designed to empower female leaders.",
    }),
  };

  const mockContext: any = {};

  console.log("Invoking Netlify serverless handler...");
  const startTime = Date.now();
  const response = await handler(mockEvent, mockContext) as any;
  const duration = Date.now() - startTime;

  console.log(`\nResponse Status: ${response.statusCode} (${duration}ms)`);
  if (response.statusCode === 200) {
    const parsed = JSON.parse(response.body);
    console.log("\n=== SUCCESS: AI Generated Copy & Pricing Data ===");
    console.log(JSON.stringify(parsed.data, null, 2));
  } else {
    console.error("Test Failed:", response.body);
  }
}

runTest().catch(console.error);
