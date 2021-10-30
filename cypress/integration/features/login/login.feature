Feature: Login Test

  Scenario: Valid Login
    Given I open login page
    When I submit login
    Then I should see homepage

  Scenario: Invalid Login
    Given I open login page and click signin
    When I enter invalid login details
    Then login Attempt should fail

  Scenario: login Test with Page Object Implementation
    Given I am on homePage
    When I enter login Details
    And  wait for 100 seconds
    Then I verify valid and Invalid login


  Scenario: test Invalid login
    Given I navigate to the homepage
    When I  enter login credentials
    Then the login attempt should failed


