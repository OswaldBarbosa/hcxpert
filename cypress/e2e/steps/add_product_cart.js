import ProductsPage from "../pages/products_page";

const productsPage = new ProductsPage();

Given(/^I am on the product page$/, () => {
  productsPage.accessProductsPage();
});

When(/^I add the product to the cart$/, () => {
  productsPage.addProductToCart();
});

Then(/^I should see "([^"]*)"$/, (message) => {
  productsPage.verifyProductAddedToCart(message);
});