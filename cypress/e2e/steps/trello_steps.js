import TrelloPage from "../pages/trello_page";

const trelloPage = new TrelloPage();

Given(/^I send a GET request to the Trello API$/, () => {
  trelloPage.sendGetRequest();
});

Then(/^the status code should be 200$/, () => {
  trelloPage.validateStatusCode(200);
});

Then(/^the name field from the list structure should be displayed$/, () => {
  trelloPage.validateListName();
});