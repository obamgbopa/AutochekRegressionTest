Feature: Apply for Loan/Buy A car
  Scenario: Buy a car
    Given I visit autocheck Nigeria page
    When I click on the buy car on the navitem
    And I view the details of the first inventory
    And I click on apply for loan 
    And I selected the product type
    And I fill the loan form and submit
    Then User should be shown a success message

  Scenario: Apply for Financing
    Given I visit autocheck Nigeria page
    When I click on the apply for financin
    And I click on apply for loan 
    And I selected the product type
    And I fill the loan form and submit
    Then User should be shown a success message