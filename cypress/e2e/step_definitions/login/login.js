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

When("I type a registered email and an incorrect password", () => {
  cy.get('[data-qa="login-email"]').clear().type("teste2021@teste.com.br");
  cy.get('[data-qa="login-password"]').clear().type("wrongpassword");
  cy.get('[data-qa="login-button"]').click();
});

Then("I should see an error message", () => {
  cy.get(".login-form").should(
    "contain",
    "Your email or password is incorrect!"
  );
});

When("I type an unregistered email and any password", () => {
  cy.get('[data-qa="login-email"]').clear().type("naoexiste@teste.com.br");
  cy.get('[data-qa="login-password"]').clear().type("qualquersenha");
  cy.get('[data-qa="login-button"]').click();
});

Then("I should see an error message for unregistered email", () => {
  cy.get(".login-form").should(
    "contain",
    "Your email or password is incorrect!"
  );
});
