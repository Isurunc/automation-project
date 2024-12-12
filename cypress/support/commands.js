//sample code to handle uncaught exception

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });