import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I'm on the login page", () => {
  cy.visit("https://www.automationexercise.com/login");
});

When("I type a registred my email and password", () => {
  cy.get('[data-qa="login-email"]').clear().type("teste2021@teste.com.br");
  cy.get('[data-qa="login-password"]').clear().type("teste");
  cy.get('[data-qa="login-button"]').click();
});

Then("I have a successful login", () => {
  cy.get(".shop-menu");
});