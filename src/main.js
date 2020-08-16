const loadJsonFile = require("load-json-file");
const parseData = require("./parseData");
const writeString = require("./writeString");
const writeFile = require("./writeFile");

module.exports = async function main() {
  const packageData = await loadJsonFile("package.json");
  const projectData = parseData(packageData);

  const content = writeString(projectData);

  writeFile(content);
  console.log("end");
};
