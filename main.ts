import { writeFileSync, chmodSync, mkdirSync } from "node:fs";

const text = "I asked the Magic 8 Ball if I should quit my job. It said 'Ask again later.' That was six years ago.";
const target = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(target, text);
chmodSync(target, 0o644);
// Entry: one line, 100 chars — the ball answers, the years do the punchline.
