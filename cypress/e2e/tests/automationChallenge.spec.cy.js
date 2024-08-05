import HomePage from '../pages/homePage';
import { userData } from '../../fixtures/userData';
import ProductSelectionPage from '../pages/productSelectionPage';
import CartPage from '../pages/cartPage';

describe('User Registration', () => {
  const homePage = new HomePage();
  const productSelectionPage = new ProductSelectionPage();
  const cartPage = new CartPage();

  it('should register a new user successfully', () => {
    cy.viewport("iphone-xr");
    homePage.visit();
    homePage.handleToaster1();
    homePage.handleCookieBanner();
    homePage.clickLoginPortal();
    homePage.clickRegister();
    homePage.handleToaster2();
    homePage.registerUser(userData);
  });

  it('should select category and subcategory, and verify product price', () => {
    cy.viewport("iphone-xr");
    homePage.visit();
    homePage.handleToaster1();
    productSelectionPage.selectCategoryandSubcategory();
    productSelectionPage.verifyProductPrice();
  });

  it('add new product to favorites and then cart', () => {
    homePage.visit();
    homePage.logIn();
    productSelectionPage.selectNewProductAndAddToFavorite();
    productSelectionPage.selectNewProductandAddtoCart();
  });

  it('should complete purchase', () => {
    cartPage.goToCart();
  });
});