import { defineConfig } from "cypress";

export default defineConfig({
  screenshotsFolder: "cypress/screenshots",
  e2e: {
    screenshotOnRunFailure: true,
    testIsolation: false,
    specPattern: "cypress/e2e/**/*.ts",
    setupNodeEvents(on, config) {
    
    },
  },
});