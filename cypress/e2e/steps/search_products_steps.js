import ProductsPage from "../pages/products_page";

const productsPage = new ProductsPage();

Given(/^I am on the products page$/, () => {
  productsPage.accessProductsPage();
});

When(/^I search for "([^"]*)"$/, (product) => {
  productsPage.searchProduct(product);
});

Then(/^I should see "([^"]*)"$/, (product) => {
  productsPage.verifyProduct(product);
});
