Feature: Add products to cart

    Scenario: Adding two products to the cart
        Given that I am on the product page
        When I click on the 'Add to cart' button for the first product
        When I click on the 'Continue shopping' button
        When I click on the 'Add to cart' button for the second product
        Then I should see a confirmation message that the products have been added successfully
