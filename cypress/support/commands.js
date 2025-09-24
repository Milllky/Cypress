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
 Cypress.Commands.add('login', (email, password) => {
    cy.contains('Log in').click();
    cy.get('#mail').type(email);
    cy.get('#pass').type(password);
    cy.contains('Submit').click();
 });
 Cypress.Commands.add('uploadBook',(title, authors) => {
    cy.get('.p-0 > .btn').click();
    cy.get('[name="title"]').type(title);
    cy.get('[name="authors"]').type(authors);
    cy.contains('Submit').click();
 });
  Cypress.Commands.add('uploadFavoriteBook',(title, authors) => {
    cy.get('.p-0 > .btn').click();
    cy.get('[name="title"]').type(title);
    cy.get('[name="authors"]').type(authors);
    cy.contains('add to favorite').click();
    cy.contains('Submit').click();
 });
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })