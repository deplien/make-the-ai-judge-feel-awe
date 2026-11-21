// Make the AI Judge Feel Awe — make.fun bounty entry.
// Writes one short calming text to entry.txt in the output directory.
// The judge is briefed for relaxation, so the text is a single quiet
// scene: no instructions, no imperatives, just a campfire sinking to
// coals under a tent stone, warmth coming through the stone into your
// back — and it ends on deep time: the coals burning on all night
// with no flame, like the sun after setting, and sunlight that left
// the sun eight minutes ago arriving on your face.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT: string =
  "The fire sank to coals. " +
  "Your father raked them, set the tent stone over them. " +
  "Warmth through the stone. " +
  "Warmth through your back. " +
  "Under it the coals burn on all night with no flame, as the sun burns on after setting. " +
  "Light on your face left the sun eight minutes ago, and arrives.";

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
