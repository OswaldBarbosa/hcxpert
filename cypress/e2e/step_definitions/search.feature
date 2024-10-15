Feature: Search for Products

  Scenario: Search for an existing product
    Given I'm on the products page
    When I type the product name in the search bar
    When I click on the search button
    Then I should see the results page