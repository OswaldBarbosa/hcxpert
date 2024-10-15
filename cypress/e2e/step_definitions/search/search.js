import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I'm on the products page", () => {
  cy.visit("https://www.automationexercise.com/products");
});

When("I type the product name in the search bar", () => {
  cy.get('[data-qa="search-product"]').clear().type("T-shirt");
});

When("I click on the search button", () => {
  cy.get('[data-qa="search-button"]').click();
});

Then("I should see the results page", () => {
  cy.url().should("include", "/products");
});

Then("I should see the product in the search results", () => {
  cy.get(".productinfo").should("contain", "T-shirt");
});

Then("I should see a 'No products found' message", () => {
  cy.get(".productinfo").should("contain", "No products found");
});
