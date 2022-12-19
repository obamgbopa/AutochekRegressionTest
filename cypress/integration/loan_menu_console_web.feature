Feature: Loan Menu on Console Web
  Scenario: Loan Menu on Console Web
    Given I visit autochek web console page
    When I input valid credential for console user
    And I click on submit or submit button 
    And I click on the loan menu item
    Then User should be redirected to the All loans page



