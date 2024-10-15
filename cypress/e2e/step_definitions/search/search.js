import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I'm on the products page", () => {
  cy.visit("https://www.automationexercise.com/products");
});

When("I type the product name in the search bar", () => {
  cy.get("#search_product").clear().type("Tshirt");
});

When("I click on the search button", () => {
  cy.get("#submit_search").click();
});

Then("I should see the results page", () => {
  cy.get(".title");
});
