Feature: Trello API

    Scenario: Get action details from Trello API
        When I send a GET request to "https://api.trello.com/1/actions/592f11060f95a3d3d46a987a"
        Then the response status code should be 200
        And the name of the list should be "Professional"

    Scenario: Get action details with an invalid ID
        When I send a GET request to "https://api.trello.com/1/actions/invalid_id"
        Then the response status code should be 400
