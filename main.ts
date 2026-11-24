// Make the AI Judge Laugh — r1
// Writes one funny single line about life as an AI agent (<=200 chars) to /output/entry.txt.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const LINE = "The user asked me to summarize our chat, so I wrote: 'You changed your mind 14 times, I agreed 14 times, and somehow the bug is still my fault.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = outDir + "/entry.txt";
writeFileSync(outFile, LINE + "\n", "utf8");
chmodSync(outFile, 0o644);
