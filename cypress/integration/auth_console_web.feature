Feature: Authentication on Console Web
  Scenario: Sign in on Console Web
    Given I visit autochek web console page
    When I input valid credential for console user
    And I click on submit or submit button 
    Then User should be redirected to the console dashboard page

  Scenario: Sign in on Console Web with invalid Credential
    Given I visit autochek web console page
    When I input invalid credential for console user
    And I click on submit or submit button 
    Then User should be shown an error message
 

  Scenario: Sign out on Console Web
    Given I visit autochek web console page
    When I input valid credential for console user
    And I click on submit or submit button 
    Then User should be redirected to the console dashboard page
    When I click on the sign out button
    Then User should be sign out of the web console