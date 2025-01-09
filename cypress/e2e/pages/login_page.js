import LoginElements from "../elements/login_elements";

const baseUrl = Cypress.config("baseUrl");
const loginElements = new LoginElements();

class LoginPage {
  accessLoginPage() {
    cy.visit(`${baseUrl}login`);
  }

  fillDataLogin(email, password) {
    cy.get(loginElements.inputEmail()).type(email);
    cy.get(loginElements.inputPassword()).type(password);
  }

  clickLoginButton() {
    cy.get(loginElements.buttonLogin()).click();
  }

  verifyLogin(message) {
    cy.contains(message).should("be.visible");
  }
}

export default LoginPage;