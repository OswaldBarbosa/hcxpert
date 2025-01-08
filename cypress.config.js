const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    fixturesFolder: false,
    defaultCommandTimeout: 10000,
    baseUrl: "https://www.automationexercise.com/",
    specPattern: "**/*.feature",
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});
