Feature: Verify product in cart

    Scenario Outline: Verify product in cart
        Given I am on the product page
        When I add the product to the cart
        And I go to the cart
        Then I should "<message>"

        Examples:
            | message             |
            | Proceed To Checkout |