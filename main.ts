// Make the AI Judge Feel Awe — make.fun bounty entry.
// Writes one short calming text to entry.txt in the output directory.
// The judge is briefed for relaxation, so the text is a single quiet shore
// scene: no instructions, no imperatives, just a bay at low tide that asks
// nothing of the reader and ends on deep time — the water coming back,
// slowly and unhurried, as it has since before there were eyes to see it.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT: string =
  "The tide has left the bay shining, and nothing here is asked of you. " +
  "The wet sand holds the sky in its pools. " +
  "Your worries shrink to the size of shells. " +
  "The water will come back, as it has come back each evening since before there were eyes to see it — slowly, and in no hurry.";

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
