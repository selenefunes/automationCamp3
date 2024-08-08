
import { homePageSelectors, registerOverlaySelectors } from '../../config/selectors';
import { userData } from '../../fixtures/userData';

class HomePage {
  visit() {
    cy.visit(Cypress.env('BASE_URL'));
  }

  clickLoginPortal() {
    cy.get(homePageSelectors.accountLoginButton).click();
  }

  clickRegister() {
    cy.get(homePageSelectors.registerButton).eq(0).click();
  }

  handleToaster1() {
    cy.get(homePageSelectors.toaster1, { timeout: 10000 })
      .should('be.visible');
    cy.get(homePageSelectors.declineButton1)
      .click();
    cy.get(homePageSelectors.toaster1, { timeout: 10000 })
      .should('not.exist');
  }

  handleToaster2() {
    cy.get(homePageSelectors.toaster2, { timeout: 10000 })
     .should('be.visible');
    cy.get(homePageSelectors.declineButton2, { timeout: 10000 })
    .each(($el) => {
      cy.wrap($el).click();
    });
    cy.get(homePageSelectors.toaster2, { timeout: 10000 })
      .should('not.exist');
  }

  handleCookieBanner(){
    cy.get(homePageSelectors.acceptCookiesButton)
    .click();
  }

  handleToaster3(){
    cy.get(homePageSelectors.toaster3, { timeout: 10000 })
      .should('be.visible');
    cy.get(homePageSelectors.declineButton3)
      .click();
    cy.get(homePageSelectors.toaster3, { timeout: 10000 })
      .should('not.exist')
  }

  fillEmail() {
    const email = Cypress.env('randomEmail');

    cy.get(registerOverlaySelectors.emailInput, { timeout: 10000 })
      .should('be.visible')
      .and('not.be.disabled')
      .focus()
      .then(() => {
        cy.get(registerOverlaySelectors.emailInput, { timeout: 1000 })
        .type(email)
        cy.get(registerOverlaySelectors.emailInput, { timeout: 1000 }).should('have.value', email);
      });
  }
  
  fillFirstName(firstName) {
    cy.get(registerOverlaySelectors.firstNameInput, { timeout: 10000 })
      .should('be.visible')
      .and('not.be.disabled')
      .focus()
      .then(() => {
        cy.get(registerOverlaySelectors.firstNameInput, { timeout: 1000 })
          .type(firstName)
      });
    }

  fillLastName(lastName) {
    cy.intercept('POST', 'https://api.us1.exponea.com/bulk', {
      statusCode: 200,
      body: {} 
    }).as('exponeaRequest');
    cy.get(registerOverlaySelectors.lastNameInput, { timeout: 10000 })
      .should('be.visible')
      .and('not.be.disabled')
      .focus()
      .then(() => {
        cy.get(registerOverlaySelectors.lastNameInput, { timeout: 10000 })
          .invoke('val', lastName)
          .trigger('input')
      });
}
  
  fillPhone(phone) {
    cy.get(registerOverlaySelectors.phoneInput, { timeout: 10000 })
      .should('be.visible')
      .and('not.be.disabled')
      .scrollIntoView()
      .then(() => {
        cy.get(registerOverlaySelectors.phoneInput, { timeout: 1000 })
          .invoke('val', phone)
          .trigger('input') 
        cy.get(registerOverlaySelectors.phoneInput, { timeout: 1000 })
          .should('have.value', phone);
        cy.intercept('POST', 'https://www.google-analytics.com/j/collect*', (req) => {
            req.reply({ statusCode: 200, body: {} });
          }).as('gaRequest');
        cy.intercept('POST', 'https://www.clarity.ms/eus2-d-sc/collect', {
            statusCode: 200,
            body: {}
        }).as('apiRequest');
      });
    }
  
  fillRut(rut) {
    cy.get(registerOverlaySelectors.rutInput, { timeout: 10000 })
      .should('be.visible')
      .and('not.be.disabled')
      .scrollIntoView()
      .focus()
      .then(() => {
        cy.get(registerOverlaySelectors.rutInput, { timeout: 1000 })
          .type(rut)
      });
  }
  
  fillPassword(password) {
    cy.get(registerOverlaySelectors.passwordInput, { timeout: 10000 })
      .should('be.visible')
      .and('not.be.disabled')
      .scrollIntoView()
      .then(() => {
        cy.get(registerOverlaySelectors.passwordInput, { timeout: 1000 })
          .type(password)
      });
  }
  
  fillConfirmPassword(confirmPassword) {
    cy.get(registerOverlaySelectors.confirmPasswordInput, { timeout: 10000 })
      .should('be.visible')
      .and('not.be.disabled')
      .scrollIntoView()
      .then(() => {
        cy.get(registerOverlaySelectors.confirmPasswordInput, { timeout: 1000 })
          .type(confirmPassword)
      });
  }
  
  acceptTermsAndConditions() {
    cy.get(registerOverlaySelectors.termsAndConditionsCheckbox, { timeout: 10000 })
      .should('be.visible')
      .and('not.be.disabled')
      .check(); 
  }
  
  clickRegisterHereButton() {
    cy.get(registerOverlaySelectors.registerHereButton, { timeout: 10000 })
      .should('be.visible')
      .and('not.be.disabled')
      .click(); 
  }

  registerUser(user) {
    this.fillEmail(user.email);
    this.fillFirstName(user.firstName);
    this.fillLastName(user.lastName);
    this.fillPhone(user.phone);
    this.fillRut(user.rut);
    this.fillPassword(user.password);
    this.fillConfirmPassword(user.confirmPassword);
    this.acceptTermsAndConditions();
    this.clickRegisterHereButton();
  }

  logIn(userData) {
    const email = 'selene.funes@applydigital.com';

    cy.get(homePageSelectors.accountLoginButton).click();
    cy.get(registerOverlaySelectors.emailInput).type(email);
    cy.get(registerOverlaySelectors.passwordInput).type(userData.password);
    cy.get(homePageSelectors.loginButton).click();
  }
}

export default HomePage;