Feature: Add Product to Cart

    Scenario Outline: Add product to cart
        Given I am on the product page
        When I add the product to the cart
        Then I should see "<message>"

        Examples:
            | message                              |
            | Your product has been added to cart. |