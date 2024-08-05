
import { homePageSelectors } from '../../config/selectors';

describe('Casaideas Test', () => {
    it('should perform various actions on the website', () => {
      cy.viewport("iphone-xr");
      cy.visit('https://www.casaideas.cl/');
      cy.contains('button', 'Aceptar cookies').click();
      cy.get('button').contains('No, gracias').click();
      cy.get('.Navbar_megamenu-cms__cBjN3 .top-2').first().click({ force: true });
      cy.contains('ESPACIO DE LA CASA').should('be.visible').click();
      cy.get('#navbar').contains('a', 'DORMITORIO').click({ force: true });
      cy.get('a').contains('ROPA DE CAMA').first().click({ force: true });
      cy.contains('Set de sábanas estampadas 144 hilos 1.5 plazas').should('be.visible');
      cy.contains('$18.990').first().should('be.visible');

      cy.get('.Navbar_mobile-search-icon__BfW6v > .flex > .Searchbar_searchbar-main__mcbXv > #mobile-search')
  .should('be.visible')
  .type('toalla', { force: true });
      cy.contains('h6', 'Toalla Microfibra Deporte').click();
      cy.get('button').contains('Agregar a favoritos').click();
      cy.get('#email').type('selene.funes@applydigital.com');
      cy.get('#password').type('testPassword1');
      cy.contains('button', 'Ingresar').click();
      cy.wait(10000);
      cy.get('.UserNav_bag-btn__YC0rs').click();
      cy.contains('button', 'Tus favoritos').click();
      cy.contains('h2', 'Toalla Microfibra Deporte').should('be.visible');

      cy.get('.Navbar_mobile-search-icon__BfW6v > .flex > .Searchbar_searchbar-main__mcbXv > #mobile-search')
        .should('be.visible')
        .type('toalla', { force: true });
      cy.contains('h6', 'Toalla algodón sábana 90x180cm').click();

      
      cy.contains('button', 'Agregar al carro').click();
      cy.get('.UserNav_bag-btn__YC0rs').click();

      cy.contains('.CartItem_cart-item-main-wrapper__E7ciX', 'Toalla algodón sábana 90x180cm')
      .within(() => {
        // Haz clic en el botón "Add" para aumentar la cantidad
        cy.get('button[aria-label="Add"]').click();
      });

            ////NOT WORKING 
    // Verifica que la cantidad haya aumentado (ajusta según sea necesario)
    cy.contains('.CartItem_cart-item-main-wrapper__E7ciX', 'Toalla algodón sábana 90x180cm')
      .find('input[type="number"]')
      .should('have.value', '2'); // Ajusta según el valor esperado

      cy.get('a').contains('Tu opinión nos importa X').click();
      cy.get('.Sidebar_sidebar-overlay__jsqVu').rightclick();
      cy.get('button[aria-label="Ir a pagar"]').click();
      cy.get('a').eq(2).click();
      cy.visit('https://www.casaideas.cl/checkout');
      cy.get('button').contains('Agregar dirección').click();
      cy.get('input[aria-label="Nombre*"]').click().type('Test');
      cy.get('input[aria-label="Apellido*"]').type('Apply');
      cy.get('input[aria-label="Teléfono*"]').type('123456789');
      cy.get('input[aria-label="Dirección*"]').type('Test');
      cy.get('input[aria-label="Número*"]').type('1234');
      cy.get('#select-region').select('METROPOLITANA DE SANTIAGO');
      cy.get('#select-comuna').select('LA FLORIDA');
      cy.get('button').contains('Aceptar cookies').click();
      cy.get('input[aria-label="Guardar en la lista de"]').check();
      cy.get('button').contains('Guardar dirección').click();
      cy.contains('Entre: 09:00 y 22:00 hrs').should('be.visible');
      cy.contains('DirecciónTest ApplyTest1234LA').should('be.visible');
      cy.get('button').contains('Toalla Microfibra Deporte').should('be.visible');
      cy.contains('$24.960').should('be.visible');
    });
  });