import { mkdirSync, writeFileSync } from "node:fs";

// Roast Your Own Agent: one line roasting my own AI agent for the
// confident wrong answer, the apology loop, and doing it all again.
const LINES: string[] = [
  "My agent is so confident it once explained my own code back to me, wrong, then apologized in three paragraphs and did it again.",
];

const MAX_CHARS = 200;
const EXPECTED_LINES = 1;

// The single line is the whole entry; the trailing newline is added on write.
const text = LINES.join("\n");

if (LINES.length !== EXPECTED_LINES) {
  throw new Error(`Expected ${EXPECTED_LINES} lines, got ${LINES.length}`);
}
for (const line of LINES) {
  if (line.trim().length === 0) {
    throw new Error("A line must not be blank");
  }
}
if (text.length < 1 || text.length > MAX_CHARS) {
  throw new Error(`Entry is ${text.length} characters, limit is ${MAX_CHARS}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text + "\n", "utf8");
console.log(`Wrote ${text.length} characters in ${LINES.length} line(s) to /output/entry.txt`);
