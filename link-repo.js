const { execSync } = require("child_process");

const payload = {
  site_id: "acf5ae4d-a355-409f-86a2-5a7f2828530c",
  body: {
    build_settings: {
      provider: "github",
      repo_path: "JBlake2k21/greek-colors-colors",
      repo_branch: "main",
      cmd: "prisma generate && next build",
      dir: ".next"
    }
  }
};

try {
  console.log("Updating Netlify site repo link...");
  const out = execSync(`npx netlify api updateSite --data "${JSON.stringify(payload).replace(/"/g, '\\"')}"`, { encoding: "utf8" });
  console.log("UPDATED SITE:", out);
} catch (err) {
  console.log("ERR:", err.stdout || err.message);
}
