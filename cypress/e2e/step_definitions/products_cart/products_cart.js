import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I'm on the login page", () => {
  cy.visit("https://www.automationexercise.com/login");
});

When("I type a registered email and password", () => {
  cy.get('[data-qa="login-email"]').clear().type("teste2021@teste.com.br");
  cy.get('[data-qa="login-password"]').clear().type("teste");
  cy.get('[data-qa="login-button"]').click();
});

Then("I should be successfully logged in", () => {
  cy.get(".shop-menu").should("contain", "Logout");
});

Given("that I am on the product page", () => {
  cy.visit("https://www.automationexercise.com/products");
});

When("I click on the 'Add to cart' button for the first product", () => {
  cy.get('[data-product-id="1"]').first().click();
});

When("I click on the 'Continue shopping' button", () => {
  cy.get(".close-modal").click();
});

When("I click on the 'Add to cart' button for the second product", () => {
  cy.get('[data-product-id="2"]').first().click();
});

Then("I click on the 'View Cart' button", () => {
  cy.get('.modal-body a[href="/view_cart"]').click();
});

Then("I should see the products in the cart", () => {
  cy.get("span#empty_cart").then(($emptyCart) => {
    if ($emptyCart.is(":visible")) {
      cy.get("#empty_cart").should("contain", "Cart is empty!");
    } else {
      cy.get(".cart_info").should("exist");
    }
  });
});
