Feature: Authenticating a user prod
  Scenario: login with valid credential
    Given I visit autocheck Nigeria page
    When I click on the sign in navitem
    And I insert valid credential to login
    Then User should be redirected to the marketplace homepage

  Scenario: login with invalid credential
    Given I visit autocheck Nigeria page
    When I click on the sign in navitem
    And I insert invalid credential to login
    Then User should be shown an error 