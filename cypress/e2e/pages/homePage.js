
import { homePageSelectors, registerOverlaySelectors } from '../../config/selectors';

class HomePage {
  visit() {
    cy.visit(Cypress.env('BASE_URL'));
  }

  clickLoginPortal() {
    cy.get(homePageSelectors.accountLogInButton).click();
  }

  clickRegister() {
    cy.get(homePageSelectors.registerButton).click();
  }

  fillEmail(email) {
    cy.get(registerOverlaySelectors.emailInput).type(email);
  }

  fillFirstName(firstName) {
    cy.get(registerOverlaySelectors.firstNameInput).type(firstName);
  }

  fillLastName(lastName) {
    cy.get(registerOverlaySelectors.lastNameInput).type(lastName);
  }

  fillPhone(phone) {
    cy.get(registerOverlaySelectors.phoneInput).type(phone);
  }

  fillRut(rut) {
    cy.get(registerOverlaySelectors.rutInput).type(rut);
  }

  fillBirthday(birthday) {
    cy.get(registerOverlaySelectors.birthdayInput).type(birthday);
  }

  fillPassword(password) {
    cy.get(registerOverlaySelectors.passwordInput).type(password);
  }

  fillConfirmPassword(confirmPassword) {
    cy.get(registerOverlaySelectors.confirmPasswordInput).type(confirmPassword);
  }

  acceptTermsAndConditions() {
    cy.get(registerOverlaySelectors.termsAndConditionsCheckbox).check();
  }

  clickRegisterHereButton() {
    cy.get(registerOverlaySelectors.registerHereButton).click();
  }

  registerUser(user) {
    this.fillEmail(user.email);
    this.fillFirstName(user.firstName);
    this.fillLastName(user.lastName);
    this.fillPhone(user.phone);
    this.fillRut(user.rut);
    this.fillBirthday(user.birthday);
    this.fillPassword(user.password);
    this.fillConfirmPassword(user.confirmPassword);
    this.acceptTermsAndConditions();
    this.clickRegisterHereButton();
  }
}

export default HomePage;