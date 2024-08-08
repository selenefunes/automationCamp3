import HomePage from '../pages/homePage';
import { userData } from '../../fixtures/userData';
import ProductSelectionPage from '../pages/productSelectionPage';
import CartPage from '../pages/cartPage';

describe('User Registration', () => {
  let email;
  let homePage;
  let productSelectionPage;
  let cartPage;

  beforeEach(() => {
    email = Cypress.env('randomEmail');
    homePage = new HomePage();
    productSelectionPage = new ProductSelectionPage();
    cartPage = new CartPage();

    homePage.visit();
    cy.injectAxe();
    });

  it('should register a new user successfully', () => {
    homePage.handleToaster1();
    homePage.handleCookieBanner();
    homePage.clickLoginPortal();
    homePage.clickRegister();
    homePage.handleToaster2();
    homePage.registerUser(userData);
    productSelectionPage.selectCategoryandSubcategory();
   // homePage.handleToaster3();
    productSelectionPage.verifyProductPrice();
    productSelectionPage.selectNewProductAndAddToFavorite();
    productSelectionPage.selectNewProductandAddtoCart();
    cartPage.goToCart();
  });
});
