import { When, Then } from "cypress-cucumber-preprocessor/steps";

let response;

When("I send a GET request to {string}", (url) => {
  cy.request({
    url: url,
    failOnStatusCode: false,
  }).then((res) => {
    response = res;
    cy.log(`Received response with status: ${response.status}`);
  });
});

Then("the response status code should be {int}", (statusCode) => {
  expect(response.status).to.equal(statusCode);
});

Then("the name of the list should be {string}", (expectedName) => {
  expect(response.body.data).to.have.property("list");
  const listName = response.body.data.list.name;
  cy.log(`List Name: ${listName}`);
  expect(listName).to.equal(expectedName);
});

Then("the response status code should be 400", () => {
  expect(response.status).to.equal(400);
});
