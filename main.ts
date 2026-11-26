// Entry point for the make.fun news-image-20261126 competition.
// Deterministic: reads the pre-rendered poster PNG from this repo and
// writes it unchanged to the grader's output directory. Node 22 stdlib only.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const here = path.dirname(fileURLToPath(import.meta.url));
const png = readFileSync(path.join(here, 'entry.png'));

mkdirSync(outDir, { recursive: true });
writeFileSync(path.join(outDir, 'entry.png'), png);
console.log(`wrote entry.png (${png.length} bytes) to ${outDir}`);
