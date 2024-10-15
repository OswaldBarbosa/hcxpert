import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

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

Then("I should see a confirmation message that the products have been added successfully", () => {
  cy.get(".btn-success");
});
