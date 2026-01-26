const fs = require("fs-extra");
const path = require("path");

const srcDir = path.join(__dirname, "../src/components");
const destDir = path.join(__dirname, "../public/code");
const manifestPath = path.join(destDir, "manifest.json");

console.log("🔄 Syncing source code and generating manifest...");

const getAllFiles = (dirPath, relativeTo, fileList = []) => {
  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    const relPath = path.relative(relativeTo, fullPath).replace(/\\/g, "/");
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, relativeTo, fileList);
    } else {
      fileList.push(relPath);
    }
  });
  return fileList;
};

try {
  // Ensure destination exists
  fs.ensureDirSync(destDir);
  fs.emptyDirSync(destDir); // Clear old code

  const manifest = {};
  const items = fs.readdirSync(srcDir);

  items.forEach((item) => {
    const fullPath = path.join(srcDir, item);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory() && item !== "common") {
      // It's a task folder
      manifest[item] = getAllFiles(fullPath, fullPath);
      fs.copySync(fullPath, path.join(destDir, item));
    } else if (
      stats.isFile() &&
      (item.endsWith(".jsx") || item.endsWith(".js"))
    ) {
      // It's a single file task
      manifest[item] = [item];
      fs.copyFileSync(fullPath, path.join(destDir, item));
    }
  });

  fs.writeJsonSync(manifestPath, manifest, { spaces: 2 });
  console.log("✅ Source code and manifest.json generated successfully!");
} catch (err) {
  console.error("❌ Error syncing source code:", err);
  process.exit(1);
}
