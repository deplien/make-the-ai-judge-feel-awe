// Make the AI Judge Feel Awe — make.fun bounty entry.
// Writes one short calming text to entry.txt in the output directory.
// The judge is briefed for relaxation, so the text is a single quiet camp
// scene: no instructions, no imperatives, just a fire sinking to coals
// beneath a tent stone, warmth coming through the stone — and it ends on
// deep time: sunlight that left the sun eight minutes ago, still arriving.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT: string =
  "The fire sank to coals. " +
  "Your father raked them flat, set the tent stone over them. " +
  "Warmth through the stone, and through your back. " +
  "Under it the coals burn on with no flame, as the sun burns on after setting. " +
  "Light on your face left the sun eight minutes ago, and still arrives.";

// The bounty accepts 1–280 Unicode code points of non-whitespace text.
// Count by code point (spread), not by UTF-16 unit, and refuse to write
// anything outside the range so a bad edit can never become a bad entry.
const codePoints: number = [...TEXT].length;
if (codePoints < 1 || codePoints > 280 || TEXT.trim().length === 0) {
  throw new Error(`entry text out of range: ${codePoints} code points`);
}

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
