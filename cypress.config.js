const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implementar eventos aquí si es necesario
    },
    baseUrl: 'https://www.casaideas.cl/', 
    env: {
      BASE_URL: 'https://www.casaideas.cl/',
    },
    defaultCommandTimeout: 10000, // Tolerancia de espera de 10 segundos
  },
});
