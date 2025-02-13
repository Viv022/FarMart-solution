const fs = require("fs");
const readline = require("readline");
const path = require("path");

if (process.argv.length < 3) {
  console.error("Usage: node extract_logs.js <YYYY-MM-DD>");
  process.exit(1);
}

const targetDate = process.argv[2];
const logFilePath = "C:\\Users\\sarka\\Downloads\\logs_2024.log\\logs_2024.log";
const outputDir = "output";
const outputFilePath = path.join(outputDir, `output_${targetDate}.txt`);

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const readStream = fs.createReadStream(logFilePath, { encoding: "utf8" });
const writeStream = fs.createWriteStream(outputFilePath, { flags: "w" });

const rl = readline.createInterface({
  input: readStream,
  crlfDelay: Infinity,
});

console.log(`Extracting logs for ${targetDate} from ${logFilePath}...`);

rl.on("line", (line) => {
  if (line.startsWith(targetDate)) {
    writeStream.write(line + "\n");
  }
});

rl.on("close", () => {
  console.log(`Extraction complete! Logs saved to: ${outputFilePath}`);
  writeStream.end();
});
