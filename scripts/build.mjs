import { spawnSync } from "node:child_process";

function run(command, args) {
  const result = spawnSync(command, args, {
    stdio: "inherit",
    shell: process.platform === "win32",
    env: process.env,
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

run("vite", ["build"]);

if (process.env.VERCEL === "1") {
  console.log("Skipping react-snap during Vercel builds.");
  process.exit(0);
}

run("react-snap", []);
