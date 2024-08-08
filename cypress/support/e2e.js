
import './commands'
import { generateRandomEmail } from './utils';
import 'cypress-axe'

Cypress.on('uncaught:exception', (err) => {
  console.error('Uncaught Exception:', err);
  return false;
});

beforeEach(() => {
  cy.viewport("iphone-xr");
});

before(() => {
  const randomEmail = generateRandomEmail();
  Cypress.env('randomEmail', randomEmail);
});

