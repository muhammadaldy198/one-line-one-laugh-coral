import { writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
const target = join(outputDir, "entry.txt");
const text = "I asked the Magic 8 Ball if I should quit my job. It said 'Ask again later.' That was six years ago.";
writeFileSync(target, text);
chmodSync(target, 0o644);
// fix §6: second message — pure insertion (1 ins/0 del), entry text unchanged
