const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: 2,
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: "http://localhost:3000/",
  },
  viewportWidth: 1366,
  viewportHeight: 768,
  env: {
    device: "laptop",
  }
});