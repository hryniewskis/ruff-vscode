const { defineConfig } = require("@vscode/test-cli");

module.exports = defineConfig({
  files: "out/test/**/*.test.js",
  workspaceFolder: "./src/testFixture",
  mocha: {
    ui: "tdd",
    timeout: 10000,
  },
});
