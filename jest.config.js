const path = require("path");
module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  moduleDirectories: [".", "src", "src/util", "node_modules"],
  setupFiles: [path.join(__dirname, "/tests/unit/index.js")],
};

