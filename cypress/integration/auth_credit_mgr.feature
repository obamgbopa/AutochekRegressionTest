Feature: Authentication on Credit Manager Web
  Scenario: Sign in on Credit Manager Web
    Given I visit autochek web Credit Manager page
    When I input valid credential for Credit Manager user
    And I click on submit or submit button 
    Then User should be redirected to the Credit Manager dashboard page

  Scenario: Sign in on Credit Manager Web with invalid Credential
    Given I visit autochek web Credit Manager page
    When I input invalid credential for Credit Manager user
    And I click on submit or submit button 
    Then User should be shown an error message
 

  Scenario: Sign out on Credit Manager Web
    Given I visit autochek web Credit Manager page
    When I input valid credential for Credit Manager user
    And I click on submit or submit button 
    Then User should be redirected to the Credit Manager dashboard page
    When I click on the sign out button
    Then User should be sign out of the web Credit Manager