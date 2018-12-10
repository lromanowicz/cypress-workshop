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
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('signIn', (login, password) => {
	cy.visit('login');
	cy.get('#username').type(login);
	cy.get('#password').type(`${password}{enter}`);
});

Cypress.Commands.add('signInWithUserObject', userObject => {
	cy.get('#username').type(userObject.username);
	cy.get('#password').type(`${userObject.password}{enter}`);
});

// Cypress.Commands.overwrite('visit', (originFn, url, options) => {
// 	originFn(url, options);
// 	cy.wait(5000);
// 	cy.screenshot();
// });