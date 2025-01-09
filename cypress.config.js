const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    fixturesFolder: false,
    defaultCommandTimeout: 10000,
    baseUrl: "https://www.automationexercise.com/",
    specPattern: "cypress/e2e/features/**/*.feature",
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});
