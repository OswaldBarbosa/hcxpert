Feature: Verify Product in Cart
    As a user
    I want to add a product to the cart
    So that I can view it in the cart

    Scenario Outline: Verify product in cart
        Given I am on the product page
        When I add the product to the cart
        And I go to the cart
        Then I should "<message>"

        Examples:
            | message             |
            | Proceed To Checkout |