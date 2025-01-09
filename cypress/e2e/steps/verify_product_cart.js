import ProductsPage from "../pages/products_page";

const productsPage = new ProductsPage();

Given(/^I am on the product page$/, () => {
  productsPage.accessProductsPage();
});

When(/^I add the product to the cart$/, () => {
  productsPage.addProductToCart();
});

When(/^I go to the cart$/, () => {
  productsPage.goToCart();
});

Then(/^I should "([^"]*)"$/, (message) => {
  productsPage.verifyProductInCart(message);
});