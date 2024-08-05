import { homePageSelectors, registerOverlaySelectors } from '../../config/selectors';
import { generateRandomEmail } from '../../support/utils';

class CartPage {

  visit(){
    
  }
  goToCart(){
    cy.get('button')
      .contains('Agregar dirección')
      .click();
    cy.get('input[aria-label="Nombre*"]')
      .click()
      .type('Test');
    cy.get('input[aria-label="Apellido*"]')
      .type('Apply');
    cy.get('input[aria-label="Teléfono*"]')
      .type('123456789');
    cy.get('input[aria-label="Dirección*"]')
      .type('Test');
    cy.get('input[aria-label="Número*"]')
      .type('1234');
    cy.get('#select-region')
      .select('METROPOLITANA DE SANTIAGO');
    cy.get('#select-comuna')
      .select('LA FLORIDA');
    cy.get('input[aria-label="Guardar en la lista de"]')
      .check();
    cy.get('button')
      .contains('Guardar dirección')
      .click();
    cy.contains('Entre: 09:00 y 22:00 hrs')
      .should('be.visible');
    cy.contains('DirecciónTest ApplyTest1234LA')
      .should('be.visible');
    cy.get('button')
      .contains('Toalla Microfibra Deporte')
      .should('be.visible');
    cy.contains('$24.960')
      .should('be.visible');
  }
}

export default CartPage;