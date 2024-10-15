Feature: Search for Products

Scenario: Search for an existing product
  Given I'm on the products page
  When I type the product name in the search bar
  And I click on the search button
  Then I should see the results page
  And I should see the product in the search results

Scenario: Search for a non-existent product
  Given I'm on the products page
  When I type a product name that does not exist in the search bar
  And I click on the search button
  Then I should see the results page
  And I should see a "No products found" message
