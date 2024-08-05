import { homePageSelectors, productFlowSelectors } from '../../config/selectors';
import { generateRandomEmail } from '../../support/utils';

class ProductSelectionPage {
    selectCategoryandSubcategory () {
      cy.get(homePageSelectors.menuButton)
        .should('be.visible')
        .click();
      cy.get(homePageSelectors.espaciosMenu)
        .should('be.visible')
        .click();
      cy.get(homePageSelectors.category)
        .should('be.visible')
        .click();
        cy.get('a')
          .contains('ROPA DE CAMA')
          .first()
          .click({ force: true });
    }

    verifyProductPrice(){
      cy.contains('Set de sábanas estampadas 144 hilos 1.5 plazas')
        .should('be.visible');
      cy.contains('$18.990')
        .first()
        .should('be.visible');
    }

    selectNewProductAndAddToFavorite(){
      cy.get(productFlowSelectors.searchBar)
        .should('be.visible')
        .type('toalla', { force: true });
      cy.contains('h6', 'Toalla Microfibra Deporte')
        .click();
      cy.get('button')
        .contains('Agregar a favoritos')
        .click();
      //cy.get('#email').type('selene.funes@applydigital.com');
      //cy.get('#password').type('testPassword1');
      //cy.contains('button', 'Ingresar').click();
      //cy.wait(10000);
      cy.get(productFlowSelectors.cartButton)
        .click();
      cy.contains('button', 'Tus favoritos')
        .click();
      cy.contains('h2', 'Toalla Microfibra Deporte')
        .should('be.visible');
    }

    selectNewProductandAddtoCart(){
      cy.get()
        .should('be.visible')
        .type('toalla', { force: true });
      cy.contains('h6', 'Toalla algodón sábana 90x180cm')
        .click();
      cy.contains('button', 'Agregar al carro')
        .click();
      cy.get('.UserNav_bag-btn__YC0rs')
        .click();
      cy.contains('.CartItem_cart-item-main-wrapper__E7ciX', 'Toalla algodón sábana 90x180cm')
        .within(() => {
          cy.get('button[aria-label="Add"]').click();
        });
      cy.contains('.CartItem_cart-item-main-wrapper__E7ciX', 'Toalla algodón sábana 90x180cm')
        .find('input[type="number"]')
        .should('have.value', '2'); 
      cy.get('.Sidebar_sidebar-overlay__jsqVu').rightclick();
      cy.get('button[aria-label="Ir a pagar"]').click();
      cy.get('a').eq(2).click();
    }
}

export default ProductSelectionPage;