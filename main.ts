// Make the AI Judge Feel Awe — make.fun bounty entry.
// Writes one short calming text to entry.txt in the output directory.
// The judge is briefed for relaxation, so the text is a single quiet
// scene: no instructions, no imperatives, just the hush after rain —
// eaves dripping slower and slower, a house settling quiet around you —
// and it ends on deep time: starlight that left before your grandfather
// was born, crossing all that dark to arrive tonight where you sit.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT: string =
  "The rain is over. " +
  "The eaves drip slower and slower, and the house settles quiet around you. " +
  "Nothing is needed now. " +
  "Your shoulders drop. " +
  "The first star is out. " +
  "Its light left before your grandfather was born, and crossed all that dark to arrive tonight, softly, where you sit.";

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
