import HomePage from '../e2e/pages/HomePage';
import { user } from '../fixtures/userData';

describe('User Registration', () => {
  const homePage = new HomePage();

  beforeEach(() => {
    // Visit the base URL before each test
    cy.visit(Cypress.env('BASE_URL'));
  });

  it('should register a new user successfully', () => {
    homePage.registerUser(user);

    // Add assertions to verify successful registration
    cy.get('.notification-message').should('be.visible').and('contain', 'Registration successful');
    // You can add more assertions as needed to validate the registration process
  });
});