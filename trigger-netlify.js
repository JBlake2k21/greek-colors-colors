const { execSync } = require("child_process");

try {
  const out = execSync("npx netlify api getSite --data \"{\\\"site_id\\\":\\\"acf5ae4d-a355-409f-86a2-5a7f2828530c\\\"}\"", { encoding: "utf8" });
  const site = JSON.parse(out);
  console.log("SITE_NAME:", site.name);
  console.log("SITE_URL:", site.ssl_url);
  console.log("BUILD_SETTINGS:", JSON.stringify(site.build_settings, null, 2));
} catch (err) {
  console.log("ERR:", err.stdout || err.message);
}
