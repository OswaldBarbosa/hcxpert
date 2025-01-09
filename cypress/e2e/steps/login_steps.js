import LoginPage from "../pages/login_page";

const loginPage = new LoginPage();

Given(/^I am on the login page$/, () => {
  loginPage.accessLoginPage();
});

When(/^I enter "([^"]*)" and "([^"]*)"$/, (email, password) => {
  loginPage.fillDataLogin(email, password);
});

When(/^I click the login button$/, () => {
  loginPage.clickLoginButton();
});

Then(/^I should see "([^"]*)"$/, (message) => {
  loginPage.verifyLogin(message);
});