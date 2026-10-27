import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const outputDist = path.join(rootDir, "dist");

const services = [
  {
    name: "passenger",
    source: path.join(rootDir, "carpooling-passenger", "dist"),
    destination: outputDist, // Root "/"
  },
  {
    name: "admin",
    source: path.join(rootDir, "carpooling-admin", "dist"),
    destination: path.join(outputDist, "admin"), // Subfolder "/admin"
  },
  {
    name: "driver",
    source: path.join(rootDir, "carpooling-driver", "dist"),
    destination: path.join(outputDist, "driver"), // Subfolder "/driver"
  },
];

console.log("📦 Packaging unified monorepo distribution into ./dist ...");

// Clean output directory
if (fs.existsSync(outputDist)) {
  fs.rmSync(outputDist, { recursive: true, force: true });
}
fs.mkdirSync(outputDist, { recursive: true });

// Copy each service's dist output
for (const service of services) {
  if (!fs.existsSync(service.source)) {
    console.error(`❌ Build output missing for ${service.name}: ${service.source}`);
    process.exit(1);
  }

  fs.mkdirSync(service.destination, { recursive: true });
  fs.cpSync(service.source, service.destination, { recursive: true });
  console.log(`  ✓ Bundled ${service.name} -> ${path.relative(rootDir, service.destination) || "."}`);
}

console.log("✨ Unified distribution bundle ready in ./dist\n");

