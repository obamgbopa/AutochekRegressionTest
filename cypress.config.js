const { defineConfig } = require('cypress')
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  projectId: '251nze',
  defaultCommandTimeout: 30000,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'My Test Suite',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  video: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/integration/*.feature',
    experimentalStudio: true,
    
  },
})
