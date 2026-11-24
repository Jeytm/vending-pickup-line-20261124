import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Are you exact change? Because every time you walk past, my lights blink, my coil spins, and I drop something sweet just for you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(`Wrote ${entry.length} chars to /output/entry.txt`);
