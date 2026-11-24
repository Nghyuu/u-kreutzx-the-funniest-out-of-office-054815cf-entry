import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const text = readFileSync(join(dir, "entry.txt"), "utf8");
const chars = [...text].length;
if (text.trim().length === 0 || chars < 1 || chars > 140) {
  throw new Error(`entry.txt must hold 1-140 characters, got ${chars}`);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text);
console.log(`wrote ${chars} characters to ${join(outDir, "entry.txt")}`);
