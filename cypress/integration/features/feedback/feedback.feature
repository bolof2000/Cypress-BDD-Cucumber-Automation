Feature: User can submit feedback form

  @focus
  Scenario: Validate user can submit feedback
    Given I navigate to the feedback page
    When I enters form details
    Then I see "/sendFeedback.html" in the url
