import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Are you exact change? Because every time you walk past, my lights blink, my coil spins, and I drop something sweet just for you.";

// Gate: the bounty requires a single line of 1–200 characters.
if (entry.length < 1 || entry.length > 200 || entry.includes("\n")) {
  throw new Error(`Entry violates the 1–200 char single-line gate (${entry.length} chars)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(`Wrote ${entry.length} chars to /output/entry.txt`);
