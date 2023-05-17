const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'gcbspy',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
