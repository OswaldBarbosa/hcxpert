/// <reference types="cypress" />

import ProductsElements from "../elements/products_elements";

const baseUrl = Cypress.config("baseUrl");
const productsElements = new ProductsElements();

class ProductsPage {
  accessProductsPage() {
    cy.visit(`${baseUrl}products`);
  }

  searchProduct(product) {
    cy.get(productsElements.inputSearchProduct()).type(product);
    cy.get(productsElements.buttonSearchProduct()).click();
  }

  verifyProduct(product) {
    cy.get(productsElements.cardProduct()).find("p").should("contain", product);
  }

  addProductToCart() {
    cy.get(productsElements.buttonAddToCart()).first().click();
    cy.wait(1000);
  }

  verifyProductAddedToCart(message) {
    cy.contains(message);
  }

  goToCart() {
    cy.contains(productsElements.textViewCart()).click();
  }

  verifyProductInCart(message) {
    cy.contains(message);
  }
}

export default ProductsPage;
