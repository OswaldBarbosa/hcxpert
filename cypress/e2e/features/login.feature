Feature: Login
    As a user
    I want to authenticate by providing valid credentials
    So that I can receive appropriate feedback

    Scenario Outline: "<scenario>"
        Given I am on the login page
        When I enter "<username>" and "<password>"
        And I click the login button
        Then I should see "<message>"

        Examples:
            | scenario             | username                         | password | message                              |
            | Successful Login     | contatobarbosaooficial@gmail.com | teste    | Logged in as                         |
            | Wrong Password       | contatobarbosaooficial@gmail.com | teste1   | Your email or password is incorrect! |
            | Email Not Registered | contatobarbosaoficial@gmail.com  | teste    | Your email or password is incorrect! |
