class TrelloPage {
  response;

  sendGetRequest() {
    cy.request({
      method: "GET",
      url: "https://api.trello.com/1/actions/592f11060f95a3d3d46a987a",
    }).then((res) => {
      this.response = res;
    });
  }

  validateStatusCode(expectedStatusCode) {
    expect(this.response.status).to.eq(expectedStatusCode);
  }

  validateListName() {
    const listName = this.response.body.data.list.name;
    cy.log(`The "name" field from the "list" structure is: ${listName}`);
    expect(listName).to.exist;
  }
}

export default TrelloPage;