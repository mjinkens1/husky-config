const { dirname } = require("path");
const { openSync, writeFileSync } = require("fs");
const { execSync } = require("child_process");
const config = require("./config");

const rootPath = dirname(require.main.filename).split("/node_modules")[0];
const configFilename = ".huskyrc.js";
const filepath = `${rootPath}/${configFilename}`;
const fileContent = `module.exports = ${JSON.stringify(config)}`;

console.log("Creating husky config file 🐕");

try {
  openSync(filepath, "w");
  writeFileSync(filepath, fileContent);
} catch (error) {
  console.log("Oops! Something went wrong while creating the config file.");
}

try {
  console.log("Formatting config file...");
  execSync(`prettier --write ${configFilename}`);
} catch (error) {
  console.log("Oops looks like prettier isn't installed for formatting!");
}

console.log("Done!");
