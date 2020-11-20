import { bigtestGlobals } from '@bigtest/globals';

function interact(interaction) {
    return cy.document().then(doc => {
      bigtestGlobals.document = doc;
      return interaction;
    })
  }
  
  function assertion(interaction) {
    bigtestGlobals.runnerState = 'assertion';
    return interact(interaction);  
  }
  
  Cypress.Commands.add('do', interaction => {
    bigtestGlobals.runnerState = 'step';
    return interact(interaction);
  });
  Cypress.Commands.add('has', assertion);
  Cypress.Commands.add('expect', assertion);


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
