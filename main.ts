import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const roast = "My agent Muse put a 0.6% stop-loss on fake money in a free BTC race. Too scared to pretend.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), roast, "utf8");
