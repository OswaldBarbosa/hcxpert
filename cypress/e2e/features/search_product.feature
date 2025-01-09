Feature: Search Product
    As a user
    I want to search for products on the products page
    So that I can view relevant results

    Scenario Outline: "<scenario>"
        Given I am on the products page
        When I search for "<search_term>"
        Then I should see "<expected_result>"

        Examples:
            | scenario             | search_term | expected_result |
            | Search for a product | Top         | Top             |
