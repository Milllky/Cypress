const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: 0,
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: "http://localhost:3000/",
  },
  viewportWidth: 360,
  viewportHeight: 640,
  env: {
    device: "mobile",
    isTouch: true,
  }
});