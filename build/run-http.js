import http from "node:http";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
// Import the already‑configured server (with all tool handlers) from src/index.ts
import { server } from "../src/index.js";

const PORT = 8080;

(async () => {
  try {
    // Transport that forwards HTTP requests to the MCP server
    const transport = new StreamableHTTPServerTransport();
    // Connect the shared server instance to the transport
    await server.connect(transport);

    // Create a plain Node HTTP server that delegates to the transport
    const httpServer = http.createServer((req, res) => transport.handleRequest(req, res));
    httpServer.listen(PORT, () => {
      console.error(`🚀 NotebookLM MCP listening on http://localhost:${PORT}`);
    });
  } catch (e) {
    console.error("Fatal error starting HTTP server:", e);
    process.exit(1);
  }
})();
