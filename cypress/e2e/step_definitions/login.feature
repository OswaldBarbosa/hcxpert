Feature: Login

  Scenario: Valid Login
    Given I'm on the login page
    When I type a registered email and password
    Then I should be successfully logged in

  Scenario: Login with Invalid Password
    Given I'm on the login page
    When I type a registered email and an incorrect password
    Then I should see an error message

  Scenario: Login with Unregistered Email
    Given I'm on the login page
    When I type an unregistered email and any password
    Then I should see an error message for unregistered email
