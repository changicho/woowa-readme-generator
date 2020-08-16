const fs = require("fs");

module.exports = function write(data) {
  fs.writeFile("README.md", data, () => {
    console.log("finish to write README.md");
  });
};
