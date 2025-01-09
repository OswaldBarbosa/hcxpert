Feature: Trello API
    As a user
    I want to validate the response from the Trello API
    So that I can ensure the status code and the name field are correct

    Scenario: Validate name field and status code
        Given I send a GET request to the Trello API
        Then the status code should be 200
        And the name field from the list structure should be displayed