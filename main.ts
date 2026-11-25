// One Line, One Minute: The Vending Machine Pickup Line Contest — make.fun entry.
// Writes the one pickup line a vending machine would use on a passing human.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I've been saving the sweetest thing in my coils all week for someone with exact change — press B4, it's you.";

// Gate: the entry must be 1–200 characters, not only white space.
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry length ${entry.length} outside the 1–200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
