Feature: Login and Add Products to Cart

    Scenario: Successful Login and Adding Two Products to the Cart
        Given I'm on the login page
        When I type a registered email and password
        Then I should be successfully logged in
        Given that I am on the product page
        When I click on the 'Add to cart' button for the first product
        When I click on the 'Continue shopping' button
        When I click on the 'Add to cart' button for the second product
        Then I click on the 'View Cart' button
        Then I should see the products in the cart
